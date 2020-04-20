import React from 'react';
import IngredientsListBody from './IngredientsListBody';
import IngredientsListFooter from './IngredientsListFooter'
import { Card, CardHeader, CardTitle } from 'reactstrap';

const IngredientsList = ({ ingredients, categories }) => {
    return (
        <div className="ingredients-list">
        {categories.map(category => (            
            <Card className="category-card" key={category}>
                <CardHeader className="category-card-header">
                    <CardTitle>{category}</CardTitle>
                </CardHeader>
                <IngredientsListBody ingredients={ingredients.ingredients.filter(ingredient => ingredient.category === category)} />
                <IngredientsListFooter category={category} />
            </Card>
        ))}
        </div>   
    );
}

export default IngredientsList;
