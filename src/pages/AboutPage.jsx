import React from "react";
import SideBar from "../component/SideBar";
import CardAbout from "../component/CardAbout";
import DataAnggota from "../datas/DataAnggota.json"

const AboutPage = () => {
  return (
    <div>
      <SideBar />
      <div className="absolute top-5 right-10 ">
        <img src="/logo.png" alt="" className="h-16" />
      </div>
      <div className="ml-28 h-fit gap-10 flex flex-col justify-between bg-slate-300">
        <div className="h-80 bg-white flex flex-col items-center pt-10 gap-5">
          <h1 className="xl:p-2 w-fit h-fit text-2xl italic text-white rounded-full bg-primary-0">
            Jemuran Otomatis Berbasi Internet Of Things
          </h1>
          <h2 className="xl:p-2 w-fit h-fit text-2xl italic text-white rounded-full bg-primary-0">
            Progres Tiap Roles
          </h2>
        </div>
        <div className="bg-secondary-0 relative flex justify-center h-28">
          <div className="absolute -top-44 ">
            <CardAbout img={"/Ahmad-Fathoni.png"} posisi={"Project Manager"} nama={"Ahmad Fathoni"} />
          </div>
        </div>
        <div className="bg-secondary-0 h-96 flex gap-10 justify-center pt-10">
          {DataAnggota.map((item)=>(
            <CardAbout img={item.img} posisi={item.posisi} nama={item.nama} key={item.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
