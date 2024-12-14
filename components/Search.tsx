'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      router.push(`/search?q=${encodeURIComponent(input.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="nes-field">
      <input
        type="text"
        className="nes-input"
        placeholder="Search for your meal"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="nes-btn is-primary mt-2">Search</button>
    </form>
  );
}

