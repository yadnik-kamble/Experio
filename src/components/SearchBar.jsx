const SearchBar = ({ value, onChange }) => {
  return (
    <div className="bg-white rounded-full shadow-sm px-4 py-2 flex items-center gap-3 w-full max-w-xl">
      <input
        type="text"
        placeholder="Search experiences or city..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 outline-none text-sm"
      />

      <button className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
