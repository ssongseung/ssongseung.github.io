import { profile } from "../../data/profileList";
import SectionHeading from "../SectionHeading";
import { useReveal } from "../../hooks/useReveal";
import { useSpotlight } from "../../hooks/useInteraction";

const About = () => {
    const revealRef = useReveal();
    const spotlightRef = useSpotlight();

    const setRefs = (node) => {
        revealRef.current = node;
        spotlightRef.current = node;
    };

    return (
        <section id="about" className="py-24 md:py-32">
            <div className="max-w-5xl mx-auto px-5 md:px-8">
                <SectionHeading
                    eyebrow="About"
                    title="Skills"
                    description="퍼블리싱에서 다져온 마크업 품질 위에, 데이터 흐름과 컴포넌트 구조를 고려한 프론트엔드 개발을 하고 있습니다."
                />

                <ul
                    ref={setRefs}
                    className="reveal-stagger spotlight-group mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
                >
                    {profile.skills.map((skill, index) => (
                        <li
                            key={skill.title}
                            style={{ "--i": index }}
                            className="spotlight-card group rounded-2xl border border-line bg-white p-6 flex flex-col gap-3 min-h-[160px]"
                        >
                            <span className="font-mono text-xs text-ink-faint transition-colors group-hover:text-accent">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <h3 className="text-lg font-bold text-ink">{skill.title}</h3>
                            <p className="text-sm text-ink-soft leading-relaxed">{skill.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default About;
