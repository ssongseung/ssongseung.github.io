import { profile } from "../../data/profileList";
import SectionHeading from "../SectionHeading";
import { useReveal } from "../../hooks/useReveal";

const About = () => {
    const listRef = useReveal();

    return (
        <section id="about" className="py-24 border-t border-line">
            <div className="max-w-5xl mx-auto px-5 md:px-8">
                <SectionHeading
                    eyebrow="About"
                    title="Skills"
                    description="아래 기술들을 중심으로 데이터 흐름과 컴포넌트 구조를 고려한 프론트엔드 개발을 하고 있습니다."
                />

                <ul ref={listRef} className="reveal mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {profile.skills.map((skill) => (
                        <li
                            key={skill}
                            className="flex items-start gap-3 rounded-2xl border border-line bg-white px-5 py-4 text-sm text-ink-soft leading-relaxed"
                        >
                            <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default About;
