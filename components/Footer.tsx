import Link from 'next/link';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="nes-container" style={{ backgroundColor: 'var(--light-pink)' }}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 Vintage Vittles. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/about" className="nes-btn">About</Link>
          <Link href="/contact" className="nes-btn">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

