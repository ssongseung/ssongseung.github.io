import { useEffect, useRef } from "react";

import { filterList } from "../../data/projectList";

/**
 * 활성 탭 아래로 배경 pill이 미끄러지듯 이동하는 필터.
 */
const Filter = ({ activeFilter, onClick, counts }) => {
    const buttonRefs = useRef({});
    const indicatorRef = useRef(null);

    useEffect(() => {
        const move = () => {
            const button = buttonRefs.current[activeFilter];
            const indicator = indicatorRef.current;
            if (!button || !indicator) return;
            indicator.style.width = `${button.offsetWidth}px`;
            indicator.style.transform = `translateX(${button.offsetLeft}px)`;
        };

        move();
        window.addEventListener("resize", move);
        return () => window.removeEventListener("resize", move);
    }, [activeFilter]);

    return (
        <div
            role="tablist"
            aria-label="프로젝트 유형 필터"
            className="relative inline-flex max-w-full overflow-x-auto no-scrollbar p-1 rounded-full border border-line bg-white"
        >
            <span
                ref={indicatorRef}
                aria-hidden="true"
                className="absolute left-0 top-1 bottom-1 rounded-full bg-ink transition-[transform,width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
            {filterList.map((filter) => {
                const isActive = activeFilter === filter;
                return (
                    <button
                        key={filter}
                        ref={(node) => {
                            buttonRefs.current[filter] = node;
                        }}
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => onClick(filter)}
                        className={`relative z-10 h-9 px-4 shrink-0 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                            isActive ? "text-paper" : "text-ink-soft hover:text-ink"
                        }`}
                    >
                        {filter}
                        <sup className={`ml-1 font-mono text-[10px] ${isActive ? "text-paper/60" : "text-ink-faint"}`}>
                            {counts[filter]}
                        </sup>
                    </button>
                );
            })}
        </div>
    );
};

export default Filter;
