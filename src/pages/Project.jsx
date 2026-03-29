import { useState } from "react";
import { projectList } from "../data/projectList";
import Filter from "../components/Project/Filter";
import List from "../components/Project/List";

// Import Swiper styles
import "swiper/css";

const Project = () => {
    const [activeFilter, setActiveFilter] = useState("전체");
    const [resetFlip, setResetFlip] = useState(0);

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
        setResetFlip((prev) => prev + 1);
    };

    const filteredItems =
        activeFilter === "전체"
            ? projectList
            : projectList
                  .map((group) => ({ ...group, items: group.items.filter((item) => item.tags.includes(activeFilter)) }))
                  .filter((group) => group.items.length > 0);

    return (
        <>
            <div className="relative top-1/2 left-1/2 -translate-x-1/2 z-10 w-[90%] md:absolute md:top-0 md:left-[2%] md:translate-x-0 md:w-auto lg:top-[4%]">
                <Filter onClick={handleFilterClick} activeFilter={activeFilter} />
            </div>
            <List filteredItems={filteredItems} activeFilter={activeFilter} resetFlip={resetFlip} />
        </>
    );
};

export default Project;
