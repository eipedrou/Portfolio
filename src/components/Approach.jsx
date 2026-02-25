"use client";

import { useState } from 'react';

const approaches = [
    {
        title: "Arquitetura orientada a banco de dados (database-first).",
        description: "Eu estruturo o banco de dados antes da interface. Um esquema bem planejado no Supabase garante integridade, evita redundâncias e escala naturalmente com o seu produto."
    },
    {
        title: "Estrutura antes de velocidade.",
        description: "Não adianta entregar rápido se o código ou o processo quebrar depois. Dedico tempo a criar uma base sólida, fluxos lógicos claros e regras de negócio inquebráveis antes de focar na velocidade de desenvolvimento da UI."
    },
    {
        title: "Performance como princípio, não como ajuste posterior.",
        description: "Otimização faz parte da fundação. Indexação no banco, paginação, chamadas eficientes de API e redução de payloads são pensados desde o primeiro rascunho da aplicação."
    },
    {
        title: "Escalabilidade pensada desde o MVP.",
        description: "A maioria dos MVPs é feita para ser jogada fora. Eu construo para o futuro. Sua fundação deve permitir que o sistema cresça de mil para um milhão de usuários sem precisar ser refeito do zero."
    }
];

export default function Approach() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0A101C] z-0"></div>

            {/* Top and bottom subtle gradients borders */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-900/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-border)] to-transparent"></div>

            <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center relative z-10">
                <div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 leading-tight">
                        Minha <br className="hidden lg:block" /> abordagem.
                    </h2>
                    <p className="text-xl text-[var(--color-brand-text-muted)] leading-relaxed mb-8 font-light max-w-xl">
                        Grandes produtos não sobrevivem a fundamentos ruins. A construção começa pela definição precisa dos dados e da arquitetura do sistema antes de qualquer decisão visual.
                    </p>
                </div>

                <div className="space-y-4">
                    {approaches.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                className={`cursor-pointer glass-card p-6 rounded-2xl transition-all duration-500 border overflow-hidden ${isOpen ? 'border-blue-500/40 bg-blue-950/10' : 'border-white/5 hover:border-blue-500/20'}`}
                            >
                                <div className="flex gap-6 items-center">
                                    <span className={`w-10 h-10 rounded-full flex items-center justify-center font-light shrink-0 transition-all duration-300 ${isOpen ? 'bg-blue-600/40 text-blue-300 text-glow rotate-45' : 'bg-blue-900/20 text-blue-400 group-hover:bg-blue-600/20 group-hover:text-glow'}`}>
                                        +
                                    </span>
                                    <h3 className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-white' : 'text-[var(--color-brand-text-main)] group-hover:text-white'}`}>
                                        {item.title}
                                    </h3>
                                </div>
                                <div
                                    className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-base text-[var(--color-brand-text-muted)] font-light leading-relaxed pl-16">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
