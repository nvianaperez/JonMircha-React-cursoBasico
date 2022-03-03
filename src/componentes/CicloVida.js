import React, { Component } from "react";

class Reloj extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log(3, "El componente ha sido eliminado del DOM");
  }
  //se ejecuta justo cuando el componente no exista

  render() {
    return <h3>{this.props.hora}</h3>;
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    console.log(0, "El componente se inicializa, aún NO está en el DOM");

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.temporizador = null;
  }

  componentDidMount() {
    console.log(1, "El componente ya se encuentra en el DOM");
  }
  //y a partir de aquí ya puedo hacer cualquier cosa que requiere que mis elementos estén insertados en el DOM, peticiones asíncronas, solicitud a una API, etc...

  componentDidUpdate(prevProps, prevState) {
    console.log(2, "El estado o las props del componente han cambiado");
    console.log(prevProps);
    console.log(prevState);
  }
  //permite pasar las propiedades y estados previos por si yo necesito utilizarlos antes de actualizar el nuevo estado

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
    this.setState({
      visible: true,
    });
  };

  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log(
      4,
      "El componente se dibuja o re-dibuja por algún cambio en state, props,.."
    );
    return (
      <>
        <h2>Ciclo de Vida de los Componentes de Clase</h2>
        {/* si visible es false no se muestra el Reloj, y como Reloj tiene el método ComponentWillUnmount se elimina del DOM */}
        {this.state.visible && <Reloj hora={this.state.hora} />}
        <button onClick={this.iniciar}>iniciar</button>
        <button onClick={this.detener}>detener</button>
      </>
    );
  }
}
