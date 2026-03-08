import { Link  } from "react-router-dom";

const Button = ({onClick , color, title}) => {
  const colorData = {
    white: "text-[#0a75e9] border-b border-[#0a75e9]",
    blue: "text-[#fff] border-b border-[#fff]",
    mint: "text-[#0a75e9] border-b border-[#0a75e9]",
  };
  
  return (
    <div className="flex items-center justify-center">
      <button onClick={onClick} className={`h-[30px] text-center flex items-center justify-center ${colorData[color]} font-bold`}>{title}</button>
    </div>
  );
};

export default Button;
