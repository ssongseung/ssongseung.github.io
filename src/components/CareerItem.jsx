import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

const CareerItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useReveal();

    return (
        <div ref={ref} className="reveal rounded-2xl border border-line bg-white overflow-hidden">
            <button
                className="w-full text-left px-6 py-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
            >
                <div className="flex flex-col gap-1">
                    <span className="text-base font-semibold text-ink">{item.title}</span>
                    <span className="text-xs text-ink-faint">
                        {item.period} · {item.duration}
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex flex-wrap gap-1.5">
                        {item.skills.map((skill) => (
                            <span
                                key={skill}
                                className="text-[11px] px-2.5 py-1 rounded-full border border-line text-ink-soft bg-paper-soft"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                    <span className={`text-ink-faint transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                        ▾
                    </span>
                </div>
            </button>

            <div
                className={`overflow-hidden transition-all duration-400 ${
                    isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="px-6 pb-6 flex flex-col gap-5 border-t border-line pt-5">
                    <div>
                        <p className="text-[11px] tracking-widest text-ink-faint uppercase mb-1">프로젝트 개요</p>
                        <p className="text-sm text-ink-soft leading-relaxed">{item.overview}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-[11px] tracking-widest text-ink-faint uppercase">기여도</p>
                        {item.contribution.map((c) => (
                            <div key={c.label} className="flex items-center gap-3">
                                {item.contribution.length > 1 && (
                                    <span className="text-xs text-ink-faint w-8 shrink-0">{c.label}</span>
                                )}
                                <div className="flex-1 h-1.5 rounded-full bg-paper-soft overflow-hidden">
                                    <div className="h-full rounded-full bg-accent" style={{ width: `${c.value}%` }} />
                                </div>
                                <span className="text-xs font-medium text-accent w-9 text-right shrink-0">
                                    {c.value}%
                                </span>
                            </div>
                        ))}
                    </div>

                    {item.sections.map((section) => (
                        <div key={section.label}>
                            <p className="text-[11px] tracking-widest text-ink-faint uppercase mb-2">
                                {section.label}
                            </p>
                            <ul className="flex flex-col gap-1.5">
                                {section.items.map((text) => (
                                    <li key={text} className="flex gap-2 text-sm text-ink-soft leading-relaxed">
                                        <span className="mt-[8px] w-1 h-1 rounded-full bg-accent shrink-0" />
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CareerItem;
