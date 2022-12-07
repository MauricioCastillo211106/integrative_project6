import React from "react";
import Logo from "../../assets/img/Logo.png";
import { useAuth } from "../../context/AuthContext";
import "../../assets/css/NavBar.css"






function NavBar (){
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

    return(
<header className="navbar navbar-expand-lg  navbar-dark bd-navbar sticky-top p-0" >
    <nav className="container-xxl bd-gutter flex-wrap flex-lg-nowrap text-bg-dark">
      <div className="container justify-content-center">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                  <img src={Logo} alt="" width="40" height="40"  className="d-inline-block align-text-center"/>
                    <p className="navbar-brand ms-2" href="#">
                           Pastelatti
                   </p>
                  </a>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="/Tables" className="nav-link text-white">
                  <div className="Tables_container">
                  {/* <BackupTableIcon className=" mx-auto mb-1 " fontSize="large"/> */}
                  </div>
                Tablas
              </a>
            </li>
            <li>

            </li>
            <li>
            <a href="/" className="nav-link text-white" onClick={handleLogout}>
                  <div className="Login_container">
                  {/* <AccountCircleOutlinedIcon className=" mx-auto mb-1 " fontSize="large"/> */}
                  </div>
                cerrar sesion
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</header>
    );
}
export default NavBar;