'use client';

import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="nes-btn">
      Back
    </button>
  );
};

export default BackButton;

