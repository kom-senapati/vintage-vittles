import { useState } from 'react';
import Search from './Search';
import MealResults from './MealResults';

export default function MealSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="nes-container is-dark with-title">
      <p className="title">Search</p>
      <Search onSearch={setSearchTerm} />
      <MealResults searchTerm={searchTerm} />
    </div>
  );
}

