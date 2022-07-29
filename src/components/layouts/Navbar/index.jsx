import React from 'react'
import { Container, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import header_logo from '../../../assets/images/logo/header-logo.png';
import { BUTTON_TYPES } from '../../../utils/constants';
import ButtonComponent from '../../ui-kit/Button';

const NavigationBar = () => {
  return (
    <header className='header_section' id='nav-header'>
    <Container fluid className='px-0'>
      <div className='navbar_inner'>
        <Navbar collapseOnSelect expand='lg'>
          <Navbar.Brand href='#home'>
            <Image src={header_logo} className='img-fluid header_logo' alt='Logo Image' />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-lg-auto'>
              <Nav.Link href='#'>
                <span>Active Listings</span>
              </Nav.Link>
              <Nav.Link href='#'>
                <span>Sell your Self Storage</span>
              </Nav.Link>
              <Nav.Link href='#'>
                <span>Free Evaluation</span>
              </Nav.Link>
              <Nav.Link href='#'>
                <span>Learn</span>
              </Nav.Link>
              <ButtonComponent buttonType={BUTTON_TYPES.button} title={'Contact'} className='btn primaryBtn btn-sm contactBtn' />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Container>
  </header>
  )
}

export default NavigationBar