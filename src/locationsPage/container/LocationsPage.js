import React,{useState} from 'react'
import GoogleMap from '../components/GoogleMap'
import Header from '../components/Header'
import Addresses from '../components/Addresses'
import MainNav from '../../generalComponents/components/MainNav'
import PhoneNav from '../../generalComponents/components/Phone-nav'
import Footer from '../../generalComponents/components/Footer'
import '../styles/LocationsPage.scss'



const LocationsPage = () => {
    return (
        <div className='LocationsPage__container'>
            <PhoneNav />
            <MainNav />
            <Header />
            <Addresses />
            <GoogleMap />
            <Footer />
        </div>
    )
}

export default LocationsPage
