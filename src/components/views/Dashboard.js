import {useEffect, useState} from "react";
import {Link, Route, useNavigate} from "react-router-dom";
import "../../assets/scss/Prueba.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
;


const Dashboard = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
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
                                            src={product.name}
                                        />
                                    </div>
                                    <div className="ps-3 d-flex flex-column justify-content">
                                        <p className="fw-bold">
                                            <span className="ps-1">{product.nameProduc}</span>
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
                                        Price:  <span className="red">${product.price}</span>
                                    </p>

                                </div>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <span className="pe-3 text-muted">Stock:</span>
                                    <span className="pe-3">{product.amount}</span>
                                    <div className="col-sm-3">
                                        <a
                                            type="button"
                                            className="btn btn-primary btn-sm"
                                            onClick={()=>{
                                                    handleOpen()
                                            }}
                                        >
                                            Edit
                                        </a>
                                    </div>
                                    <div className="col-sm-3">
                                        <a
                                            type="button"
                                            className="btn btn-danger btn-sm"
                                            onClick={ () => {
                                                var myHeaders = new Headers();
                                                myHeaders.append("Content-Type", "application/json");

                                                var raw = JSON.stringify({
                                                    "id": product.id
                                                });

                                                var requestOptions = {
                                                    method: 'DELETE',
                                                    headers: myHeaders,
                                                    body: raw,
                                                    redirect: 'follow'
                                                };

                                                fetch("http://localhost:3000/api/product/delete", requestOptions)
                                                    .then(response => response.text())
                                                    .then(result => console.log(result))
                                                    .catch(error => console.log('error', error));
                                            }
                                            }
                                        >
                                            Delete
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <Modal
                                        keepMounted
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="keep-mounted-modal-title"
                                        aria-describedby="keep-mounted-modal-description"
                                    >
                                        <Box sx={style}>
                                            <div className='modal-update text-center'>
                                                <h3 className="mt-3  ">Titulo</h3>
                                                <input className="form-control" type="text" placeholder="Titulo" defaultValue={product.nameProduc} id="titulo"
                                                       aria-label="default input example" />
                                                <h3 className="mt-5  ">Descripcion</h3>
                                                    <input className="form-control" type="text" id="descripcion" defaultValue={product.description}
                                                           placeholder="Descripción"
                                                           aria-label="default input example" />
                                                <h3 className="mt-5  ">Precio</h3>
                                                        <input
                                                        className="form-control" type="number" placeholder="Precio" id="precio" defaultValue={product.price}
                                                        aria-label="default input example" />
                                                <h3 className="mt-5  ">Cantidad</h3>
                                                            <input
                                                        className="form-control" type="number" placeholder="Cantidad" id="cantidad" defaultValue={product.amount}
                                                        aria-label="default input example" />
                                                <button type="submit" className="btn btn-primary mt-4" onClick={()=>{
                                                    var formdata = new FormData();
                                                    formdata.append("id", product.id);
                                                    console.log(product.id)
                                                    formdata.append("nameProduc", document.getElementById('titulo').value);
                                                    formdata.append("description", document.getElementById('descripcion').value);
                                                    formdata.append("price", document.getElementById('precio').value);
                                                    formdata.append("amount", document.getElementById('cantidad').value);



                                                    var requestOptions = {
                                                        method: 'PUT',
                                                        body: formdata,
                                                        redirect: 'follow'
                                                    }
                                                    fetch("http://localhost:3000/api/product/update", requestOptions)
                                                        .then((res) => res.json)
                                                        .then((data) => console.log(data))
                                                        .catch((err) => console.error(err));


                                                }}>Enviar</button>
                                            </div>
                                        </Box>
                                    </Modal>
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
            <div className="auth-wrapper">




                <div className="card dash-inner ">
                    <div>
                        <div className="d-flex">
                            <a type="button" className="btn btn-success btn-sm ms-auto" href="/create-product">
                                Add new product
                            </a>
                        </div>
                        <div className="table-responsive px-md-4 px-2 pt-3 justify-content-center ">
                            <table className="table table-borderless">

                                {renderProducto()}

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

export default Dashboard;
