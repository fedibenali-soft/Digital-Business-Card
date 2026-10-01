import meImage from './assets/Me.jpeg'
import './style/App.css'

function App() {
  return (
    <main className="card-page">
      <article className="business-card">
        <section className="card-content">
          <div>
            <p className="eyebrow">Digital business card</p>

            <p className="greeting">Hello, I’m</p>
            <h1 className="person-name">
              Fedi
              <br />
              Ben Ali<span className="name-period">.</span>
            </h1>

            <div className="job-title-row">
              <span className="accent-line" aria-hidden="true" />
              <h2 className="job-title">Software Developer</h2>
            </div>

            <p className="biography">
              I build useful, intuitive web experiences with a focus on clean design
              and thoughtful details.
            </p>
          </div>

          <p className="card-footer">Turning ideas into digital experiences</p>
        </section>

        <section className="photo-panel" aria-label="Portrait and social links">
          <div className="photo-glow photo-glow-top" aria-hidden="true" />
          <div className="photo-glow photo-glow-bottom" aria-hidden="true" />

          <img
            src={meImage}
            alt="Portrait of Fedi Ben Ali"
            className="portrait"
          />

          <div className="social-links">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="social-button"
            >
              <svg viewBox="0 0 24 24" className="social-icon" aria-hidden="true">
                <path d="M13.4 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.4-.2-2.7-.2-2.7 0-4.5 1.6-4.5 4.7v1.9h-3v3.2h3V21h3.9Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-button"
            >
              <svg viewBox="0 0 24 24" className="social-icon" aria-hidden="true">
                <path d="M5.2 3.5a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM3.4 9.2H7V21H3.4V9.2Zm5.8 0h3.4v1.6h.1a3.7 3.7 0 0 1 3.3-1.8c3.6 0 4.3 2.4 4.3 5.5V21h-3.6v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.2V9.2Z" />
              </svg>
            </a>
          </div>
        </section>
      </article>
    </main>
  )
}

export default App
