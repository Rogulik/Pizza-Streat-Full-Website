import React from 'react';
import Story from '../components/Story'
import Header from '../components/Header'
import Gallery from '../components/Gallery'
import Unlimited from '../components/Unlimited'
import Menu from '../components/Menu'
import Photos from '../components/Photos'
import Form from '../components/Form'
import Footer from '../../generalComponents/components/Footer'
import PhoneNav from '../../generalComponents/components/Phone-nav'
import '../styles/MainPage.scss';




const MainPage = () =>{
    return (
      <main className='mainPage'>
          <Header />
          <PhoneNav />
          <Story />
          <Gallery />
          <Unlimited />
          <Menu />
          <Photos />
          <Form />
          <Footer />
      </main>
    )
  }
  
  export default MainPage