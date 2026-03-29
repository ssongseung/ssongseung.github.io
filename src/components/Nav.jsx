import React from 'react';
import { Link, useLocation  } from "react-router-dom";

const data = [
  {text: 'PROFILE', link: "/"},
  {text: 'PROJECT', link: "/project"},
  {text: 'CAREER', link: "/career"},
]
const Nav = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav className="relative w-full h-[200px] flex items-center md:w-[260px] md:h-full">
      <div className="relative w-full h-[50%]  md:h-[80%] mr-10 ml-10 rounded-[28px] bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden md:mr-0">

        {/* 오른쪽 네온 라인 */}
        <div className="absolute right-0 bottom-0 w-full h-[2px] md:top-0 md:w-[2px] md:h-full ">
          <div className="absolute inset-0 bg-blue-400" />
          <div className="absolute inset-0 blur-[8px] bg-blue-400 opacity-80" />
          <div className="absolute inset-0 blur-[20px] bg-blue-500 opacity-60" />
        </div>

        {/* 하단 glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[80px] bg-blue-500/20 blur-[50px]" />

        <ul className="h-full flex flex-row items-center justify-center pl-12 pr-12 gap-8 relative z-10 md:flex-col md:items-start md:pr-0">
          {data.map((item, index) => {
            const isActive = pathname === item.link;

            return (
              <li key={index}>
                <Link
                  to={item.link}
                  className={`relative text-lg tracking-wide transition md:pl-4 ${
                    isActive ? "text-white" : "text-white/60"
                  }`}
                >
                  {/* active bar */}
                  <span
                    className={`absolute left-0 -bottom-1.5 w-full h-[3px] rounded-full transition-all duration-300 md:top-1/2 md:-translate-y-1/2 md:w-[3px] md:h-6 ${
                      isActive
                        ? "bg-blue-400 shadow-[0_0_12px_#60a5fa]"
                        : "bg-transparent"
                    }`}
                  />

                  {/* glow */}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1.5 w-full h-[10px] bg-blue-400/40 blur-[10px] md:top-1/2 md:-translate-y-1/2 md:w-[10px] md:h-10" />
                  )}
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;