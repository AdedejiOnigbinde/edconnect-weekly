import React, { useState } from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

const Header = (prop) => {
  return (
    <Navbar bg="primary" variant="dark" className="justify-content-between">
      <Nav>
        <Navbar.Brand href="/">Project Explorer</Navbar.Brand>

        <Form className='d-flex'>
          <FormControl
            type="text"
            placeholder="Search Project"
            className="mr-sm-2"
          />
          <Button variant="outline-light" type="submit">
            Search
          </Button>
        </Form>

        <Nav>
          <Nav.Link href="/projects/:id">Project</Nav.Link>
          <Nav.Link href="/projects/submit">Submit</Nav.Link>
        </Nav>
      </Nav>

      {!prop.user && (
        <Nav className="justify-content-end">
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      )}

      {prop.user && (
        <Nav className="justify-content-end">
          <Nav.Link href="/logout">Logout</Nav.Link>
          <Navbar.Text>
            <span id="username">Hi {prop.user.firstname}</span>
          </Navbar.Text>
        </Nav>
      )}
    </Navbar>
  );
};

export default Header;
