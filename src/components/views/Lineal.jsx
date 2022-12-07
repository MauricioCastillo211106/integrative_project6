import AnyChart from "anychart-react";
import anychart from "anychart";

const CardLineal = () => {

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

  let chart1 = anychart.line([1, 2, 3]);

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