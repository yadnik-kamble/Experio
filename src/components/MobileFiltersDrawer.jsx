/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import FiltersSidebar from "./FiltersSidebar";

const MobileFiltersDrawer = ({
  open,
  onClose,
  price,
  setPrice,
  selectedCategories,
  setSelectedCategories,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed bottom-0 left-0 right-0 bg-gray-50 rounded-t-2xl p-4 z-50 max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button onClick={onClose} className="text-sm text-gray-500">
                Close
              </button>
            </div>

            <FiltersSidebar
              price={price}
              setPrice={setPrice}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileFiltersDrawer;
