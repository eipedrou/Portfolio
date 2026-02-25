import { motion } from 'framer-motion';
import { Layers, Database, Code2, Server, Workflow, Zap } from 'lucide-react';

const expertise = [
    { name: "Bubble Engineering (nível senior)", icon: <Layers className="w-8 h-8 mb-4 opacity-70 group-hover:opacity-100 group-hover:text-blue-400 transition-all duration-300" /> },
    { name: "Supabase Architecture", icon: <Database className="w-8 h-8 mb-4 opacity-70 group-hover:opacity-100 group-hover:text-blue-400 transition-all duration-300" /> },
    { name: "SQL avançado", icon: <Code2 className="w-8 h-8 mb-4 opacity-70 group-hover:opacity-100 group-hover:text-blue-400 transition-all duration-300" /> },
    { name: "System Design", icon: <Server className="w-8 h-8 mb-4 opacity-70 group-hover:opacity-100 group-hover:text-blue-400 transition-all duration-300" /> },
    { name: "Automação de processos", icon: <Workflow className="w-8 h-8 mb-4 opacity-70 group-hover:opacity-100 group-hover:text-blue-400 transition-all duration-300" /> },
    { name: "Otimização de performance", icon: <Zap className="w-8 h-8 mb-4 opacity-70 group-hover:opacity-100 group-hover:text-blue-400 transition-all duration-300" /> }
];

export default function CoreExpertise() {
    return (
        <section className="py-32 px-6 md:px-12 lg:px-24 mx-auto max-w-7xl relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-20 md:mb-28 relative z-10"
            >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 text-center">
                    Core <span className="text-gradient-blue text-glow">Expertise</span>
                </h2>
                <p className="text-xl text-[var(--color-brand-text-muted)] text-center max-w-2xl mx-auto font-light">
                    Alta competência técnica direcionada à resolução de problemas complexos na interseção entre low-code e pro-code.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
                {expertise.map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        key={index}
                        className="p-10 md:p-12 glass-card glass-card-hover flex flex-col justify-center items-center text-center group rounded-2xl cursor-default"
                    >
                        {item.icon}
                        <h3 className="text-xl font-light text-[var(--color-brand-text-main)] group-hover:text-white group-hover:text-glow transition-all duration-300">
                            {item.name}
                        </h3>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
