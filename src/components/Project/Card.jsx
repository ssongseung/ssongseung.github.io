import React, { useRef, useState, useEffect } from "react";

const Card = ({ type, front, back, resetFlip }) => {
    const tiltRef = useRef(null);
    const backRef = useRef(null);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        setIsFlipped(false);
    }, [resetFlip]);

    const colorData = {
        white: {
            card: "bg-gradient-to-br from-white/10 to-white/5 border-white/20",
            neon: "border-white/30",
            glow: "bg-white/15",
            sweep: "from-white/20 via-white/5",
        },
        blue: {
            card: "bg-gradient-to-br from-blue-500/20 to-blue-900/10 border-blue-400/30",
            neon: "border-blue-400/50",
            glow: "bg-blue-400/20",
            sweep: "from-blue-300/15 via-blue-400/5",
        },
        mint: {
            card: "bg-gradient-to-br from-cyan-400/15 to-teal-900/10 border-cyan-300/25",
            neon: "border-cyan-300/40",
            glow: "bg-cyan-400/15",
            sweep: "from-cyan-200/15 via-cyan-400/5",
        },
    };

    const c = colorData[type];

    const handleFlip = () => {
        setIsFlipped((prev) => !prev);
    };

    const handleMouseMove = (e) => {
        if (isFlipped) return;

        const card = tiltRef.current;
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const rotateX = (y / rect.height) * 14;
        const rotateY = (x / rect.width) * -14;

        card.style.transition = "transform 0.05s linear";
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    };

    const handleMouseLeave = () => {
        const card = tiltRef.current;
        card.style.transition = "transform 0.5s cubic-bezier(.23,1,.32,1)";
        card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    };

    return (
        <div className="w-[220px] h-[329px] perspective-[900px]">
            <div
                className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
                    isFlipped ? "rotate-y-180" : ""
                }`}
            >
                {/* ── Front ── */}
                <div
                    ref={tiltRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={`relative w-full h-full rounded-[20px] border backdrop-blur-xl overflow-hidden backface-hidden transform-gpu ${c.card}`}
                >
                    {/* 네온 테두리 레이어 */}
                    <div className="absolute inset-0 rounded-[20px] pointer-events-none">
                        <div className={`absolute inset-0 rounded-[20px] border ${c.neon}`} />
                        <div className={`absolute inset-0 rounded-[20px] border ${c.neon} blur-[6px] opacity-60`} />
                    </div>

                    {/* 라이트 스윕 */}
                    <div className="absolute inset-0 overflow-hidden rounded-[20px] pointer-events-none">
                        <div className={`absolute top-[-60%] left-[-20%] w-[160%] h-[160%] bg-gradient-to-br ${c.sweep} to-transparent rotate-[20deg] opacity-60`} />
                    </div>

                    {/* 하단 glow */}
                    <div className={`absolute bottom-[-16px] left-1/2 -translate-x-1/2 w-[55%] h-[40px] blur-[30px] opacity-50 ${c.glow}`} />

                    {/* 콘텐츠 */}
                    <div className="relative z-10 w-full h-full p-3 flex flex-col justify-between">
                        {front(handleFlip)}
                    </div>
                </div>

                {/* ── Back ── */}
                <div
                    ref={backRef}
                    className={`absolute inset-0 rounded-[20px] border backdrop-blur-xl overflow-hidden rotate-y-180 backface-hidden ${c.card}`}
                >
                    {/* 네온 테두리 레이어 */}
                    <div className="absolute inset-0 rounded-[20px] pointer-events-none">
                        <div className={`absolute inset-0 rounded-[20px] border ${c.neon}`} />
                        <div className={`absolute inset-0 rounded-[20px] border ${c.neon} blur-[6px] opacity-60`} />
                    </div>

                    {/* 라이트 스윕 */}
                    <div className="absolute inset-0 overflow-hidden rounded-[20px] pointer-events-none">
                        <div className={`absolute top-[-60%] right-[-20%] w-[160%] h-[160%] bg-gradient-to-bl ${c.sweep} to-transparent rotate-[-20deg] opacity-40`} />
                    </div>

                    {/* 콘텐츠 */}
                    <div className="relative z-10 w-full h-full p-3 flex flex-col justify-between">
                        {back(handleFlip)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
