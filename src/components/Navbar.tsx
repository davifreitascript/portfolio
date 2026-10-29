import { useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { label: 'Início', href: '#inicio' },
        { label: 'Sobre', href: '#sobre' },
        { label: 'Habilidades', href: '#habilidades' },
        { label: 'Projetos', href: '#projetos' },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-white/10  backdrop-blur-xl">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
                <a
                    href="#inicio"
                    className="text-2xl font-bold tracking-wide text-white"
                    onClick={() => setMenuOpen(false)}
                >
                    <span className="text-black underline">DA</span><span className="text-green-900">VI</span>
                    <span className="ml-2 font-normal text-xs text-slate-600">/ DEV</span>
                </a>

                <div className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="relative text-base text-slate-600 transition-colors duration-300 hover:text-green-800 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-green-900 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100"
                        >
                            {link.label}
                        </a>
                    ))}

                    <a
                        href="#projetos"
                        className="group relative isolate inline-flex min-h-10 items-center justify-center overflow-hidden rounded-lg bg-green-900 px-8 font-bold text-slate-100"
                    >
                        <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-black transition-transform duration-400 ease-in-out group-hover:scale-x-100" />
                        Contato
                    </a>
                </div>

                <button
                    type="button"
                    aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex flex-col gap-1.5 rounded-md p-2 md:hidden"
                >
                    <span
                        className={`h-0.5 w-6 bg-white transition duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
                    />
                    <span
                        className={`h-0.5 w-6 bg-white transition duration-300 ${menuOpen ? 'opacity-0' : ''}`}
                    />
                    <span
                        className={`h-0.5 w-6 bg-white transition duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
                    />
                </button>
            </nav>

            {menuOpen && (
                <div
                    id="mobile-menu"
                    className="border-t border-white/10 bg-[#0b0f14] px-6 py-4 md:hidden"
                >
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="block py-3 text-sm text-slate-300 transition-colors hover:text-green-800"
                        >
                            {link.label}
                        </a>
                    ))}

                    <a
                        href="#contato"
                        onClick={() => setMenuOpen(false)}
                        className="mt-2 block rounded-lg bg-green-900 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition-colors hover:bg-green-800"
                    >
                        Entrar em contato
                    </a>
                </div>
            )}
        </header>
    );
}

export default Navbar;