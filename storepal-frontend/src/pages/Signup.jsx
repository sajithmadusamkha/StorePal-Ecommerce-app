import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Container>
        <Row>
          <Col md={6} className="signupContainer">
            <Form>
              <h1>Create new account</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Button variant="primary" type="submit">
                  Signup
                </Button>
              </Form.Group>
              <p>
                Don't have an account? <Link to="/signup">Create account</Link>{" "}
              </p>
            </Form>
          </Col>
          <Col md={6} className="image_signup"></Col>
        </Row>
      </Container>
    </>
  );
}

export default Signup;
