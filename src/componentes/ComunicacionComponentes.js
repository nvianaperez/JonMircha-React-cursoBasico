import React, { Component } from "react";

export default class Padre extends Component {
  state = {
    contador: 0,
  };

  incrementarContador = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <>
        <h2>Comunicación entre Componentes</h2>
        <p>
          Contador <b>{this.state.contador}</b>
        </p>
        <Hijo mensaje="Mensaje para el Hijo 1" />
        <Hijo
          myIncrement={this.incrementarContador}
          mensaje="Mensaje para el Hijo 2"
        />
      </>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h3>{props.mensaje}</h3>
      <button onClick={props.myIncrement}>Incrementar Contador</button>
    </>
  );
}
