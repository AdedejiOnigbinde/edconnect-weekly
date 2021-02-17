import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';


const Header = () => {
    const [userCookie, setUserCookie] = useState('');
    const [userId, setUserId] = useState('');
    const [user, setUser] = useState('');
    const history = useHistory();

    // const getCookie = () => {
    //     if (document.cookie.includes('uid')) {
    //         let uidRow = document.cookie.split(';').find(row => row.startsWith('uid'));
    //         if (uidRow !== -1) {
    //             setUserCookie(uidRow.split('=')[1])
    //         }
    //     }
    //     return false;
    // }

 

    // useEffect(() => {
    //     const initUser = () => {
    //         setUserId(userCookie)
    //         if (userId) {
    //             fetch('http://localhost:4000/api/users/' + userId)
    //                 .then(async function (response) {
    //                     const resp = await response.json();
    //                     setUser(resp);
    //                 })
    //         }
    //         return false;
    
    //     }
    //     getCookie()
    //     initUser()
    // }, [userCookie,userId])

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
                <Navbar.Text><span>Hi {user.firtname}</span></Navbar.Text>
            </Nav>}
        </Navbar>
    );
}

export default Header;