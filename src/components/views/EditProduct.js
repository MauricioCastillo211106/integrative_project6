import React, {useState} from "react";

class EditProduct extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      file: null,
      product: [],
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit =  (event) => {



    var formdata = new FormData();
    formdata.append("id", document.getElementById('id').value);
    formdata.append("nameProduc", document.getElementById('ProductName').value);
    formdata.append("description", document.getElementById('description').value);
    formdata.append("price", document.getElementById('price').value);
    formdata.append("amount", document.getElementById('amount').value);



    var requestOptions = {
      method: 'PUT',
      body: formdata,
      redirect: 'follow'
    }
    fetch("http://localhost:3000/api/product/update", requestOptions)
        .then((res) => res.json)
        .then((data) => console.log(data))
        .catch((err) => console.error(err));

  }



  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }


  getProduct=()=>{
    fetch("http://localhost:3000/api/product/view")
        .then((res) => res.json)
        .then((data) => {console.log(data)
          this.setState({
            productos: data
          })})
        .catch((err) => console.error(err));
  }
  render() {

    return (
        <div className="auth-wrapper">
          <div className="card auth-inner">
            <div>
              <div className="table-responsive px-md-4 px-2 pt-3">
                <h2 className="">Update</h2>
                <form action="" method="put" onSubmit={this.handleSubmit} onChange={this.getProduct}>
                  <div className="mb-3">
                    <select
                        type="text"
                        name="id"
                        id="id"
                        className="form-control"
                        placeholder="id"
                        ref={node => (this.inputNode = node)}>

                    </select>
                  </div>
                  <div className="mb-3">
                    <input
                        type="text"
                        name="name"
                        id="ProductName"
                        className="form-control"
                        placeholder="Product name"
                        ref={node => (this.inputNode = node)}

                    />
                  </div>
                  <div className="mb-3">
                    <input
                        type="text"
                        name="description"
                        id="description"
                        className="form-control"
                        placeholder="Description"
                        ref={node => (this.inputNode = node)}

                    />
                  </div>
                  <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="price"
                        name="price"
                        placeholder="Price"
                        ref={node => (this.inputNode = node)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                        type="text"
                        name="amount"
                        id="amount"
                        className="form-control"
                        placeholder="Stock"
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



export default EditProduct;
