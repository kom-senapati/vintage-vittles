import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

async function getCategories() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  const data = await res.json();
  return data.categories;
}

export default async function CategorySection() {
  const categories: Category[] = await getCategories();

  return (
    <section className="nes-container with-title" style={{ backgroundColor: 'var(--mint-green)' }}>
      <h2 className="title">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.slice(0, 3).map((category) => (
          <Link href={`/category/${category.strCategory}`} key={category.idCategory}>
            <div className="retro-card p-4 bg-white">
              <Image
                src={category.strCategoryThumb}
                alt={category.strCategory}
                width={200}
                height={200}
                className="w-full h-auto"
              />
              <p className="card-title mt-2 text-xl">{category.strCategory}</p>
            </div>
          </Link>
        ))}
      </div>
      {categories.length > 3 && (
        <div className="mt-4 text-right">
          <Link href="/categories" className="nes-btn is-primary inline-flex items-center">
            More Categories
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      )}
    </section>
  );
}

