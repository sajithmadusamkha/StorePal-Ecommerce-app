import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* <Image src={require("../assets/images/bg2.png")} fluid /> */}
      <div className="featuredProducts container mt-4">
        <h2>Last Products</h2>
        <div>
          <Link
            to="/category/all"
            style={{
              textAlign: "right",
              display: "block",
              textDecoration: "none",
            }}
          >
            See more{">>"}
          </Link>
        </div>
      </div>
      <div className="saleBanner mt-4"></div>
    </div>
  );
}

export default Home;
