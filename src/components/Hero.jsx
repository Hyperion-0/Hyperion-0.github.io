import { profile, stats } from '../data/content.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <video
        className="hero__video"
        src="/assets/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="hero__shade" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__inner">
        <p className="hero__kicker">
          <span className="hero__kicker-line" aria-hidden="true" />
          {profile.roleEn} · PORTFOLIO 2026
        </p>

        <h1 className="hero__title">
          <span className="hero__title-name">{profile.name}</span>
          <span className="hero__title-en">{profile.brand}</span>
        </h1>

        <p className="hero__sub">
          {profile.role} <i>/</i> {profile.tagline}
        </p>

        <div className="hero__actions">
          <a className="btn btn--solid" href={`mailto:${profile.email}`}>
            与我联系
          </a>
          <a
            className="btn btn--ghost"
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            看作品 <span aria-hidden="true">↓</span>
          </a>
        </div>

        <ul className="hero__stats">
          {stats.map((s) => (
            <li key={s.label}>
              <strong>
                {s.value}
                <em>{s.unit}</em>
              </strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero__scrollhint" aria-hidden="true">
        <span />
        SCROLL
      </div>
    </section>
  )
}
