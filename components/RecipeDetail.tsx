'use client';

import { useState, useEffect } from 'react';

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  [key: string]: string;
}

const RecipeDetail = ({ id }: { id: string }) => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const url = id === 'random'
      ? 'https://www.themealdb.com/api/json/v1/1/random.php'
      : `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    fetch(url)
      .then(response => response.json())
      .then(data => setRecipe(data.meals[0]));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  const ingredients = Object.keys(recipe)
    .filter(key => key.startsWith('strIngredient') && recipe[key])
    .map(key => {
      const index = key.slice(13);
      return `${recipe[key]} - ${recipe[`strMeasure${index}`]}`;
    });

  return (
    <div className="nes-container with-title">
      <h2 className="title">{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full max-w-md mx-auto mb-4" />
      <h3 className="nes-text is-primary">Ingredients:</h3>
      <ul className="nes-list is-disc">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3 className="nes-text is-primary mt-4">Instructions:</h3>
      <p>{recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeDetail;

