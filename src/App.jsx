import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/views/index";
import CardBar from "./components/views/Card";
import Tables from "./components/views/Tables"
import { ProtectedRoute } from "./components/Funtion/ProtectedRoute.js ";
import { AuthProvider } from "./context/AuthContext";



function App() {
  return (
    <div className="index">
       <AuthProvider>
       <Router>
      <div className="App ">      
          <Routes>
            <Route exact path="/" element={ <Login />} />
              <Route path="/Graphics" element={<ProtectedRoute><CardBar /></ProtectedRoute>} />
              <Route path="/Tables" element={<ProtectedRoute><Tables /></ProtectedRoute>} />
          </Routes>
      </div>
    </Router>
       </AuthProvider>
    </div>
  );
}
export default App;
