import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Login from "./components/views/index";
import Graphics from "./components/views/Graphics";
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
