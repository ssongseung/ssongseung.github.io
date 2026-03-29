const Title = ({ title, type }) => {
    const colorData = {
        white: "text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.35)]",
        blue: "text-white drop-shadow-[0_0_14px_rgba(96,165,250,0.55)]",
        mint: "text-cyan-100 drop-shadow-[0_0_14px_rgba(103,232,249,0.45)]",
    };

    return (
        <p
            className={`text-[28px] font-bold text-center leading-tight tracking-tight ${colorData[type]}`}
            dangerouslySetInnerHTML={{ __html: title }}
        />
    );
};

export default Title;
