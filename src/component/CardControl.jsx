import React from "react";

const CardControl = ({
  itemTopLeft,
  itemBottomLeft,
  itemBottomRight,
  itemTopRight,
}) => {
  return (
    <div className="h-[120px] w-[280px] bg-primary-0 rounded-xl flex justify-between lg:p-5 shadow-xl  shadow-gray-500">
      <div className="flex flex-col justify-between">
        <div  className="text-2xl text-[#09006E] font-semibold">{itemTopLeft}</div>
        <div className="text-4xl">{itemBottomLeft}</div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-2xl text-[#09006E] font-semibold">{itemTopRight}</div>
        <div >{itemBottomRight}</div>
      </div>
    </div>
  );
};

export default CardControl;
