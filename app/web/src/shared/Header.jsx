import React, { useState, useEffect } from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { getUserId, logOut } from '../helper';



const Header = () => {
    // const [userId, setuserId] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        const initUser = () => {
           let userId = getUserId()
            if (userId) {
                fetch('/api/users/' + userId)
                    .then(async function (response) {
                        const resp = await response.json();
                        setUser(resp);
                    })
            }
            return false;
    
        }
        initUser()
    }, [])

   
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

            {!user && <Nav className='justify-content-end'>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>}

            {user && <Nav className='justify-content-end'>
                <Nav.Link onClick={logOut} >Log Out</Nav.Link>
                <Navbar.Text><span>Hi {user.firstname}</span></Navbar.Text>
            </Nav>}
        </Navbar>
    );
}

export default Header;