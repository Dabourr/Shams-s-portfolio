import { useEffect, useRef, useState } from 'react'
import { portfolioPages, projects, services } from './portfolio.js'

const asset = (file) => import.meta.env.BASE_URL + file
const portfolioAsset = (file) => asset(`portfolio/${file}`)
const email = 'shamskhaled7711@gmail.com'
const phone = '+201024724293'

function slideSource(page) {
  return portfolioAsset(`page-${String(page).padStart(2, '0')}.webp`)
}

function ProjectCard({ project, onOpen }) {
  function openSamples() {
    onOpen(project.name, project.pages)
  }

  return (
    <article className={`project-card${project.results ? ' project-featured' : ''}`}>
      <button className="project-art" type="button" aria-label={`View ${project.name} samples`} onClick={openSamples}>
        <img src={portfolioAsset(`${project.id}.webp`)} alt={project.imageAlt} loading="lazy" />
      </button>
      <div className="project-copy">
        <p className="project-formats">{project.formats}</p>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        {project.results && (
          <dl className="results">
            {project.results.map(({ from, to, label }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{from} <span aria-label="to">→</span> {to}</dd>
              </div>
            ))}
          </dl>
        )}
        <button className="text-link" type="button" onClick={openSamples}>
          View samples <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  )
}

function PortfolioGallery({ gallery, onClose }) {
  const dialogRef = useRef(null)
  const [index, setIndex] = useState(0)
  const { title, pages } = gallery
  const page = pages[index]

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog.open) dialog.showModal()
  }, [])

  function move(direction) {
    setIndex((current) => Math.min(pages.length - 1, Math.max(0, current + direction)))
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault()
      move(event.key === 'ArrowLeft' ? -1 : 1)
    }
  }

  return (
    <dialog ref={dialogRef} className="gallery" aria-labelledby="gallery-title" onKeyDown={handleKeyDown} onClose={onClose}>
      <div className="gallery-top">
        <h2 id="gallery-title">{title}</h2>
        <form method="dialog">
          <button className="icon-button" aria-label="Close gallery">×</button>
        </form>
      </div>
      <figure className="gallery-figure">
        <img src={slideSource(page)} width="2160" height="1215" alt={`${title}: original portfolio page ${page}`} />
      </figure>
      <div className="gallery-toolbar">
        <div className="gallery-controls">
          <button className="icon-button" type="button" aria-label="Previous page" disabled={index === 0} onClick={() => move(-1)}>←</button>
          <span className="page-count" aria-live="polite">{index + 1} / {pages.length}</span>
          <button className="icon-button" type="button" aria-label="Next page" disabled={index === pages.length - 1} onClick={() => move(1)}>→</button>
        </div>
        <a className="text-link" href={slideSource(page)} target="_blank" rel="noopener">
          Open full-size <span aria-hidden="true">↗</span>
        </a>
      </div>
    </dialog>
  )
}

function App() {
  const [gallery, setGallery] = useState(null)
  const featured = projects[0]

  function openGallery(title, pages) {
    setGallery({ title, pages })
  }

  return (
    <div className="portfolio" id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="masthead">
        <a className="brand" href="#home" aria-label="Shams Khaled, home">
          <span className="monogram">SK</span>
          <span>Shams Khaled</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Projects</a>
        </nav>
        <a className="button button-secondary masthead-contact" href="#contact">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="intro">
            <h1 id="hero-title">Hi, I’m <em>Shams.</em></h1>
            <p className="roles">
              <span>Media Buyer</span>
              <span className="role-divider" aria-hidden="true" />
              <span>Social Media Manager</span>
            </p>
            <p className="hero-lead">
              I plan paid campaigns and create social content, from the first idea to the results.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View my projects <span aria-hidden="true">→</span></a>
              <a className="button button-secondary" href="#contact">Contact me</a>
            </div>
          </div>

          <div className="hero-showcase">
            <div className="showcase-heading">
              <span className="window-dots" aria-hidden="true"><i /><i /><i /></span>
              <p>{featured.name}</p>
            </div>
            <div className="showcase-images">
              <img
                className="showcase-reel"
                src={portfolioAsset('post-18-4.webp')}
                alt="A social media video screenshot from the Future Path Center project"
                width="296"
                height="640"
              />
              <img
                className="showcase-profile"
                src={portfolioAsset('future-path.webp')}
                alt={featured.imageAlt}
                width="516"
                height="1119"
                fetchPriority="high"
              />
            </div>
            <div className="showcase-footer">
              <span>Social media &amp; media buying</span>
              <button type="button" className="text-link" onClick={() => openGallery(featured.name, featured.pages)}>
                View project <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="section about" aria-labelledby="about-title">
          <div>
            <p className="section-label">About me</p>
            <h2 id="about-title">From content ideas to campaigns.</h2>
          </div>
          <div className="about-body">
            <p>I’m Shams Khaled. I bring ideas to life through storytelling and strategy, with work that spans paid ads and social media.</p>
            <p>I take content from brainstorming through visual development and campaign planning, then use the results to guide what comes next.</p>
          </div>
        </section>

        <section id="services" className="section services" aria-labelledby="services-title">
          <div className="section-heading">
            <h2 id="services-title">What I do</h2>
          </div>
          <ul className="service-grid">
            {services.map(({ title, description }) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="work" className="section work" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">My projects</h2>
            <button className="text-link" type="button" onClick={() => openGallery('Portfolio slides', portfolioPages)}>
              View portfolio slides <span aria-hidden="true">↗</span>
            </button>
          </div>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.id} project={project} onOpen={openGallery} />)}
          </div>
        </section>

        <section id="contact" className="contact" aria-labelledby="contact-title">
          <div>
            <p className="section-label">Contact</p>
            <h2 id="contact-title">Have a project in mind?</h2>
            <a className="button contact-button" href={`mailto:${email}`}>Send me an email <span aria-hidden="true">↗</span></a>
          </div>
          <address>
            <a href={`mailto:${email}`}><span className="contact-label">Email</span><span>{email}</span></a>
            <a href={`tel:${phone}`}><span className="contact-label">Phone</span><span>{phone}</span></a>
          </address>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">Shams Khaled</a>
        <nav aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#work">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </footer>

      {gallery && <PortfolioGallery gallery={gallery} onClose={() => setGallery(null)} />}
    </div>
  )
}

export default App
