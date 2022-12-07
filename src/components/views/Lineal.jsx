import AnyChart from "anychart-react";
import anychart from "anychart";
import { useState, useEffect } from "react";

const CardLineal = () => {
  const [humedad, setHumedad]= useState([]);
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
    var humedadAux =[]     
    data.map(elemento =>{
      humedadAux.push(elemento.humedad)
    })
    setHumedad(humedadAux);
    console.log(humedadAux)
  }
  useEffect(()=>{
    handleActive();
  },[])

  let chart1 = anychart.line(humedad);

  let stage2 = anychart.graphics.create();

  return (
    <div className="container-fluid overflow-auto">
<AnyChart
                    instance={stage2}
                    id="Lineal"
                    width={400}
                    height={300}
                    charts={[chart1]}
                  />
    </div>
  );
};

export default CardLineal;