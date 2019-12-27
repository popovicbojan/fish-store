import React from 'react';
// moze da i da se importuje tipa 
// import { Component } from 'react';
// ako hocemo da importujemo samo componente, ali necemo pa nema potrebe, nista ne mijenja
// bitno je da ne pises React vec react pod navodnicima
import { render } from "react-dom";
//u ovom lsucaju smo importovali samo jednu metodu jer nam ostatk ne treba za razliku od prvog importa
import StorePicker from './components/StorePicker';
import App from './components/App';
import Router from './components/Router';
//importujemo komponentu koju smo sacuvali na lokaciji src/components/StorePicker.js
import './css/style.css'


render(<Router/>, document.querySelector('#main'));
