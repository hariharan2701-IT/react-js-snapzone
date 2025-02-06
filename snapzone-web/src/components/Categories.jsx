import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; // Import list icon

const Categories = ({ onCategorySelect }) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle categories

  const categories = [
    "Frames",
    "Magic Mirror Frame",
    "Flower Bouquet",
    "Chocolate Bouquet",
    "Rose Flower Bouquet",
    "Customized Chocolate Wrappers",
  ];

  return (
    <div className="relative">
      {/* List Icon Button */}
      <button
        className="category-list-icon p-2 rounded bg-gray-200 hover:bg-gray-300 flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)} // Toggle list visibility
      >
        <FaBars className="text-xl" />
        <span className="hidden sm:inline">Categories</span>
      </button>

      {/* Dropdown Category List */}
      {isOpen && (
        <div className="categories-dropdown absolute top-12 left-0 bg-white shadow-lg p-4 rounded-md">
          {categories.map((category, index) => (
            <button
              key={index}
              className="category-btn block w-full p-2 mb-2 border rounded bg-gray-200 hover:bg-gray-300 text-left"
              onClick={() => {
                onCategorySelect(category);
                setIsOpen(false); // Close the dropdown after selecting
              }}
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
