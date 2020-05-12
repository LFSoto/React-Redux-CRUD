import React, { Fragment, useEffect } from "react";
import Producto from "./Producto";

//Redux
import { useSelector, useDispatch } from "react-redux";
//Para mandar a llamar este action debe hacerse mediante el dispatch
import { obtenerProductosAction } from "../actions/productoActions";

const Productos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //Consultar la API
    const cargarProductos = () => dispatch(obtenerProductosAction());
    cargarProductos();
  }, [dispatch]);

  //obtener el state
  const productos = useSelector((state) => state.productos.productos);
  const error = useSelector((state) => state.productos.error);
  const cargando = useSelector((state) => state.productos.loading);

  return (
    <Fragment>
      <h2 className="text-center my-5">Listado de Productos</h2>

      {error ? (
        <p className="font-weight-bold alert alert-danger text-center">
          Hubo un error
        </p>
      ) : null}

      {cargando ? <p className="text-center">Cargando..</p> : null}

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0 ? (
            <tr>
              <td>No hay productos</td>
            </tr>
          ) : (
            productos.map((producto) => (
              <tr key={producto.id}>
                <Producto producto={producto} />
              </tr>
            ))
          )}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Productos;
