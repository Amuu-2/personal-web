import { useState, useRef, useEffect } from 'react'
import { qaPairs, defaultAnswer } from '../data/profile'
import './ChatBot.css'

function matchAnswer(input) {
  const text = input.toLowerCase()
  for (const qa of qaPairs) {
    if (qa.keywords.some((kw) => text.includes(kw.toLowerCase()))) {
      return qa.answer
    }
  }
  return defaultAnswer
}

const suggestions = ['你是谁？', '你的擅长方向？', '怎么联系你？', '你的作品有哪些？']

export default function ChatBot({ height }) {
  const [messages, setMessages] = useState([
    { from: 'bot', text: '你好！我是张理牧的数字分身，可以回答你关于我的问题。你可以直接问我，也可以点击下方快捷提问～' },
  ])
  const [input, setInput] = useState('')
  const messagesEnd = useRef(null)

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function send(text) {
    const msg = text || input.trim()
    if (!msg) return
    setMessages((prev) => [...prev, { from: 'user', text: msg }])
    setInput('')
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', text: matchAnswer(msg) }])
    }, 400)
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
        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-bubble ${msg.from}`}>
              {msg.text}
            </div>
          ))}
          <div ref={messagesEnd} />
        </div>
        <div className="chat-suggestions">
          {suggestions.map((s) => (
            <button key={s} className="chat-suggestion-btn" onClick={() => send(s)}>
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
          />
          <button className="chat-send-btn" onClick={() => send()} disabled={!input.trim()}>
            发送
          </button>
        </div>
      </div>
    </section>
  )
}
