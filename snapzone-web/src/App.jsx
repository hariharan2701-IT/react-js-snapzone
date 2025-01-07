import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import Frame from "./components/Frame";
import framesData from "./frames.json";

const App = () => (
  <div>
    <Popup />
    <Header />
    <div className="sale-container">
      <div className="sale-text">THANKS FOR CHOOSING SNAPZONE FRAMES! ❤️</div>
    </div>
    <main>
      {["small", "medium", "large"].map((category) => (
        <section className="frame-section" key={category}>
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Frame Sizes</h2>
          <div className="frames">
            {framesData[category].map((frame, index) => (
              <Frame key={index} frame={frame} />
            ))}
          </div>
        </section>
      ))}
    </main>
    <Footer />
  </div>
);

export default App;
