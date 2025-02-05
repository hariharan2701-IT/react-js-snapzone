import React from "react";

const Categories = ({ onCategorySelect }) => {
  // Add the new categories here
  const categories = [
    "Frames",
    "Magic Mirror Frame",
    "Flower Bouquet",
    "Chocolate Bouquet",
    "Rose Flower Bouquet",
    "Customized Chocolate Wrappers",
  ];

  return (
    <div className="categories-container">
      <h2 className="text-2xl font-semibold mb-4">Choose a Category</h2>
      <div className="categories grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className="category-btn p-2 border rounded bg-gray-200 hover:bg-gray-300"
            onClick={() => onCategorySelect(category)} // Handle category click
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
