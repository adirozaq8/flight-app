import React from "react";
import Navbar from "../components/navbar/navbar";
import Jumbotron from "../components/jumbotron/Jumbotron";
import Footer from "../components/footer/Footer";

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
