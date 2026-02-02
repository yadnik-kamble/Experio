const Footer = () => {
  return (
    <footer className="mt-24 border-t bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
            Experio
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Premium experiences curated worldwide.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">
            Explore
          </h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>Art</li>
            <li>Fitness</li>
            <li>Food</li>
            <li>Music</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">
            Support
          </h4>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <li>FAQ</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">
            Newsletter
          </h4>
          <input
            type="email"
            placeholder="Your email"
            className="
              w-full px-4 py-2 rounded-lg text-sm
              bg-gray-100 text-gray-900
              dark:bg-gray-800 dark:text-gray-100
              border border-gray-300 dark:border-gray-700
              focus:outline-none focus:ring-2 focus:ring-purple-500
            "
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800 py-4 text-center text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Experio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
