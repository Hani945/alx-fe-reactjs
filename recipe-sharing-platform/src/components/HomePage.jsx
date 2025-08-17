import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddRecipeForm from "./AddRecipeForm";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleAddRecipe = (newRecipe) => {
    setRecipes((prev) => [newRecipe, ...prev]);
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-600">
        Recipe Sharing Platform
      </h1>

      {/* Add Recipe Form */}
      <div className="mb-10">
        <AddRecipeForm onAddRecipe={handleAddRecipe} />
      </div>

      {/* Recipe Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl hover:scale-105 transition-transform block"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
