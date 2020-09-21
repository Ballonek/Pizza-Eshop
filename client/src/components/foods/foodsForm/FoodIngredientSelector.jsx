import React from 'react';
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';


const FoodIngredientSelector = ({ ingredient, ingredients }) => {
    return (
        <Input type="select" name="select" id="exampleSelect">
            <option>{ingredient.name}</option>
            {ingredients.map(ingredient => <option key={ingredient._id}>{ingredient.name} {ingredient.price},-</option>)}
        </Input>
    );
}

export default FoodIngredientSelector;
