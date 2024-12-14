import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'All Categories | Vintage Vittles',
  description: 'Browse all recipe categories',
};

async function getCategories() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  const data = await res.json();
  return data.categories;
}

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-4">
          <BackButton />
        </div>
        <section className="nes-container with-title" style={{ backgroundColor: 'var(--cream)' }}>
          <h1 className="title nes-text is-primary">All Categories</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category: any) => (
              <Link href={`/category/${category.strCategory}`} key={category.idCategory}>
                <div className="nes-container" style={{ backgroundColor: 'var(--mint-green)' }}>
                  <Image
                    src={category.strCategoryThumb}
                    alt={category.strCategory}
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                  <p className="nes-text is-primary mt-2">{category.strCategory}</p>
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

