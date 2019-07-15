import React,{useState} from 'react'
import '../styles/Phone-nav.scss'



const PhoneNav = () => {
    const [toggle,setToggle] = useState(true)
    const toggleLabel = () => {
        setToggle(!toggle)
    }
    return (
        <div className='phone-nav'>
            <input type='checkbox' className='phone-nav__toggle' id='toggle-input' />
            <label htmlFor='toggle-input' className={toggle ? 'phone-nav__label hamburger hamburger--spin': 'phone-nav__label hamburger hamburger--spin is-active'} onClick={toggleLabel}>
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
            </span>
            </label>
            <nav className='phone-nav__container'>
                    <ul className='phone-nav__list'>
                    <li className='phone-nav__list-item'>
                        <a className='phone-nav__link' href='#home'>Home.
                        </a>
                    </li>
                    <li className='phone-nav__list-item'>
                        <a className='phone-nav__link' href='#about'>Our Location.
                        </a>
                    </li>
                    <li className='phone-nav__list-item'>
                        <a className='phone-nav__link' href='#grafik'>Menu.
                        </a>
                    </li>
                    <li className='phone-nav__list-item'>
                        <a className='phone-nav__link' href='#trenerzy'>
                        Gallery.
                        </a>
                    </li>
                
                    <li className='phone-nav__list-item'>
                        <a className='phone-nav__link' href='#kontakt'>
                        Contact Us.
                        </a>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}

export default PhoneNav
