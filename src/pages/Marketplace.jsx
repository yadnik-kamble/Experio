import { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import FiltersSidebar from "../components/FiltersSidebar";
import ExperienceCard from "../components/ExperienceCard";
import SkeletonCard from "../components/SkeletonCard";
import EmptyState from "../components/EmptyState";
import MobileFiltersDrawer from "../components/MobileFiltersDrawer";
import ExperienceDetail from "../components/ExperienceDetail";
import { useSearchParams } from "react-router-dom";

const Marketplace = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  const [price, setPrice] = useState(5000);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const [search, setSearch] = useState(initialSearch);

  /* Fetch data */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3001/experiences");
        const data = await res.json();
        setExperiences(data);
      } catch (err) {
        console.error("Failed to fetch experiences", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /* Debounced search */
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(searchInput);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchInput]);

  /* Filtering */
  const filteredExperiences = experiences.filter((exp) => {
    const matchesSearch = `${exp.title} ${exp.city}`
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesPrice = exp.price <= price;

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(exp.category);

    return matchesSearch && matchesPrice && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar searchValue={searchInput} onSearchChange={setSearchInput} />

      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 shrink-0">
          <FiltersSidebar
            price={price}
            setPrice={setPrice}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </aside>

        {/* Mobile Filter Button */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="px-4 py-2 rounded-full border bg-white shadow-sm text-sm"
          >
            Filters
          </button>
        </div>

        {/* Main Content */}
        <main className="flex-1">
          <h1 className="text-2xl font-semibold mb-6">Discover Experiences</h1>

          <LayoutGroup>
            {/* GRID (single animation only) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence initial={false}>
                {loading ? (
                  Array.from({ length: 6 }).map((_, i) => (
                    <SkeletonCard key={i} />
                  ))
                ) : filteredExperiences.length === 0 ? (
                  <EmptyState onClear={() => setSearchInput("")} />
                ) : (
                  filteredExperiences.map((exp) => (
                    <ExperienceCard
                      key={exp.id}
                      experience={exp}
                      onSelect={() => setSelectedExperience(exp)}
                      isSelected={selectedExperience?.id === exp.id}
                    />
                  ))
                )}
              </AnimatePresence>
            </motion.div>
            <button className="mx-auto mt-8 px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition">
              Load More
            </button>

            {/* DETAIL MODAL */}
            <AnimatePresence>
              {selectedExperience && (
                <ExperienceDetail
                  experience={selectedExperience}
                  onClose={() => setSelectedExperience(null)}
                />
              )}
            </AnimatePresence>
          </LayoutGroup>
        </main>
      </div>

      {/* Mobile Drawer */}
      <MobileFiltersDrawer
        open={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        price={price}
        setPrice={setPrice}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
    </div>
  );
};

export default Marketplace;
