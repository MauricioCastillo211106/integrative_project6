import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Login from "./components/views/index";
import Register from "./components/views/Register.jsx";
import Forgot from "./components/views/Forgot";
import Dashboard from "./components/views/Dashboard";
import Delete from "./components/views/Delete";

import EditProduct from "./components/views/EditProduct";
import CreateProduct from "./components/Funtion/CreateProduct";
import ConfirmUser from "./components/Funtion/ConfirmerUser.js";
import Recovery from "./components/views/Recovery_password";
import Graphics from "./components/views/Graphics";
import NavBar from "./components/views/NavBar";
import Tables from "./components/views/Tables"

function App() {
  return (
    
    <Router>
      <div className="App ">      
          <Routes>
            <Route exact path="/" element={<Login />} />
              <Route path="/Graphics" element={<Graphics />} />
              <Route path="/Tables" element={<Tables />} />
          </Routes>
      </div>
    </Router>
  );
}
export default App;
