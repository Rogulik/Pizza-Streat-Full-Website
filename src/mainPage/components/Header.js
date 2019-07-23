import React from 'react'
import '../styles/Header.scss'
import MainNav from '../../generalComponents/components/MainNav'
import logo from '../img/adjusted-logo.png'
import Div100vh from 'react-div-100vh'

export default function Header() {
  return (
    
      <header className="Header">
        <Div100vh>
          <MainNav />
          <div className='Header__logo-box'>
              <img src={logo} alt='logo' className='Header__logo'/>
              <h1 className='Header__logo-text'>Taste the real Italian cousine.
                <span className='Header__logo-text--subtext'>With fresh and carefully prepared food.</span>
              </h1>
              
          </div>
          <a><i className="fas fa-pizza-slice arrow"></i></a>
          <div className='Header__social-media'>
          <a href='https://www.facebook.com/PizzaStreatOfficialPage/' target='_blank'>
              <i className="fab fa-facebook-square"></i>
          </a>
            <i className="fab fa-instagram"></i>
            <i className ="fab fa-tripadvisor"></i>
          </div>
          </Div100vh>
      </header>
  )
}


