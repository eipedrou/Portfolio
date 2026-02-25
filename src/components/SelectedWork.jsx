import tagguirhImg from '../assets/projects/tagguirh.png';
import dudafarageImg from '../assets/projects/dudafarage.png';
import klammerImg from '../assets/projects/klammer.png';
import imoveisscImg from '../assets/projects/imoveissc.png';
import { motion } from 'framer-motion';

const projects = [
    {
        name: "Taggui RH",
        link: "https://tagguirh.com.br",
        image: tagguirhImg,
        problem: "Dados de RH descentralizados, causando perda de tempo e riscos de compliance.",
        solution: "Plataforma SaaS consolidada e otimizada (database-first) para unificar fluxos.",
        result: "RH PME integrado de ponta a ponta, permitindo implantações rápidas e escalabilidade."
    },
    {
        name: "Imóveis SC",
        link: "https://www.imoveis-sc.com.br/",
        image: imoveisscImg,
        problem: "Catálogos lentos e desestruturados, prejudicando ranqueamento e UX.",
        solution: "Arquitetura reformulada focada em otimização de busca e carregamento ultrarrápido.",
        result: "Aumento na velocidade de carregamento resultando em melhor conversão de leads."
    },
    {
        name: "Duda Farage",
        link: "https://dudafarage.com.br/lp",
        image: dudafarageImg,
        problem: "Necessidade de página de alta conversão para SDRs com infra flexível para testes.",
        solution: "Landing Page com design estratégico, integrações automáticas e carregamento veloz.",
        result: "Infraestrutura pronta para receber alto volume de tráfego e gestão limpa."
    },
    {
        name: "Klammer",
        link: "https://klammer.com.br/#agentes",
        image: klammerImg,
        problem: "Orquestração complexa de GTM exigindo performance extrema em dados.",
        solution: "Interface dinâmica (React) e banco estruturado para métricas em tempo real.",
        result: "Sistema capaz de gerir operações com estabilidade e experiência premium."
    }
];

export default function SelectedWork() {
    return (
        <section id="projetos" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 mx-auto max-w-7xl relative">
            <div className="absolute left-0 top-0 w-full h-[500px] bg-blue-900/5 blur-[150px] pointer-events-none"></div>

            <div className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
                <div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                        Projetos Selecionados
                    </h2>
                    <p className="text-xl text-[var(--color-brand-text-muted)] max-w-2xl font-light leading-relaxed">
                        Soluções reais que nasceram da intersecção de necessidades de negócio e excelência arquitetural.
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-24 lg:gap-40 relative z-10">
                {projects.map((project, index) => (
                    <motion.article
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        key={index}
                        className="group grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
                    >
                        <div className={`lg:col-span-7 glass-card rounded-2xl aspect-[16/10] overflow-hidden transition-all duration-700 hover:border-blue-500/30 hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.2)] relative flex items-center justify-center p-2 ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                            <div className="w-full h-full rounded-xl overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={`Preview do projeto ${project.name}`}
                                    className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030610] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 flex flex-col">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block group/link w-fit">
                                <h3 className="text-2xl md:text-4xl font-bold text-white mb-8 border-b border-[var(--color-brand-border)] pb-6 group-hover/link:text-blue-400 transition-colors flex items-center gap-4">
                                    {project.name}
                                    <span className="text-xl md:text-2xl opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 text-blue-500 font-light">
                                        &rarr;
                                    </span>
                                </h3>
                            </a>

                            <div className="space-y-8 mt-4">
                                <div className="group/item">
                                    <h4 className="text-xs font-semibold text-blue-500/70 uppercase tracking-[0.2em] mb-3 group-hover/item:text-blue-400 transition-colors">Problema</h4>
                                    <p className="text-[var(--color-brand-text-muted)] leading-relaxed font-light text-base md:text-lg">{project.problem}</p>
                                </div>
                                <div className="group/item">
                                    <h4 className="text-xs font-semibold text-blue-500/70 uppercase tracking-[0.2em] mb-3 group-hover/item:text-blue-400 transition-colors">Solução</h4>
                                    <p className="text-[var(--color-brand-text-muted)] leading-relaxed font-light text-base md:text-lg">{project.solution}</p>
                                </div>
                                <div className="group/item">
                                    <h4 className="text-xs font-semibold text-blue-500/70 uppercase tracking-[0.2em] mb-3 group-hover/item:text-blue-400 transition-colors">Resultado</h4>
                                    <p className="text-white leading-relaxed font-normal text-base md:text-lg">{project.result}</p>
                                </div>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    )
}
