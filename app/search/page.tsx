import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';


export const metadata: Metadata = {
  title: 'Search Results | Vintage Vittles',
  description: 'Find your favorite recipes',
};

async function searchMeals(query: string) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  const data = await res.json();
  return data.meals || [];
}

export default async function SearchResults({ searchParams }: { searchParams: { q: string } }) {
  const query = searchParams.q || '';
  const meals = await searchMeals(query);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-4">
        <BackButton />
      </div>
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="nes-text is-primary text-3xl mb-4">Search Results for "{query}"</h1>
        {meals.length === 0 ? (
          <p>No results found. Try another search term.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {meals.map((meal: any) => (
              <Link href={`/recipe/${meal.idMeal}`} key={meal.idMeal}>
                <div className="nes-container is-dark">
                  <Image
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                  <p className="nes-text is-primary mt-2">{meal.strMeal}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

