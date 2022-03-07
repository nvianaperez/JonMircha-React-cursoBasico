import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  //cada vez que se renderiza la variable de estado de la que depende se ejecuta el useEffect
  useEffect(() => {
    console.log("fase de actualización: moviendo el scroll");
    //creo una función para detectar el scroll Y
    const detectarScroll = () => setScrollY(window.pageYOffset);
    //llamar a esa función
    window.addEventListener("scroll", detectarScroll);

    return () => {
      window.removeEventListener("scroll", detectarScroll);
      console.log("fase descmontaje");
    };
  }, [scrollY]); //componentDidUpdate: cuando la variable scrollY tenga cambios entonces se va a aplicar el useEffect

  //solo debe aplicarel useEffect una vez, cuando se monta la primera vez el componente. Ej.: al solicitar una API
  useEffect(() => {
    console.log("fase de montaje");
  }, []); //componentDidMount

  //fase de desmontaje: porque el useEffect nos puede estar dejando efectos
  //por ejemplo: conexión a algún servicio, petición a alguna API, mandar a ejecutar temporizadores
  useEffect(() => {
    return () => {
      console.log("fase de desmontaje");
      //aquí es donde nos desuscribimos de algún servicio, desconectarte de API, limpiar intervalos de tiempo o manejadores de eventos
    };
  });

  return (
    <>
      <h2>Hooks useEffect y el ciclo de vida</h2>
      <p>Scroll Y del navegador {scrollY} px</p>
    </>
  );
}
