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
                        <Nav className="mx-auto py-2" >
                            <Nav.Link className="btn btn-warning fw-bold me-2 px-3" as={Link} to="/home">
                                Home
                            </Nav.Link>
                            <Nav.Link className="btn btn-warning fw-bold me-2" as={Link} to="/products">
                                More Watch
                            </Nav.Link>
                            
                            <Nav.Link className="btn btn-warning fw-bold me-2" to="/aboutUs">
                                About Us
                            </Nav.Link>
                            <Nav.Link className="btn btn-warning fw-bold me-2" to="/contactUs">
                                Contact Us
                            </Nav.Link>


                            

           {user?.email ? (
             <>
         <Nav.Link className="text-white fw-bold me-2" as={Link} to="/dashboard">
                      Dashboard
                    </Nav.Link>
               <p className="mb-0 mt-2 ms-3 fw-bold text-white">
            
                {user.displayName}
               </p>
               <Nav.Link as={Link} to="/login">
               <button
                 onClick={logOut}
                 className="btn btn-danger fw-bold "
               >
                 Log Out
               </button>{" "}
               </Nav.Link> 
             </>
           ) : (
             <Nav.Link className="btn btn-warning text-primary fw-bold" as={Link} to="/login">
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