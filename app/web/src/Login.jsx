import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Layout from './shared/Layout';
const Login = () => {
    const [error, setError] = useState('')
    const history = useHistory();
    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    const PostUserData = () => {
        fetch('http://localhost:4000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(state)
        }).then(async function (response) {
            const resp = await response.json()
            if (response.status === 200) {
                document.cookie = `uid=${resp.data.id}; max-age=${60 * 60 * 24 * 7}; path=/`;
                history.push('/')
            } else {
                setError('invalid email/password');
            }
        });

    }

    return (
        <Layout>
            <>

                <Form className='w-50 mx-auto'>
                    {error ? <Alert variant={'danger'}>{error}</Alert> : null}
                    <h1>Login</h1>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder="Email Address" name='email' value={state.email} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder="Password" name='password' value={state.password} onChange={handleChange} />
                    </Form.Group>
                    <Button variant='primary' onClick={PostUserData}>
                        Login
                        </Button>
                </Form>
            </>
        </Layout>
    );
}

export default Login;