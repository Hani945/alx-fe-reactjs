import { useState } from "react";

function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!title || !ingredients || !steps) {
      setError("Please fill out all fields.");
      return;
    }

    // Make a recipe object
    const newRecipe = {
      id: Date.now(),
      title,
      summary: steps.substring(0, 50) + "...", // short preview
      image: "https://via.placeholder.com/150", // placeholder image
      ingredients: ingredients.split(","),
      steps: steps.split("."),
    };

    onAddRecipe(newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-green-600">Add New Recipe</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Recipe Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Ingredients (comma separated)</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            rows="3"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Preparation Steps (separate by . )</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            rows="3"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
