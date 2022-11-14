import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="/assets/projectcart.jpg" className="card-img" alt="Baclground" height="550"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text">
            CHECK OUT ALL THE TRENDS
          </p>
            </div>
          
          
        </div>
      </div>
      <Products/>
    </div>
  );
}

export default Home;
