import { useState, useRef, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import ChatBot from './components/ChatBot'
import Portfolio from './components/Portfolio'
import './App.css'

export default function App() {
  const leftRef = useRef(null)
  const [botHeight, setBotHeight] = useState(undefined)

  useEffect(() => {
    const el = leftRef.current
    if (!el) return

    const sync = () => {
      if (window.innerWidth <= 768) {
        setBotHeight(undefined)
        return
      }
      setBotHeight(el.offsetHeight)
    }

    const ro = new ResizeObserver(sync)
    ro.observe(el)
    sync()

    window.addEventListener('resize', sync)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', sync)
    }
  }, [])

  return (
    <div className="app">
      <Header />
      <div className="main-scroll">
        <div className="main-layout">
          <div className="main-left" ref={leftRef}>
            <About />
          </div>
          <aside className="main-right">
            <ChatBot height={botHeight} />
          </aside>
        </div>
        <Portfolio />
        <footer className="footer">
          <p>{'© 2026 张理牧'}</p>
        </footer>
      </div>
    </div>
  )
}
