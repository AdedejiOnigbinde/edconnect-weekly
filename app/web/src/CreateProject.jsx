import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import Layout from './shared/Layout';
import { getUserId } from './helper';

const CreateProject = () => {
    const history = useHistory();
    const [errors, setErrors] = useState([])
    const [state, setState] = useState({
        projectName: "",
        projectAbstract: "",
        author: [],
        tags: []
    });

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    const postProject = () => {
        fetch('/api/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(state)
        }).then(async function (response) {
            const resp = await response.json()
            if (response.status === 200) {
                history.push('/')
            } else {
                console.log(resp.errors)
                setErrors(resp.errors)
            }
        });
    }

    if (!getUserId()) {
        return <Redirect to="/login" />
    }

    return (
        <Layout>
            <>
                <Form className='w-50 mx-auto'>
                    {errors && errors.map((error) => <Alert variant={'danger'}>{error}</Alert>)}
                    <h1>Submit Project</h1>
                    <Form.Group>
                        <Form.Label>Project name</Form.Label>
                        <Form.Control type='text' placeholder="Enter project name" name='projectName' value={state.projectName} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Project abstract</Form.Label >
                        <Form.Control as="textarea" rows={8} name='projectAbstract' value={state.projectAbstract} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Authors</Form.Label>
                        <Form.Control type='text' placeholder="Enter authors name(seperated by commas)" name='author' value={state.author} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tag(s)</Form.Label>
                        <Form.Control type='text' placeholder="Use # to tag project different topics (e.g #javascript, #mongodb)" name='tags' value={state.tags} onChange={handleChange} />
                    </Form.Group>
                    <Button variant='primary' onClick={postProject}>
                        Continue
                    </Button>
                </Form>
            </>
        </Layout>
    );
}
export default CreateProject;