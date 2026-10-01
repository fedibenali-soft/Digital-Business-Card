import meImage from './assets/Me.jpeg'

function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-stone-100 p-4 sm:p-8">
      <article className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-[0_32px_100px_-36px_rgba(0,0,0,0.35)] md:grid-cols-[1.05fr_0.95fr]">
        <section className="flex min-h-[500px] flex-col justify-between p-8 sm:p-12 lg:p-16">
          <div>
            <p className="mb-12 text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">
              Digital business card
            </p>

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
              Hello, I’m
            </p>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
              Fedi
              <br />
              Ben Ali<span className="text-lime-500">.</span>
            </h1>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-10 bg-lime-500" />
              <h2 className="text-lg font-medium text-stone-700 sm:text-xl">
                Software Developer
              </h2>
            </div>

            <p className="mt-8 max-w-md text-base leading-7 text-stone-500 sm:text-lg sm:leading-8">
              I build useful, intuitive web experiences with a focus on clean design
              and thoughtful details.
            </p>
          </div>

          <p className="mt-12 text-xs font-medium uppercase tracking-[0.22em] text-stone-400">
            Turning ideas into digital experiences
          </p>
        </section>

        <section
          aria-label="Portrait and social links"
          className="relative flex min-h-[480px] items-center justify-center overflow-hidden bg-neutral-950 p-8 sm:min-h-[540px]"
        >
          <div
            aria-hidden="true"
            className="absolute right-8 top-10 h-48 w-48 rounded-full bg-lime-300/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-20 left-8 h-40 w-40 rounded-full bg-white/5 blur-3xl"
          />

          <img
            src={meImage}
            alt="Portrait of Fedi Ben Ali"
            className="relative z-10 aspect-square w-full max-w-[18rem] rounded-[1.75rem] bg-white object-cover shadow-2xl ring-1 ring-white/15 sm:max-w-[20rem]"
          />

          <div className="absolute bottom-7 right-7 z-20 flex gap-3 sm:bottom-8 sm:right-8">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-lime-300 hover:bg-lime-300 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300"
            >
              <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
                <path d="M13.4 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.4-.2-2.7-.2-2.7 0-4.5 1.6-4.5 4.7v1.9h-3v3.2h3V21h3.9Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-lime-300 hover:bg-lime-300 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300"
            >
              <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
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
