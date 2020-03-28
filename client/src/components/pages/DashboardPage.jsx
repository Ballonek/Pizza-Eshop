import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loadFavoriteRecipes} from '../../actions/favoriteRecipesActions';


const DashboardPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadFavoriteRecipes());
    }, [])

    return (
        <div>
            <h1>Dashboard Page</h1>
        </div>
    );
}

export default DashboardPage;
