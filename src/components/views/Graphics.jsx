import React from "react";
import NavBar from "./NavBar.jsx";
import AnyChart from "anychart-react";
import anychart from "anychart";
import Bar_Err from "../Funtion/Graphics_funtion"


let stage = anychart.graphics.create();
let stage2 = anychart.graphics.create();
let stage3 = anychart.graphics.create();
let chart1 = anychart.line([1, 2, 3]);
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
    ["February", 12000, 15001],
    ["March", 13000, 16500],
    ["April", 10000, 13000],
    ["May", 9000, 11000]
  ]);
  let error = anychart.column();
  var seriesData_1 = data.mapAs({x: 0, value: 1});
  let series1 = error.column(seriesData_1);
  series1.error().valueLowerError(700);
  series1.error().valueUpperError(800);

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

          <article className="col-12 col-md-6 d-flex justify-content-center mt-4">
            <div class="card w-75  ">
              <div class="card-body ">
                <h5 class="card-title text-center">Humedad</h5>
                <div className="d-flex justify-content-center">
                <AnyChart
                  instance={stage}
                  id="secondChart"
                  width={400}
                  height={300}
                  charts={[chart1]}
                />
                </div>

                {/* <a href="#" class="d-md-none d-block  displa btn btn-primary">
                  Grafica
                </a> */}
              </div>
            </div>
          </article>

          <article className="col-12 col-md-6 d-flex justify-content-center mt-4">
            <div class="card w-75  ">
              <div class="card-body">
                <h5 class="card-title text-center">Temperatura</h5>
                <p class="card-text">
                <div className="d-flex justify-content-center">
                <AnyChart
                  instance={stage2}
                  id="Temperatura"
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
