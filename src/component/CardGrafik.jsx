import React from "react";

const CardGrafik = ({ title, text, children }) => {
  return (
    <div className="h-[300px] w-[250px] rounded-xl bg-white flex flex-col p-5 items-center justify-between gap-5">
      <h1 className=" text-xl">{title}</h1>
      <h2 className="text-5xl font-semibold text-gray-500">{text}</h2>
      <div className="h-full w-full flex justify-center">{children}</div>
    </div>
  );
};

export default CardGrafik;
