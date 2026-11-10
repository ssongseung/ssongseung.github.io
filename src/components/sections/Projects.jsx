import { useMemo, useState } from "react";
import { filterList, projectList } from "../../data/projectList";
import SectionHeading from "../SectionHeading";
import Filter from "../Project/Filter";
import ProjectCard from "../Project/ProjectCard";
import ProjectArchive from "../Project/ProjectArchive";
import { useReveal } from "../../hooks/useReveal";

const featuredProjects = projectList.filter((item) => item.featured);

const matchFilter = (item, filter) => filter === "전체" || item.tags.includes(filter);

const filterCounts = Object.fromEntries(
    filterList.map((filter) => [filter, projectList.filter((item) => matchFilter(item, filter)).length])
);

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("전체");
    const featuredRef = useReveal();
    const archiveHeadRef = useReveal();
    const archiveRef = useReveal({ threshold: 0.05 });

    const filteredProjects = useMemo(
        () => projectList.filter((item) => matchFilter(item, activeFilter)),
        [activeFilter]
    );

    return (
        <section id="project" className="py-24 md:py-32 border-t border-line">
            <div className="max-w-5xl mx-auto px-5 md:px-8">
                <SectionHeading
                    eyebrow="Project"
                    title="Selected Work"
                    description="React 기반으로 진행한 최근 대표 프로젝트입니다."
                />

                <div ref={featuredRef} className="reveal-stagger mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
                    {featuredProjects.map((item, index) => (
                        <div key={item.id} style={{ "--i": index }} className="h-full">
                            <ProjectCard index={index} {...item} />
                        </div>
                    ))}
                </div>

                <div
                    ref={archiveHeadRef}
                    className="reveal mt-24 mb-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
                >
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-ink">All Projects</h3>
                        <p className="mt-2 text-sm text-ink-soft">
                            2020년부터 참여한 구축·운영·프로모션 프로젝트를 한눈에 정리했습니다.
                        </p>
                    </div>
                    <Filter activeFilter={activeFilter} onClick={setActiveFilter} counts={filterCounts} />
                </div>

                {/* key로 필터 변경 시 리스트를 재마운트해 stagger 애니메이션 재생 */}
                <div ref={archiveRef} className="reveal">
                    <ProjectArchive key={activeFilter} items={filteredProjects} />
                </div>
            </div>
        </section>
    );
};

export default Projects;
