import { useEffect, useState } from "react";

/**
 * 뷰포트 중앙 부근에 걸린 섹션의 id를 추적해서 Nav 활성 표시에 사용.
 */
export const useActiveSection = (ids) => {
    const [activeId, setActiveId] = useState(ids[0]);

    useEffect(() => {
        const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visible) setActiveId(visible.target.id);
            },
            { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [ids]);

    return activeId;
};
