import React from "react";
import Dispersion from "./Dispersión.jsx"
import RegresionLineal from "./RegresionLineal.jsx"
import Bara from "./Bar.jsx"
import Lineal from "./Lineal.jsx"

const CardBar = () => {

  return (
    <>
      <div className="container-fluid g-0 mt-5">
        <div className="row g-0 ">
          <div className="col-12 col-md-6 d-flex justify-content-around mb-5">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Regreción lineal</h5>
                <p className="card-text mb-3">Luminocidad</p>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#dist"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  
                >
                  Ver
                </button>
                <div className="collapse" id="dist">
                  <div className="card-body">
                    <Dispersion/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-around mb-5">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Disperción</h5>
                <p className="card-text mb-3">Ultrasonico</p>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#lum"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Ver
                </button>
                <div className="collapse" id="lum">
                  <div className="card-body">
                    <RegresionLineal/>
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
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#bar"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Ver
                </button>
                <div className="collapse" id="bar">
                  <div className="card-body">
<Bara/>
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
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#temp"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Ver
                </button>
                <div className="collapse" id="temp">
                  <div className="card-body">
<Lineal/>
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
