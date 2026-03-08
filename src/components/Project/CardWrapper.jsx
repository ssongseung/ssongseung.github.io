import React from 'react';

import CardItem from './CardItem';

const cardData = [
  {
    id: 1,
    top: 'top-1/2',
    left: 'left-0',
    items: [
      { date: '12.21', tags: ['Event', 'Event'], title: 'Cosmetic Packaging', type: "white", btnColor: "whiteA" },
    ],
  },
  {
    id: 2,
    top: 'top-[60%]',
    left: 'left-60',
    items: [
      { date: '12.21', tags: ['Event', 'Event'], title: 'Rocket Launcher Toy ', type: "blue", btnColor: "blueA" },
    ],
  },
  {
    id: 3,
    top: 'top-[50%]',
    left: 'left-120',
    items: [
      { date: '12.21', tags: ['Event', 'Event'], title: 'My Adoable Friends', type: "mint", btnColor: "blueA" },
      { date: '12.21', tags: ['Event', 'Event'], title: 'Let Play Together', type: "white", btnColor: "whiteB" },
    ],
  },
  {
    id: 4,
    top: 'top-[35%]',
    left: 'left-180',
    items: [
      { date: '12.21', tags: ['Event', 'Event'], title: 'My Adoable Friends', type: "blue", btnColor: "blueA" },
      { date: '12.21', tags: ['Event', 'Event'], title: 'Let Play Together', type: "mint", btnColor: "mintA" },
    ],
  },
];

const CardWrapper = () => {
  return (
    <div className='w-full h-full ml-50 relative'>
      <ul>
        {cardData.map((group) => (
          <li
            key={group.id}
            className={`absolute ${group.top} ${group.left} -translate-y-1/2 flex flex-col gap-4`}
          >
            {group.items.map((item, idx) => (
              <CardItem key={idx} {...item} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardWrapper;