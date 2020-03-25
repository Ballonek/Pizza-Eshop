import React, { useEffect } from 'react';
import RecipeDetail from '../recipes/RecipeDetail';
import { useDispatch, useSelector } from 'react-redux';
import { loadRecipe } from '../../actions/recipeActions';

const SingleRecipePage = ({match}) => {
    const id = match.params.id;

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async (id) => {
            await dispatch(loadRecipe(id));
        } 
        fetchData(id);

    }, [dispatch, id])    

    const recipe = useSelector(state => state.recipe.recipe);

    // const recipe = useSelector(state => state.recipe.recipe);
    // const isLoading = useSelector(state => state.recipe.loading)

    return (
        <>
            <RecipeDetail recipe={recipe} />
        </>
    );
}

export default SingleRecipePage;
