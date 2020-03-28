import React, { useEffect } from 'react';
import RecipeDetail from '../recipes/RecipeDetail';
import { useDispatch, useSelector } from 'react-redux';
import { loadRecipe } from '../../actions/recipeActions';
import { loadFavoriteRecipes } from '../../actions/favoriteRecipesActions';

const SingleRecipePage = ({match}) => {
    const id = match.params.id;

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async (id) => {
            await dispatch(loadRecipe(id));
            await dispatch(loadFavoriteRecipes());
        } 
        fetchData(id);

    }, [dispatch, id])    

    const recipe = useSelector(state => state.recipe.recipe);
    const favoriteRecipes = useSelector(state => state.favoriteRecipes.favoriteRecipes);

    // const recipe = useSelector(state => state.recipe.recipe);
    // const isLoading = useSelector(state => state.recipe.loading)

    return (
        <>
            <RecipeDetail recipe={recipe} favoriteRecipes={favoriteRecipes} />
        </>
    );
}

export default SingleRecipePage;
