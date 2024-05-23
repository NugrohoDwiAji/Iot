import React from "react";
import SideBar from "../component/SideBar";

const HomePage = () => {
  return (
    <div>
      <SideBar />
      <div className="h-screen flex pt-32 bg-[#F7F1FF]">
        <div className="md:ml-28 italic text-center flex flex-col items-center w-1/2 gap-5 md:px-10 px-3">
          <h1 className=" text-secondary-0 md:text-3xl font-semibold ">
            JEMURAN OTOMATIS BERBASIS <br /> INTERNET OF THINGS
          </h1>
          <p className="md:text-2xl text-sm text-[#09006E]">
            Sensor hujan adalah jenis sensor yang berfungsi untuk mendeteksi
            terjadinya hujan atau tidak. Sensor hujan dapat di aplikasikan dalam
            berbagai hal salah satunya sebagai alarm pendeteksi hujan atau
            sebagai pengangkat jemuran otomatis. Kali ini kita akan
            mengaplikasikan sensor hujan untuk membuat jemuran otomatis.
          </p>
        </div>
        <div className="absolute top-5 right-10 "><img src="/logo.png" alt="" className="h-16"/></div>
        <div className="w-1/2 pl-32 ">
          <div className="md:h-36 md:w-36 rounded-full bg-primary-0"></div>
          <div className="md:h-48 md:w-48 h-24 w-24 rounded-xl bg-secondary-0 relative mt-14 lg:mt-5 lg:-right-32"></div>
          <div className="md:h-36 md:w-36 rounded-full bg-primary-0 relative mt-14 lg:mt-5 lg:left-40"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
