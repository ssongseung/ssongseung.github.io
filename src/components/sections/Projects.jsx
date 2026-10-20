import { useMemo, useState } from "react";
import { projectList } from "../../data/projectList";
import SectionHeading from "../SectionHeading";
import Filter from "../Project/Filter";
import ProjectCard from "../Project/ProjectCard";

const allProjects = projectList.flatMap((group) => group.items);

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("전체");

    const filteredProjects = useMemo(() => {
        if (activeFilter === "전체") return allProjects;
        return allProjects.filter((item) => item.tags.some((tag) => tag.includes(activeFilter)));
    }, [activeFilter]);

    return (
        <section id="project" className="py-24 border-t border-line">
            <div className="max-w-5xl mx-auto px-5 md:px-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <SectionHeading
                        eyebrow="Project"
                        title="프로젝트"
                        description="구축, 운영, 이벤트/프로모션 등 다양한 유형의 프로젝트를 진행했습니다."
                    />
                    <Filter activeFilter={activeFilter} onClick={setActiveFilter} />
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((item, index) => (
                        <ProjectCard key={`${item.title}-${index}`} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
