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
                            src="https://2qndqt12n4813dp6kr3fdr92-wpengine.netdna-ssl.com/wp-content/themes/swisseagle/images/logo.png"
                            width="120"
                            height="40"
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
         
               <p className="mb-0 mt-2 ms-3 fw-bold">
            
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
             <Nav.Link className="btn  text-primary fw-bold" as={Link} to="/login">
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