import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Layout from './shared/Layout';

const CreateProject = () => {
    return (
        <Layout>
            <>
                <Form className='w-50 mx-auto'>
                    <h1>Submit Project</h1>
                    <Form.Group>
                        <Form.Label>Project name</Form.Label>
                        <Form.Control type='text' placeholder="Enter project name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Project abstract</Form.Label>
                        <Form.Control as="textarea" rows={8} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Authors</Form.Label>
                        <Form.Control type='text' placeholder="Enter authors name(seperated by commas)" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tag(s)</Form.Label>
                        <Form.Control type='text' placeholder="Use # to tag project different topics (e.g #javascript, #mongodb)" />
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Continue
                    </Button>
                </Form>
            </>
        </Layout>
    );
}
export default CreateProject;