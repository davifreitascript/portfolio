import { useEffect, useState } from 'react';

const phrases = [
  'Desenvolvedor Full Stack Júnior',
  'Desenvolvedor React',
  'Criando interfaces responsivas',
  'Construindo aplicações web',
];

const CYCLE_MS = 2000;

const slide =
  'transition-transform duration-700 ease-in-out motion-reduce:transition-none';

function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((current) => (current + 1) % phrases.length);
    }, CYCLE_MS);

    return () => clearInterval(interval);
  }, []);

  const previousIndex = (phraseIndex - 1 + phrases.length) % phrases.length;

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-16 sm:px-10 lg:px-[10%]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-[10%] h-105 w-105 rounded-full bg-green-500/10 blur-[100px]"
      />

      <div className="relative z-10 max-w-3xl">

        <h1 className="my-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Olá, eu sou o <span className="text-green-600">Davi.</span>
        </h1>

        <h2 className="relative h-8 overflow-hidden text-base font-medium text-slate-400 sm:h-9 sm:text-2xl">
          {phrases.map((phrase, index) => {
            const isActive = index === phraseIndex;
            const isLeaving = index === previousIndex;
            const position = isActive
              ? `translate-y-0 ${slide}`
              : isLeaving
                ? `-translate-y-full ${slide}`
                : 'translate-y-full';

            return (
              <span
                key={phrase}
                aria-hidden={!isActive}
                className={`absolute inset-0 flex items-center whitespace-nowrap ${position}`}
              >
                {phrase}
              </span>
            );
          })}
        </h2>

        <p className="my-8 max-w-xl text-base leading-8 text-slate-400">
          Desenvolvo aplicações web com foco em código limpo,
          boas práticas e soluções funcionais.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projetos"
            className="group relative isolate inline-flex min-h-12 items-center justify-center overflow-hidden rounded-lg bg-green-900 px-6 font-bold text-slate-100 hover:text-white"
          >
            <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-black transition-transform duration-500 ease-in-out group-hover:scale-x-100" />
            Ver projetos
          </a>

          <a
            href="#contato"
            className="group relative isolate inline-flex min-h-12 items-center justify-center overflow-hidden rounded-lg border border-green-900 px-6 font-bold text-black transition-colors duration-400 hover:border-green-900 hover:text-slate-100"
          >
            <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-black transition-transform duration-500 ease-in-out group-hover:scale-x-100" />
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;