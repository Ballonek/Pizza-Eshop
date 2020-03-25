import React, {useEffect} from 'react';
import { loadRecipes } from '../../actions/recipesActions';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'


const Recipes = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadRecipes());
    }, [dispatch]);

    const recipes = useSelector(state => state.recipes.recipes);
    const isLoading = useSelector(state => state.recipes.loading)

    return (
        <div className="recipes">
            <h1>Recipes Page</h1>
            <div className="recipes-container">
            {
                isLoading
                    ? <h1>Loading...</h1>
                    : recipes.map(recipe =>
                        <Link key={recipe.id} className="recipes-item" to={`/recipes/${recipe.id}`}>
                            <div className="recipes-item-content">
                                <img src={recipe.image} alt="" srcSet="" />
                                <div className="recipes-item-content-text">
                                    <span>{recipe.title}</span>
                                </div>
                            </div>
                    </Link>)
            }
            </div>
        </div>
    );
}

export default Recipes;
