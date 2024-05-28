import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


const apiHujan ="https://sgp1.blynk.cloud/external/api/get?token=9h___y_Os20z-iWX25xb9LpTe4hrTqqr&dataStreamId=2"



const GrafikHujan = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchSensorData = async () => {
        try {
          const response = await axios.get(apiHujan);
          const sensorValue = parseFloat(response.data); // Assuming sensor data is a single value
          console.log("data masuk:" + sensorValue)
  
          // Append new data to the array with timestamp or another unique identifier
          setData(prevData => [...prevData, { name: new Date().toLocaleTimeString(), uv: sensorValue }]);
        } catch (error) {
          console.error('Error fetching data from Blynk:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchSensorData();
  
      // Set interval to fetch data every 10 seconds
      const intervalId = setInterval(fetchSensorData, 10000);
  
      // Clean up interval on component unmount
      return () => clearInterval(intervalId);
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
   return(
    <ResponsiveContainer width="100%" height="100%">
    <AreaChart
    //   width={500}
    //   height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis  />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#FBDA64" fill="#FBDA64" fillOpacity={0.7} />
    </AreaChart>
  </ResponsiveContainer>
   )
}


export default GrafikHujan;
