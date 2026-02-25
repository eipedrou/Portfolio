import { motion } from 'framer-motion';

const philosophies = [
    "Simplicidade acima de complexidade.",
    "Estrutura antes de escala.",
    "Automação acima de tarefas manuais.",
    "Performance por design."
];

export default function EngineeringPhilosophy() {
    return (
        <section className="py-40 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-[#0A101C]">
            {/* Heavy glow background for dramatic impact */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-blue-600/5 blur-[150px] pointer-events-none mix-blend-screen"></div>

            {/* Horizontal subtle rulers */}
            <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-border)] to-transparent"></div>
            <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-border)] to-transparent"></div>

            <div className="mx-auto max-w-6xl text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-blue-500/70 mb-16"
                >
                    Filosofia de Engenharia
                </motion.h2>

                <div className="flex flex-col gap-12 md:gap-16 items-center justify-center">
                    {philosophies.map((item, index) => (
                        <motion.h3
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1 - (index * 0.15), y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            key={index}
                            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white/90 hover:text-white leading-[1.1] transition-colors duration-500 cursor-default"
                            style={{
                                textShadow: index === 0 ? '0 0 40px rgba(59, 130, 246, 0.2)' : 'none',
                            }}
                        >
                            {item}
                        </motion.h3>
                    ))}
                </div>
            </div>
        </section>
    )
}
