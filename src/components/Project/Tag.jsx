const Tag = ({ type, text }) => {
    const colorData = {
        white: "border-white/40 text-white/70 bg-white/10",
        blue: "border-blue-400/50 text-blue-200 bg-blue-400/15",
        mint: "border-cyan-300/50 text-cyan-200 bg-cyan-400/15",
    };

    return (
        <div
            className={`flex items-center justify-center h-[24px] px-[10px] rounded-full text-[11px] font-medium tracking-wide border backdrop-blur-sm ${colorData[type]}`}
        >
            {text}
        </div>
    );
};

export default Tag;
