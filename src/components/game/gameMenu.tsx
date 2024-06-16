import React, { useState } from "react";

const GameMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <button
        className="top-50 fixed right-4 z-50 rounded bg-gray-600 p-2 text-white"
        onClick={toggleMenu}
      >
        Открыть
      </button>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={closeMenu}
        ></div>
      )}

      <div
        className={`fixed right-0 top-0 z-50 h-full w-96 transform bg-gray-200 shadow-lg transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <button
            className="absolute right-4 top-4 rounded bg-gray-600 p-2 text-white"
            onClick={closeMenu}
          >
            Закрыть
          </button>
          <h2 className="mb-4 text-xl font-bold">Админ панель</h2>
          <ul>
            <li className="mb-2"></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default GameMenu;
