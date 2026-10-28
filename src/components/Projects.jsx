import { useRef } from 'react'
import useReveal from '../hooks/useReveal.js'
import { projects, galleries } from '../data/content.js'

function ProjectCard({ p }) {
  const [ref, revealed] = useReveal()

  return (
    <article
      ref={ref}
      className={`project reveal ${revealed ? 'is-revealed' : ''} ${p.wide ? 'project--wide' : ''}`}
    >
      <div className={`project__media ${p.image && p.image2 ? 'has-two' : ''}`}>
        {p.video ? (
          <video
            src={p.video}
            poster={p.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : p.image ? (
          <>
            <img className="project__media-a" src={p.image} alt={`${p.title} 主图`} loading="lazy" />
            {p.image2 && <img className="project__media-b" src={p.image2} alt={`${p.title} 副图`} loading="lazy" />}
          </>
        ) : (
          <div className="project__placeholder" aria-hidden="true">
            <span className="project__placeholder-word">{p.subtitle}</span>
            <div className="project__placeholder-grid" />
          </div>
        )}
      </div>

      <div className="project__info">
        <span className="project__no">{p.id}</span>
        <h3 className="project__title">{p.title}</h3>
        <p className="project__subtitle">{p.subtitle}</p>
        <p className="project__desc">{p.desc}</p>

        <ul className="project__tags">
          {p.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <ul className="project__results">
          {p.results.map((r) => (
            <li key={r}>
              <i aria-hidden="true">▸</i>
              {r}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

function Gallery({ data }) {
  const [ref, revealed] = useReveal()
  const trackRef = useRef(null)

  // 鼠标按住拖拽滚动（触屏走原生横向滑动）
  const drag = {
    onPointerDown: (e) => {
      if (e.pointerType === 'touch') return
      const el = trackRef.current
      if (!el) return
      const startX = e.clientX
      const startLeft = el.scrollLeft
      el.setPointerCapture(e.pointerId)
      el.style.cursor = 'grabbing'
      const move = (ev) => {
        el.scrollLeft = startLeft - (ev.clientX - startX)
      }
      const up = () => {
        el.style.cursor = 'grab'
        el.removeEventListener('pointermove', move)
        el.removeEventListener('pointerup', up)
      }
      el.addEventListener('pointermove', move)
      el.addEventListener('pointerup', up)
    },
  }

  return (
    <div ref={ref} className={`gallery reveal ${revealed ? 'is-revealed' : ''}`}>
      <div className="gallery__head">
        <h3 className="gallery__title">{data.title}</h3>
        <span className="gallery__subtitle">{data.subtitle}</span>
        <span className="gallery__hint">按住拖动浏览 →</span>
      </div>
      <div className="gallery__track" ref={trackRef} {...drag}>
        {data.images.map((src, i) => (
          <figure className="gallery__item" key={src}>
            <img src={src} alt={`${data.title} ${i + 1}`} loading="lazy" draggable="false" />
          </figure>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const [headRef, headRevealed] = useReveal()

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <header
          ref={headRef}
          className={`section__head reveal ${headRevealed ? 'is-revealed' : ''}`}
        >
          <span className="section__no">02</span>
          <h2 className="section__title">精选项目</h2>
          <span className="section__en">SELECTED WORK</span>
        </header>

        <div className="projects__list">
          {projects.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>

        {galleries.map((g) => (
          <Gallery key={g.id} data={g} />
        ))}
      </div>
    </section>
  )
}
