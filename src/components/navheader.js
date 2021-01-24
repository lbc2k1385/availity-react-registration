import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import AvailityLogo from '../images/availity-logo.png';
import './navheader.css'

const NavHeader = (props) => {
  return(
    <Navbar bg="light" expand="lg" className = 'navheader'>
        <Navbar.Brand>
            <img 
                src= {AvailityLogo}
                alt="Availity Logo" 
                style={{width:'150px'}}/>
        </Navbar.Brand>
    </Navbar>
   )
 }

export default NavHeader