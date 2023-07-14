import axios from "../axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Image, Row } from "react-bootstrap";
import categories from "../categories";
import { LinkContainer } from "react-router-bootstrap";
import "../assets/styles/Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const lastProducts = products.slice(0, 8);
  useEffect(() => {
    //axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
    axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
  }, []);
  return (
    <div>
      <Image src={require("../assets/images/banner.png")} fluid />
      <div className="featuredProducts container mt-4">
        <h2>Last Products</h2>
        <div className="d-flex justify-content-center flex-wrap">
          {lastProducts.map((product) => (
            <ProductPreview {...product} />
          ))}
        </div>
        <div>
          <Link
            to="/category/all"
            style={{
              textAlign: "right",
              display: "block",
              textDecoration: "none",
              marginBottom: "10px",
            }}
          >
            See more{">>"}
          </Link>
        </div>
      </div>
      <div className="saleBanner">
        <Image
          className="sale-banner-img"
          src={require("../assets/images/sale-banner.png")}
          fluid
        />
      </div>
      <div className="recentProducts container mt-4">
        <h2>Categories</h2>
        <Row>
          {categories.map((category) => (
            <LinkContainer
              to={`/category/${category.name.toLocaleLowerCase()}`}
            >
              <Col md={3}>
                <div
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`,
                    gap: "10px",
                  }}
                  className="categoryTitle"
                >
                  {category.name}
                </div>
              </Col>
            </LinkContainer>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Home;
