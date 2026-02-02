import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    title: "Pottery Workshop",
    rating: 4.8,
    price: 1200,
    image: "https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg",
  },
  {
    id: 2,
    title: "Himalayan Trek",
    rating: 4.9,
    price: 2800,
    image: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
  },
  {
    id: 3,
    title: "Pasta Making Class",
    rating: 4.7,
    price: 900,
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
  },
];

const PopularSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <h2 className="text-xl font-semibold mb-4">Popular Right Now</h2>

      <div className="flex gap-4 overflow-x-auto no-scrollbar">
        {data.map((exp) => (
          <motion.div
            key={exp.id}
            whileHover={{ y: -6 }}
            className="min-w-[240px] bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <img
              src={exp.image}
              alt={exp.title}
              className="h-36 w-full object-cover"
            />
            <div className="p-3">
              <p className="font-medium text-sm">{exp.title}</p>
              <p className="text-xs text-gray-500">
                ⭐ {exp.rating} • ₹{exp.price}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularSection;
