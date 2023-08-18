import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../utils/UserAuthContext";

export default function Navbar() {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand mb-0 h1" to="/home">
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
              <i className=" btn mx-1 fa fa-icon">Welcome{" "}
                {user
                  ? user.displayName === null
                    ? user.phoneNumber
                    : user.displayName
                  : ""}</i>
              <Button className=" btn btn-danger mx-1 fa fa-sign-out-alt" onClick={handleLogout}></Button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
