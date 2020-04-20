import React from 'react';
import { CardBody } from 'reactstrap';
import IngredientsBodyItem from './IngredientsBodyItem';

const IngredientsListBody = ({ ingredients }) => {
    return (
        <CardBody className="category-card-body">
            {ingredients.map(ingredient => (
                    <IngredientsBodyItem key={ingredient._id} ingredient={ingredient} />
            ))}
        </CardBody>
    );
}

export default IngredientsListBody;
