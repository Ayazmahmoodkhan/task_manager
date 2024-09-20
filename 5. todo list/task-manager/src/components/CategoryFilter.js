import React from 'react';
import { Link } from 'react-router-dom';

const CategoryFilter = () => {
  return (
    <nav>
      <ul className="nav nav-pills mb-4">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            All
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/category/General" className="nav-link">
            General
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/category/Work" className="nav-link">
            Work
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/category/Personal" className="nav-link">
            Personal
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default CategoryFilter;
