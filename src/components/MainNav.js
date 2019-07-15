import React, {useState} from 'react'
import logo from '../img/adjusted-logo.png'
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
      <img src={logo} alt='logo' className='logo' />
      <ul className="navigation__list">
        <li className="navigation__item">Home <i className="fas fa-pizza-slice mini"></i></li>
        <li className="navigation__item">Locations <i className="fas fa-pizza-slice mini"></i></li>
        <li className="navigation__item">Our Menu <i className="fas fa-pizza-slice mini"></i></li>
        <li className="navigation__item">Contact us <i className="fas fa-pizza-slice mini"></i></li>
        <li className="navigation__item">Gallery <i className="fas fa-pizza-slice mini"></i></li>
        <li className="navigation__item">Join our team <i className="fas fa-pizza-slice mini"></i></li>
      </ul>
    </nav>
  )
}
