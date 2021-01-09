import React, { useState } from "react";
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

    /*const [ nombre, setNombre ] = useState('Goku');
    console.log( nombre, setNombre );*/
    const [ counter, setCounter  ] = useState(value);

    //funcion del boton
    const handleAdd = () => {
        // console.log(e);
        setCounter( counter + 1);
        // setCounter((c) => c + 1);    // se recomineda usar cuando cuando solo se entrega el valor del atributo setCounter y falta el de counter.
    }

    const handleReset = () => {
        setCounter( value );
    }

    const handleSubtract = () => {
        setCounter( counter - 1);
    }

    return (
        <div>
            <h1>CounterApp</h1>
            {/*<h2>{value}</h2>*/}
            <h2>{counter}</h2>
            <button onClick={ handleAdd }> + 1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubtract }> - 1</button>
        </div>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;