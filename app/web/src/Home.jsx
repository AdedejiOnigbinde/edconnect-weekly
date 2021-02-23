import React, { useState, useEffect } from 'react';
import { Jumbotron, Button, Container, Row, Col, Card } from 'react-bootstrap';
import Layout from './shared/Layout';

const Home = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const getProjects = () => {
            fetch('/api/projects')
                .then(async function (response) {
                    const resp = await response.json()
                    setProjects(resp.slice(0, 4))
                })
        }
        getProjects();
    }, []);

    return (
        <Layout>
            <Jumbotron >
                <div>
                    < h1 className="display-6" > Welcome To Project Explorer</h1 >
                </div>
                <p>
                    Project Explorer is a repository for final year projects across all
                    departments at your institution. You can submit your project and search projects
                    submitted by others to learn from
                        </p>
                <div>
                    <Button variant='primary' href='/signup' className="mr-sm-2">Get Started</Button>
                    <Button variant='secondary' href='/login'>Login</Button>
                </div>


            </Jumbotron>
            <Container>
                <Row>
                    {projects.map((project) => (
                        <Col key={'project-info' + project.name}>
                            <Card >
                                <Card.Body>
                                    <Card.Title><Card.Link href={'/projects/?id=' + project.id} >{project.name}</Card.Link></Card.Title>
                                    {project.authors.map((author, index) => (<Card.Subtitle key={'project-author' + project.authors + '-' + index} className='text-muted'>{author}</Card.Subtitle>))}
                                    <Card.Text>{project.abstract}</Card.Text>
                                    {project.tags.map((tag, index) => (<Card.Link key={'project-tag' + project.tags + '-' + index} href='#'>{tag}</Card.Link>))}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                    }

                </Row>
            </Container>
        </Layout>
    );
}
export default Home;
