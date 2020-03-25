import React from 'react';


const RecipeDetail = ({ recipe }) => {
    return (
        <div className="recipe">
            <h1>Recipe: {recipe.title}</h1>
            <ul>
                {recipe.extendedIngredients ? recipe.extendedIngredients.map(ingredient =>
                    <li key={ingredient.id}>
                        <span>{ingredient.name}</span>
                        <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt="" srcset=""/>
                    </li>)
                    : ""}
            </ul>
        </div>
    );
}

export default RecipeDetail;
