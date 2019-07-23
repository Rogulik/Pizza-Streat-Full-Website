import React from 'react'
import MainNav from '../../generalComponents/components/MainNav'
import Footer from '../../generalComponents/components/Footer'
import PhoneNav from '../../generalComponents/components/Phone-nav'
import '../styles/MenuPage.scss'
import photo1 from '../img/menu-1.jpg'
import photo2 from '../img/menu-2.jpg'
import photo3 from '../img/menu-3.jpg'
import photo4 from '../img/menu-4.jpg'

const MenuPage = () => {
    return (
        <div className='MenuPage__container'>
            <MainNav />
            <PhoneNav/>
                {/* <div className='MenuPage__arrow'>
                    <span className="MenuPage__arrow--text">Hover me</span>
                    <img src={arrow} alt='arrow' className='MenuPage__arrow--image' />

                </div> */}
                <div className='MenuPage__block'>
                    <div className='MenuPage__set'>
                        <img src={photo1} alt='menu' className='MenuPage__set--photo' />
                        <i className="fas fa-book-open gradient-1"></i>
                    </div>
                    <div className='MenuPage__set'>
                        <img src={photo2} alt='menu' className='MenuPage__set--photo' />
                        <i className="fas fa-pizza-slice gradient-2"></i>
                    </div>
                    <div className='MenuPage__set'>
                        <img src={photo3} alt='menu' className='MenuPage__set--photo' />
                        <i className="fas fa-layer-group gradient-1"></i>
                    </div>
                    <div className='MenuPage__set'>
                        <img src={photo4} alt='menu' className='MenuPage__set--photo' />
                        <i className="fas fa-coffee gradient-2"></i>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default MenuPage
