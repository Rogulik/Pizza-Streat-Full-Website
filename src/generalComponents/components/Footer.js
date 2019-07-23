import React from 'react'
import '../styles/Footer.scss'
import logo2 from '../img/adjusted-logo.png'
import Div100vh from 'react-div-100vh'

const Footer = () => {
  return (
      
    
        <Div100vh style={{height:'60vrh'}} className='footer__container'>
        <div className='footer__sites'>
            <h3>PIZZA STREAT</h3>
                <ul className='footer__list'>
                    <li className='footer__item'>Contact us</li>
                    <li className='footer__item'>Locations</li>
                    <li className='footer__item'>Policy</li>
                    <li className='footer__item'>Gallery</li>
                    <li className='footer__item'>Menu</li>
                </ul>
        </div>
        <div className='footer__pizza-streat'>
            <img src={logo2} alt='logo' className='small-logo'/>
            <p>©2015-2019 PIZZA STREAT. ALL RIGHTS RESERVED.</p>
        </div>
        <div className='social__container'>
            <h3>FOLLOW US</h3>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-instagram"></i>
            <i className ="fab fa-tripadvisor"></i>
        </div>
        
        </Div100vh>
    
  )
}

export default Footer
