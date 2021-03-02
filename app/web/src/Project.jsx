import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import Layout from './shared/Layout';

const Project = () => {
    const [projectData, setProjectData] = useState([])
    const [userData, setUserData] = useState([])

    useEffect(() => {
        const queryString = window.location.search;
        const urlP = new URLSearchParams(queryString);
        const urlId = urlP.get('id');
        fetch('/api/projects/' + urlId)
            .then(async function (response) {
                const resp = await response.json()
                setProjectData(resp)
                fetch('/api/users/' + resp.createdBy)
                    .then(async function (response2) {
                        const resp2 = await response2.json()
                        setUserData(resp2)
                    })
            })
    }, [])

    return (
        <Layout>
            {projectData ? <h1>{projectData.name}</h1> : <h1>Project1</h1>}
            <Container>
                <Row>
                    <Col>{userData ? <p>Created By<br />{userData.firstname + ' ' + userData.lastname}</p> : <p>Created By<br />Author</p>} </Col>
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
                        {projectData ? <p>
                            {projectData.abstract}
                        </p> : <p>abstract</p>}
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
                                {projectData ? <ListGroup.Item >
                                    {projectData.authors + " "}
                                </ListGroup.Item> : <ListGroup.Item><p>Authors</p></ListGroup.Item>}
                            </ListGroup>
                            <Card.Header>
                                {projectData ? <Card.Link href="#">{projectData.tags}</Card.Link> : <Card.Link><p>tag</p></Card.Link>}
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
        </Layout>
    );
}
export default Project;