import Reveal from '../components/Reveal';

const skills = [
  {
    name: 'React',
    category: 'Frontend',
    description: 'Desenvolvimento de interfaces e componentes reutilizáveis.',
  },
  {
    name: 'Tailwind CSS',
    category: 'Estilização',
    description: 'Criação de interfaces modernas e responsivas.',
  },
  {
    name: 'TypeScript',
    category: 'Linguagem',
    description: 'Tipagem estática e desenvolvimento de aplicações mais seguras.',
  },
];

function Skills() {
  return (
    <section
      id="habilidades"
      className="px-6 py-24 sm:px-10 lg:px-[10%]"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-xs font-bold tracking-[3px] text-green-500">
            02 / HABILIDADES
          </p>

          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Tecnologias que utilizo
          </h2>

          <p className="mb-12 max-w-xl leading-8 text-slate-400">
            Ferramentas que utilizo para desenvolver aplicações web,
            construir interfaces e escrever código organizado.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <Reveal key={skill.name} delay={index * 120}>
              <div className="group h-full rounded-xl bg-[#16202f] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-green-500 selection-none">
                <div className="mb-6 flex items-center justify-between select-none">
                  <span className="text-sm font-semibold text-green-500">
                    {skill.category}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-green-500 transition-shadow duration-300 group-hover:shadow-[0_0_12px_2px_rgba(74,222,128,0.6)]" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-white select-none">
                  {skill.name}
                </h3>

                <p className="text-sm leading-7 text-slate-400 select-none">
                  {skill.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;