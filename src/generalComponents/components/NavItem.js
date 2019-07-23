import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/NavItem.scss'

const NavItem = ({linkAdress,linkName}) => {
    return(
      <div className="navigation__item">
        <NavLink to={linkAdress} className="navigation__link" activeClassName="isActive"exact={true}>{linkName}</NavLink> 
      <i className="fas fa-pizza-slice mini"></i>
      </div>
    )
  }

  export default NavItem