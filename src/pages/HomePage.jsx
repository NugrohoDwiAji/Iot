import React,{useEffect} from "react";
import SideBar from "../component/SideBar"



const HomePage = () => {


  return (
    <div>
      <SideBar />
      <div className="h-screen flex flex-col  lg:flex-row pt-32 bg-[#F7F1FF]">
        <div className="md:ml-28 italic text-center flex flex-col items-center lg:w-1/2 gap-5 md:px-10 px-3">
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
        <div className="absolute md:top-5 md:right-10 top-20 right-5  "><img src="/logo.png" alt="" className="md:h-16 h-11"/></div>
        <div className="w-1/2 pl-32 ">
          <div className="md:h-36 md:w-36 rounded-full bg-primary-0 h-28 w-28 mt-5 md:mt-0"><img src="alat1.jpeg" alt="Alat 1" className="rounded-full h-full w-full" /></div>
          <div className="md:h-48 md:w-48 h-24 w-24 rounded-xl bg-secondary-0 relative mt-10 lg:mt-5 lg:-right-32 md-right-36 left-20 "><img src="jemuran.jpeg" alt="Jemuran"  className="rounded-xl h-full w-full"/></div>
          <div className="md:h-36 md:w-36 h-20 w-20 rounded-full bg-primary-0 relative mt-10 lg:mt-5 lg:left-40 md:-right-80  right-6"><img src="alat2.jpeg" alt="Alat 2" className="rounded-full h-full w-full"/></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
