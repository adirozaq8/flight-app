import React from "react";
import Navbar from "./components/Navbar/Navbar";
import TestBody from "./components/Test/TestBody";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      {/* Header Section */}
      <TestBody />
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
