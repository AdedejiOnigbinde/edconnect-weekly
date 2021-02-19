import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Col, Container, Alert } from 'react-bootstrap';
import Layout from './shared/Layout';
const SignUp = () => {
    const history = useHistory();
    const [graduationlist,setGraduationList] = useState([])
    const [programlist,setProgramList] = useState([])
    const [ error, setError] = useState([])

    const [state, setState] = useState({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        programs: "",
        matricNumber: "",
        graduationyear: "",
    });

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    useEffect(() => {
        const getGraduationYear = () => {
            fetch('/api/graduationYears')
                .then(async function (response) {
                    const resp = await response.json();
                    setGraduationList(resp);
                })
        }
        getGraduationYear();
    }, []);

    useEffect(() => {
        const getPrograms = () => {
            fetch('/api/programs')
                .then(async function (response) {
                    const resp = await response.json();
                    setProgramList(resp);
                })
        }
        getPrograms();
    }, []);


    const PostUserData = () => {
        fetch('/api/register', {
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
                setError(resp.errors);
            }
        });

    }

    return (
        <Layout>
            <>
                <Container>
                    {error && error.map((error) => <Alert key={'error' + error} variant={'danger'}>{error}</Alert>)}
                    <h1>Register</h1>
                    <Form>
                        <Form.Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control type='text' placeholder="First name" name='firstname' value={state.firstname} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type='email' placeholder="Email Address" name='email' value={state.email} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Program</Form.Label>
                                    <Form.Control as='select' name='programs' value={state.programs} onChange={handleChange}>
                                        <option>choose...</option>
                                        {programlist && programlist.map((item, index) =>
                                            <option key={'program-list-' + item + '-' + index} >{item}</option>)}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control type='text' placeholder="Last name" name='lastname' value={state.lastname} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type='password' placeholder="Password" name='password' value={state.password} onChange={handleChange} />
                                </Form.Group>
                                <Form.Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Matric Number</Form.Label>
                                            <Form.Control type='text' placeholder="e.g 20/1234" name='matricNumber' value={state.matricNumber} onChange={handleChange} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Graduation Year</Form.Label>
                                            <Form.Control as='select' name='graduationyear' value={state.graduationyear} onChange={handleChange}>
                                                <option>choose...</option>
                                                {graduationlist && graduationlist.map((item, index) =>
                                                    <option key={'graduation-list-' + item + '-' + index} >{item}</option>)}
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                            </Col>
                        </Form.Row>
                        <Button variant='primary' onClick={PostUserData}>
                            Sign Up
                        </Button>
                    </Form>
                </Container>

            </>
        </Layout>
    );
}

export default SignUp;