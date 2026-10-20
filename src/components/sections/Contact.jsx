import { useReveal } from "../../hooks/useReveal";

const contactLinks = [
    { label: "Email", value: "holic7766@gmail.com", href: "mailto:holic7766@gmail.com" },
    // { label: "GitHub", value: "ssongseung", href: "https://github.com/ssongseung" },
];

const Contact = () => {
    const ref = useReveal();

    return (
        <section id="contact" className="py-24 border-t border-line">
            <div ref={ref} className="reveal max-w-5xl mx-auto px-5 md:px-8 text-center">
                <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase mb-4">Contact</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-6">
                    함께 만들고 싶은 일이 있다면
                </h2>
                <p className="text-base text-ink-soft leading-relaxed mb-10">
                    편하게 연락 주세요. 빠르게 답변 드리겠습니다.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    {contactLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                            className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-line text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                        >
                            <span className="text-ink-faint">{link.label}</span>
                            {link.value}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
