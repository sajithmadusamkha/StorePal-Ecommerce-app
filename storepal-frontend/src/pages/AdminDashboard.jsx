import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import DashboardProducts from "./DashboardProducts";
import OrdersAdminPage from "../components/OrdersAdminPage";

function AdminDashboard() {
  return (
    <Container>
      <Tab.Container defaultActiveKey="products">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="products">Products</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="orders">Orders</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="clients">Clients</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content eventKey="products">
              <DashboardProducts />
            </Tab.Content>
            <Tab.Content eventKey="orders">
              <OrdersAdminPage />
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default AdminDashboard;
