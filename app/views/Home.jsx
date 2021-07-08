import React from "react";
import { Jumbotron, Button, Container, Row, Col, Card } from "react-bootstrap";
import Layout from "./shared/Layout";

const Home = (prop) => {
  return (
    <Layout user={prop.user}>
      <Jumbotron>
        <h1 className="display-6"> Welcome To Project Explorer</h1>
        <p>
          Project Explorer is a repository for final year projects across all
          departments at your institution. You can submit your project and
          search projects submitted by others to learn from
        </p>
        <div>
          <Button variant="primary" href="/signup" className="mr-sm-2">
            Get Started
          </Button>
          <Button variant="secondary" href="/login">
            Login
          </Button>
        </div>
      </Jumbotron>
      <Container className="showcase">
        <Row>
          {prop.project &&
            prop.project.map((project) => (
              <Col key={"project-info" + project.name}>
                <Card style={{ height: "12rem" }}>
                  <Card.Body>
                    <Card.Title>
                      <Card.Link href={`/project/${project.id}`}>
                        {project.name}
                      </Card.Link>
                    </Card.Title>
                    {project.authors.map((author, index) => (
                      <Card.Subtitle
                        key={"project-author" + project.authors + "-" + index}
                        className="text-muted"
                      >
                        {author}
                      </Card.Subtitle>
                    ))}
                    <Card.Text>{project.abstract}</Card.Text>
                    {project.tags.map((tag, index) => (
                      <Card.Link
                        key={"project-tag" + project.tags + "-" + index}
                        href="#"
                      >
                        {tag}
                      </Card.Link>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </Layout>
  );
};
export default Home;
