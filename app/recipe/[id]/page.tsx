import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Recipe | Vintage Vittles',
  description: 'View recipe details',
};

async function getRecipe(id: string) {
  const url = id === 'random' ? 'https://www.themealdb.com/api/json/v1/1/random.php' : `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.meals?.[0];
}

export default async function RecipePage({ params }: { params: { id: string } }) {
  const recipe = await getRecipe(params.id);

  const ingredients = Object.keys(recipe)
    .filter(key => key.startsWith('strIngredient') && recipe[key])
    .map(key => {
      const index = key.slice(13);
      return `${recipe[key]} - ${recipe[`strMeasure${index}`]}`;
    });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-4">
          <BackButton />
        </div>
        <section className="nes-container with-title" style={{ backgroundColor: 'var(--cream)' }}>
          <h1 className="title nes-text is-primary">{recipe.strMeal}</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Image
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="nes-text is-primary mb-4">Ingredients:</h2>
              <ul className="nes-list is-disc">
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="nes-text is-primary mb-4">Instructions:</h2>
            <p>{recipe.strInstructions}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
