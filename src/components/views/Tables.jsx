import { useState } from "react";
import "../../assets/css/Prueba.css";
import * as React from "react";
import NavBar from "./NavBar";
import Cards from "./Card"

export default function Tables() {
  const [temp, setTemp] = useState(0);
  const [hum, setHum] = useState(0);
  const [dist, setDist] = useState(0);
  const [lum, setLum] = useState(0);
  const [intervalId, setIntervalID] = useState(0);

  const handleClickActive = () => {
    const newintervalId = setInterval(() => {
      handleFetchData();

    }, 300000);
    setIntervalID(newintervalId);
  };

  const handleClickInactive = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  const push = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      temperatura: data.tem.temperatura,
      humedad: data.hum.humedad,
      ultrasonico: data.dis.distancia,
      luminosidad: data.lum.luminosidad,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://3.144.72.54/api/data/create", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(raw);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  const handleFetchData = async () => {
    const response = await fetch(
      `https://prue-database-default-rtdb.firebaseio.com/.json?print=pretty`
    );
    const data = await response.json();
    setTemp(data.tem.temperatura);
    setHum(data.hum.humedad);
    setDist(data.dis.distancia);
    setLum(data.lum.luminosidad);
    push(data);
  };

  return (
    <>
      <NavBar />
      <div className="Temperatura d-flex justify-content-center my-0 ">
        <div className="table-responsive card w-75  text-bg-red text-center">
          <table className="table table-striped">
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
                <th>{temp}</th>
                <th>{hum}</th>
                <th>{lum}</th>
                <th>{dist}</th>
              </tr>
            </tbody>
          </table>
          <div className="d-grid gap-2 d-md-block">
            <button
              className="btn btn-primary btn-success"
              onClick={handleClickActive}
              type="button"
            >
              Activar
            </button>
            <button
              className="btn btn-primary btn-danger"
              onClick={handleClickInactive}
              type="button"
            >
              Desactivar
            </button>
          </div>
        </div>
      </div>
      <Cards/>
    </>
  );
}
