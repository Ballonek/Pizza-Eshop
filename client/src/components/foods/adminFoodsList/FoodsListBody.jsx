import React from 'react';
import { CardBody } from 'reactstrap';
import FoodsBodyItem from './FoodsBodyItem'


const IngredientsListBody = ({ foods, ingredients }) => {
    return (
        <CardBody className="category-card-body">
            {foods.map(food => (
                <FoodsBodyItem key={food._id} food={food} ingredients={ingredients} />
            ))}
        </CardBody>
    );
}

export default IngredientsListBody;
