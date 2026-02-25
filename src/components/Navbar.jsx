import { useState, useEffect } from 'react';
import profileImg from '../assets/projects/profile_topo.png';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const whatsappLink = "https://wa.me/5574991223081?text=Ol%C3%A1%20Pedro%2C%20vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20agendar%20uma%20conversa.";

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#030610]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight text-white group flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-blue-500/50 transition-colors duration-300">
                        <img
                            src={profileImg}
                            alt="Pedro Lucas"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    <a href="#projetos" className="text-sm font-medium text-[var(--color-brand-text-muted)] hover:text-white transition-colors">Projetos</a>
                    <a href="#abordagem" className="text-sm font-medium text-[var(--color-brand-text-muted)] hover:text-white transition-colors">Abordagem</a>
                </nav>

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden rounded-full p-[1px]">
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <div className="relative bg-[#030610] px-5 py-2 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-transparent">
                        <span className="font-semibold text-sm text-white transition-colors">
                            Contato
                        </span>
                    </div>
                </a>
            </div>
        </header>
    );
}
