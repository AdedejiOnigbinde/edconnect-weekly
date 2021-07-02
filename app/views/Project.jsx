import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  ListGroup,
} from "react-bootstrap";
import Layout from "./shared/Layout";

const Project = (prop) => {

  return (
    <Layout user={prop.user}>
      {prop.projectData ? (
        <h1 id="project_name">{prop.projectData.name}</h1>
      ) : (
        <h1 id="project_name">Project1</h1>
      )}
      <Container>
        <Row>
          <Col>
            {prop.userData ? (
              <p id="project_author">
                Created By
                <br />
                {prop.userData.firstname + " " + prop.userData.lastname}
              </p>
            ) : (
              <p id="project_name">
                Created By
                <br />
                Author
              </p>
            )}{" "}
          </Col>
          <Col>
            <p>
              Date Created
              <br />
              2002-04-01
            </p>
          </Col>
          <Col xs={4}>
            <p>
              Last Updated
              <br />
              2020-05-06
            </p>
          </Col>
          <Col>
            <Button>Edit Project</Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h3>Project abstract</h3>
            <hr />
            {prop.projectData ? (
              <p id="project_abstract">{prop.projectData.abstract}</p>
            ) : (
              <p id="project_abstract">abstract</p>
            )}
            <h3>Comments</h3>
            <Form>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Leave a comment"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col>
            <h3>Project Details</h3>
            <hr />
            <Card>
              <Card.Header as="h4">Author(s)</Card.Header>
              <ListGroup>
                {prop.projectData ? (
                  <ListGroup.Item id="project_authors">
                    {prop.projectData.authors + " "}
                  </ListGroup.Item>
                ) : (
                  <ListGroup.Item id="project_authors">Authors</ListGroup.Item>
                )}
              </ListGroup>
              <Card.Header>
                {prop.projectData ? (
                  <Card.Link id="project_tags" href="#">
                    {prop.projectData.tags + " "}
                  </Card.Link>
                ) : (
                  <Card.Link id="project_tags">tag</Card.Link>
                )}
              </Card.Header>
            </Card>
            <br />
            <Card>
              <Card.Header as="h4">Project files</Card.Header>
              <Card.Body>
                <Card.Text className="text-center">
                  No file uploaded yet
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
export default Project;
