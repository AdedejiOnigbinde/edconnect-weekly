import React from 'react';
import { Form, Button, Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import Layout from './shared/Layout';

const Project = () => {
    return (
        <Layout>
            <>
                <h1>Project 1</h1>
                <Container>
                    <Row>
                        <Col><p>Created By<br />Grace</p> </Col>
                        <Col><p>Date Created<br />2002-04-01</p></Col>
                        <Col xs={4}><p>Last Updated<br />2020-05-06</p></Col>
                        <Col ><Button>Edit Project</Button></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <h3>Project abstract</h3>
                            <hr />
                            <p>
                                I have a dream that one day on the red hills of Georgia, the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood.
                                I have a dream that one day even the state of Mississippi, a state sweltering with the heat of injustice, sweltering with the heat of oppression will be transformed into an oasis of freedom and justice.
                                I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character. I have a dream today.
                            </p>
                            <h3>Comments</h3>
                            <Form>
                                <Form.Group>
                                    <Form.Control as="textarea" rows={4} placeholder="Leave a comment" />
                                </Form.Group>
                                <Button variant='primary' type='submit'>
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col>
                            <h3>Project Details</h3>
                            <hr />
                            <Card>
                                <Card.Header as='h4'>
                                    Author(s)
                                </Card.Header>
                                <ListGroup>
                                    <ListGroup.Item>
                                        Manga Anime
                                    </ListGroup.Item>
                                </ListGroup>
                                <Card.Header>
                                    <Card.Link href="#">#web</Card.Link>
                                </Card.Header>
                            </Card>
                            <br />
                            <Card>
                                <Card.Header as='h4'>
                                    Project files
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text className='text-center'>No file uploaded yet</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        </Layout>
    );
}
export default Project;