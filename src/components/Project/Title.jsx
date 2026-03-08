import React from 'react';

const Title = ({title, type}) => {
  const colorData = {
    white: "text-[#0a75e9]",
    blue: "text-[#fff]",
    mint: "text-[#0a75e9]",
  };

  return (
    <p className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${colorData[type]} text-[33px] font-bold text-center opacity-50 `}>
      {title}
    </p>
  );
};

export default Title;