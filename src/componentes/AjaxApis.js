import React, { Component } from "react";

function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}

export default class AjaxApis extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); //me da un array de 20 pokemons con dos propiedades (name y url)
        //para cada elemento voy a coger la url para tener la imagen
        data.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };
              //para cada elemento (extraída la info id, name y avatar de cada elemento) me lo agregas [spread operator, elemento]
              let pokemones = [...this.state.pokemons, pokemon];
              //y actualizas su estado, para que se vuelva a renderizar
              this.setState({ pokemons: pokemones });
            });
        });
      });
  }

  render() {
    return (
      <>
        <h2>Peticiones asíncronas en componentes de clase</h2>
        {this.state.pokemons.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.pokemons.map((el) => (
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
          ))
        )}
        ;
      </>
    );
  }
}
