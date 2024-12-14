import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Category | Vintage Vittles",
  description: "Browse recipes by category",
};

async function getCategoryMeals(category: string) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  const data = await res.json();
  return data.meals || [];
}

export default async function CategoryPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const meals = await getCategoryMeals(params.id);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-4">
          <BackButton />
        </div>
        <section
          className="nes-container with-title"
          style={{ backgroundColor: "var(--light-pink)" }}
        >
          <h1 className="title nes-text is-primary">
            {decodeURIComponent(params.id)} Recipes
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {meals.map((meal: any) => (
              <Link href={`/recipe/${meal.idMeal}`} key={meal.idMeal}>
                <div
                  className="nes-container"
                  style={{ backgroundColor: "var(--mint-green)" }}
                >
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
