import React,{useState, useEffect} from "react";
import SideBar from "../component/SideBar";
import CardControl from "../component/CardControl";
import axios from "axios";

// icon
import { PiThermometerBold } from "react-icons/pi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsPersonCircle } from "react-icons/bs";
import CardGrafik from "../component/CardGrafik";
import GrafikAreaIntensitas from "../component/element/GrafikIntensitas";
import GrafikHujan from "../component/element/GrafikHujan";




const api_bylinkIntensitas="https://sgp1.blynk.cloud/external/api/get?token=9h___y_Os20z-iWX25xb9LpTe4hrTqqr&dataStreamId=1"
const api_bylinkHujan="https://sgp1.blynk.cloud/external/api/get?token=9h___y_Os20z-iWX25xb9LpTe4hrTqqr&dataStreamId=2"
const api_bylinkketerangan="https://sgp1.blynk.cloud/external/api/get?token=9h___y_Os20z-iWX25xb9LpTe4hrTqqr&dataStreamId=3"

const DevicePage = () => {
const [nilaiSensorHujan, setnilaiSensorHujan] = useState("...Loading")
const [nilaiSensorLdr, setnilaiSensorLdr] = useState("...Loading")
const [statuSensorHujan, setstatusSensorHujan] = useState("...Loading")
const [statusSensorLdr, setstatusSensorLdr] = useState("...Loading")
const [statusJemuran, setstatusJemuran] = useState("...Loading")
const dataCont = [
  {
    id: 1,
    itemTopleft: <PiThermometerBold />,
    itemBottomLeft: "",
    itemTopRight: nilaiSensorHujan,
    itemBottomRight: `Pemberitahuan Hujan \n${statuSensorHujan}`,
    action: "",
  },
  {
    id: 2,
    itemTopleft:  <HiOutlineLightBulb />,
    itemBottomLeft:"",
    itemTopRight: nilaiSensorLdr,
    itemBottomRight: `Intensitas Cahaya ${statusSensorLdr}`,
    action: "",
  },
  {
    id: 3,
    itemTopleft: "Status Jemuran",
    itemBottomLeft: "",
    itemTopRight:"" ,
    itemBottomRight: statusJemuran,
    action: "",
  },
];


useEffect(() => {
  const fetchSensorData = async () => {
    try {
      const responseIntensitas = await axios.get(api_bylinkIntensitas);
      console.log(responseIntensitas)
      const responseHujan = await axios.get(api_bylinkHujan);
      console.log(responseHujan)
      const responseKeterangan = await axios.get(api_bylinkketerangan);
      console.log(responseKeterangan)
      const sensorIntensitas = responseIntensitas.data;
      const sensorHujan = responseHujan.data;
      const sensorKeterangan = responseKeterangan.data;
      const statusHujan = sensorHujan >= "500" ? "Kering": "Basah"
      const statusLdr = sensorIntensitas <="500" ? "Terang" : "Gelap";
     setnilaiSensorHujan(sensorHujan);
     setnilaiSensorLdr(sensorIntensitas)
     setstatusSensorHujan(statusHujan)
     setstatusSensorLdr(statusLdr)
     setstatusJemuran(sensorKeterangan)

    } catch (error) {
      console.error("Error fetching data from Blynk", error);
    }
  };

  fetchSensorData();

  const intervalId = setInterval(fetchSensorData, 5000); // Fetch data every 10 seconds

  return () => clearInterval(intervalId); // Cleanup interval on component unmount
}, []);

  return (
    <div className=" w-screen flex flex-col bg-primary-0 bg-opacity-60 items-center lg:justify-center gap-5 pb-20">
      <SideBar />
      <div className="absolute md:top-5 md:right-10 top-16 right-3 flex gap-2  ">
        <img src="/logo.png" alt="" className="md:h-16 h-11" />
      </div>
      <div className="w-fit h-fit bg-white grid md:grid-cols-3  gap-5 rounded-xl p-5 mt-32 md:ml-32 lg:ml-0">
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
      <div className="flex flex-col  lg:flex-row  gap-5 md:ml-32 lg:ml-0">
        <CardGrafik title={"Nilai Sensor Hujan"} text={`+ ${nilaiSensorHujan} °C`}><GrafikHujan/></CardGrafik>
        <CardGrafik title={"Intesitas Cahaya"} text={`+ ${nilaiSensorLdr} I`}><GrafikAreaIntensitas/></CardGrafik>
      </div>
   
    </div>
  );
};

export default DevicePage;
