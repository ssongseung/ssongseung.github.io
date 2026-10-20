import { useReveal } from "../../hooks/useReveal";
import Tag from "./Tag";

const stripBreaks = (text) => text.replace(/<br\s*\/?>/gi, " ");

const ProjectCard = ({ date, tags, title, url, img, role, skill, contribution }) => {
    const ref = useReveal();

    return (
        <article
            ref={ref}
            className="reveal group rounded-2xl border border-line bg-white overflow-hidden transition-shadow hover:shadow-lg"
        >
            <div className="aspect-[4/3] overflow-hidden bg-paper-soft">
                <img
                    src={img}
                    alt={`${stripBreaks(title)} 썸네일`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-ink-faint">{date}</span>
                    <div className="flex gap-1.5">
                        {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                        ))}
                    </div>
                </div>

                <h3 className="text-lg font-bold text-ink leading-snug">{stripBreaks(title)}</h3>

                <p className="text-sm text-ink-soft leading-relaxed">{role}</p>

                <div className="flex items-center justify-between text-xs text-ink-faint pt-2 border-t border-line">
                    <span>{skill}</span>
                    <span className="font-medium text-accent">{contribution}</span>
                </div>

                {url && (
                    <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-ink hover:text-accent transition-colors"
                    >
                        사이트 보기 <span aria-hidden="true">↗</span>
                    </a>
                )}
            </div>
        </article>
    );
};

export default ProjectCard;
