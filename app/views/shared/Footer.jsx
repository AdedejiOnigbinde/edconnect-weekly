import React from 'react';
import { Navbar,Nav} from 'react-bootstrap';
const Footer = () =>{
    return(
        <Navbar sticky='bottom'  bg='light' variant='light' className='justify-content-between'>
            <Nav className='ml-auto'>
            <Navbar.Text>Project Explorer &copy; 2020 <span className='spacer'>&middot;</span>{" "}</Navbar.Text>
            <Nav.Link href='#'>Edconnect</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Footer;