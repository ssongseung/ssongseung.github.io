const Button = ({ onClick, color, title }) => {
    const colorData = {
        white: "border-white/40 text-white/80 hover:bg-white/10 hover:text-white",
        blue: "border-blue-400/50 text-blue-200 hover:bg-blue-400/15 hover:text-blue-100 shadow-[0_0_8px_rgba(96,165,250,0.2)]",
        mint: "border-cyan-300/50 text-cyan-200 hover:bg-cyan-400/15 hover:text-cyan-100 shadow-[0_0_8px_rgba(103,232,249,0.15)]",
    };

    return (
        <div className="flex items-center justify-center">
            <button
                onClick={onClick}
                className={`h-[30px] px-5 rounded-full border text-[12px] font-medium tracking-widest transition-all duration-200 ${colorData[color]}`}
            >
                {title}
            </button>
        </div>
    );
};

export default Button;
