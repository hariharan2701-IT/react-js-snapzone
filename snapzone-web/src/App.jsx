import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Frame from "./components/Frame";
import Customer from "./components/Customer";
import Categories from "./components/Categories";
import BudgetFilter from "./components/BudgetFilter";
import framesData from "./frames.json";
import MirrorFrames from "./mirrorframes.json";
import flowers from "./flower.json";
import polaroid from "./polaroid.json";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frames");
  const [selectedFrame, setSelectedFrame] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false); // To track budget filtering

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedFrame(null);
    setFilteredItems([]); // Reset filtered items when switching categories
    setIsFiltering(false);
  };

  const handleFrameClick = (frame) => {
    setSelectedFrame(frame);
  };

  const handleFilter = (budget) => {
    if (!budget) {
      setFilteredItems([]);
      setIsFiltering(false);
      return;
    }

    const allItems = [
      ...(framesData.small || []),
      ...(framesData.medium || []),
      ...(framesData.large || []),
      ...(MirrorFrames.Various || []),
      ...(flowers.Flower || []),
      ...(flowers.Cholocate || []),
      ...(flowers.Polaroid || []),
      ...(polaroid.Polarids || []),
    ];

    const filtered = allItems.filter((item) => Number(item.price) <= Number(budget));

    setFilteredItems(filtered);
    setIsFiltering(true);
  };

  return (
    <div>
      <Header />
      <div className="sale-container">
        <div className="sale-text">Please choose your favorite category ❤️</div>
      </div>

      <div className="main-container">
        <Categories onCategorySelect={handleCategorySelect} />
        <BudgetFilter onFilter={handleFilter} />

        <main>
          {isFiltering ? (
            // ✅ Show all filtered items in one section
            <section className="frame-section p-4">
              <h2 className="text-2xl font-semibold mb-4">Filtered Products</h2>
              {filteredItems.length > 0 ? (
                <div className="frames grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredItems.map((frame, index) => (
                    <Frame key={index} frame={frame} onClick={() => handleFrameClick(frame)} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No products found under this budget.</p>
              )}
            </section>
          ) : (
            // ✅ Show category-wise products normally
            <>
              {selectedCategory === "Frames" && (
                <section className="frame-section p-4">
                  <h2>All Frame Sizes</h2>
                  {["small", "medium", "large"].map(
                    (size) =>
                      framesData[size]?.length > 0 && (
                        <div key={size} className="frames-section">
                          <h3>{size} Frames</h3>
                          <div className="frames">
                            {framesData[size].map((frame, index) => (
                              <Frame key={index} frame={frame} onClick={() => handleFrameClick(frame)} />
                            ))}
                          </div>
                        </div>
                      )
                  )}
                </section>
              )}

              {selectedCategory === "Magic Mirror Frame" && (
                <section className="frame-section p-4">
                  <h2>Magic Mirror Frames</h2>
                  {MirrorFrames["Various"]?.length > 0 && (
                    <div className="frames-section">
                      <h3>Various Collection</h3>
                      <div className="frames">
                        {MirrorFrames["Various"].map((frame, index) => (
                          <Frame key={index} frame={frame} onClick={() => handleFrameClick(frame)} />
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              )}

              {selectedCategory === "Bouquets" && (
                <section className="frame-section p-4">
                  <h2>All Types of Bouquets</h2>
                  {["Flower", "Cholocate", "Polaroid"].map(
                    (type) =>
                      flowers[type]?.length > 0 && (
                        <div key={type} className="frames-section">
                          <h3>{type} Bouquets</h3>
                          <div className="frames">
                            {flowers[type].map((frame, index) => (
                              <Frame key={index} frame={frame} onClick={() => handleFrameClick(frame)} />
                            ))}
                          </div>
                        </div>
                      )
                  )}
                </section>
              )}

              {selectedCategory === "Polaroid" && (
                <section className="frame-section p-4">
                  <h2>Polaroids</h2>
                  {polaroid["Polarids"]?.length > 0 && (
                    <div className="frames-section">
                      <h3>Polaroid Collection</h3>
                      <div className="frames">
                        {polaroid["Polarids"].map((frame, index) => (
                          <Frame key={index} frame={frame} onClick={() => handleFrameClick(frame)} />
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              )}
            </>
          )}

          {selectedFrame && (
            <section className="frame-details p-4 mt-4 border-t-2">
              <h3 className="text-2xl font-semibold mb-4">Frame Details</h3>
              <div className="details">
                <p>
                  <strong>Name:</strong> {selectedFrame.size}
                </p>
                <p>
                  <strong>Price :</strong> ₹{selectedFrame.price}
                </p>
                {selectedFrame.colors?.length > 0 && (
                  <p>
                    <strong>Colors:</strong> {selectedFrame.colors.join(" | ")}
                  </p>
                )}
                {selectedFrame.shapes?.length > 0 && (
                  <p>
                    <strong>Shapes:</strong> {selectedFrame.shapes.join(" | ")}
                  </p>
                )}
              </div>
            </section>
          )}
        </main>
      </div>

      <Footer />
      <Customer />
    </div>
  );
};

export default App;
