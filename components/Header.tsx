import Link from 'next/link';
import Search from './Search';

const Header = () => {
  return (
    <header className="nes-container" style={{ backgroundColor: 'var(--mint-green)' }}>
      <nav className="flex justify-between items-center">
        <Link href="/" className="nes-text is-primary text-xl">Vintage Vittles</Link>
        <div className="flex items-center space-x-4">
          <Link href="/categories" className="nes-btn">Categories</Link>
          <Link href="/recipe/random" className="nes-btn">Random Recipe</Link>
          <Search />
        </div>
      </nav>
    </header>
  );
};

export default Header;

