import AnyChart from "anychart-react";
import anychart from "anychart";

const CardBar = () => {

  const getData =()=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://3.144.72.54/api/data/view", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  let data1 = [1,2,3,4,5,6,7,10]
  let chart = anychart.scatter();
  
  chart.animation(true);
  chart.title("Grafica de dispdexrsion");
  chart.xScale().minimum(0).maximum(24).ticks({ interval: 4 });
  chart.yScale().minimum(0).maximum(60).ticks({ interval: 2 });
  chart.yAxis().title("Humedad");
  chart.xAxis().title("Tiempo(Horas)");
  chart.interactivity().hoverMode("by-spot").spotRadius(10);


  var marker = chart.marker(data1);
  marker.type("triangle-up").size(3);
  marker.hovered().size(7).fill("gold").stroke(anychart.color.darken("gold"));
  marker
    .tooltip()
    .hAlign("start")
    .format(function () {
      return "Humedad: " + this.value + " " + "Hora: " + this.x;
    });
  

  return (
    <div className="container-fluid overflow-auto">
      <AnyChart instance={chart} id="Dispersion" width={400} height={400} />
    </div>
  );
};

export default CardBar;