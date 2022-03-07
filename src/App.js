import React from "react"; //para versiones anteriores a la v17 de React
// import logo from "./logo.svg";
import "./App.css";
// import ComunicacionComponentes from "./componentes/ComunicacionComponentes";
// import CicloVida from "./componentes/CicloVida";
// import AjaxApis from "./componentes/AjaxApis";
// import ContadorHooks from "./componentes/ContadorHooks";
// import ScrollHooks from "./componentes/ScrollHooks";
import RelojHooks from "./componentes/RelojHooks";

function App() {
  // let nombre = "Nuria";
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="nombre"> Nombre: </label>
        <input type="text" id="nombre" />
        <h1>{nombre}</h1>
        <hr />
        <ComunicacionComponentes />
        <hr />
        <CicloVida />
        <hr /> */}
        {/* <AjaxApis /> */}
        {/* <hr />
        <ContadorHooks titulo="Seguidores" /> */}
        {/* <hr />
        <ScrollHooks /> */}
        <hr />
        <RelojHooks />
      </header>
    </div>
  );
}

export default App;
