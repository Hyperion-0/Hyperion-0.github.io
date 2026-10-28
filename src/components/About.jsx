import useReveal from '../hooks/useReveal.js'
import { profile, stats, marquee, toolbelt } from '../data/content.js'

export default function About() {
  const [ref, revealed] = useReveal()

  return (
    <section className="about section" id="about">
      <div className="container">
        <header className={`section__head reveal ${revealed ? 'is-revealed' : ''}`}>
          <span className="section__no">01</span>
          <h2 className="section__title">个人经历</h2>
          <span className="section__en">ABOUT ME</span>
        </header>

        <div className="about__body" ref={ref}>
          <div className={`about__mark reveal ${revealed ? 'is-revealed' : ''}`}>
            <div className="about__mark-grid" aria-hidden="true" />
            <span className="about__mark-word">WYF</span>
            <span className="about__mark-sub">VISUAL × PROJECT</span>
            <div className="about__mark-foot">
              <strong>{profile.name}</strong>
              <span>{profile.role}</span>
            </div>
          </div>

          <div className="about__main">
            <div className={`about__intro reveal ${revealed ? 'is-revealed' : ''}`}>
              {profile.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <dl className={`about__meta reveal ${revealed ? 'is-revealed' : ''}`}>
              <div>
                <dt>邮箱</dt>
                <dd>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </dd>
              </div>
              <div>
                <dt>教育背景</dt>
                <dd>{profile.education}</dd>
              </div>
              <div>
                <dt>工作经历</dt>
                <dd>2024/4 – 2026/5 · {profile.location}</dd>
              </div>
              <div>
                <dt>常用工具</dt>
                <dd>{toolbelt.join(' · ')}</dd>
              </div>
            </dl>

            <ul className={`about__stats reveal ${revealed ? 'is-revealed' : ''}`}>
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
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...marquee, ...marquee].map((word, i) => (
            <span key={i}>{word}<i>/</i></span>
          ))}
        </div>
      </div>
    </section>
  )
}
