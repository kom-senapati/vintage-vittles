'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const RecipeGrid = ({ category }: { category: string }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(response => response.json())
      .then(data => setRecipes(data.meals));
  }, [category]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {recipes.map(recipe => (
        <Link href={`/recipe/${recipe.idMeal}`} key={recipe.idMeal} className="nes-container is-dark">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full" />
          <p className="nes-text is-primary mt-2">{recipe.strMeal}</p>
        </Link>
      ))}
    </div>
  );
};

export default RecipeGrid;

