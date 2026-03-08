const Tag = ({type, text}) => {
  const colorData = {
    white: "bg-[#fff] text-[#0a75e9] border border-[#0a75e9]",
    blue: "bg-[#0a75e9] text-[#fff] border border-[#fff]",
    mint: "bg-[#d9ebfe] text-[#0a75e9] border border-[#0a75e9]",
  };
  
  return (
    <div className={`flex items-center justify-center h-[30px] px-[10px] rounded-[15px] text-center ${colorData[type]} font-bold`}>{text}</div>
  );
};

export default Tag;
