import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const trending = ["Scuba Diving", "Pottery", "Trekking", "Yoga"];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden">
      {/* Floating blob */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h1 className="text-5xl font-bold mb-6">
            Discover Your Next Adventure
          </h1>

          <p className="text-gray-600 mb-8 max-w-lg">
            Curated experiences across art, fitness, food, and adventure.
          </p>

          <button className="px-6 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition">
            Explore Experiences
          </button>

          <p className="text-sm text-gray-500 mt-4">
            Trusted by <span className="font-semibold">10,000+</span> explorers
            worldwide
          </p>

          {/* Trending */}
          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            <span className="text-gray-500">Trending:</span>
            {trending.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/70 backdrop-blur"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div className="hidden md:flex justify-center">
          <img
            src="https://imgs.search.brave.com/1hG11_bFGTik8FSb0AyFZZL964lQQ7TNyVYRs5WiqIc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjIz/NDYwODI4MS92ZWN0/b3IvdmlydHVhbC1y/ZWFsaXR5LWdhbWlu/Zy1pbGx1c3RyYXRp/b24tZmVhdHVyaW5n/LXBlb3BsZS11c2lu/Zy12ci1nbGFzc2Vz/LWFuZC1jb250cm9s/bGVycy10by5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9UFB4/aU9PRzBaeXN2RHZU/RWtlZzdFalhLTmlB/SFZwY2dXaDVLYmNZ/RWdGYz0"
            alt="Adventure"
            className="max-w-md rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
