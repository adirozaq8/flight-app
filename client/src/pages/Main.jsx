import React from "react";
import Navbar from "../components/navbar/Navbar";
import Jumbotron from "../components/jumbotron/Jumbotron";
import Footer from "../components/footer/Footer";
// import TestBody from "../components/Test/TestBody";

function Main() {
  return (
    <div>
      <Navbar />
      {/* Header Section */}
      <Jumbotron />
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Main;
