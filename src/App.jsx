import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Strengths from './components/Strengths.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  // 支持深链接：访问 /#projects 这类地址时，挂载后滚动到对应区块
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    const el = document.getElementById(id)
    if (!el) return
    const t = window.setTimeout(() => el.scrollIntoView({ behavior: 'auto', block: 'start' }), 60)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Strengths />
        <Contact />
      </main>
    </>
  )
}
