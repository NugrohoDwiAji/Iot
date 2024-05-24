import React from "react";
import SideBar from "../component/SideBar";
import CardAbout from "../component/CardAbout";
import DataAnggota from "../datas/DataAnggota.json"

const AboutPage = () => {
  return (
    <div>
      <SideBar />
      <div className="absolute md:top-5 md:right-10 top-16 right-5 ">
        <img src="/logo.png" alt="" className="md:h-16 h-11" />
      </div>
      <div className="md:ml-28 h-fit gap-10 flex flex-col justify-between bg-slate-300">
        <div className="h-80 bg-white flex flex-col items-center pt-28 md:pt-10 gap-5">
          <h1 className="p-2 w-fit h-fit md:text-xl lg:text-2xl italic text-white rounded-full bg-primary-0">
            Jemuran Otomatis Berbasi Internet Of Things
          </h1>
          <h2 className="p-2 w-fit h-fit lg:text-2xl md:text-xl italic text-white rounded-full bg-primary-0">
            Progres Tiap Roles
          </h2>
        </div>
        <div className="bg-secondary-0 relative flex justify-center h-28">
          <div className="absolute md:-top-44 -top-32 ">
            <CardAbout img={"/Ahmad-Fathoni.png"} posisi={"Project Manager"} nama={"Ahmad Fathoni"} />
          </div>
        </div>
        <div className="bg-secondary-0 lg:h-96 lg:flex md:grid grid-cols-2 grid gap-2 md:gap-10 justify-center pt-10 pb-10">
          {DataAnggota.map((item)=>(
            <CardAbout img={item.img} posisi={item.posisi} nama={item.nama} key={item.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
