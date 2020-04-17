//Basic Imports
import React from "react";
import "./App.scss";
//React router and Private route
import { Route, Switch } from 'react-router-dom';
//Components
import Navbar from './components/navbar/Navbar';
//Pages
import HomePage from './components/pages/public/HomePage';
import FoodPage from './components/pages/public/FoodPage';
import BasketPage from './components/pages/public/BasketPage';
import LoginPage from './components/pages/public/LoginPage';


const App = () => {

  return (  
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/jidelni-listek" component={FoodPage} />
        <Route exact path="/nakupni-kosik" component={BasketPage} />
        <Route exact path="/admin/login" component={LoginPage} />
      </Switch>
    </div>
  );
};

export default App;
