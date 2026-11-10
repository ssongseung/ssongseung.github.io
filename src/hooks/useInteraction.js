import { useEffect, useRef, useState } from "react";

const canHover = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;
export const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * 커서 쪽으로 살짝 끌려오는 마그네틱 버튼.
 * 리렌더 없이 style.transform만 직접 갱신.
 */
export const useMagnetic = (strength = 0.3) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el || !canHover() || prefersReducedMotion()) return;

        const handleMove = (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);
            el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        };
        const handleLeave = () => {
            el.style.transform = "";
        };

        el.addEventListener("mousemove", handleMove);
        el.addEventListener("mouseleave", handleLeave);
        return () => {
            el.removeEventListener("mousemove", handleMove);
            el.removeEventListener("mouseleave", handleLeave);
        };
    }, [strength]);

    return ref;
};

/**
 * 마우스 위치에 따라 3D로 기울어지는 틸트 카드. 글레어 위치는 CSS 변수로 전달.
 */
export const useTilt = (max = 8) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el || !canHover() || prefersReducedMotion()) return;

        let frame = 0;
        const handleMove = (e) => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                const rect = el.getBoundingClientRect();
                const px = (e.clientX - rect.left) / rect.width;
                const py = (e.clientY - rect.top) / rect.height;
                el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max}deg)`;
                el.style.setProperty("--gx", `${px * 100}%`);
                el.style.setProperty("--gy", `${py * 100}%`);
            });
        };
        const handleLeave = () => {
            cancelAnimationFrame(frame);
            el.style.transform = "";
        };

        el.addEventListener("mousemove", handleMove);
        el.addEventListener("mouseleave", handleLeave);
        return () => {
            cancelAnimationFrame(frame);
            el.removeEventListener("mousemove", handleMove);
            el.removeEventListener("mouseleave", handleLeave);
        };
    }, [max]);

    return ref;
};

/**
 * 그룹 안의 .spotlight-card 들에 마우스 좌표(--x, --y)를 전달.
 * 카드 하나가 아니라 그룹 전체에서 계산하므로 카드 사이를 지나갈 때도 빛이 이어짐.
 */
export const useSpotlight = () => {
    const ref = useRef(null);

    useEffect(() => {
        const group = ref.current;
        if (!group || !canHover()) return;

        const handleMove = (e) => {
            group.querySelectorAll(".spotlight-card").forEach((card) => {
                const rect = card.getBoundingClientRect();
                card.style.setProperty("--x", `${e.clientX - rect.left}px`);
                card.style.setProperty("--y", `${e.clientY - rect.top}px`);
            });
        };

        group.addEventListener("mousemove", handleMove);
        return () => group.removeEventListener("mousemove", handleMove);
    }, []);

    return ref;
};

/**
 * 뷰포트에 들어오면 0 → target 까지 easeOutExpo로 카운트업.
 */
export const useCountUp = (target, duration = 1600) => {
    const ref = useRef(null);
    const [value, setValue] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let frame = 0;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                observer.disconnect();

                if (prefersReducedMotion()) {
                    setValue(target);
                    return;
                }

                const start = performance.now();
                const tick = (now) => {
                    const t = Math.min((now - start) / duration, 1);
                    const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
                    setValue(Math.round(target * eased));
                    if (t < 1) frame = requestAnimationFrame(tick);
                };
                frame = requestAnimationFrame(tick);
            },
            { threshold: 0.5 }
        );

        observer.observe(el);
        return () => {
            observer.disconnect();
            cancelAnimationFrame(frame);
        };
    }, [target, duration]);

    return [ref, value];
};

/**
 * 단어 목록을 타이핑 → 지우기 반복.
 */
export const useTypewriter = (words, { typeSpeed = 80, deleteSpeed = 40, pause = 1600 } = {}) => {
    const [text, setText] = useState("");

    useEffect(() => {
        if (prefersReducedMotion()) {
            const timer = setTimeout(() => setText(words[0]), 0);
            return () => clearTimeout(timer);
        }

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;
        let timer;

        const tick = () => {
            const word = words[wordIndex];
            charIndex += deleting ? -1 : 1;
            setText(word.slice(0, charIndex));

            let delay = deleting ? deleteSpeed : typeSpeed;
            if (!deleting && charIndex === word.length) {
                deleting = true;
                delay = pause;
            } else if (deleting && charIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                delay = 300;
            }
            timer = setTimeout(tick, delay);
        };

        timer = setTimeout(tick, 1200);
        return () => clearTimeout(timer);
    }, [words, typeSpeed, deleteSpeed, pause]);

    return text;
};
