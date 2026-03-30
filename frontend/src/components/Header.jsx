import { Link } from 'react-router-dom';
import { FiPhone } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Newton Labs" className="h-10 w-auto" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Newton Labs
            </span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">Home</Link>
            <Link to="/tests" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">Tests</Link>
            <Link to="/packages" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">Packages</Link>
            <Link to="/consultation" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition">Consultation</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="tel:9360264347" className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600">
              <FiPhone size={16} className="mr-1" />
              <span className="hidden md:inline">9360264347</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
