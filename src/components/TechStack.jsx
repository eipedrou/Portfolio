import { motion } from 'framer-motion';

const stack = [
    "Supabase",
    "SQL",
    "Bubble",
    "Flutterflow",
    "Figma",
    "Framer",
    "Javascript",
    "HTML",
    "CSS"
];

export default function TechStack() {
    return (
        <section className="py-12 md:py-24 px-6 md:px-12 lg:px-24 mx-auto max-w-7xl relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-8 md:mb-16 text-center"
            >
                <h2 className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-slate-500 mb-4">
                    Base Tecnológica
                </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto relative z-10">
                {stack.map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        key={index}
                        className="px-6 py-3 glass-card text-[var(--color-brand-text-muted)] font-medium text-sm md:text-base hover:text-white transition-all duration-300 cursor-default hover:bg-blue-600/10 hover:border-blue-500/30 rounded-lg backdrop-blur-md"
                    >
                        {item}
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
