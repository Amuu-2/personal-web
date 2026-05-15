import { useState, useRef, useEffect } from 'react'
import { systemPrompt } from '../data/profile'
import './ChatBot.css'

const API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY
const API_URL = 'https://api.deepseek.com/chat/completions'

const suggestions = ['你是谁？', '你的擅长方向？', '怎么联系你？', '你的作品有哪些？']

export default function ChatBot({ height }) {
  const [messages, setMessages] = useState([
    { from: 'bot', text: '你好！我是张理牧的数字分身，可以回答你关于我的问题。你可以直接问我，也可以点击下方快捷提问～' },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const msgListRef = useRef(null)
  const historyRef = useRef([])

  useEffect(() => {
    const el = msgListRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages])

  async function send(text) {
    const msg = text || input.trim()
    if (!msg || loading) return

    const userMsg = { from: 'user', text: msg }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setLoading(true)

    historyRef.current.push({ role: 'user', content: msg })

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            { role: 'system', content: systemPrompt },
            ...historyRef.current,
          ],
        }),
      })

      const data = await res.json()
      const reply = data.choices?.[0]?.message?.content || '抱歉，我暂时无法回复，请稍后再试。'
      setMessages((prev) => [...prev, { from: 'bot', text: reply }])
      historyRef.current.push({ role: 'assistant', content: reply })
    } catch {
      setMessages((prev) => [...prev, { from: 'bot', text: '网络出问题了，请检查 API Key 是否配置正确，或稍后再试。' }])
    } finally {
      setLoading(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <section className="chatbot" style={height ? { height } : undefined}>
      <h2 className="section-title">数字分身</h2>
      <div className="chat-window">
        <div className="chat-messages" ref={msgListRef}>
          {messages.map((msg, i) => (
            <div key={i} className={`chat-bubble ${msg.from}`}>
              {msg.text}
            </div>
          ))}
          {loading && <div className="chat-bubble bot loading">…</div>}
        </div>
        <div className="chat-suggestions">
          {suggestions.map((s) => (
            <button key={s} className="chat-suggestion-btn" onClick={() => send(s)} disabled={loading}>
              {s}
            </button>
          ))}
        </div>
        <div className="chat-input-row">
          <input
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="输入你的问题…"
            disabled={loading}
          />
          <button className="chat-send-btn" onClick={() => send()} disabled={!input.trim() || loading}>
            发送
          </button>
        </div>
      </div>
    </section>
  )
}
