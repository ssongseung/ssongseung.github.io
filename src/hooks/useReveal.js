import { useEffect, useRef } from "react";

/**
 * 스크롤에 들어오면 .is-visible 클래스를 붙여 fade-up 되는 reveal 훅.
 * 반환된 ref를 reveal 시키고 싶은 엘리먼트에 꽂아주면 됨.
 * (.reveal 또는 .reveal-stagger 클래스와 함께 사용)
 */
export const useReveal = ({ threshold = 0.15, rootMargin = "0px 0px -10% 0px" } = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("is-visible");
                    observer.disconnect();
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return ref;
};
