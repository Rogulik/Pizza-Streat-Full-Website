import React from 'react'
import '../styles/Header.scss'
import MainNav from './MainNav'
import logo from '../img/adjusted-logo.png'


export default function Header() {
  return (
    <header className="Header">
        <MainNav />
        <div className='Header__logo-box'>
            <img src={logo} alt='logo' className='Header__logo'/>
            <h1 className='Header__logo-text'>Taste the real Italian cousine.</h1>
            
        </div>
        <a><i className="fas fa-pizza-slice arrow"></i></a>
        <div className='Header__social-media'>
        <a href='https://www.facebook.com/PizzaStreatOfficialPage/' target='_blank'>
            <i className="fab fa-facebook-square"></i>
        </a>
          <i className="fab fa-instagram"></i>
          <i className ="fab fa-tripadvisor"></i>
        </div>
       
    </header>
  )
}


