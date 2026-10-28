import { useEffect, useState } from 'react'
import { nav, profile } from '../data/content.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      // 高亮当前所在区块
      let current = ''
      for (const { id } of nav) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const jump = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#top" onClick={jump('top')}>
          <span className="nav__brand-mark" aria-hidden="true">Ｗ</span>
          <span className="nav__brand-text">
            {profile.name}
            <em>{profile.brand}</em>
          </span>
        </a>

        <nav className="nav__links" aria-label="主导航">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={jump(n.id)}
              className={active === n.id ? 'is-active' : ''}
            >
              <em>{n.en}</em>
              {n.label}
            </a>
          ))}
        </nav>

        <a className="nav__cta" href={`mailto:${profile.email}`}>
          <span className="nav__cta-dot" aria-hidden="true" />
          联系我
        </a>
      </div>
    </header>
  )
}
