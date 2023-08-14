import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand mb-0 h1" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active fa fa-home"
                  aria-current="page"
                  to="/home"
                >
                  {/* Home */}
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link className=" btn mx-1 fa fa-user-alt"></Link>
              <Link className="btn mx-1 fa fa-icon " to="/login">
                Login
              </Link>
              <Link className=" btn mx-1 fa fa-sign-out-alt"></Link>
              
              <Link className="btn mx-1 fa fa-icon" to="/signup">
                Signup
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
