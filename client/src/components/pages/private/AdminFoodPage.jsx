import React, { useEffect, useState } from 'react';
import { Container, ListGroup, Spinner, ListGroupItem } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';

import AddFoodItem from '../../foods/AddFoodItem';
import { loadFoods, createFood, deleteFood } from '../../../actions/foodActions';
import AdminFoodList from '../../foods/AdminFoodList';


const AdminFoodPage = () => {
    const dispatch = useDispatch();

    const addFood = async (food) => {
        await dispatch(createFood(food));
        await dispatch(loadFoods());
    }

    const removeFood = async (id) => {
        await dispatch(deleteFood(id));
        await dispatch(loadFoods());
    }
    
    useEffect(() => {
        dispatch(loadFoods());
    }, [dispatch])

    const foods = useSelector(state => state.foods); 
    return (
        <Container>
        <h1>Jídla</h1>
            <AdminFoodList foods={foods.foods} removeFood={removeFood} />
            <AddFoodItem addFood={addFood} />
        </Container>
    );
}

export default AdminFoodPage;
