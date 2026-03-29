const Date = ({ type, text }) => {
    const colorData = {
        white: "border-white/30 text-white/60 bg-white/10",
        blue: "border-blue-400/40 text-blue-300 bg-blue-500/15",
        mint: "border-cyan-300/40 text-cyan-200 bg-cyan-400/10",
    };

    return (
        <div
            className={`flex items-center justify-center h-[24px] px-[10px] rounded-full text-[11px] font-medium tracking-wide border ${colorData[type]}`}
        >
            {text}
        </div>
    );
};

export default Date;
