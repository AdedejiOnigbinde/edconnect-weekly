import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Layout from "./shared/Layout";
const Login = (prop) => {
  return (
    <Layout>
      <>
        <Form
          className="w-50 mx-auto"
          id="loginForm"
          action="login"
          method="post"
        >
          {
            prop.error2 &&
            <Alert key={"error" + error2} variant="danger">
              {prop.error2}
            </Alert>
          }

          < h1 > Login</h1>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email Address"
              name="email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </>
    </Layout >
  );
};

export default Login;
