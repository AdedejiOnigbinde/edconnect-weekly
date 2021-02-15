import React, { useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Form, Button, Col, Container, Alert } from 'react-bootstrap';
import Layout from './shared/Layout';
const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [programs, setPrograms] = useState('')
    const [matricnumber, setMatricNumber] = useState('')
    const [graduationyear, setGraduationYear] = useState('')
    const [error, setError] = useState();
    const handleChange = event => {
        const { name, value } = event.target;
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'firstname':
                setFirstName(value);
                break;
            case 'lastname':
                setLastName(value);
                break;
            case 'matricnumber':
                setMatricNumber(value);
                break;
            case 'graduationyear':
                setGraduationYear(value);
                break;
            case 'programs':
                setPrograms(value);
                break;
            default:
        }
    }
    const PostUserData = event => {
        let history = useHistory();
        event.preventDefault();
        fetch('http://localhost:4000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email
                , password: password
                , firstname: firstname
                , lastname: lastname
                , programs: programs
                , matricnumber: matricnumber
                , graduationyear: graduationyear
            })
        }).then(async function (response) {
            const resp = await response.json()
            if (response.status === 200) {
                document.cookie = `uid=${resp.data.id}; max-age=${60 * 60 * 24 * 7}; path=/`;
                history.push("/");
            } else {
                resp.errors.map((value) =>{
                })
                setError();
            }
        });

    }
    return (
        <Layout>
            <>

                <Container>
                    {error ? <Alert variant={'danger'}>{error}</Alert> : null}
                    <h1>Register</h1>
                    <Form onSubmit={PostUserData}>
                        <Form.Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control type='text' placeholder="First name" name='firstname' value={firstname} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type='email' placeholder="Email Address" name='email' value={email} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Program</Form.Label>
                                    <Form.Control as='select' name='programs' value={programs} onChange={handleChange}>
                                        <option>choose...</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control type='text' placeholder="Last name" name='lastname' value={lastname} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type='password' placeholder="Password" name='password' value={password} onChange={handleChange} />
                                </Form.Group>
                                <Form.Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Matric Number</Form.Label>
                                            <Form.Control type='text' placeholder="e.g 20/1234" name='graduationyear' value={graduationyear} onChange={handleChange} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Graduation Year</Form.Label>
                                            <Form.Control as='select' name='matricnumber' value={matricnumber} onChange={handleChange}>
                                                <option>choose...</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                            </Col>
                        </Form.Row>
                        <Button variant='primary' type='submit'>
                            Sign Up
                        </Button>
                    </Form>
                </Container>

            </>
        </Layout>
    );
}

export default SignUp;