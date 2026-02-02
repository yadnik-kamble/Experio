/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const EmptyState = ({ onClear }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center py-20 text-center"
    >
      <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
        <span className="text-3xl">🔍</span>
      </div>

      <h2 className="text-xl font-semibold mb-2">No experiences found</h2>

      <p className="text-gray-500 mb-6 max-w-sm">
        Try adjusting your filters or search criteria to find what you’re
        looking for.
      </p>

      <button
        onClick={onClear}
        className="px-5 py-2 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
      >
        Clear Filters
      </button>
    </motion.div>
  );
};

export default EmptyState;
