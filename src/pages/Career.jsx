import { useState } from "react";
import { careerList } from "../data/careerList";

const Career = () => {
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <div className="flex-1 flex flex-col h-full px-[20px] pb-[30px] overflow-y-auto md:px-[40px] md:py-[10%] no-scrollbar">

            <div className="flex flex-col gap-4">
                {careerList.map((item) => {
                    const isOpen = openId === item.id;

                    return (
                        <div
                            key={item.id}
                            className="relative rounded-[20px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-all duration-300"
                        >
                            {/* 네온 테두리 glow */}
                            <div className="absolute inset-0 rounded-[20px] pointer-events-none">
                                <div className="absolute inset-0 rounded-[20px] border border-blue-400/20" />
                                <div className="absolute inset-0 rounded-[20px] border border-blue-400/10 blur-[6px]" />
                            </div>

                            {/* 헤더 (클릭 가능) */}
                            <button
                                className="relative z-10 w-full text-left px-6 py-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
                                onClick={() => toggle(item.id)}
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="text-base font-semibold tracking-tight text-white drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">
                                        {item.title}
                                    </span>
                                    <span className="text-xs text-blue-300/70">
                                        {item.period} · {item.duration}
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex flex-wrap gap-1.5">
                                        {item.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-[10px] px-2 py-0.5 rounded-full border border-blue-400/40 text-blue-300 bg-blue-500/10"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                    <span
                                        className={`text-blue-300 transition-transform duration-300 ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                    >
                                        ▾
                                    </span>
                                </div>
                            </button>

                            {/* 상세 내용 (아코디언) */}
                            <div
                                className={`overflow-hidden transition-all duration-400 ${
                                    isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                                }`}
                            >
                                <div className="px-6 pb-6 flex flex-col gap-5 border-t border-white/10 pt-4">
                                    {/* 개요 */}
                                    <div>
                                        <p className="text-[10px] tracking-widest text-blue-300/60 mb-1">프로젝트 개요</p>
                                        <p className="text-sm text-white/80 leading-relaxed">{item.overview}</p>
                                    </div>

                                    {/* 기여도 */}
                                    <div className="flex flex-col gap-2">
                                        <p className="text-[10px] tracking-widest text-blue-300/60">기여도</p>
                                        {item.contribution.map((c, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                {item.contribution.length > 1 && (
                                                    <span className="text-xs text-white/50 w-8 shrink-0">{c.label}</span>
                                                )}
                                                <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                                                    <div
                                                        className="h-full rounded-full bg-blue-400 shadow-[0_0_6px_#60a5fa]"
                                                        style={{ width: `${c.value}%` }}
                                                    />
                                                </div>
                                                <span className="text-xs text-blue-300 w-8 text-right shrink-0">{c.value}%</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* 섹션들 (담당업무/성과) */}
                                    {item.sections.map((section, idx) => (
                                        <div key={idx}>
                                            <p className="text-[10px] tracking-widest text-blue-300/60 mb-2">
                                                {section.label.toUpperCase()}
                                            </p>
                                            <ul className="flex flex-col gap-1.5">
                                                {section.items.map((text, i) => (
                                                    <li key={i} className="flex gap-2 text-sm text-white/75 leading-relaxed">
                                                        <span className="mt-[6px] w-1 h-1 rounded-full bg-blue-400 shrink-0" />
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
                })}
            </div>
        </div>
    );
};

export default Career;
