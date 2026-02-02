import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  // Load theme on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/explore?search=${encodeURIComponent(query)}`);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + Nav */}
        <div className="flex items-center gap-8">
          <div className="font-bold text-lg text-gray-900 dark:text-white">
            Experio
          </div>

          <div className="hidden md:flex items-center gap-4 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 font-medium"
                  : "text-gray-600 dark:text-gray-300 hover:text-purple-600"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/explore"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 font-medium"
                  : "text-gray-600 dark:text-gray-300 hover:text-purple-600"
              }
            >
              Explore
            </NavLink>
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 w-full max-w-md mx-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search experiences or city..."
            className="flex-1 px-4 py-2 rounded-full border text-sm focus:outline-none
                       bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700"
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 rounded-full bg-purple-600 text-white text-sm hover:bg-purple-700 transition"
          >
            Search
          </button>
        </div>

        {/* Right: Theme + Login */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-xl"
            title="Toggle theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <div className="text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 cursor-pointer">
            Login
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
