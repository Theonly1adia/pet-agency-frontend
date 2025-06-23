import { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // 👈 Detect route changes

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [location]); // 👈 re-check login state on route change

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">
          <Link to="/">Furr-Ever Friend Finder</Link>
        </h1>

        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          {isLoggedIn && (
            <Link to="/add-pet" className="hover:underline">Add Pet</Link>
          )}
          {!isLoggedIn ? (
            <Link to="/login" className="hover:underline">Login</Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          )}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block hover:underline">Home</Link>
          <Link to="/about" className="block hover:underline">About</Link>
          {isLoggedIn && (
            <Link to="/add-pet" className="block hover:underline">Add Pet</Link>
          )}
          {!isLoggedIn ? (
            <Link to="/login" className="block hover:underline">Login</Link>
          ) : (
            <button
              onClick={handleLogout}
              className="w-full text-left hover:underline text-red-400"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
