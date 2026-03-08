import React from 'react';

const TagList = () => {
  return (
    <ul className='flex flex-col gap-[4px]'>
      <li>
        <Tag color="blue" text="12.21" />
      </li>
      <li className='flex'>
        <Tag color="white" text="Event" />
        <Tag color="white" text="Event" />
      </li>
    </ul>
  );
};

export default TagList;