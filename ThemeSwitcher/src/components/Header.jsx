// src/components/Header.jsx

import React from 'react';
import ThemeBtn from './ThemeBtn';

function Header() {
  return (
    <header className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-md p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Sami's Store
        </h1>
        <ThemeBtn />
      </div>
    </header>
  );
}

export default Header;
