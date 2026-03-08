import React from 'react';

const filterList = ['전체', '구축', '운영', '이벤트/프로모션'];

const Filter = ({onClick, activeFilter}) => {
  
  return (
    <div className='backdrop-blur-md bg-white/5 border border-white/10 rounded-full overflow-x-scroll md:overflow-visible no-scrollbar'>
      <div className='flex relative px-2 py-2 w-fit'>
        {filterList.map((filter) => (
          <button key={filter} onClick={() => onClick(filter)} className={`relative z-10 px-6 py-2 text-sm font-medium transition-colors duration-300 whitespace-nowrap ${activeFilter === filter ? 'text-white border rounded-[86px]' : 'text-white/50 hover:text-white/80'}`}>
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;