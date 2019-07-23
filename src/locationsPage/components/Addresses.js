import React from 'react'
import '../styles/Addresses.scss'


const Address = ({name,phoneNumber}) => {
    return(
        <div className='Addresses__block--square'>
        <div className='position border-bottom'>
            <i class="fas fa-location-arrow"></i>
            <p className='Addresses__block--name'>
                {name}
            </p>
        </div>
        <div className='position'>
            <i class="fas fa-phone"></i>
            <p className='Addresses__block--phone-number'
            >
                {phoneNumber}
            </p>
        </div>
    </div>
    )
}



const Addresses = () => {
    return (
        <section className='Addresses__container'>
            <h2 className='Addresses__header'>Come and try!</h2>
            <div className='Addresses__block'>
                <Address name='Sitio Batong Dalig Avenue, 1920 Taytay, Rizal' phoneNumber='0917-1672067' />
                <Address name='2 nd flr ACM bldg., Sta. lucia cor. De castro ave Ortigas ext. Pasig City' phoneNumber='728-2856' />
                <Address name='205 ipil street St. Joseph Subd., Cainta Rizal' phoneNumber='273-9065 / 0917-9789978' />
                <Address name='MRt avenue corner st mary street central signal p14 zone 3B taguig cty blck 9 lot 14 Al' phoneNumber='798-0528 / 0927-2690516' />
                <Address name='727 E. Pantaleon Rd., Hulo 1550 Mandaluyong, Philippines' phoneNumber='------' />
            </div>
        </section>
    )
}

export default Addresses
