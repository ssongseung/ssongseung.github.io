import React from "react";

const Title = ({ title, type }) => {
    const colorData = {
        white: "text-[#0a75e9]",
        blue: "text-[#fff]",
        mint: "text-[#0a75e9]",
    };

    return (
        <p
            className={`${colorData[type]} text-[33px] font-bold text-center opacity-50 `}
            dangerouslySetInnerHTML={{ __html: title }}
        />
    );
};

export default Title;
