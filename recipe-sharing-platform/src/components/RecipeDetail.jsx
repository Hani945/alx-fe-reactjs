import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((r) => r.id === parseInt(id));
        setRecipe(found);
      });
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-500 mt-10">Loading recipe...</p>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-60 object-cover rounded-xl mb-6"
      />
      <h1 className="text-3xl font-bold mb-4 text-green-600">{recipe.title}</h1>
      <p className="text-gray-700 mb-6">{recipe.summary}</p>

      <div className="bg-gray-50 p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
