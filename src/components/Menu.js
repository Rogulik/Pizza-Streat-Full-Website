import React from 'react'
import chickenWings from '../img/chicken-wings.jpg'
import chocolateSmoothie from '../img/chocolate-smoothie.jpg'
import '../styles/Menu.scss'

const Menu = () => {
  return (
    <div className='menu__container'>
        <h2 className='menu__header'>Not the only pizza</h2>
        
        <p className='menu__text'>
        Aenean viverra rhoncus pede. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non enim eleifend felis pretium feugiat. Vivamus quis mi. Phasellus a est. Phasellus magna. In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a felis in nunc fringilla tristique. 
        <button className='menu__button'><a>our menu</a></button>
        </p>
        <div className='menu__photo-container'>
            <img src={chickenWings} alt='chicken wings' className='menu__photo-1'/>
            <img src={chocolateSmoothie} alt='chocolate smoothie' className='menu__photo-2'/>
        </div>
    </div>
  )
}

export default Menu
    