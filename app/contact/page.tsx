import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Vintage Vittles",
  description: "Contact Vintage Vittles developer",
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background-color)] text-[var(--text-color)]">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 space-y-8">
        <section
          className="flex flex-col items-center space-x-8"
          style={{ backgroundColor: "var(--cream)" }}
        >
          <Image
            src="https://avatars.githubusercontent.com/u/92045934?v=4"
            alt="K Om Senapati"
            width={128}
            height={128}
          />

          <div className="space-y-4">
            <h1 className="text-2xl font-semibold">K Om Senapati</h1>
            <p className="text-lg" style={{ color: "var(--text-color)" }}>
              A fellow Python dev and a lover of frameworks like Next.js. I'm
              also a data enthusiast, currently pursuing my undergrad.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/kom-senapati"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl text-gray-700 hover:text-blue-500"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://x.com/kom_senapati"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl text-gray-700 hover:text-blue-500"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://www.linkedin.com/in/kom-senapati"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl text-gray-700 hover:text-blue-500"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
