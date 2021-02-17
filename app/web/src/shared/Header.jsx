import React, { useState, useEffect } from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    const [userCookie, setUserCookie] = useState('');

    useEffect(() => {
        const getCookie = () => {
            if (document.cookie.includes('uid')) {
                let uidRow = document.cookie.split(';').find(row => row.startsWith('uid'));
                if (uidRow !== -1) {
                     setUserCookie(uidRow.split('=')[1])
                }
            }
            return false;
        }
        getCookie();
        console.log(userCookie)
    },[userCookie])
    
    return (

        <Navbar bg='primary' variant='dark' className='justify-content-between' >
            <Nav>
                <Navbar.Brand href='/'>Project Explorer</Navbar.Brand>
                <Form inline>
                    <FormControl type='text' placeholder='Search Project' className="mr-sm-2" />
                    <Button variant='outline-light' type='submit'>Search</Button>
                </Form>
                <Nav>
                    <Nav.Link href="/projects">Project</Nav.Link>
                    <Nav.Link href="/projects/submit">Submit</Nav.Link>
                </Nav>
            </Nav>

            <Nav className='justify-content-end'>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Header;