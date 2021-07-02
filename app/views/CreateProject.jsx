import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Layout from './shared/Layout';


const CreateProject = (prop) => {


    return (
        <Layout user={prop.user}>
            <Form className='w-50 mx-auto' id='createProjectForm' action='/projects/submit' method='post'>
                {prop.error3 && prop.error3.map((error) => <Alert key={'error' + error} variant={'danger'}>{error}</Alert>)}
                <h1>Submit Project</h1>
                <Form.Group>
                    <Form.Label>Project name</Form.Label>
                    <Form.Control type='text' placeholder="Enter project name" name='name' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Project abstract</Form.Label >
                    <Form.Control as="textarea" rows={8} name='abstract' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Authors</Form.Label>
                    <Form.Control type='text' placeholder="Enter authors name(seperated by commas)" name='authors' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tag(s)</Form.Label>
                    <Form.Control type='text' placeholder="Use # to tag project different topics (e.g #javascript, #mongodb)" name='tags' />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Continue
                </Button>
            </Form>
        </Layout>
    );
}
export default CreateProject;