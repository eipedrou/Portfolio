import profileImg from '../assets/projects/profile.png';
import { motion } from 'framer-motion';

const whatsappLink = "https://wa.me/5574991223081?text=Ol%C3%A1%20Pedro%2C%20vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20agendar%20uma%20conversa.";

export default function About() {
    return (
        <section className="pt-20 md:pt-32 pb-12 px-6 md:px-12 lg:px-24 mx-auto max-w-7xl relative">
            {/* Decorative top border */}
            <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-border)] to-transparent"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-40 mt-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white mb-8 md:mb-10">
                        A visão por trás <br />dos sistemas.
                    </h2>
                    <p className="text-lg md:text-xl md:text-2xl text-[var(--color-brand-text-muted)] leading-relaxed font-light mb-6">
                        Atualmente atuo como <strong className="text-white font-medium">Senior Bubble Developer</strong> na Harpia Digital. Em aproximadamente um ano, migrei de pleno para sênior focando onde a maioria dos desenvolvedores ignora: as fundações do software.
                    </p>
                    <p className="text-base md:text-lg text-[var(--color-brand-text-muted)] leading-relaxed font-light">
                        Trabalho em múltiplos projetos SaaS e sistemas internos de alta criticidade. Minha rotina não é apenas construir telas, é definir a arquitetura, garantir integridade dos dados, otimizar performance de ponta a ponta e garantir que o app não quebre ao escalar.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative group mx-auto w-full max-w-md aspect-[4/5] perspective"
                >
                    <div className="absolute inset-0 bg-blue-600/20 blur-[60px] rounded-full group-hover:bg-blue-500/30 transition-colors duration-700 pointer-events-none"></div>
                    <div className="glass-card w-full h-full p-4 relative z-10 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700">
                        {/* Profile image with Dark Mode / SaaS Elite filters */}
                        <div className="w-full h-full bg-[#080B14] border border-white/5 flex items-center justify-center overflow-hidden relative group/img">
                            <div className="hidden md:block absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(59,130,246,0.25)_0%,_transparent_60%)] pointer-events-none z-10 mix-blend-color-dodge"></div>
                            <img
                                src={profileImg}
                                alt="Engenheiro de Software"
                                className="w-full h-full object-cover object-center md:grayscale md:opacity-70 group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-700 ease-in-out"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--color-brand-bg)] to-transparent z-10 pointer-events-none opacity-90"></div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                id="contato"
                className="relative overflow-hidden rounded-3xl mt-24 mb-16"
            >
                {/* Deep immersive glow for CTA */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-900/20 blur-[100px] pointer-events-none"></div>
                <div className="absolute inset-0 bg-[#0A101C]/80 backdrop-blur-md z-0 border border-[var(--color-brand-border)] rounded-3xl"></div>

                <div className="relative z-10 text-center py-16 px-6 md:p-24 lg:p-32">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-white mb-8 md:mb-10 max-w-4xl mx-auto leading-[1.1] md:leading-[1.1] text-glow">
                        Tem um problema complexo? <br className="hidden md:block" /><span className="text-gradient-blue">Vamos desenhar a solução.</span>
                    </h2>

                    <p className="text-xl text-[var(--color-brand-text-muted)] font-light max-w-2xl mx-auto mb-12">
                        Meus processos começam por uma avaliação honesta de arquitetura. Se houver falhas na fundação, nós as encontraremos antes de escrever a primeira linha de código (ou configurar o primeiro workflow).
                    </p>

                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center bg-blue-600 px-6 sm:px-10 py-4 sm:py-5 font-semibold text-base sm:text-lg text-white hover:bg-blue-500 transition-colors duration-300 rounded-lg overflow-hidden w-full sm:w-auto max-w-xs mx-auto">
                        <span className="relative flex items-center gap-3 sm:gap-4 z-10">
                            Chamar no WhatsApp
                            <span className="text-xl transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/20 to-blue-400/0 -translate-x-[150%] animate-[shimmer_3s_infinite] group-hover:hidden"></div>
                    </a>
                </div>
            </motion.div>
        </section >
    )
}
