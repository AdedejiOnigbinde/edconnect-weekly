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
    });

    const [state2, setState2] = useState({
        author: [],
        tags: []
    });

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    const handleChange2 = e => {
        setState2({
            ...state2,
            [e.target.name]: e.target.value,
        });
    }
    console.log()
    const postProject = () => {
        
        fetch('/api/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(state, state2)
        }).then(async function (response) {
            const resp = await response.json()
            if (response.status === 200) {
                history.push('/')
            } else {
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
                    {errors && errors.map((error) => <Alert key={'error' + error} variant={'danger'}>{error}</Alert>)}
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
                        <Form.Control type='text' placeholder="Enter authors name(seperated by commas)" name='author' value={state2.author} onChange={handleChange2} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tag(s)</Form.Label>
                        <Form.Control type='text' placeholder="Use # to tag project different topics (e.g #javascript, #mongodb)" name='tags' value={state2.tags} onChange={handleChange2} />
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