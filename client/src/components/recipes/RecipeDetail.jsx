import React from 'react';
import './style.scss';


const RecipeDetail = ({ recipe }) => {
    return (
        <div className="recipe">
            <h1 className="recipe-header">Recipe: {recipe.title}</h1>
            <ul>
                {recipe.extendedIngredients ? recipe.extendedIngredients.map(ingredient =>
                    <li key={ingredient.id}>
                        <span>{ingredient.name}</span>
                        <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt="" srcSet=""/>
                    </li>)
                    : ""}
            </ul>
            <img src={recipe.image} alt="" srcSet=""/>
            <div className="summary" dangerouslySetInnerHTML={{__html: recipe.summary}} />
        </div>
    );
}

export default RecipeDetail;
