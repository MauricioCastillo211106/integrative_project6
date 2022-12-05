import { useEffect, useState } from "react";
import "../../assets/css/Prueba.css";
import * as React from "react";
import NavBar from "./NavBar";




export default function Tables() {
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState(0);
  const [hum, setHum] = useState(0);
  const [dist, setDist] = useState(0);
  const [lum, setLum] = useState(0);




  // const push = () => {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     temperatura: temp.temperatura,
  //     humedad: hum.humedad,
  //     ultrasonico: dist.distancia,
  //     luminosidad: lum.luminosidad,
  //   });

  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch("http://localhost:3000/api/data/create", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(raw);
  //       console.log(result);
  //     })
  //     .catch((error) => console.log("error", error));
  // };

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://prue-database-default-rtdb.firebaseio.com/.json?print=pretty",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setTemp(result.tem);
        setLum(result.lum);
        setHum(result.hum);
        setDist(result.dis);
        setData(result);

      })
      .catch((error) => console.log("error", error));

  
  }, []);  
   

return(
  <>
  <NavBar />
  <div className="Temperatura d-flex justify-content-center my-0 ">
    <div class="table-responsive card w-75  text-bg-red text-center">
      <table class="table table-striped">
        <caption>Lista de sensores</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Temperatura</th>
            <th scope="col">Humedad</th>
            <th scope="col">luminosidad</th>
            <th scope="col">distancia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>0</th>
            <th>{temp.temperatura}</th>
            <th>{hum.humedad}</th>
            <th>{lum.luminosidad}</th>
            <th>{dist.distancia}</th>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</>
);
}

