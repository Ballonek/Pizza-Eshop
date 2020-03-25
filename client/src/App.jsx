//Basic Imports
import React, { useEffect } from "react";
import "./App.scss";
//React router and Private route
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/auth/PrivateRoute';
//Redux state and dispatch + actions
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from './actions/userActions';
//Components
import Navbar from './components/navbar/Navbar';
//Pages
import DashboardPage from './components/pages/DashboardPage';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RecipesPage from './components/pages/RecipesPage'
import SingleRecipe from "./components/pages/SingleRecipePage";

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch, isAuthenticated]);
  return (  
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path='/dashboard' component={DashboardPage} />
        <PrivateRoute exact path='/recipes' component={RecipesPage} />
        <PrivateRoute path='/recipes/:id' component={SingleRecipe} />
      </Switch>
    </div>
  );
};

export default App;
