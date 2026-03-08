import React from 'react';

const Background = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a3a] via-[#0d1f4d] to-black" />
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-blue-500/20 blur-[120px]" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px]" />
    </div>
  );
};

export default Background;