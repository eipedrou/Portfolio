import profileImg from '../assets/projects/profile_topo.png';

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/5 bg-[#030610] py-12 md:py-16 relative overflow-hidden mt-12">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-900/30 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <a href="#" className="text-xl font-bold tracking-tight text-white flex items-center gap-3 mb-4 group">
                            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-blue-500/50 transition-colors duration-300">
                                <img
                                    src={profileImg}
                                    alt="Pedro Lucas"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            Pedro Lucas
                        </a>
                        <p className="text-[var(--color-brand-text-muted)] font-light max-w-sm">
                            Sistemas projetados para eliminar complexidade e escalar negócios duradouros.
                        </p>
                    </div>

                    <div className="flex justify-end mt-auto h-full items-end pb-4">
                        <p className="text-xs text-[var(--color-brand-text-muted)]/60 mt-auto">
                            &copy; {new Date().getFullYear()} Pedro Lucas. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
