import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //function handleoOnSubmit() {}
  return (
    <>
      <Container>
        <Form>
          <h1>Login to your account</h1>
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
              Login
            </Button>
          </Form.Group>
          <p>
            Don't have an account? <Link to="/signup">Create account</Link>
          </p>
        </Form>
        <Row>
          <Col xs={6} md={4} className="image_login"></Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
