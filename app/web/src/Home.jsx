import React from 'react';
import { Jumbotron, Button, Container, Row, Col, Card } from 'react-bootstrap';
import Layout from './shared/Layout';

const Home = () => {
    return (
        <Layout>
            <>
                <Jumbotron >
                    <div>
                        < h1 class="display-6" > Welcome To Project Explorer</h1 >
                    </div>
                    <p>
                        Project Explorer is a repository for final year projects across all
                            departments at your institution. You can submit your project and search projects<br />
                            submitted by others to learn from
                        </p>
                    <div>
                        <Button variant='primary' href='/signup' className="mr-sm-2">Get Started</Button>
                        <Button variant='secondary' href='/login'>Login</Button>
                    </div>


                </Jumbotron>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title><Card.Link>Project 1</Card.Link></Card.Title>
                                    <Card.Subtitle className='text-muted'>Author1, Author2</Card.Subtitle>
                                    <Card.Text>Project Description</Card.Text>
                                    <Card.Link href='#'>#Mongo db</Card.Link>
                                    <Card.Link href='#'>#Database</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title><Card.Link>Project 2</Card.Link></Card.Title>
                                    <Card.Subtitle className='text-muted'>Author1, Author2</Card.Subtitle>
                                    <Card.Text>Project Description</Card.Text>
                                    <Card.Link href='#'>#Administration</Card.Link>
                                    <Card.Link href='#'>#Admin</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title><Card.Link>Project 3</Card.Link></Card.Title>
                                    <Card.Subtitle className='text-muted'>Author1, Author2</Card.Subtitle>
                                    <Card.Text>Project Description</Card.Text>
                                    <Card.Link href='#'>#Fintech</Card.Link>
                                    <Card.Link href='#'>#Analysis</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title><Card.Link>Project 4</Card.Link></Card.Title>
                                    <Card.Subtitle className='text-muted'>Author1, Author2</Card.Subtitle>
                                    <Card.Text>Project Description</Card.Text>
                                    <Card.Link href='#'>#Cyber_Security</Card.Link>
                                    <Card.Link href='#'>#Pen_Test</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        </Layout>
    );
}
export default Home;
