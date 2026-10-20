import { profile } from "../../data/profileList";
import { useReveal } from "../../hooks/useReveal";

const handleScrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Hero = () => {
    const ref = useReveal();

    return (
        <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center">
            <div className="max-w-5xl mx-auto w-full px-5 md:px-8 py-20">
                <div ref={ref} className="reveal">
                    <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase mb-5">Portfolio</p>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-ink mb-6">
                        {profile.roleLines.map((line) => (
                            <span key={line} className="block">
                                {line}
                            </span>
                        ))}
                    </h1>
                    <p className="text-base md:text-lg text-ink-soft leading-relaxed max-w-xl mb-10">
                        {profile.intro}
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                        <a
                            href="#project"
                            onClick={(e) => handleScrollTo(e, "project")}
                            className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-ink text-paper text-sm font-semibold transition-colors hover:bg-accent"
                        >
                            프로젝트 보기
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleScrollTo(e, "contact")}
                            className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-line text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                        >
                            연락하기
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
