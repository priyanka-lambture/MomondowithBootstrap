import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import  { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import menu from '../../json-api/menu.json';

function Header() {
  return(
    <>
    <Navbar expand="lg" className="bg-deepblue text-white">
      <Container>
        <Link to={"/"}>
          <Navbar.Brand><img src={logo} alt="" className='w-25 h-25'/></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Link to={"/"} className='text-danger nav-link'>Flights</Link>
            <Link to={"/hotel"} className='text-white nav-link'>Hotel</Link>
            <Link to={"/carhire"} className='text-white nav-link'>Car Hire</Link>
            <Link to={"/tripfinder"} className='text-white nav-link'>Trip Finder</Link>
            <Link to={"/inspiration"} className='text-white nav-link'>Inspiration</Link>
             */}
            {
              menu.map((item,index)=>{
                return (
                <Link to={item.index} className='text-white nav-link'>{item.menu}</Link> 
                )
              })
            }
          </Nav>
         <div className="d-flex">
           <NavDropdown title="English(GBP)" id="basic-nav-dropdown" className='me-4'>
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Something</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Separated link</NavDropdown.Item>
           </NavDropdown>
           <Link to="{/login}" className='text-warning nav-link'>Login</Link>
         </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
);
 
}
  

export default Header;
