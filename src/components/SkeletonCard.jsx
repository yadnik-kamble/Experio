/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const SkeletonCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse"
    >
      <div className="h-48 bg-gray-200"></div>

      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>

        <div className="flex justify-between items-center">
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/5"></div>
        </div>

        <div className="h-3 bg-gray-200 rounded w-1/6"></div>
      </div>
    </motion.div>
  );
};

export default SkeletonCard;
