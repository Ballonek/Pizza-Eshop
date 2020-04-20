import React from 'react';
import { CardBody } from 'reactstrap';
import FoodsBodyItem from './FoodsBodyItem'


const IngredientsListBody = ({ foods }) => {
    return (
        <CardBody className="category-card-body">
            {foods.map(food => (
                    <FoodsBodyItem key={food._id} food={food} />
            ))}
        </CardBody>
    );
}

export default IngredientsListBody;
