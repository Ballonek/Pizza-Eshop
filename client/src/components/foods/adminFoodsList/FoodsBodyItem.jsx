import React from 'react'
import FoodsForm from '../foodsForm/FoodsForm';

const FoodsBodyItem = ({ food }) => {
    return (
        <div className='category-card-body-item'>
            <FoodsForm food={food} />
        </div>
    )
};

export default FoodsBodyItem;