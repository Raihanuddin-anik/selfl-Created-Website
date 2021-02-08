import React from 'react';
import './Header.css'
import { Container,Navbar,Form,FormControl,Nav} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Header = () => {
  
    return (
       
    <Container>
    <Navbar expand="lg" className="pt-4 text-primary">
      <Navbar.Brand >
        <img
          src="https://i.ibb.co/FHBKmhh/travel-logo.png"
          width="150"
          height="80"
         
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="m-auto navBarSearchForm pl-3">
          <FormControl type="text" placeholder="Search your Destination..." className="mr-sm-2"  />
        </Form>
        <Nav className="ml-auto" >
          <Nav.Link  className="px-4" >News</Nav.Link>
          <Nav.Link  className="px-4" >News</Nav.Link>
          <Nav.Link  className="px-4" >Destination</Nav.Link>
          <Nav.Link  className="px-4" >Blog</Nav.Link>
          <Nav.Link  className="px-4" >Contact</Nav.Link>
          {/* {user ? (
            <>
              <Nav.Link className="px-4 font-weight-bold" >{user.name.split(' ')[0]}</Nav.Link>
              <Nav.Link className="px-4"  >Logout</Nav.Link>
            </>
          ) : (
              <Nav.Link  className="px-4" to="/login">Login</Nav.Link>
            )} */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>
    );
};

export default Header;