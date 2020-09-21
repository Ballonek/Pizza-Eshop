import React from 'react'
import FoodsForm from '../foodsForm/FoodsForm';

const FoodsBodyItem = ({ food, ingredients }) => {
    return (
        <div className='category-card-body-item'>
            <FoodsForm food={food} ingredients={ingredients} />
        </div>
    )
};

export default FoodsBodyItem;