import { motion } from "framer-motion";

const ExperienceDetail = ({ experience, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      onClick={onClose}
    >
      <motion.div
        layoutId={`card-${experience.id}`}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl w-full max-w-md shadow-xl overflow-hidden"
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          layout: { duration: 0.35, ease: "easeInOut" },
        }}
      >
        <img
          src={experience.image_url}
          alt={experience.title}
          className="h-56 w-full object-cover"
        />

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-1">{experience.title}</h2>
          <p className="text-sm text-gray-500 mb-4">
            {experience.city} • {experience.duration}
          </p>

          <div className="flex justify-between mb-6">
            <span>⭐ {experience.rating}</span>
            <span className="font-semibold text-lg">₹{experience.price}</span>
          </div>

          <button className="w-full py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition">
            Book Now
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceDetail;
