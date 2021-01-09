import React, { Fragment } from "react";
import PropTypes from 'prop-types'

//const PrimeraApp = ({ saludos = "Hola soy Goku!!!" }) => {
const PrimeraApp = ({ saludos, subtitulo }) => {

    console.log(saludos);

    //const saludos = 'Hola Mundo y muerte a los Cuicos Culiaos!!!';
    const miNombre = {
        nombre: 'Pedro',
        apellido: 'Pérez',
        edad: 41
    }

    console.log(miNombre);

    return (
        <Fragment>
            <h1> {saludos} </h1>
            <p>Mi primera APP en React!</p>
            {/*<div> {JSON.stringify(miNombre)} </div>*/}
            <p> {subtitulo} </p>
        </Fragment>
    );
};

PrimeraApp.propTypes = {
    saludos: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    saludos: 'Hola, soy Guku!!',
    subtitulo: 'Soy el subtitulo!!'
}

export default PrimeraApp;
