import React from "react";
import "../../assets/scss/Prueba.css"
import DeleteIcon from '@material-ui/core/Icon';





class Delete extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null
        }
    }

    handleSubmit =  (event) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": document.getElementById('ID').value
        });

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("http://localhost:3000/api/product/delete", requestOptions)
            .then((res) => res.json)
            .then((data) => console.log(data))
            .catch((err) => console.error(err));

    }






    render() {
        return (
            <div className="auth-wrapper">
                <div className="card auth-inner">
                    <div>
                        <div className="table-responsive px-md-4 px-2 pt-3">
                            <form action="" method="delete" onSubmit={this.handleSubmit}>


                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="id"
                                        id="ID"
                                        className="form-control"
                                        placeholder="id"
                                        ref={node => (this.inputNode = node)}

                                    />
                                </div>


                                <br/>
                                <div className="d-flex ">

                                    <a type="button" className="btn btn-danger me-auto" href="/dashboard">
                                        Cancel
                                    </a>


                                    {/*<a type="button" className="btn btn-success ms-auto" onClick={() => {}}>*/}
                                    {/*  Save*/}
                                    {/*</a>*/}
                                    <a type="button"  className="btn btn-success ms-auto"  >
                                        <button href="/dashboard" type="submit" className="btn " href="/dashboard">
                                            Submit
                                        </button>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Delete;