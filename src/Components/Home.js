import React, { useState, useEffect } from "react";
import { getCall } from "../apiCall/getCall";
import Header from "./Header";
import LocationAndData from "./LocationAndData";
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getDataForAPi();
  }, []);
  const getDataForAPi = async () => {
    let dataFromApi = await getCall();
    console.log("Component Initiation Called---test Passed");
    setData(dataFromApi);
  };

  return (
    <>
      <Header />
      <LocationAndData data={data} />
    </>
  );
}

export default Home;
