import { useEffect, useRef, useState } from "react";
import { useReveal } from "../../hooks/useReveal";
import { useMagnetic } from "../../hooks/useInteraction";

const EMAIL = "holic7766@gmail.com";

const Contact = () => {
    const ref = useReveal();
    const mailRef = useMagnetic(0.2);
    const [copied, setCopied] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => () => clearTimeout(timerRef.current), []);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${EMAIL}`;
        }
    };

    return (
        <section id="contact" className="relative overflow-hidden bg-sand text-ink border-t border-line py-28 md:py-40">
            <div
                aria-hidden="true"
                className="absolute -top-40 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-white/70 blur-[120px]"
            />

            <div ref={ref} className="reveal relative max-w-5xl mx-auto px-5 md:px-8 text-center">
                <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase mb-6">Contact</p>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                    함께 만들고 싶은
                    <br />
                    일이 있다면<span className="text-accent">.</span>
                </h2>
                <p className="text-base text-ink-soft leading-relaxed mb-12">편하게 연락 주세요. 빠르게 답변 드리겠습니다.</p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                        ref={mailRef}
                        href={`mailto:${EMAIL}`}
                        className="group inline-flex items-center gap-3 h-14 px-7 rounded-full bg-ink text-paper text-base font-semibold transition-[background-color,color,transform] duration-300 ease-out hover:bg-accent hover:text-paper"
                    >
                        {EMAIL}
                        <span
                            aria-hidden="true"
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        >
                            ↗
                        </span>
                    </a>
                    <button
                        type="button"
                        onClick={handleCopy}
                        className="inline-flex items-center gap-2 h-14 px-6 rounded-full border border-ink/15 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                    >
                        {copied ? "✓ 복사됨" : "이메일 복사"}
                    </button>
                </div>
            </div>

            {copied && (
                <div
                    role="status"
                    className="toast fixed bottom-8 left-1/2 z-50 px-5 py-3 rounded-full bg-ink text-paper text-sm font-medium shadow-xl"
                >
                    이메일 주소가 복사되었습니다
                </div>
            )}
        </section>
    );
};

export default Contact;
