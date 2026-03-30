import { Link } from 'react-router-dom';
import { FiHome, FiActivity, FiPackage, FiPhone } from 'react-icons/fi';

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t shadow-lg z-50">
      <div className="flex justify-around items-center py-3">
        <Link to="/" className="flex flex-col items-center text-xs">
          <FiHome size={20} />
          <span>Home</span>
        </Link>
        <Link to="/tests" className="flex flex-col items-center text-xs">
          <FiActivity size={20} />
          <span>Tests</span>
        </Link>
        <Link to="/packages" className="flex flex-col items-center text-xs">
          <FiPackage size={20} />
          <span>Packages</span>
        </Link>
        <Link to="/consultation" className="flex flex-col items-center text-xs">
          <FiPhone size={20} />
          <span>Consult</span>
        </Link>
      </div>
    </nav>
  );
}
