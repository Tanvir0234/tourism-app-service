import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const {user , logOut} =useAuth();
    
    return (
        <>
            <Navbar expand="lg" className="menu">
                <Container>
                    <Navbar.Brand className="text-white" href="#home">
                        <img
                            alt=""
                            src="https://elementor.detheme.com/suissland/wp-content/uploads/sites/27/2021/06/suiss-white-1024x220.png"
                            width="130"
                            height="60"
                            className="d-inline-block align-top"
                        />{' '}
                       
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto py-2" >
                            <Nav.Link className="btn text-white fw-bold me-2 px-3" as={Link} to="/home">
                                Home
                            </Nav.Link>
                            <Nav.Link className="btn text-white fw-bold me-2" as={Link} to="/products">
                                More Watch
                            </Nav.Link>
                      {user?.email ? (
             <>
         <Nav.Link className="text-white fw-bold mx-auto px-3" as={Link} to="/dashboard">
                      Dashboard
                    </Nav.Link>
               <p className="mt-2 fw-bold mx-auto text-warning">
            
                {user?.displayName}
               </p>
               <Nav.Link as={Link} to="/login" className="mx-auto">
               <button
                 onClick={logOut}
                 className="btn btn-danger rounded-pill fw-bold  px-3 "
               >
                 Log Out
               </button>{" "}
               </Nav.Link> 
             </>
           ) : (
             <Nav.Link className="btn btn-outline-warning rounded-pill px-3 text-white fw-bold" as={Link} to="/login">
               log In
             </Nav.Link>
           )}
           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;