import React, { useEffect} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import MainPage from '../mainPage/container/MainPage'
import MenuPage from '../menuPage/container/MenuPage'
import LocationsPage from '../locationsPage/container/LocationsPage'
import NotFoundPage from '../notFoundPage/container/NotFoundPage'
import ScrollToTop from './ScrollToTop'


const AppRouter = ({hideLoader}) => {
  
    useEffect(()=> hideLoader(),[])
      return (
    <BrowserRouter>
        <ScrollToTop>
        <Switch className='App'>
          <Route path='/' component={MainPage} exact={true}/>
          <Route path='/menu' component={MenuPage} />
          <Route path='/locations' component={LocationsPage} />
          <Route component={NotFoundPage} />
        </Switch>
        </ScrollToTop>
    </BrowserRouter>
      );
    }
  export default AppRouter