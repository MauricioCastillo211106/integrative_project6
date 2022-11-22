import React from "react";
import Logo from "../../assets/img/Logo.png";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import "../../assets/css/NavBar_Account.css"
 
export default function Navbar_Account() {

        return (
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
        
                  <ul className="nav col-12 col-lg-auto my-2 justify-content-center  my-md-0 text-small">
                    <li>
                    <a href="/" className="nav-link text-white">
                          <div className="Sesion_container">
                          <AccountCircleOutlinedIcon className=" mx-auto mb-1 " fontSize="large"/>
                          </div>
                        Iniciar sesion
                      </a>
                    </li>
                                        <li>
                    <a href="/sign-up" className="nav-link text-white">
                          <div className="Registrarse_container position-relative">
                          <HowToRegIcon className=" mx-auto mb-1 " fontSize="large"/>
                          </div>
                        Registrarse
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