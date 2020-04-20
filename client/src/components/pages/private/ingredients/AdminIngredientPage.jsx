import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux'
import {loadIngredients} from '../../../../actions/ingredientActions'
import IngredientsList from '../../../ingredients/ingredientsList/IngredientsList'

const AdminIngredientPage = () => {
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(loadIngredients());
    }, [dispatch])

    const ingredients = useSelector(state => state.ingredients);

    useEffect(() => {
        const tempCategories = [...new Set(ingredients.ingredients.map((ingredient) => ingredient.category))]
        setCategories(tempCategories);
    }, [ingredients])


    return (
        <Container>
            <h1>Stránka ingrediencí: </h1>
            {categories.length ? <IngredientsList ingredients={ingredients} categories={categories} />
                : <Spinner color="dark" />
            }
        </Container>
    );
}

export default AdminIngredientPage;
