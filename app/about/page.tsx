import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Vintage Vittles",
  description: "Learn more about Vintage Vittles",
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background-color)] text-[var(--text-color)]">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 space-y-8">
        <section
          className="flex items-center space-x-8"
          style={{ backgroundColor: "var(--mint-green)" }}
        >
          <Image
            src="/logo.png"
            alt="Vintage Vittles Logo"
            width={200}
            height={200}
          />
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">About Vintage Vittles</h1>
            <p className="text-lg" style={{ color: "var(--text-color)" }}>
              Vintage Vittles is a retro-themed recipe browsing app that takes
              you on a culinary journey through the decades. Discover timeless
              recipes and recreate the flavors of the past.
            </p>
          </div>
        </section>

        <section
          className="space-y-4"
          style={{ backgroundColor: "var(--cream)" }}
        >
          <h2 className="text-2xl font-semibold text-center">Tech Stack</h2>
          <ul className="list-disc list-inside">
            <li>Next.js - for a seamless, modern web experience.</li>
            <li>Tailwind CSS - for a sleek and responsive retro design.</li>
          </ul>
        </section>

        <section
          className="space-y-4"
          style={{ backgroundColor: "var(--light-pink)" }}
        >
          <h2 className="text-2xl font-semibold text-center">Inspiration</h2>
          <p>
            This project is inspired by TheMealDB, a free and open-source API
            that provides a treasure trove of meal data and recipes. Combining
            this with a nostalgic design, Vintage Vittles offers a unique
            experience for food and history enthusiasts.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
