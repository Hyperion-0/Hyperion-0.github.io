import useReveal from '../hooks/useReveal.js'
import { strengths, toolbelt } from '../data/content.js'

export default function Strengths() {
  const [headRef, headRevealed] = useReveal()
  const [gridRef, gridRevealed] = useReveal()

  return (
    <section className="strengths section" id="strengths">
      <div className="container">
        <header
          ref={headRef}
          className={`section__head reveal ${headRevealed ? 'is-revealed' : ''}`}
        >
          <span className="section__no">03</span>
          <h2 className="section__title">个人优势</h2>
          <span className="section__en">CORE STRENGTHS</span>
        </header>

        <div ref={gridRef} className="strengths__grid">
          {strengths.map((s, i) => (
            <article
              key={s.id}
              className={`strength reveal ${gridRevealed ? 'is-revealed' : ''}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="strength__no">{s.id}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div ref={gridRef} className={`toolbelt reveal ${gridRevealed ? 'is-revealed' : ''}`}>
          <span className="toolbelt__label">TOOLBELT</span>
          <ul>
            {toolbelt.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
