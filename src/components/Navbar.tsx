import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const base = "btn btn-ghost rounded-btn text-lg hover:bg-primary hover:text-primary-content transition-all";
    return location.pathname === path ? `${base} bg-base-300 text-base-content font-bold shadow-sm` : base;
  };

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      <div className="flex-1 px-4">
        <Link to="/" className="text-2xl font-black text-primary hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer flex items-center gap-2">
          <span className="text-3xl">🐾</span> Fostering Felines
        </Link>
      </div>
      <div className="flex-none px-4 space-x-2">
        <Link to="/" className={getLinkClass('/')}>Home</Link>
        <Link to="/gallery" className={getLinkClass('/gallery')}>Gallery</Link>
        <Link to="/resources" className={getLinkClass('/resources')}>Resources</Link>
        <Link to="/about" className={getLinkClass('/about')}>About</Link>
      </div>
    </div>
  );
};

export default Navbar;
