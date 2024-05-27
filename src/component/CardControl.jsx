import React from "react";

const CardControl = ({
  itemTopLeft,
  itemBottomLeft,
  itemBottomRight,
  itemTopRight,
}) => {
  return (
    <div className="lg:h-[120px] lg:w-[280px] w-44 h-20 bg-primary-0 rounded-xl flex justify-between lg:p-5 p-2 shadow-xl  shadow-gray-500">
      <div className="flex flex-col justify-between">
        <div  className="lg:text-2xl text-[#09006E] font-semibold">{itemTopLeft}</div>
        <div className="lg:text-4xl">{itemBottomLeft}</div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="lg:text-xl text-[#09006E] font-semibold">{itemTopRight}</div>
        <div className="lg:text-xl text-[#09006E] font-semibold" >{itemBottomRight}</div>
      </div>
    </div>
  );
};

export default CardControl;
