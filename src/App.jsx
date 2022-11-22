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

function App() {
  return (
    
    <Router>
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
              <Route path="/Graphics" element={<Graphics />} />
          </Routes>
      </div>
    </Router>
  );
}
export default App;
