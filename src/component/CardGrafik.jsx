import React from "react";

const CardGrafik = ({ title, text, children }) => {
  return (
    <div className=" h-[460px] w-[300px] lg:h-[600px] md:h-[500px] md:w-[400px] lg:w-[500px] rounded-xl bg-white flex flex-col p-1 items-center justify-between gap-5">
      <h1 className=" text-xl">{title}</h1>
      <h2 className="text-3xl font-semibold text-gray-500">{text}</h2>
      <div className="h-full w-full flex justify-center">{children}</div>
    </div>
  );
};

export default CardGrafik;
