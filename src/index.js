import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
const loader = document.querySelector('.loader')
const showLoader = ()=> loader.classList.remove('loader--hide') 
const hideLoader = ()=> loader.classList.add('loader--hide') 

setTimeout(()=>{
    ReactDOM.render(
    <App 
        hideLoader={hideLoader}
        showLoader={showLoader}  
    />,
     document.getElementById('root')
     );

},2000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
