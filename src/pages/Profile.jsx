
import { useState, useCallback  } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { profileList } from '../data/profileList';

const Profile = () => {
  const isPC = useBreakpoint(1024); 
  
  const handleMouseMove = useCallback((e) => {
    if (!isPC) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  }, [isPC]);

  const handleMouseLeave = useCallback((e) => {
    if (!isPC) return;
    const card = e.currentTarget;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  }, [isPC]);

  return (
    <div className="flex-1 flex items-center justify-center h-full px-[20px] md:px-0 md:overflow-y-scroll">
      <div className="flex gap-[20px] perspective-[1200px] flex-col lg:flex-row md:gap-[60px] md:mt-[300px] lg:md:mt-0">
        {profileList.map((item, index) => {
          return (
            <div
              key={index}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full h-[380px] rounded-[28px] p-[2px] transition-transform duration-200 brightness-110 transform-gpu will-change-transform md:w-full md:h-full lg:h-[480px] overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* 네온 테두리 */}
              <div className="absolute inset-0 rounded-[28px] pointer-events-none">
                <div className="absolute inset-0 rounded-[28px] border border-blue-400/40" />
                <div className="absolute inset-0 rounded-[28px] border border-blue-400/30 blur-[4px]" />
                <div className="absolute inset-0 rounded-[28px] border border-blue-500/20 blur-[10px]" />
              </div>

              {/* 바닥 반사 */}
              <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[70%] h-[60px] bg-blue-500/20 blur-[40px] opacity-60" />

              {/* 카드 본체 */}
              <div className="relative w-full h-full rounded-[26px] bg-white/10 backdrop-blur-xl border border-white/20 p-8 flex flex-col gap-6 overflow-hidden">

                {/* light sweep */}
                <div className="absolute inset-0 overflow-hidden rounded-[26px]">
                  <div className="absolute top-[-50%] left-[-30%] w-[200%] h-[200%] bg-gradient-to-br from-white/10 via-transparent to-transparent rotate-12 opacity-30" />
                </div>

                <div className="text-xs tracking-widest text-blue-300 opacity-70">
                  PROFILE
                </div>

                <div>
                  <h2
                    className="text-xl font-bold mb-6 leading-snug tracking-tight drop-shadow-[0_0_10px_rgba(96,165,250,0.6)]"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p
                    className="text-sm leading-relaxed opacity-80"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;