import React, { useEffect } from 'react';
import Story from '../components/Story'
import Header from '../components/Header'
import Gallery from '../components/Gallery'
import Unlimited from '../components/Unlimited'
import Menu from '../components/Menu'
import Photos from '../components/Photos'
import Form from '../components/Form'
import Footer from '../components/Footer'
import PhoneNav from '../components/Phone-nav'
import '../styles/App.scss';



const App = ({hideLoader}) => {
  
  useEffect(()=> hideLoader(),[])
    return (
      <div className="App">
        <Header />
        <PhoneNav />
        <Story />
        <Gallery />
        <Unlimited />
        <Menu />
        <Photos />
        <Form />
        <Footer />
      </div>
    );
  }


export default App;
