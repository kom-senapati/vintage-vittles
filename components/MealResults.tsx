import Image from 'next/image';
import Link from 'next/link';

async function searchMeals(searchTerm: string) {
  if (!searchTerm) return [];
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
  const data = await res.json();
  return data.meals || [];
}

export default async function MealResults({ searchTerm }: { searchTerm: string }) {
  const meals = await searchMeals(searchTerm);

  if (!meals.length) return null;

  return (
    <div className="nes-container is-dark mt-2" style={{ maxHeight: '200px', overflowY: 'auto' }}>
      {meals.map((meal: any) => (
        <Link href={`/recipe/${meal.idMeal}`} key={meal.idMeal}>
          <div className="nes-btn mb-2 w-full text-left flex items-center">
            <Image
              src={meal.strMealThumb}
              alt={meal.strMeal}
              width={50}
              height={50}
              className="mr-2"
            />
            <span>{meal.strMeal}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

