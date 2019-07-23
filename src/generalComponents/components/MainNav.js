import React, {useState} from 'react'
import {NavLink,Link} from 'react-router-dom'
import logo from '../img/adjusted-logo.png'
import NavItem from './NavItem'
import '../styles/MainNav.scss'





export default function MainNav() {
     const [scroll,setScroll] = useState(false)
     window.addEventListener('scroll', () => {
        const isTop = window.scrollY < 100
        if(isTop !== true) {
            setScroll(true)
        } else {
          setScroll(false)
        }
     })

  return (
    <nav id='moving' className={scroll ? 'navigation navigation__moved' : 'navigation'} >
      <Link to='/'>
        <img src={logo} alt='logo' className='logo' />
      </Link>
      
      <ul className="navigation__list">
       <NavItem linkAdress='/' linkName='Home' />
       <NavItem linkAdress='/menu' linkName='Our Menu' />
       <NavItem linkAdress='/locations' linkName='Locations' />
      </ul>
    </nav>
  )
}
