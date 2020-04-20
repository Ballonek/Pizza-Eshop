//Basic Imports
import React, { useEffect, useState } from "react";
import "./App.scss";
//React router and Private route
import { Route, Switch } from 'react-router-dom';
//Components
import Navbar from './components/navbar/Navbar';
import PrivateNavbar from './components/navbar/PrivateNavbar';
import Footer from "./components/footer/Footer";
//Pages
import HomePage from './components/pages/public/HomePage';
import FoodPage from './components/pages/public/FoodPage';
import BasketPage from './components/pages/public/BasketPage';
import LoginPage from './components/pages/public/LoginPage';
//private pages
import DashboardPage from './components/pages/private/DashboardPage';
import AdminFoodPage from './components/pages/private/foods/AdminFoodPage';
import AdminIngredientPage from './components/pages/private/ingredients/AdminIngredientPage';

//Actions
import { loadUser } from './actions/userActions';
import { useDispatch, useSelector } from "react-redux";
import PrivateRoute from "./components/auth/PrivateRoute";

const App = () => {
  const [userView, setUserView] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch])

  const user = useSelector(state => state.user);

  return (  
    <div className="App">
      {!user.isAuthenticated ? <Navbar /> : (!userView ? <PrivateNavbar setUserView={setUserView} /> : <Navbar />)}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/jidelni-listek" component={FoodPage} />
        <Route exact path="/nakupni-kosik" component={BasketPage} />
        <Route exact path="/admin/login" component={LoginPage} />
        <PrivateRoute exact path="/admin/dashboard" component={DashboardPage} />
        <PrivateRoute exact path="/admin/foods" component={AdminFoodPage} />
        <PrivateRoute exact path="/admin/ingredients" component={AdminIngredientPage} />
      </Switch>
        <Footer isAuthenticated={user.isAuthenticated} setUserView={setUserView} userView={userView} />

    </div>
  );
};

export default App;
