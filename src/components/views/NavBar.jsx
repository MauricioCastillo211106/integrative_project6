import React from "react";
import Logo from "../../assets/img/Logo.png";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import "../../assets/css/NavBar.css"






function NavBar (){
    return(
<>
    <nav className=" fixed-top">
    <div className="px-3 py-0 align-items-center text-bg-dark">
      <div className="container justify-content-center">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <p className="navbar-brand text-start" href="#">
               <img src={Logo} alt="" width="40" height="40"  className="d-inline-block align-text-center"/>
                   Pastelatti
           </p>
          </a>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="/dashboard" className="nav-link text-white">
                  <div className="Tables_container">
                  <BackupTableIcon className=" mx-auto mb-1 " fontSize="large"/>
                  </div>
                Tablas
              </a>
            </li>
            <li>
              <a href="/Graphics" className="nav-link text-white">
              <div className="Graphics_container">
                  <StackedBarChartIcon className=" mx-auto mb-1 " fontSize="large"/>
                  </div>
                Graficas
              </a>
            </li>
            <li>
            <a href="/sign-in" className="nav-link text-white">
                  <div className="Login_container">
                  <AccountCircleOutlinedIcon className=" mx-auto mb-1 " fontSize="large"/>
                  </div>
                cuenta
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </nav>
</>
    );
}
export default NavBar;