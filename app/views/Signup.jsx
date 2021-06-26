import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Col, Container, Alert } from "react-bootstrap";
import Layout from "./shared/Layout";
const SignUp = (prop) => {
  return (
    <Layout>
      <Container>
        {error &&
          error.map((error) => (
            <Alert key={"error" + error} variant={"danger"}>
              {error}
            </Alert>
          ))}
        <h1>Register</h1>
        <Form method="POST" action="signup">
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First name"
                  name="firstname"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  name="email"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Program</Form.Label>
                <Form.Control as="select" name="programs">
                  <option>choose...</option>
                  {prop.programlist &&
                    prop.programlist.map((item, index) => (
                      <option key={"program-list-" + item + "-" + index}>
                        {item}
                      </option>
                    ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  name="lastname"
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
              <Form.Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Matric Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="e.g 20/1234"
                      name="matricNumber"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Graduation Year</Form.Label>
                    <Form.Control as="select" name="graduationyear">
                      <option>choose...</option>
                      {prop.graduationlist &&
                        prop.graduationlist.map((item, index) => (
                          <option key={"graduation-list-" + item + "-" + index}>
                            {item}
                          </option>
                        ))}
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Form.Row>
            </Col>
          </Form.Row>
          <Button variant="primary">Sign Up</Button>
        </Form>
      </Container>
    </Layout>
  );
};

export default SignUp;
