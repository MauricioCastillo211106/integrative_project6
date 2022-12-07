import AnyChart from "anychart-react";
import anychart from "anychart";
import { useState, useEffect } from "react";

const CardBar = () => {
  const [lumino, setLumino] = useState([])
      const [intervalId, setIntervalID] = useState(0);

    const handleActive = () => {
      const newintervalId = setInterval(() => {
        getData();
  
      }, 10000);
      setIntervalID(newintervalId);
    };

  const getData = async ()=>{
    const response = await fetch(
      `http://3.144.72.54/api/data/view`
    );
    const data = await response.json();
    var luminosidadAux =[]     
    data.map(elemento =>{
      luminosidadAux.push(elemento.luminosidad)
    })
    setLumino(luminosidadAux);
    console.log(luminosidadAux)
    
  }
  useEffect(()=>{
    handleActive();
  },[])

  
  let chart = anychart.scatter();
  
  chart.animation(true);
  chart.title("Grafica de dispersion");
  chart.xScale().minimum(0).maximum(24).ticks({ interval: 4 });
  chart.yScale().minimum(0).maximum(1500).ticks({ interval: 2 });
  chart.yAxis().title("Luminocidad");
  chart.xAxis().title("Tiempo(Horas)");
  chart.interactivity().hoverMode("by-spot").spotRadius(10);


  var marker = chart.marker(lumino);
  marker.type("triangle-up").size(3);
  marker.hovered().size(7).fill("gold").stroke(anychart.color.darken("gold"));
  marker
    .tooltip()
    .hAlign("start")
    .format(function () {
      return " Luminocidad : " + this.value + " " + "Hora: " + this.x;
    });
  

  return (
    <div className="container-fluid overflow-auto">
      <AnyChart instance={chart} id="Dispersion" width={400} height={400} />
    </div>
  );
};

export default CardBar;