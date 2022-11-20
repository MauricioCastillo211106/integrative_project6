import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Login from "./components/views/index";
import Register from "./components/views/Register.jsx";
import Forgot from "./components/views/Forgot";
import Dashboard from "./components/views/Dashboard";
import Delete from "./components/views/Delete";
import EditProduct from "./components/views/EditProduct";
import CreateProduct from "./components/Funtion/CreateProduct";
import Logo from  "./assets/img/img.png"
import ConfirmUser from "./components/Funtion/ConfirmerUser.js";
import Recovery from "./components/views/Recovery_password"

function App() {
  return (
    
    <Router>
       <Navbar />
      <div className="App ">      
          <Routes>
            <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/forgot-password" element={<Forgot />} />
              <Route path="/sign-up" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/edit-product" element={<EditProduct />} />
              <Route path="/create-product" element={<CreateProduct />} />
              <Route path="/recovery-password" element={<Recovery />} />
              <Route path="/delete-product" element={<Delete />} />
              <Route path="/confirmUser" element={<ConfirmUser />} />
          </Routes>
      </div>
    </Router>
  );
}
function Navbar() {
  // visible on every page
  const location = useLocation();
    return (
      <nav className="navbar navbar-expand-lg fixed-top mb-3 navbar-dark bg-dark">
        <img src={Logo}/>
        <div className="container">
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );

  
}

export default App;
