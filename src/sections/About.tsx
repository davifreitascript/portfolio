import Reveal from '../components/Reveal';

function About() {
  return (
    <section
      id="sobre"
      data-navbar-theme="dark"
      className="bg-[#16202f] px-6 py-24 sm:px-10 lg:px-[10%] relative overflow-visible"
    >

      <svg
        className="absolute -top-19.75 left-0 h-20 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#16202f"
          d="M0,70 C180,120 300,20 500,55 C700,90 850,120 1050,65 C1250,10 1350,40 1440,70 L1440,120 L0,120 Z"
        />
      </svg>

      <svg
        className="pointer-events-none absolute bottom-1 left-0 h-20 w-full translate-y-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#16202f"
          d="M0,0 L1440,0 L1440,70 C1350,40 1250,10 1050,65 C850,120 700,90 500,55 C300,20 180,120 0,70 Z"
        />
      </svg>

      <Reveal>
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-bold tracking-[3px] text-green-900">
            01 / SOBRE MIM
          </p>

          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Desenvolvendo soluções,
                <span className="text-green-900"> uma linha de código por vez.</span>
              </h2>

              <p className="mb-5 leading-8 text-slate-400">
                Sou desenvolvedor Full Stack Júnior, interessado em tecnologia
                e no desenvolvimento de soluções web.
              </p>

              <p className="leading-8 text-slate-400">
                Atualmente, trabalho com React, TypeScript e Tailwind CSS,
                buscando aprimorar minhas habilidades e desenvolver aplicações
                modernas, funcionais e com boa experiência de usuário.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#191919] p-8">
              <p className="mb-6 text-sm font-semibold text-slate-300">
                TECNOLOGIAS ATUAIS
              </p>

              <Reveal delay={150}>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Tailwind CSS', 'TypeScript', 'Next.js'].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-green-900 px-6 py-1 text-sm text-slate-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default About;