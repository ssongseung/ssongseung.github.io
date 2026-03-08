const Date = ({type, text}) => {
  const colorData = {
    white: "bg-[#0a75e9] text-[#c0ffff]",
    blue: "bg-[#fff] text-[#0a75e9]",
    mint: "bg-[#0a75e9] text-[#c0ffff]",
  };
  
  return (
    <div className={`flex items-center justify-center h-[30px] px-[10px] rounded-[15px] text-center ${colorData[type]} font-bold`}>{text}</div>
  );
};

export default Date;
