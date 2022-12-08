import React, { useState, useEffect } from "react";
import AnyChart from "anychart-react";
import anychart from "anychart";
import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'

const CardBar = () => {

  let chart = anychart.scatter();
  let chart1 = anychart.scatter();



  //declaracion de los arreglos
  const [tem, setTem] = useState([])
  const [humeda, setHumeda] = useState([])
  const [lumino, setLumino] = useState([])
  const [ultra, setUltra] = useState([])


  
  const dataFech= async () =>{
    const response = await fetch(
      `http://3.144.72.54/api/data/view`
    );
    const data = await response.json();

    if(data.length<tem.length){
    //Arreglos Auxiliares
    var temperatureAux = []
    var ultrasonicoAux =[]
    var humedadAux = []
    var luminosidadAux =[]
    
    //Mapeo de la peticion a un arreglo auxiliar
    data.map(elemento =>{
      ultrasonicoAux.push(elemento.ultrasonico)
      temperatureAux.push(elemento.temperatura)
      humedadAux.push(elemento.humedad)
      luminosidadAux.push(elemento.luminosidad)
    })
    
    //se pasa el arreglo auxiliar a un estado
    setUltra(ultrasonicoAux);
    setHumeda(humedadAux);
    setLumino(luminosidadAux);
    setTem(temperatureAux);
  }else{
    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };
    
    fetch("http://3.144.72.54/api/data/delete", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  }
  useEffect(()=>{
    dataFech();
  },[])

  //regresion Lineal
  chart.animation(true);
  chart.title("Regresion Lineal");
  chart.xScale().minimum(0).maximum(24).ticks({ interval: 1 });
  chart.yScale().minimum(0).maximum(50).ticks({ interval: 1 });
  chart.yAxis().title("Ultrasonico");
  chart.xAxis().title("Tiempo(Horas)");
  chart.interactivity().hoverMode("by-spot").spotRadius(10);


  var marker = chart.marker(ultra);
  marker.type("triangle-up").size(3);
  marker.hovered().size(7).fill("gold").stroke(anychart.color.darken("gold"));
  marker
    .tooltip()
    .hAlign("start")
    .format(function () {
      return "Humedad: " + this.value + " " + "Hora: " + this.x;
    });

  chart.line([...Array(ultra.length).keys()]);

  //Dispercion
  chart1.animation(true);
  chart1.title("Grafica de dispersion");
  chart1.xScale().minimum(0).maximum(24).ticks({ interval: 4 });
  chart1.yScale().minimum(0).maximum(1500).ticks({ interval: 2 });
  chart1.yAxis().title("Luminocidad");
  chart1.xAxis().title("Tiempo(Horas)");
  chart1.interactivity().hoverMode("by-spot").spotRadius(10);


  var marker = chart1.marker(lumino);
  marker.type("triangle-up").size(3);
  marker.hovered().size(7).fill("gold").stroke(anychart.color.darken("gold"));
  marker
    .tooltip()
    .hAlign("start")
    .format(function () {
      return " Luminocidad : " + this.value + " " + "Hora: " + this.x;
    });

  //Barra
  const data ={
    labels:[...Array(tem.length).keys()],
    datasets:[{
        label:'habitantes',
        backgroundColor: 'rgba(0,255,0,1)',
        borderColor:'black',
        borderWidth:1,
        hoverBackgroundColor: 'rgba (0,255,0,0.2)',
        hoverBorderColor: '#ff0000',
        data:tem
    }]
  }
  const opcions ={
        maintainAspectRatio: false,
        responsive:true
    }
  //Lienal
  let chart2 = anychart.line(humeda);

  let stage2 = anychart.graphics.create();

  return (
    <>
      <div className="container-fluid g-0 mt-5">
        <div className="row g-0 ">
          <div className="col-12 col-md-6 d-flex justify-content-around mb-5">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Regreción lineal</h5>
                <p className="card-text mb-3">Ultrasonico</p>
                <AnyChart instance={chart1} id="Regresion" width={400} height={400}/>
                <div className="collapse" id="dist">
                  <div className="card-body">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-around mb-5">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Disperción</h5>
                <p className="card-text mb-3">Luminocidad</p>
                <AnyChart instance={chart} id="Dispersion" width={400} height={400} /> 
                <div className="collapse" id="lum">
                  <div className="card-body">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-around">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Barras</h5>
                <p className="card-text mb-3">Temperatura</p>
                <Bar data={data} options1={opcions}/>
                <div className="collapse" id="bar">
                  <div className="card-body">

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-around">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Lineal</h5>
                <p className="card-text mb-3">Humedad</p>
                <AnyChart
                    instance={stage2}
                    id="Lineal"
                    width={400}
                    height={300}
                    charts={[chart2]}
                  />
                <div className="collapse" id="temp">
                  <div className="card-body">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBar;
