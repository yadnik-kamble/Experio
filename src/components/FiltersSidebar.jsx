const categories = ["Art", "Fitness", "Food", "Music", "Adventure", "Learning"];

const FiltersSidebar = ({
  price,
  setPrice,
  selectedCategories,
  setSelectedCategories,
}) => {
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      {/* Category */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Category</h3>

        <div className="space-y-2 text-sm text-gray-600">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="accent-purple-600"
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-medium mb-2">Max Price</h3>

        <div className="flex justify-between text-sm text-gray-500 mb-1">
          <span>₹0</span>
          <span className="font-medium text-purple-600">₹{price}</span>
        </div>

        <input
          type="range"
          min="0"
          max="5000"
          step="100"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-purple-600"
        />
      </div>
    </div>
  );
};

export default FiltersSidebar;
