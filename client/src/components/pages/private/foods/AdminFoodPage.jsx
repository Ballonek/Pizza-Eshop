import React, { useEffect, useState } from 'react';
import { Container, ListGroup, Spinner, ListGroupItem, Alert, Card } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';

import { loadFoods, createFood, deleteFood } from '../../../../actions/foodActions';
import {loadIngredients} from '../../../../actions/ingredientActions'
import AdminFoodsList from '../../../foods/adminFoodsList/AdminFoodsList';
import FoodsForm from '../../../foods/foodsForm/FoodsForm';


const AdminFoodPage = () => {
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(loadFoods());
        dispatch(loadIngredients());
    }, [dispatch])

    const foods = useSelector(state => state.foods);
    const ingredients = useSelector(state => state.ingredients.ingredients)

    useEffect(() => {
        const tempCategories = [...new Set(foods.foods.map((food) => food.category))]
        setCategories(tempCategories);
    }, [foods])

    return (
        <Container>
            <h1>Jídla</h1>
            {!foods.isLoading ? (
                foods.foods.length ? <AdminFoodsList foods={foods} categories={categories} ingredients={ingredients} />
                    :
                    <Card>
                        <Alert color="danger">Nejsou zde žádná jídla!</Alert>
                    </Card>
                    )
            : <Spinner color="dark" />
        }
        </Container>
    );
}

export default AdminFoodPage;
