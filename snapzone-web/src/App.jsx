import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Frame from "./components/Frame";
import Customer from "./components/Customer"; // Import Customer component
import Categories from "./components/Categories"; // Import Categories component
import framesData from "./frames.json";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frames"); // Default to "Frames"
  const [selectedFrame, setSelectedFrame] = useState(null); // State for selected frame

  const handleCategorySelect = (category) => {
    console.log("category clicked --> ", category);
    setSelectedCategory(category);
    setSelectedFrame(null); // Reset selected frame when changing category
  };

  const handleFrameClick = (frame) => {
    setSelectedFrame(frame); // Set the selected frame
    console.log(frame);
  };

  return (
    <div>
      <Header />
      <div className="sale-container">
        <div className="sale-text">Please choose your favorite category❤️</div>
      </div>

      <div className="main-container">
        {/* Categories Section */}
        <Categories onCategorySelect={handleCategorySelect} />

        <main>
          {/* Frames Section */}
          {selectedCategory === "Frames" && (
            <section className="frame-section p-4">
              <h2 className="text-2xl font-semibold mb-4">All Frame Sizes</h2>

              {/* Small Frames */}
              <div className="frames-section">
                <h3 className="text-xl font-semibold mb-4">Small Frames</h3>
                <div className="frames grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {framesData.small?.map((frame, index) => (
                    <Frame key={index} frame={frame} onClick={() => handleFrameClick(frame)} />
                  ))}
                </div>
              </div>

              {/* Medium Frames */}
              <div className="frames-section mt-8">
                <h3 className="text-xl font-semibold mb-4">Medium Frames</h3>
                <div className="frames grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {framesData.medium?.map((frame, index) => (
                    <Frame key={index} frame={frame} onClick={() => handleFrameClick(frame)} />
                  ))}
                </div>
              </div>

              {/* Large Frames */}
              <div className="frames-section mt-8">
                <h3 className="text-xl font-semibold mb-4">Large Frames</h3>
                <div className="frames grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {framesData.large?.map((frame, index) => (
                    <Frame key={index} frame={frame} onClick={() => handleFrameClick(frame)} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Show selected frame details below the frames list */}
          {selectedFrame && (
            <section className="frame-details p-4 mt-4 border-t-2">
              <h3 className="text-2xl font-semibold mb-4">Frame Details</h3>
              <div className="details">
                <p><strong>Name:</strong> {selectedFrame.size}</p>
                <p><strong>Price:</strong> ₹{selectedFrame.price}</p>
                {selectedFrame.colors && (
                  <p><strong>Colors:</strong> {selectedFrame.colors.join(" | ")}</p>
                )}
                {selectedFrame.Shapes && (
                  <p><strong>Shapes:</strong> {selectedFrame.Shapes.join(" | ")}</p>
                )}
              </div>
            </section>
          )}
        </main>
      </div>

      <Footer />
      <Customer /> {/* Add the floating Customer Support button */}
    </div>
  );
};

export default App;
