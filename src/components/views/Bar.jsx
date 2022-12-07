// ./components/BarChart.js

import AnyChart from "anychart-react";
import { useState } from "react";
import anychart from "anychart";

const BarChart = () => {
        var arrTemp = [];
        var arrDate=[]
        const [intervalId, setIntervalID] = useState(0);
    
    const desplay=(datas)=>{
        
        const length = datas.length;
        if(length!==arrTemp.length){
            arrTemp = [];
            arrDate=[];
        for (var i = 0; i < length; i++) {
            arrDate.push(datas[i].createdAt)
                arrTemp.push(datas[i].temperatura)
    
        }}
        console.log(arrTemp)
        console.log(arrDate)
    }
    
        const handleGet = () => {
            const newintervalId = setInterval(() => {
                getDatas();
                
    
            }, 1000);
            setIntervalID(newintervalId);
          };
    
      const getDatas =async()=>{
        const response = await fetch(
            `http://3.144.72.54/api/data/view`
          );
          const datas = await response.json();
          console.log(datas)
          desplay(datas)
     
          
    
            
    
         
     
    
      }
    
    useState(()=>{
        handleGet()
    
    },[])

    let data = anychart.data.set([
           
          ]);
          let error = anychart.column();
          var Humedad = data.mapAs({ x: 0, value: 1 });
          let series1 = error.column(Humedad);
          series1.error().valueLowerError(1);
          series1.error().valueUpperError(1);
        
          return (
            <div className="container-fluid overflow-auto">
<AnyChart type="column" data={data} title="My Chart Title" legend="true"/>
            </div>
          );
        };

export default BarChart;
  

// import AnyChart from "anychart-react";
// import { useState } from "react";
// import anychart from "anychart";

// const CardBar = () => {

//     const [valores, setValores] = useState(0);

//     const [intervalId, setIntervalID] = useState(0);

//     const handleGet = () => {
//         const newintervalId = setInterval(() => {
//             getDatas();
//         }, 10000);
//         setIntervalID(newintervalId);
//       };

//   const getDatas =async()=>{
//     const response = await fetch(
//         `http://3.144.72.54/api/data/view`
//       );
//       const datas = await response.json();
//       console.log(datas)
//         setValores(datas)
//   }

// useState(()=>{
//     handleGet()

// },[])
    
//   let data = anychart.data.set([
//     ["01:00", 50, 50],
//     ["02:00", 20, 50],
//     ["04:00", 11, 50],
//     ["05:00", 39, 50],
//     ["06:00", 8, 50],
//     ["07:00", 10, 50],
//     ["08:00", 10, 50],
//     ["09:00", 23, 40],
//     ["10:00", 76, 50],
//     ["11:00", 0, 50],
//     ["12:00", 0, 50],
//     ["13:00", 0, 50],
//     ["14:00", 22, 50],
//     ["15:00", 23, 50],
//     ["16:00", 11, 50],
//     ["17:00", 0, 50],
//     ["18:00", 14, 50],
//     ["19:00", 0, 50],
//     ["20:00", 19, 50],
//     ["21:00", 10, 50],
//     ["22:00", 0, 50],
//     ["23:00", 0, 50],
//     ["24:00", 10, 50],
//     ["24:00", 11, 50],
//   ]);
//   let error = anychart.column();
//   var Humedad = data.mapAs({ x: 0, value: 1 });
//   let series1 = error.column(Humedad);
//   series1.error().valueLowerError(1);
//   series1.error().valueUpperError(1);

//   return (
//     <div className="container-fluid overflow-auto">
//       <AnyChart
//                     instance={error}
//                     id="Bar"
//                     width={900}
//                     height={300}
//                     charts={[data]}
//                     title="HUMEDAD"
//                   />
//     </div>
//   );
// };

// export default CardBar;