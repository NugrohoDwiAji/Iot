import React from "react";
import Corak from "../component/element/Corak";
import CardLogin from "../component/CardLogin";

const LoginPage = () => {
  return (
    <div className="bg-primary-0 h-screen w-screen">
      <div>
        <Corak
          className={"h-16 w-[68px] bg-purple-400 opacity-70 lg:top-10 lg:left-96 md:top-10 md:left-60"}
        />
        <Corak
          className={
            "md:h-[195px] md:w-[220px] h-28 w-28 bg-[#0C82B4] opacity-70 md:left-10 left-24 lg:top-44 md:top-16"
          }
        />
        <Corak
          className={"md:h-32 md:w-32 h-24 w-24 bg-secondary-0 opacity-70 md:top-[390px] lg:left-72 right-4 md:left-6"}
        />
        <Corak className={"md:h-16 md:w-[68px] bg-blue-200 lg:bottom-3 lg:left-[470px] md:left-36 md:bottom-44 hidden md:block"} />
      </div>
      <div className="flex items-center justify-center h-full">
        <CardLogin />
      </div>
      <div>
        <Corak className={"h-24 w-24 bg-[#0C82B4] md:top-10 md:right-10 bottom-2 left-3"} />
        <Corak
          className={"h-32 w-32 bg-secondary-0 opacity-70 md:top-24 md:right-60 hidden md:block"}
        />
        <Corak className={"h-20 w-20 bg-blue-200 md:top-80 md:right-10 right-24 bottom-5"} />
        <Corak
          className={
            "md:h-[195px] md:w-[220px] h-20 w-20 bg-secondary-0 opacity-70 md:right-10 md:bottom-10 bottom-2 right-1"
          }
        />
      </div>
    </div>
  );
};

export default LoginPage;
