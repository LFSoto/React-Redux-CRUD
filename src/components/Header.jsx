import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const redireccionNuevo = () => {
    history.push("/productos/nuevo");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>
          <Link to={"/"} className="text-light">
            CRUD - React, Redux, REST API & Axios
          </Link>
        </h1>
      </div>
      <button
        className="btn btn-danger nuevo-post d-block d-md-inline-block"
        onClick={redireccionNuevo}
      >
        Agregar Producto &#43;
      </button>
    </nav>
  );
};

export default Header;
