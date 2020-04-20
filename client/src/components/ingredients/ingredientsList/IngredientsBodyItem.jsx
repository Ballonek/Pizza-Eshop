import React, { useState } from 'react';
import IngredientsForm from '../ingredientsForm/IngredientsForm';
import { useDispatch } from 'react-redux';
import { updateIngredient, deleteIngredient } from '../../../actions/ingredientActions';


const IngredientsBodyItem = ({ ingredient }) => {
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(false);
    const [name, setName] = useState(ingredient.name);
    const [price, setPrice] = useState(ingredient.price);

    const toggleUpdate = () => {
        setName(ingredient.name);
        setPrice(ingredient.price);
        setToggle(!toggle);
    }

    const updateItem = (e) => {
        e.preventDefault();
        const ingr = {
            name,
            price
        }
        setToggle(!toggle);
        dispatch(updateIngredient(ingr, ingredient._id));
    }

    const removeItem = () => {
        dispatch(deleteIngredient(ingredient._id))
    }


    return (
        <div className="category-card-body-item">
            <IngredientsForm
                type='update'
                formMethod={updateItem}
                name={name}
                price={price}
                setName={setName}
                setPrice={setPrice}
                toggle={toggle}
                toggleUpdate={toggleUpdate}
                removeItem={removeItem}
            />
        </div>
    );
}

export default IngredientsBodyItem;
