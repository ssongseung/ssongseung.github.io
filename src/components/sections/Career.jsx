import { useEffect, useRef } from "react";
import { careerList } from "../../data/careerList";
import SectionHeading from "../SectionHeading";
import CareerItem from "../CareerItem";

// 최신순 노출
const sortedCareer = [...careerList].reverse();

const Career = () => {
    const listRef = useRef(null);
    const fillRef = useRef(null);

    // 스크롤 위치에 따라 타임라인 라인이 채워지는 인터랙션
    useEffect(() => {
        const list = listRef.current;
        const fill = fillRef.current;
        if (!list || !fill) return;

        let frame = 0;
        const update = () => {
            const rect = list.getBoundingClientRect();
            const anchor = window.innerHeight * 0.6;
            const progress = Math.min(Math.max((anchor - rect.top) / rect.height, 0), 1);
            fill.style.transform = `scaleY(${progress})`;
        };
        const handleScroll = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <section id="career" className="py-24 md:py-32 border-t border-line">
            <div className="max-w-5xl mx-auto px-5 md:px-8">
                <SectionHeading
                    eyebrow="Career"
                    title="경력"
                    description="구축부터 운영까지, 맡았던 프로젝트들의 역할과 성과를 정리했습니다. 항목을 눌러 상세 내용을 확인할 수 있습니다."
                />

                <div ref={listRef} className="relative mt-12 pl-8 md:pl-12">
                    <span aria-hidden="true" className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-[2px] bg-line" />
                    <span
                        ref={fillRef}
                        aria-hidden="true"
                        className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-[2px] bg-accent origin-top scale-y-0"
                    />

                    <ol className="flex flex-col gap-4">
                        {sortedCareer.map((item, index) => (
                            <CareerItem key={item.id} item={item} defaultOpen={index === 0} />
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default Career;
