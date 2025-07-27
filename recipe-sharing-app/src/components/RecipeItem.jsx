// src/components/RecipeItem.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const RecipeItem = ({ recipe }) => {
  return (
    <li>
      <Link to={`/recipes/${recipe.id}`}>
        {recipe.title}
      </Link>
    </li>
  );
};

export default RecipeItem;
