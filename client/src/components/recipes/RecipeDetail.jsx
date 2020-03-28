import React, { useEffect, useState } from 'react';
import './style.scss';
import {useSelector, useDispatch} from 'react-redux'
import {addToFavoriteRecipes, removeFromFavoriteRecipes} from '../../actions/favoriteRecipesActions.js';


const RecipeDetail = ({ recipe, favoriteRecipes }) => {
    const dispatch = useDispatch();
    const [isFavorite, setFavorite] = useState(false);
    const [favoriteId, setFavoriteId] = useState('') 

    
    const favoriteRecipesLoading = useSelector(state => state.favoriteRecipes.loading);
    const recipeLoading = useSelector(state => state.recipe.loading);
  

    useEffect(() => {
        const isFavoriteRecipe = favoriteRecipes.some(favRecipe => favRecipe.id === recipe.id);

        favoriteRecipes.forEach(favItem => {
            if (favItem.id === recipe.id) {
                setFavoriteId(favItem._id.toString());
            }    
        })
        setFavorite(isFavoriteRecipe);
    }, [recipe, favoriteRecipes, dispatch]);


    if (recipeLoading || favoriteRecipesLoading) {
        return <div className="recipe"><h1>Loading...</h1></div>
    }

    const addToFavorites = () => {
        dispatch(addToFavoriteRecipes(recipe));
    }

    const removeFromFavorites = () => {
        dispatch(removeFromFavoriteRecipes(favoriteId));
    }

    return (
        <div className="recipe">
            
            <div className="recipe-header">
                <h1>Recipe: {recipe.title}</h1>
                <div className="button">
                    {!isFavorite && <button onClick={addToFavorites}>Add to favorites</button>}
                    {isFavorite && <button onClick={removeFromFavorites}>Remove from favorites</button>}
                </div>
            </div>
            <div className="recipe-ingredients">
                <ul className="recipe-ingredients-content">
                    <h3>Ingredients:</h3>
                {recipe.extendedIngredients ? recipe.extendedIngredients.map(ingredient =>
                    <li className="recipe-ingredients-content-item" key={ingredient.id}>
                        <div className="recipe-ingredients-content-item-description">
                            <span className="recipe-ingredients-content-item-description-name">{ingredient.name}</span>
                            <span className="recipe-ingredients-content-item-description-amount">{ingredient.amount} {ingredient.unit}</span>
                        </div>
                        <img className="recipe-ingredients-content-item-image" src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt="" srcSet=""/>
                    </li>)
                    : ""}
                </ul>
            </div>
            <div className="recipe-image">
                <img src={recipe.image} alt="" srcSet="" />
            </div>
            <div className="recipe-summary">
                <h2>Summary:</h2>
                <div className="recipe-summary-item" dangerouslySetInnerHTML={{ __html: recipe.summary }} />
            </div>
            <div className="recipe-instructions">
                <h2>Instructions:</h2>
                <span>{recipe.instructions}</span>
            </div>
        </div>
    );
}

export default RecipeDetail;
