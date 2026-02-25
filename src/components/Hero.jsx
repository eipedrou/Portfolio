import profileImg from '../assets/projects/profile_topo.png';
import { motion } from 'framer-motion';

const whatsappLink = "https://wa.me/5574991223081?text=Ol%C3%A1%20Pedro%2C%20vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20agendar%20uma%20conversa.";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-4 md:pt-40 md:pb-32 px-6 md:px-12 lg:px-24 mx-auto max-w-7xl overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none animate-pulse-glow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-400/5 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

            <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 items-center">

                {/* Text Content - Left Side (Spans 7 columns on LG) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left lg:col-span-7 pb-8 lg:pb-0"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[5rem] font-bold tracking-tight mb-6 leading-[1.15] text-gradient text-glow">
                        Eu desenho sistemas <br className="hidden md:block" /> que <span className="text-gradient-blue">eliminam complexidade.</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-[var(--color-brand-text-muted)] mb-6 md:mb-10 max-w-2xl leading-relaxed tracking-wide font-light"
                    >
                        Senior Bubble Engineer &bull; Especialista em Supabase &amp; SQL &bull; Arquitetura de Sistemas
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-6"
                    >
                        <a href="#projetos" className="relative group overflow-hidden rounded-full p-[1px] w-full sm:w-auto">
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></span>
                            <div className="relative bg-[#030610]/80 backdrop-blur-md px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-transparent w-full">
                                <span className="font-semibold text-base md:text-lg text-white group-hover:text-white transition-colors">
                                    Ver projetos
                                </span>
                            </div>
                        </a>

                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group px-6 md:px-8 py-3 md:py-4 font-semibold text-base md:text-lg text-[var(--color-brand-text-muted)] hover:text-white transition-all duration-300 flex items-center justify-center rounded-full border border-[var(--color-brand-border)] hover:border-blue-500/30 hover:bg-white/5 w-full sm:w-auto mt-2 sm:mt-0">
                            Chamar no WhatsApp
                            <span className="hidden sm:inline-block opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 text-blue-400">&rarr;</span>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Profile Image - Right Side (Spans 5 columns on LG) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative flex justify-center lg:justify-end lg:col-span-5"
                >
                    <div className="relative group w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] mx-auto animate-float">

                        {/* Decorative Rings / Borders */}
                        <div className="absolute inset-0 rounded-full border border-blue-500/20 scale-105 group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-700 ease-in-out pointer-events-none"></div>
                        <div className="absolute inset-x-0 bottom-0 top-0 rounded-full border border-white/5 scale-110 group-hover:scale-[1.15] rotate-45 transition-all duration-700 ease-in-out pointer-events-none"></div>

                        {/* Image Container */}
                        <div className="w-full h-full rounded-full overflow-hidden border border-[var(--color-brand-border)] bg-gradient-to-b from-[#0A101C] to-transparent p-1 img-glow glass-card group-hover:border-blue-500/30 transition-colors duration-500">
                            <div className="w-full h-full rounded-full overflow-hidden bg-[#080B14] relative">
                                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <img
                                    src={profileImg}
                                    alt="Pedro Lucas"
                                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>
                        </div>

                        {/* Tech Stack floating badge */}
                        <div className="absolute -bottom-6 -left-6 md:-left-10 bg-[#0A101C]/90 backdrop-blur-md border border-[var(--color-brand-border)] p-4 rounded-2xl flex items-center gap-3 animate-float-delayed shadow-xl">
                            <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                            <span className="text-sm font-medium text-white tracking-wide">Disponível para Projetos</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
