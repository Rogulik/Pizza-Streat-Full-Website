import React from 'react'
import {Link} from 'react-router-dom'
import chickenWings from '../img/chicken-wings.jpg'
import chocolateSmoothie from '../img/chocolate-smoothie.jpg'
import '../styles/Menu.scss'

const Menu = () => {
  return (
    <div className='menu__container'>
        <h2 className='menu__header'>Not the only pizza</h2>
        
        <p className='menu__text'>
        Pizza Streat sells one-sized brick oven thin crust pizzas with various combinations of toppings over freshly made dough. Additionally, pasta, sandwiches, burgers, flavored chicken, fries, nachos, rice meals, fruit drinks, sodas and shakes are included in the menu. Pizza Streat sells one-sized brick oven thin crust pizzas with various combinations of toppings over freshly made dough. Additionally, pasta, sandwiches, burgers, flavored chicken, fries, nachos, rice meals, fruit drinks, sodas and shakes are included in the menu.Over the years of perfecting,a unique, thin and crispy crust pizza, we take pride of what we serve. We make pizza from scratch with freshest ingredients and reasonable price. If you are a pizza die-hard it's worth dining with us!
        <Link to='/menu' className='menu__link'>our menu</Link>
        </p>
        <div className='menu__photo-container'>
            <img src={chickenWings} alt='chicken wings' className='menu__photo-1'/>
            <img src={chocolateSmoothie} alt='chocolate smoothie' className='menu__photo-2'/>
        </div>
    </div>
  )
}

export default Menu
    