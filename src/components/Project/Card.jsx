import React, { useRef, useState  } from 'react';

const Card = ({ type, front, back }) => {
  const tiltRef = useRef(null);
   const [isFlipped, setIsFlipped] = useState(false);

  const colorData = {
    white: "bg-white border-[#a3a3a3]",
    blue: "bg-[#0a75e9] border-[#177de4]",
    mint: "bg-[#d9ebfe] border-[#a3a3a3]",
  };

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleMouseMove = (e) => {
    if (isFlipped) return; // 뒤집힌 상태에선 tilt 중단

    const card = tiltRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (y / rect.height) * 15;
    const rotateY = (x / rect.width) * -15;

    card.style.transition = "transform 0.05s linear";
    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.04)
    `;
  };

  const handleMouseLeave = () => {
    const card = tiltRef.current;

    card.style.transition = "transform 0.5s cubic-bezier(.23,1,.32,1)";
    card.style.transform = `
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <div className="w-[220px] h-[329px] perspective-[900px]">
      <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? "rotate-y-180" : ""}`}>
        {/* tilt 레이어 */}
        <div ref={tiltRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={`w-full h-full rounded-[19px] border p-2 flex flex-col justify-between ${colorData[type]} backface-hidden transform-gpu`}>
          {front(handleFlip)}
        </div>

        {/* back */}
        <div className={`absolute inset-0 rounded-[19px] border p-2 flex flex-col justify-between ${colorData[type]} rotate-y-180 backface-hidden`}>
          {back(handleFlip)}
        </div>
      </div>
    </div>
  );
};

export default Card;