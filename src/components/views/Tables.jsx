import {useEffect, useState} from "react";
import {Link, Route, useNavigate} from "react-router-dom";
import "../../assets/css/Prueba.css"
import * as React from 'react';
import NavBar from "./NavBar";

export default function Tables() {

    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
        const [productos, setProductos] = useState([]);



    useEffect(() => {
        fetch("http://localhost:3000/api/product/view")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setProductos(result)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])


        const renderProducto = () => {

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [open, setOpen] = useState(false);
            const handleOpen = () => setOpen(true);
            const handleClose = () => setOpen(false);

            return (
                <tbody>
                <div>


                {

                    productos.map((product, index) => (

                        <tr className="border-bottom" id={product.id}>
                            <td >
                                <div className="d-flex align-items-center" >
                                    <div>
                                        <img
                                            className="pic"
                                            src={product.numero}
                                        />
                                    </div>
                                    <div className="ps-3 d-flex flex-column justify-content">
                                        <p className="fw-bold">
                                            <span className="ps-1">{product.Temperatura}</span>
                                        </p>
                                        <small className=" d-flex">
                          <span className=" text-muted">
                            {product.description}
                          </span>
                                        </small>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex">
                                    <p className="pe-3">
                                        Price:  <span className="red">${product.Fecha}</span>
                                    </p>

                                </div>
                            </td>


                        </tr>

                    ))
                }
                </div>

                </tbody>
            );
        };


  return (
    <>
        <NavBar/>
        <div className="Temperatura d-flex justify-content-center my-0 ">
        <div class="table-responsive card w-75  text-bg-red text-center">
        <h3>Temperatura</h3>
  <table class="table table-striped">
        {renderProducto()}
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Temperatura</th>
      <th scope="col">Fecha</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>

    </tr>
  </tbody>

  </table>
</div>
        </div>

    </>
  );
}
