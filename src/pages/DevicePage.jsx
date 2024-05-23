import React,{useState} from "react";
import SideBar from "../component/SideBar";
import CardControl from "../component/CardControl";

// icon
import { PiThermometerBold } from "react-icons/pi";
import { LiaToggleOnSolid } from "react-icons/lia";
import ToogleOn from "../component/element/ToogleOn";
import { FaPowerOff } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsPersonCircle } from "react-icons/bs";
import CardGrafik from "../component/CardGrafik";
import BarChart from "../component/element/BarChart";
import GrafikArea from "../component/element/GrafikArea";

const dataCont = [
  {
    id: 1,
    itemTopleft: "",
    itemBottomLeft: <PiThermometerBold />,
    itemTopRight: "Pemberitahuan Hujan",
    itemBottomRight: "",
    action: "",
  },
  {
    id: 2,
    itemTopleft: "",
    itemBottomLeft: <HiOutlineLightBulb />,
    itemTopRight: "Intensitas Cahaya",
    itemBottomRight: "",
    action: "",
  },
  {
    id: 3,
    itemTopleft: "On",
    itemBottomLeft: <FaPowerOff />,
    itemTopRight: <ToogleOn />,
    itemBottomRight: "",
    action: "",
  },
  {
    id: 4,
    itemTopleft: "Off",
    itemBottomLeft: <FaPowerOff />,
    itemTopRight: <ToogleOn />,
    itemBottomRight: "",
    action: "",
  },
];

const DevicePage = () => {
const [nilaiSensorHujan, setnilaiSensorHujan] = useState(30)



  return (
    <div className="h-screen w-screen flex bg-primary-0 bg-opacity-60 items-center justify-center gap-5">
      <SideBar />
      <div className="absolute top-5 right-10 flex gap-2 ">
        <img src="/logo.png" alt="" className="h-16" /> <BsPersonCircle size={40} />
      </div>
      <div className="w-fit h-fit bg-white grid grid-cols-2 gap-5 rounded-xl p-5">
        {dataCont.map((item) => (
          <CardControl
            itemTopLeft={item.itemTopleft}
            itemBottomLeft={item.itemBottomLeft}
            itemTopRight={item.itemTopRight}
            itemBottomRight={item.itemBottomRight}
            key={item.id}
          />
        ))}
      </div>
      <div className="flex flex-col gap-5">
        <CardGrafik title={"Nilai Sensor Hujan"} text={`+ ${nilaiSensorHujan} °C`}><BarChart/></CardGrafik>
        <CardGrafik title={"Nilai Sensor Hujan"} text={`+ ${nilaiSensorHujan} °C`}><GrafikArea/></CardGrafik>
      </div>
   
    </div>
  );
};

export default DevicePage;
