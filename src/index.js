import React from 'react';
import ReactDom from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';


//const saludo = <h1>Hola Mundo</h1>;
//console.log(saludo.props.children);

const divRoot = document.querySelector('#root');

//ReactDom.render(<PrimeraApp />, divRoot);
ReactDom.render(<CounterApp value={0} />, divRoot);