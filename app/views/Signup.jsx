import React from "react";
import { Form, Button, Col, Container, Alert, Row } from "react-bootstrap";
import Layout from "./shared/Layout";
const SignUp = (prop) => {
  return (
    <Layout>
      <Container>
        {prop.error &&
          prop.error.map((error) => (
            <Alert key={"error" + error} variant={"danger"}>
              {error}
            </Alert>
          ))}
        <h1>Register</h1>
        <Form action="signup" method="post">
          <Row>
            <Col>
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First name"
                name="firstname"
              />

              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email Address"
                name="email"
              />

              <Form.Label>Program</Form.Label>
              <Form.Control as="select" name="programs">
                <option>choose...</option>
                {prop.programList &&
                  prop.programList.map((item, index) => (
                    <option key={"program-list-" + item + "-" + index}>
                      {item}
                    </option>
                  ))}
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last name"
                name="lastname"
              />

              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
              />

              <Row>
                <Col>
                  <Form.Label>Matric Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g 20/1234"
                    name="matricNumber"
                  />
                </Col>
                <Col>
                  <Form.Label>Graduation Year</Form.Label>
                  <Form.Control as="select" name="graduationyear">
                    <option>choose...</option>
                    {prop.graduationList &&
                      prop.graduationList.map((item, index) => (
                        <option key={"graduation-list-" + item + "-" + index}>
                          {item}
                        </option>
                      ))}
                  </Form.Control>
                </Col>
              </Row>
            </Col>
          </Row>
          <br></br>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </Container>
    </Layout>
  );
};

export default SignUp;
