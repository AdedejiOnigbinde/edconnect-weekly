import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    const [userCookie, setUserCookie] = useState('');
    const [userId, setUserId] = useState('');
    const [user, setUser] = useState('');
    const history = useHistory();

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

        const initUser = () => {
            let url = window.location.href.split('/').pop();
            setUserId(userCookie)
            if (userId) {
                fetch('http://localhost:4000/api/users/' + userId)
                    .then(async function (response) {
                        const resp = await response.json();
                        setUser(resp);
                    })
            } else if (!user && url.startsWith('createProject.html')) {
                history.push('/login')
            }

        }
        getCookie();
        initUser();
        return function cleanUp() {

        }

    })

    const logOut = () => {
        document.cookie = `uid= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        history.push('/')
};

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
            <Navbar.Text>Hi + {user.firtname}</Navbar.Text>
        </Nav>}
    </Navbar>
);
}

export default Header;