import { useTilt } from "../../hooks/useInteraction";
import Tag from "./Tag";

/**
 * Selected Work 대표 프로젝트 카드 (3D 틸트 + 글레어)
 */
const ProjectCard = ({ index, title, period, tags, summary, stack, contribution, url, img }) => {
    const tiltRef = useTilt(6);
    const Wrapper = url ? "a" : "div";
    const linkProps = url ? { href: url, target: "_blank", rel: "noreferrer" } : {};

    return (
        <Wrapper {...linkProps} className="group block h-full [perspective:900px]">
            <article
                ref={tiltRef}
                className="relative h-full flex flex-col rounded-3xl border border-line bg-white overflow-hidden transition-[transform,box-shadow] duration-300 ease-out will-change-transform group-hover:shadow-[0_24px_60px_-20px_rgba(22,22,26,0.25)]"
            >
                <div className="relative aspect-[4/3] overflow-hidden bg-paper-soft">
                    <img
                        src={img}
                        alt={`${title} 썸네일`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                    />
                    <div aria-hidden="true" className="tilt-glare absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="absolute top-4 left-4 font-mono text-xs font-medium px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-ink">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    {url && (
                        <span
                            aria-hidden="true"
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-ink text-paper flex items-center justify-center text-sm scale-0 rotate-[-45deg] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100 group-hover:rotate-0"
                        >
                            ↗
                        </span>
                    )}
                </div>

                <div className="p-6 flex flex-1 flex-col gap-3">
                    <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs text-ink-faint">{period}</span>
                        <div className="flex gap-1.5">
                            {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                            ))}
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-ink leading-snug transition-colors group-hover:text-accent">
                        {title}
                    </h3>
                    <p className="text-sm text-ink-soft leading-relaxed">{summary}</p>

                    <div className="flex items-center justify-between gap-2 text-xs pt-3 mt-auto border-t border-line">
                        <span className="text-ink-faint">{stack.join(" · ")}</span>
                        <span className="font-medium text-accent shrink-0">{contribution}</span>
                    </div>
                </div>
            </article>
        </Wrapper>
    );
};

export default ProjectCard;
