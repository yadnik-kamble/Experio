import { motion } from "framer-motion";
import { cardHover } from "../animations/motionConfig";



const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      className="
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-gray-100
    rounded-xl shadow-sm border border-gray-200 dark:border-gray-700

  "
    >
      {/* Image wrapper */}
      <div className="relative h-44 overflow-hidden">
        <motion.img
          src={experience.image_url}
          alt={experience.title}
          loading="lazy"
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/20 flex items-center justify-center"
        >
          <span className="text-white text-sm font-medium tracking-wide">
            View Details
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold">{experience.title}</h3>
        <p className="text-sm text-gray-500">{experience.city}</p>

        <div className="mt-2 flex justify-between text-sm">
          <span>⭐ {experience.rating}</span>
          <span className="font-medium">₹{experience.price}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
