import React from 'react';
import { useRecipeStore } from './recipeStore';
import RecipeItem from './RecipeItem';

const RecipeList = () => {
  const recipes = useRecipeStore(state =>
    state.filteredRecipes.length > 0 ? state.filteredRecipes : state.recipes
  );

  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
