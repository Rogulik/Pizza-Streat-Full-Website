import React from 'react';
import ReactDOM from 'react-dom';
import './generalComponents/styles/index.scss';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';


const loader = document.querySelector('.loader')
const showLoader = ()=> loader.classList.remove('loader--hide') 
const hideLoader = ()=> loader.classList.add('loader--hide') 

    ReactDOM.render(
    <AppRouter 
        hideLoader={hideLoader}
        showLoader={showLoader}  
    />,
     document.getElementById('root')
     );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
