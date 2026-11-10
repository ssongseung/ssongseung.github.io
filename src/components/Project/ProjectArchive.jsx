import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../../hooks/useInteraction";

/**
 * 전체 프로젝트를 한 줄씩 보여주는 리스트.
 * 데스크탑에서는 행에 hover 하면 썸네일이 커서를 부드럽게(lerp) 따라다님.
 */
const ProjectArchive = ({ items }) => {
    const [activeId, setActiveId] = useState(null);
    const previewRef = useRef(null);
    const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
    const isActive = activeId !== null;

    // 미리보기가 떠 있을 때만 rAF 루프를 돌림
    useEffect(() => {
        if (!isActive) return;
        const ease = prefersReducedMotion() ? 1 : 0.14;
        let frame = 0;

        const loop = () => {
            const p = pos.current;
            p.x += (p.tx - p.x) * ease;
            p.y += (p.ty - p.y) * ease;
            if (previewRef.current) {
                previewRef.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%)`;
            }
            frame = requestAnimationFrame(loop);
        };

        frame = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(frame);
    }, [isActive]);

    const handleMouseMove = (e) => {
        pos.current.tx = e.clientX;
        pos.current.ty = e.clientY;
    };

    const handleMouseEnter = (e) => {
        // 처음 진입 시 (0,0)에서 날아오지 않도록 현재 위치로 스냅
        pos.current = { x: e.clientX, y: e.clientY, tx: e.clientX, ty: e.clientY };
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={() => setActiveId(null)}>
            <div className="hidden md:grid grid-cols-[3rem_1fr_10rem_8rem_1.5rem] gap-4 px-4 pb-3 text-[11px] tracking-widest uppercase text-ink-faint border-b border-ink">
                <span>No.</span>
                <span>Project</span>
                <span>Stack</span>
                <span>Period</span>
                <span />
            </div>

            <ul>
                {items.map((item, index) => {
                    const Row = item.url ? "a" : "div";
                    const linkProps = item.url ? { href: item.url, target: "_blank", rel: "noreferrer" } : {};

                    return (
                        <li
                            key={item.id}
                            className="fade-up border-b border-line"
                            style={{ "--i": Math.min(index, 8) * 0.6 }}
                            onMouseEnter={() => setActiveId(item.id)}
                        >
                            <Row
                                {...linkProps}
                                className={`archive-row group relative isolate grid grid-cols-[3.5rem_1fr_auto] md:grid-cols-[3rem_1fr_10rem_8rem_1.5rem] items-center gap-4 px-0 md:px-4 py-5 md:py-6 transition-colors duration-300 ${
                                    item.url ? "cursor-pointer" : "cursor-default"
                                }`}
                            >
                                {/* 모바일: 썸네일 / 데스크탑: 번호 */}
                                <img
                                    src={item.img}
                                    alt=""
                                    loading="lazy"
                                    className="md:hidden w-14 h-14 rounded-xl object-cover object-top bg-paper-soft"
                                />
                                <span className="hidden md:block font-mono text-xs text-ink-faint transition-colors duration-300 md:group-hover:text-paper/50">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <div className="min-w-0 flex flex-col gap-1">
                                    <span className="flex items-center gap-2 text-base md:text-xl font-semibold text-ink transition-[color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:text-paper md:group-hover:translate-x-2">
                                        <span className="truncate">{item.title}</span>
                                        <span className="hidden sm:flex gap-1">
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[10px] font-medium px-2 py-0.5 rounded-full border border-line text-ink-faint transition-colors md:group-hover:border-paper/20 md:group-hover:text-paper/60"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </span>
                                    </span>
                                    <span className="text-xs md:text-sm text-ink-soft line-clamp-1 transition-[color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:text-paper/60 md:group-hover:translate-x-2">
                                        {item.summary}
                                        <span className="md:hidden font-mono text-ink-faint"> · {item.period}</span>
                                    </span>
                                </div>

                                <span className="hidden md:block text-xs text-ink-soft transition-colors duration-300 md:group-hover:text-paper/70">
                                    {item.stack.slice(0, 2).join(" · ")}
                                </span>
                                <span className="hidden md:block font-mono text-xs text-ink-soft transition-colors duration-300 md:group-hover:text-paper/70">
                                    {item.period}
                                </span>
                                <span
                                    aria-hidden="true"
                                    className={`text-lg transition-[color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                        item.url
                                            ? "text-ink md:group-hover:text-paper md:group-hover:rotate-45"
                                            : "text-transparent"
                                    }`}
                                >
                                    ↗
                                </span>
                            </Row>
                        </li>
                    );
                })}
            </ul>

            {/* 커서 따라다니는 썸네일 미리보기 (hover 가능한 기기에서만) */}
            <div
                ref={previewRef}
                aria-hidden="true"
                className="cursor-preview pointer-events-none fixed left-0 top-0 z-40 w-72 aspect-[4/3]"
            >
                <div
                    className={`relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-paper-soft transition-[opacity,scale] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    }`}
                >
                    {items.map((item) => (
                        <img
                            key={item.id}
                            src={item.img}
                            alt=""
                            className={`absolute inset-0 w-full h-full object-cover object-top transition-[opacity,scale] duration-500 ${
                                activeId === item.id ? "opacity-100 scale-100" : "opacity-0 scale-110"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectArchive;
