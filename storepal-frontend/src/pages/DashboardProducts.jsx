import React from "react";
import { Button, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles/DashboardProducts.css";
import { useDeleteProductMutation } from "../services/appApi";

function DashboardProducts({ images, _id, name, price }) {
  const products = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);
  // Delete The Product
  const [deletProduct, { isLoading, isSuccess }] = useDeleteProductMutation();
  function handleDeleteProduct(id) {
    if (window.confirm("Are you sure?"))
      deletProduct({ product_id: id, user_id: user._id });
  }
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th></th>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Product Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((products) => (
          <tr>
            <td>
              <img
                alt=""
                src={products.images[0].url}
                className="dashboard-product-preview"
              ></img>
            </td>
            <td>{products._id}</td>
            <td>{products.name}</td>
            <td>{products.price}</td>
            <td>
              <Button
                disabled={isLoading}
                onClick={() => handleDeleteProduct(products._id, user._id)}
                className="me-2"
              >
                Delete
              </Button>
              <Link
                to={`/product/${products._id}/edit`}
                className="btn btn-warning"
              >
                Edit
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DashboardProducts;
