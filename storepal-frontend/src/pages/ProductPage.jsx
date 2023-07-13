import axios from "../axios";
import React, { useEffect, useState } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import Loading from "../components/Loading";
import SimilarProduct from "../components/SimilarProduct";
import "../assets/styles/ProductPage.css";

function ProductPage() {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const [product, setProduct] = useState(null);
  const [similar, setSimilar] = useState(null);
  //const [addToCart, { isSuccess }] = useAddToCartMutation();

  const handleDragStart = (e) => e.preventDefault();

  useEffect(() => {
    axios.get(`/products/${id}`).then(({ data }) => {
      setProduct(data.product);
      setSimilar(data.similar);
    });
  }, [id]);

  if (!product) {
    return <Loading />;
  }

  const images = product.images.map((picture) => (
    <img
      className="product-carousel-image"
      src={picture.url}
      onDragStart={handleDragStart}
      alt=""
    />
  ));

  let similarProducts = [];
  if (similar) {
    similarProducts = similar.map((product, idx) => (
      <div className="item" data-value={idx}>
        <SimilarProduct {...product} />
      </div>
    ));
  }

  return (
    <Container className="pt-4" style={{ position: "relative" }}>
      <Row>
        <Col lg={6}>
          <AliceCarousel
            mouseTracking
            items={images}
            controlsStrategy="alternate"
          />
        </Col>
        <Col lg={6} className="pt-4">
          <h1>{product.name}</h1>
          <p>
            <Badge bg="primary">{product.category}</Badge>
          </p>
          <p className="product-price">Rs.{product.price}</p>
          <p style={{ textAlign: "justify" }} className="py-3">
            <strong>Description:</strong> {product.description}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductPage;
