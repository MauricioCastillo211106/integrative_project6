import React from "react";
import Logo from "../../assets/img/logofinal.png";
import "../../assets/css/NavBar_Account.css";

export default function Navbar_Account() {
  return (
    <header className="navbar navbar-expand-lg  navbar-dark bd-navbar sticky-top p-0">
      <nav className="container-xxl bd-gutter flex-wrap flex-lg-nowrap text-bg-dark d-flex justify-content-center align-items-center">
      <div className="d-flex">
      <a
              href="/"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <img
                src={Logo}
                alt=""
                width="70"
                height="70"
                className="d-inline-block align-text-center"
              />
              <p className="navbar-brand ms-2" href="#">
                Pastelatti
              </p>
            </a>
      </div>
      </nav>
    </header>
  );
}
