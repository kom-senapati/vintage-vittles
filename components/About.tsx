import { FaHeart } from "react-icons/fa";

const About = () => {
  return (
    <section
      className="nes-container with-title"
      style={{ backgroundColor: "var(--light-pink)" }}
    >
      <h2 className="title text-2xl">About Vintage Vittles</h2>
      <div className="flex items-center justify-between">
        <p className="text-lg">
          Vintage Vittles is your time machine to classic recipes. Relive the
          flavors that defined decades, whether it's a 1950s milkshake or a
          1970s casserole!
        </p>
        <div className="text-4xl animate-bounce">
          <FaHeart className="text-red-500" />
        </div>
      </div>
    </section>
  );
};

export default About;
