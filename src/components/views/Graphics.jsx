import React from "react";
import NavBar from "./NavBar.jsx";
import AnyChart from "anychart-react";
import anychart from "anychart";



let data2 = anychart.data.set([
  ["01:00", 34, 50],
  ["02:00", 23, 50],
  ["04:00", 11, 50],
  ["05:00", 39, 50],
  ["06:00", 8, 50],
  ["07:00", 10, 50],
  ["08:00", 10, 50],
  ["09:00", 23, 50],
  ["10:00", 76, 50],
  ["11:00", 0, 50],
  ["12:00", 0, 50],
  ["13:00", 0, 50],
  ["14:00", 22, 50],
  ["15:00", 23, 50],
  ["16:00", 11, 50],
  ["17:00", 0, 50],
  ["18:00", 14, 50],
  ["19:00", 0, 50],
  ["20:00", 19, 50],
  ["21:00", 10, 50],
  ["22:00", 0, 50],
  ["23:00", 0, 50],
  ["24:00", 10, 50],
  ["24:00", 11, 50]

]);
let error2 = anychart.column();
var Humedad = data2.mapAs({x: 0, value: 1});
let series2 = error2.column(Humedad);
series2.error().valueLowerError(1);
series2.error().valueUpperError(1);
let stage2 = anychart.graphics.create();
let stage3 = anychart.graphics.create();

let chart0 = anychart.line([1, 2, 3]);
  let chart2 = anychart.line([1, 2, 3]);
  const complexBar = {
    width: 400,
    height: 300,
    type: 'column',
    data: "P1,5\nP2,3\nP3,6\nP4,4",
    title: '',
    yAxis: [1, {
      orientation: 'right',
      enabled: true,
      labels: {
        format: '{%Value}{decimalPoint:\\,}',
        fontColor: 'red'
      }
    }],
    legend: {
      background: 'lightgreen 0.4',
      padding: 0
    },
    lineMarker: {
      value: 4.5
    }
  };

  let data = anychart.data.set([
    ["January", 10000, 12501],
    ["February", 12000, 1500],
    ["March", 13000, 16500],
    ["April", 10000, 13000],
    ["May", 9000, 11000]
  ]);
  let error = anychart.column();
  var seriesData_1 = data.mapAs({x: 0, value: 1});
  let series1 = error.column(seriesData_1);
  series1.error().valueLowerError(700);
  series1.error().valueUpperError(800);
  // const complexErr={
    
  // }

function Grafics() {
  return (
    <>
      <NavBar />
      <main className="container-fluid g-0">
        <section className="row g-0 ">
          <article className="col-12 d-flex justify-content-center my-0">
            <div class="card w-30  text-bg-dark text-center">
              <div class="card-body">
                <h2 class="card-title">Graficas de sensores</h2>
                <h5 class="card-title">24 Noviembre 2022</h5>
                <p class="card-text">Suchiapa chiapas</p>
              </div>
            </div>
          </article>

          <article className="col-12 col-md-6 d-flex justify-content-center mt-4 " >
            <div className="card w-75   overflow-auto">
              <div className="card-body">
                <h5 className="card-title text-center">Humedad</h5>
                <div className="d-flex justify-content-center">
                  <AnyChart
                  instance={error2}
                  id="Humedad"
                  width={900}
                  height={300}
                  charts={[data2]}
                  title=""
                />
                </div>
                
              </div>
            </div>
          </article>

          <article className="col-12 col-md-6 d-flex justify-content-center mt-4">
            <div class="card w-75  ">
              <div class="card-body">
                <h5 class="card-title text-center">Luz</h5>
                <p class="card-text">
                <div className="d-flex justify-content-center">
                <AnyChart
                  instance={stage2}
                  id="Luz"
                  width={400}
                  height={300}
                  charts={[chart2]}
                />
                </div>
                </p>
                {/* <a href="#" class="d-md-none d-block  displa btn btn-primary">
                  Grafica
                </a> */}
              </div>
            </div>
          </article>

          <article className="col-12 col-md-6 d-flex justify-content-center mt-4">
            <div class="card w-75 justify-content-center">
              <div class="card-body ">
                <h5 class="card-title text-center">Sensor ultrasonico</h5>
                <p class="card-text">
                <div className="d-flex justify-content-center">
                  <AnyChart 
                    {...complexBar} 
                    
                  />
                  </div>
                </p>
              </div>
            </div>
          </article>

          <article className="col-12 col-md-6 d-flex justify-content-center mt-4">
            <div class="card w-75  ">
              <div class="card-body">
                <h5 class="card-title text-center">Grafica de error en temperatura</h5>
                <p class="card-text">
                <div className="d-flex justify-content-center">
                  <AnyChart
                  instance={error}
                  id="Error"
                  width={400}
                  height={300}
                  charts={[data]}
                />
                </div>
                </p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default Grafics;

// import React from "react";
// import NavBar from "./NavBar.jsx";
// import AnyChart from "anychart-react";
// import anychart from "anychart";
// import Bar_Err from "../Funtion/Graphics_funtion"


// let stage = anychart.graphics.create();
// let stage2 = anychart.graphics.create();
// let stage3 = anychart.graphics.create();
// let chart1 = anychart.line([1, 2, 3]);
// let chart0 = anychart.line([1, 2, 3]);
//   let chart2 = anychart.line([1, 2, 3]);
//   const complexBar = {
//     width: 400,
//     height: 300,
//     type: 'column',
//     data: "P1,5\nP2,3\nP3,6\nP4,4",
//     title: '',
//     yAxis: [1, {
//       orientation: 'right',
//       enabled: true,
//       labels: {
//         format: '{%Value}{decimalPoint:\\,}',
//         fontColor: 'red'
//       }
//     }],
//     legend: {
//       background: 'lightgreen 0.4',
//       padding: 0
//     },
//     lineMarker: {
//       value: 4.5
//     }
//   };

//   const complexMulti = {
//     width: 400,
//     height: 300,
//     type: 'column',
//     data: "P1,5\nP2,3\nP3,6\nP4,4",
//     title: '',
//     yAxis: [1, {
//       orientation: 'right',
//       enabled: true,
//       labels: {
//         format: '{%Value}{decimalPoint:\\,}',
//         fontColor: 'red'
//       }
//     }],
//     legend: {
//       background: 'lightgreen 0.4',
//       padding: 0
//     },
//     lineMarker: {
//       value: 4.5
//     }
//   };

//   const Tem_Hum = [
//     {x: 'p1', value1: 5, value2: 4},
//     {x: 'p2', value1: 6, value2: 2},
//     {x: 'p3', value1: 3, value2: 7},
//     {x: 'p4', value1: 1, value2: 5}
//   ];

//   let data = anychart.data.set([
//     ["January", 10000, 12501],
//     ["February", 12000, 15001],
//     ["March", 13000, 16500],
//     ["April", 10000, 13000],
//     ["May", 9000, 11000]
//   ]);
//   let error = anychart.column();
//   var seriesData_1 = data.mapAs({x: 0, value: 1});
//   let series1 = error.column(seriesData_1);
//   series1.error().valueLowerError(700);
//   series1.error().valueUpperError(800);
//   // const complexErr={
    
//   // }

// function Grafics() {
//   return (
//     <>
//       <NavBar />
//       <main className="container-fluid g-0">
//         <section className="row g-0 ">
//           <article className="col-12 d-flex justify-content-center my-0">
//             <div class="card w-30  text-bg-dark text-center">
//               <div class="card-body">
//                 <h2 class="card-title">Graficas de sensores</h2>
//                 <h5 class="card-title">24 Noviembre 2022</h5>
//                 <p class="card-text">Suchiapa chiapas</p>
//               </div>
//             </div>
//           </article>

//           <article className="col-12 col-md-6 d-flex justify-content-center mt-4">
//             <div class="card w-75  ">
//               <div class="card-body ">
//                 <h5 class="card-title text-center">Humedad y temperatura</h5>
//                 <div className="d-flex justify-content-center">
//                 <AnyChart {...complexMulti} />
//                 </div>

//                 {/* <a href="#" class="d-md-none d-block  displa btn btn-primary">
//                   Grafica
//                 </a> */}
//               </div>
//             </div>
//           </article>

//           <article className="col-12 col-md-6 d-flex justify-content-center mt-4">
//             <div class="card w-75  ">
//               <div class="card-body">
//                 <h5 class="card-title text-center">Luz</h5>
//                 <p class="card-text">
//                 <div className="d-flex justify-content-center">
//                 <AnyChart
//                   instance={stage2}
//                   id="Luz"
//                   width={400}
//                   height={300}
//                   charts={[chart2]}
//                 />
//                 </div>
//                 </p>
//                 {/* <a href="#" class="d-md-none d-block  displa btn btn-primary">
//                   Grafica
//                 </a> */}
//               </div>
//             </div>
//           </article>

//           <article className="col-12 col-md-6 d-flex justify-content-center mt-4">
//             <div class="card w-75 justify-content-center">
//               <div class="card-body ">
//                 <h5 class="card-title text-center">Sensor ultrasonico</h5>
//                 <p class="card-text">
//                 <div className="d-flex justify-content-center">
//                   <AnyChart 
//                     {...complexBar} 
                    
//                   />
//                   </div>
//                 </p>
//               </div>
//             </div>
//           </article>

//           <article className="col-12 col-md-6 d-flex justify-content-center mt-4">
//             <div class="card w-75  ">
//               <div class="card-body">
//                 <h5 class="card-title text-center">Grafica de error en temperatura</h5>
//                 <p class="card-text">
//                 <div className="d-flex justify-content-center">
//                   <AnyChart
//                   instance={error}
//                   id="Error"
//                   width={400}
//                   height={300}
//                   charts={[data]}
//                 />
//                 </div>
//                 </p>
//               </div>
//             </div>
//           </article>
//         </section>
//       </main>
//     </>
//   );
// }

// export default Grafics;
