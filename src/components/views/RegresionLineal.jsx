import AnyChart from "anychart-react";
import anychart from "anychart";
import { useState, useEffect } from "react";

const CardBar = () => {

  let chart = anychart.scatter();
  const [intervalId, setIntervalID] = useState(0);

  const handleActive = () => {
    const newintervalId = setInterval(() => {
      ultraFech();

    }, 10000);
    setIntervalID(newintervalId);
  };
  
  const [ultra, setUltra] = useState([])

  const ultraFech= async () =>{
    const response = await fetch(
      `http://3.144.72.54/api/data/view`
    );
    const data = await response.json();
    var ultrasonicoAux =[]     
    data.map(elemento =>{
      ultrasonicoAux.push(elemento.ultrasonico)
    })
    setUltra(ultrasonicoAux);
    console.log(ultrasonicoAux)
  }
  useEffect(()=>{
    handleActive();
  },[])
  
  chart.animation(true);
  chart.title("Grafica de dispersion");
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

    
  

  return (
    <div className="container-fluid overflow-auto">
      <AnyChart instance={chart} id="Regresion" width={400} height={400} />
    </div>
  );
};

export default CardBar;