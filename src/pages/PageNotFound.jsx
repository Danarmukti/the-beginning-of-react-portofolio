import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function PageNotFound() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h3>404 PAGE NOT FOUND </h3>
        <p>Opss... Your Page Not Found</p>
      </div>
      <Footer />
    </>
  );
}

export default PageNotFound;
