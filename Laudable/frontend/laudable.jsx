import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
    // debugger;
    const root = document.getElementById('root');
    const store = createStore();


    ReactDOM.render(<h1>Shit's working this far bruh</h1>, root);
})
