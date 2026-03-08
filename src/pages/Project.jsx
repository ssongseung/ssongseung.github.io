import { useState } from 'react';
import { projectList } from '../data/projectList';
import Filter from '../components/Project/Filter';
import List from '../components/Project/List';

// Import Swiper styles
import 'swiper/css';

const Project = () => { 
  const [activeFilter, setActiveFilter] = useState('전체');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredItems = activeFilter === '전체' ? projectList : projectList.map(group => ({...group, items: group.items.filter(item => item.tags.includes(activeFilter))})).filter(group => group.items.length > 0);

  return (
    <>
      <div className='relative top-1/2 left-1/2 -translate-x-1/2 z-10 w-[90%] md:absolute md:top-[4%] md:left-0 md:translate-x-0 md:w-auto '>
        <Filter onClick={handleFilterClick} activeFilter={activeFilter} />
      </div>
      <List filteredItems={filteredItems} activeFilter={activeFilter} />
    </>
  );
};

export default Project;