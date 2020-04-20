import React, { useEffect, useState } from 'react';
import { Container, ListGroup, Spinner, ListGroupItem } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';

import { loadFoods, createFood, deleteFood } from '../../../../actions/foodActions';
import AdminFoodsList from '../../../foods/adminFoodsList/AdminFoodsList';


const AdminFoodPage = () => {
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(loadFoods());
    }, [dispatch])

    const foods = useSelector(state => state.foods);

    useEffect(() => {
        const tempCategories = [...new Set(foods.foods.map((food) => food.category))]
        setCategories(tempCategories);
    }, [foods])

    return (
        <Container>
            <h1>Jídla</h1>
            {categories.length ? <AdminFoodsList foods={foods} categories={categories} />
            : <Spinner color="dark" />
        }
        </Container>
    );
}

export default AdminFoodPage;
