import { useId, useState } from "react";
import { useReveal } from "../hooks/useReveal";

const CareerItem = ({ item, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const ref = useReveal();
    const panelId = useId();
    const isCurrent = item.duration === "운영중";

    return (
        <li ref={ref} className="reveal relative">
            {/* 타임라인 노드 */}
            <span
                aria-hidden="true"
                className={`absolute -left-8 md:-left-12 top-7 w-4 h-4 md:w-6 md:h-6 rounded-full border-2 bg-paper flex items-center justify-center transition-colors duration-300 ${
                    isOpen ? "border-accent" : "border-line"
                }`}
            >
                <span
                    className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                        isOpen ? "bg-accent scale-100" : "bg-ink-faint scale-75"
                    }`}
                />
            </span>

            <div
                className={`rounded-2xl border bg-white overflow-hidden transition-[border-color,box-shadow] duration-300 ${
                    isOpen ? "border-accent/40 shadow-[0_12px_40px_-12px_rgba(51,85,255,0.18)]" : "border-line hover:border-ink-faint/40"
                }`}
            >
                <button
                    className="w-full text-left px-6 py-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                >
                    <div className="flex flex-col gap-1">
                        <span className="flex items-center gap-2 text-base md:text-lg font-semibold text-ink">
                            {item.title}
                            {isCurrent && (
                                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent-soft text-accent">
                                    NOW
                                </span>
                            )}
                        </span>
                        <span className="font-mono text-xs text-ink-faint">
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
                        <span
                            aria-hidden="true"
                            className={`relative w-6 h-6 shrink-0 rounded-full border border-line transition-transform duration-500 ${
                                isOpen ? "rotate-180" : ""
                            }`}
                        >
                            <span className="absolute left-1/2 top-1/2 w-2.5 h-[1.5px] -translate-x-1/2 -translate-y-1/2 bg-ink-soft" />
                            <span
                                className={`absolute left-1/2 top-1/2 w-2.5 h-[1.5px] -translate-x-1/2 -translate-y-1/2 bg-ink-soft transition-transform duration-500 ${
                                    isOpen ? "rotate-0" : "rotate-90"
                                }`}
                            />
                        </span>
                    </div>
                </button>

                <div id={panelId} className={`accordion ${isOpen ? "is-open" : ""}`}>
                    <div>
                        <div className="px-6 pb-6 flex flex-col gap-5 border-t border-line pt-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <p className="text-[11px] tracking-widest text-ink-faint uppercase mb-1">
                                        프로젝트 개요
                                    </p>
                                    <p className="text-sm text-ink-soft leading-relaxed">{item.overview}</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className="text-[11px] tracking-widest text-ink-faint uppercase">기여도</p>
                                    {item.contribution.map((c) => (
                                        <div key={c.label} className="flex items-center gap-3">
                                            <div className="flex-1 h-1.5 rounded-full bg-paper-soft overflow-hidden">
                                                <div
                                                    className="h-full rounded-full bg-accent transition-[width] duration-1000 ease-out delay-200"
                                                    style={{ width: isOpen ? `${c.value}%` : "0%" }}
                                                />
                                            </div>
                                            <span className="font-mono text-xs font-medium text-accent w-10 text-right shrink-0">
                                                {c.value}%
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid gap-5 md:grid-cols-2">
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
                </div>
            </div>
        </li>
    );
};

export default CareerItem;
