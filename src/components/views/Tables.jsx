import {useEffect, useState} from "react";
import {Link, Route, useNavigate} from "react-router-dom";
import "../../assets/css/Prueba.css"
import * as React from 'react';
import NavBar from "./NavBar";

export default function Tables() {

    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [temp, setTemp] = useState(0);
    const [hum, setHum] = useState(0);
    const [dist, setDist] = useState(0);
    const [lum, setLum] = useState(0);



    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://prue-database-default-rtdb.firebaseio.com/tem.json?print=pretty", requestOptions)
            .then(response => response.json())
            .then(result => 
               setTemp(result.temperatura)
            )
            .catch(error => console.log('error', error));

            fetch("https://prue-database-default-rtdb.firebaseio.com/lum.json?print=pretty", requestOptions)
            .then(response => response.json())
            .then(result => 
               setLum(result.luminosidad)
            )
            .catch(error => console.log('error', error));

            fetch("https://prue-database-default-rtdb.firebaseio.com/dis.json?print=pretty", requestOptions)
            .then(response => response.json())
            .then(result => 
               setDist(result.distancia)
            )
            .catch(error => console.log('error', error));

            fetch("https://prue-database-default-rtdb.firebaseio.com/hum.json?print=pretty", requestOptions)
            .then(response => response.json())
            .then(result => 
               setHum(result.humedad)
            )
            .catch(error => console.log('error', error));
    }, [])

  return (
    <>
        <NavBar/>
        <div className="Temperatura d-flex justify-content-center my-0 ">
        <div class="table-responsive card w-75  text-bg-red text-center">
  <table class="table table-striped">
  <caption>Lista de sensores</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Temperatura</th>
      <th scope="col">Humedad</th>
      <th scope="col">Luminosidad</th>
      <th scope="col">Distancia</th>
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
</div>
        </div>

    </>
  );
}
