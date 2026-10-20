import { useReveal } from "../hooks/useReveal";

const SectionHeading = ({ eyebrow, title, description }) => {
    const ref = useReveal();

    return (
        <div ref={ref} className="reveal max-w-2xl">
            <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase mb-3">{eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-4">{title}</h2>
            {description && <p className="text-base text-ink-soft leading-relaxed">{description}</p>}
        </div>
    );
};

export default SectionHeading;
