const problemsList = [
    "Sistemas que não escalam conforme o crescimento.",
    "Banco de dados mal estruturado.",
    "Workflows confusos e difíceis de manter.",
    "Performance comprometida por decisões técnicas erradas.",
    "MVPs construídos sem visão de longo prazo."
];

export default function Problems() {
    return (
        <section className="py-32 px-6 md:px-12 lg:px-24 mx-auto max-w-7xl relative">
            {/* Decorative top border glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-border)] to-transparent opacity-50"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10 pt-8">
                <div className="lg:col-span-5">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white sticky top-32 leading-tight">
                        Problemas que eu <br className="hidden lg:block" /> resolvo.
                    </h2>
                </div>

                <div className="lg:col-span-7 flex flex-col gap-6">
                    {problemsList.map((problem, index) => (
                        <div
                            key={index}
                            className="glass-card glass-card-hover group flex gap-8 items-start p-8 md:p-10 rounded-2xl relative overflow-hidden"
                        >
                            {/* Subtle accent line on hover */}
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="text-blue-500/40 font-mono text-xl md:text-2xl mt-1 group-hover:text-blue-400 group-hover:text-glow transition-all duration-300">
                                0{index + 1}
                            </div>
                            <p className="text-lg md:text-xl text-[var(--color-brand-text-muted)] group-hover:text-[var(--color-brand-text-main)] font-light leading-relaxed transition-colors duration-300">
                                {problem}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
