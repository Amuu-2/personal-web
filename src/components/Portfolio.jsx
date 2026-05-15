import { projects } from '../data/profile'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="section-title">作品</h2>
      <div className="portfolio-grid">
        {projects.map((p) => (
          <div className="portfolio-card" key={p.name}>
            <div className="portfolio-card-top">
              <h3 className="portfolio-name">{p.name}</h3>
              {p.status && <span className="portfolio-status">{p.status}</span>}
            </div>
            <p className="portfolio-desc">{p.desc}</p>
            {p.link && (
              <a className="portfolio-link" href={p.link} target="_blank" rel="noopener noreferrer">{p.link}</a>
            )}
            <div className="portfolio-tags">
              {p.tags.map((t) => (
                <span key={t} className="portfolio-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
