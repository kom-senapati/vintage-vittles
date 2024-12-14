import Link from 'next/link';
import { FaUtensils } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="nes-container with-title" style={{ backgroundColor: 'var(--cream)' }}>
      <h2 className="title text-2xl">Welcome to Vintage Vittles!</h2>
      <div className="flex items-center justify-between">
        <div>
          <p className="mb-4 text-lg">Explore timeless recipes, straight from the golden era.</p>
          <Link href="/recipe/random" className="nes-btn is-primary">
            <FaUtensils className="inline-block mr-2" />
            Enjoy Surprise Meal
          </Link>
        </div>
        <div className="text-6xl">🧞‍♂️</div>
      </div>
    </section>
  );
};

export default Hero;

