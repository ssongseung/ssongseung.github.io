import { useRef } from "react";
import { profile } from "../../data/profileList";
import { useCountUp, useMagnetic, useTypewriter } from "../../hooks/useInteraction";

const handleScrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Stat = ({ value, suffix, label }) => {
    const [ref, count] = useCountUp(value);

    return (
        <div ref={ref} className="flex flex-col gap-1">
            <span className="text-3xl md:text-4xl font-bold tracking-tight text-ink tabular-nums">
                {count}
                <span className="text-accent">{suffix}</span>
            </span>
            <span className="text-xs md:text-sm text-ink-faint">{label}</span>
        </div>
    );
};

const Hero = () => {
    const sectionRef = useRef(null);
    const typed = useTypewriter(profile.keywords);
    const primaryRef = useMagnetic(0.25);
    const secondaryRef = useMagnetic(0.25);

    // 리렌더 없이 CSS 변수만 갱신해서 스포트라이트를 이동
    const handleMouseMove = (e) => {
        const el = sectionRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    return (
        <section
            id="home"
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-[calc(100svh-4rem)] flex items-center overflow-hidden"
        >
            <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-70" />
            <div aria-hidden="true" className="hero-spotlight absolute inset-0" />

            <div className="relative max-w-5xl mx-auto w-full px-5 md:px-8 py-20">
                <p
                    className="fade-up inline-flex items-center gap-2 h-8 px-3 rounded-full border border-line bg-white/70 backdrop-blur text-xs font-medium text-ink-soft mb-8"
                    style={{ "--i": 0 }}
                >
                    <span className="relative flex w-2 h-2">
                        <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
                        <span className="relative w-2 h-2 rounded-full bg-accent" />
                    </span>
                    Publisher 5yrs → Frontend Developer
                </p>

                <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-ink mb-6">
                    {profile.roleLines.map((line, index) => (
                        <span key={line} className="line-mask" style={{ "--i": index }}>
                            <span>
                                {index === profile.roleLines.length - 1 ? (
                                    <>
                                        {line}
                                        <span className="text-accent">.</span>
                                    </>
                                ) : (
                                    line
                                )}
                            </span>
                        </span>
                    ))}
                </h1>

                <p
                    className="fade-up font-mono text-sm md:text-base text-ink-soft mb-6 h-6"
                    style={{ "--i": 3 }}
                    aria-label={profile.keywords.join(", ")}
                >
                    <span className="text-accent">&gt;</span> {typed}
                    <span className="caret inline-block w-[2px] h-[1.1em] bg-accent align-middle ml-0.5" />
                </p>

                <p
                    className="fade-up text-base md:text-lg text-ink-soft leading-relaxed max-w-xl mb-10"
                    style={{ "--i": 4 }}
                >
                    {profile.intro}
                </p>

                <div className="fade-up flex flex-wrap items-center gap-3" style={{ "--i": 5 }}>
                    <a
                        ref={primaryRef}
                        href="#project"
                        onClick={(e) => handleScrollTo(e, "project")}
                        className="group inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-ink text-paper text-sm font-semibold transition-[background-color,transform] duration-300 ease-out hover:bg-accent"
                    >
                        프로젝트 보기
                        <span className="transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true">
                            ↓
                        </span>
                    </a>
                    <a
                        ref={secondaryRef}
                        href="#contact"
                        onClick={(e) => handleScrollTo(e, "contact")}
                        className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-line bg-white/60 backdrop-blur text-sm font-semibold text-ink transition-[color,border-color,transform] duration-300 ease-out hover:border-accent hover:text-accent"
                    >
                        연락하기
                    </a>
                </div>

                <div
                    className="fade-up mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-line max-w-3xl"
                    style={{ "--i": 6 }}
                >
                    {profile.stats.map((stat) => (
                        <Stat key={stat.label} {...stat} />
                    ))}
                </div>
            </div>

            <a
                href="#about"
                onClick={(e) => handleScrollTo(e, "about")}
                aria-label="아래로 스크롤"
                className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border-2 border-ink-faint/50 justify-center pt-2"
            >
                <span className="scroll-dot w-1 h-2 rounded-full bg-ink-faint" />
            </a>
        </section>
    );
};

export default Hero;
