import { combineReducers } from "redux";
import productosReducer from "./productosReducer";
import alertaReducer from "./alertaReducer";

//En este archivo se combinan los reducers en uno solo

export default combineReducers({
  productos: productosReducer,
  alerta: alertaReducer,
});
