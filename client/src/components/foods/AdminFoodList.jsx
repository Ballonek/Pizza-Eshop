import React from 'react';
import { ListGroup } from 'reactstrap';
import AdminFoodItem from '../foods/AdminFoodItem';


const AdminFoodList = ({foods, removeFood}) => {
    return (
        <ListGroup>
                {foods.map(food => (
                    <AdminFoodItem food={food} isLoading={foods.isLoading} removeFood={removeFood} />
                ))}
        </ListGroup>
    );
}

export default AdminFoodList;
