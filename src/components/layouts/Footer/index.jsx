import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import footer_logo from '../../../assets/images/logo/footer-logo.png';
import { FaFacebookF, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BUTTON_TYPES, INPUT_TYPES } from '../../../utils/constants';
import Button from '../../ui-kit/Button';
import Input from '../../ui-kit/Input';
import Dropdown from '../../ui-kit/Dropdown';
import footer_bg_left from '../../../assets/images/stock-images/footer_bg_left.png';
import footer_bg_right from '../../../assets/images/stock-images/footer_bg_right.png';

const Footer = () => {
  return (
    <footer className='footer_section'>
    <Container fluid className='px-0'>
      <div className='content_holder'>
        <Row className='row_fluid gx-lg-4'>
          <Col xl={4} lg={3} sm={12}>
            <div className='text_box pe-md-5'>
              <Image src={footer_logo} className='img-fluid footer_logo' alt='Logo Image' />
              <p className='text me-md-5'>Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero.</p>
              <p className='text mt-4'>© StorageConnect 2022, All Rights Reserved</p>
            </div>
          </Col>

          <Col xl={2} lg={3} md={4} sm={3}>
            <div className='text_box'>
              <h6 className='title_text'>Quick Links</h6>
              <ul className='list-unstyled mb-0'>
                <li className='my-2'>
                  <a href='#' className='link_text'>Active Listings</a>
                </li>
                <li className='my-2'>
                  <a href='#' className='link_text'>Self your Self Storage</a>
                </li>
                <li className='my-2'>
                  <a href='#' className='link_text'>Free Evaluation</a>
                </li>
                <li className='my-2'>
                  <a href='#' className='link_text'>Learn</a>
                </li>
              </ul>
            </div>
          </Col>

          <Col xl={3} lg={3} md={4} sm={5}>
            <div className='text_box'>
              <h6 className='title_text'>Newsleter</h6>
              <p className='text'>Get latest updates right in your inbox</p>
              <Input inputType={INPUT_TYPES.text} className='form-control mb-3' placeholder='Enter your email' name='email' />
              <Button buttonType={BUTTON_TYPES.submit} title={'Subscribe Now'} className='btn mainBtn btn-sm' />
            </div>
          </Col>

          <Col xl={3} lg={3} md={4} sm={4}>
            <div className='text_box'>
              <h6 className='title_text'>Lets Get Social</h6>
              <div className='social_links_box'>
                  <a href='#' className='social_link'>
                    <FaFacebookF />
                  </a>
                  <a href='#' className='social_link'>
                    <FaLinkedin />
                  </a>
                  <a href='#' className='social_link'>
                    <FaTwitter />
                  </a>
                  <a href='#' className='social_link'>
                    <FaInstagram />
                  </a>
              </div>
              <div className='input-group'>
                <svg width='' height='' viewBox='0 0 19.5 19.5' className='svg_earth'>
                  <path id='Shape' d='M9.75.5a9.75,9.75,0,1,0,9.75,9.75A9.75,9.75,0,0,0,9.75.5ZM8.74,18.546A8.358,8.358,0,0,1,3.39,4.828a9.258,9.258,0,0,1,.094,1.133A3.615,3.615,0,0,0,3.95,8.716a4.545,4.545,0,0,1,.441,1.316c.121.415.6.633.938.888.673.516,1.317,1.116,2.031,1.57.471.3.765.449.627,1.024a3.632,3.632,0,0,1-.381,1.159A2.348,2.348,0,0,0,8,15.723c.351.351.7.674,1.083.99C9.675,17.2,9.023,17.841,8.74,18.546Zm6.92-2.387a8.3,8.3,0,0,1-4.339,2.3,3.466,3.466,0,0,1,1.026-1.376,3.493,3.493,0,0,0,.923-1.142,7.925,7.925,0,0,1,.636-1.088c.331-.511-.816-1.281-1.188-1.443a12.255,12.255,0,0,1-2.211-1.377c-.53-.373-1.606.195-2.2-.066A11.532,11.532,0,0,1,6.1,10.451c-.735-.554-.7-1.2-.7-2.016.576.021,1.395-.159,1.777.3.121.146.535.8.813.567.227-.19-.168-.949-.244-1.128-.235-.549.535-.763.928-1.136.514-.486,1.616-1.248,1.529-1.6S9.1,4.112,8.5,4.266c-.089.023-.876.848-1.028.978q.006-.4.012-.808c0-.17-.317-.345-.3-.454.037-.277.809-.78,1-1C8.049,2.9,7.59,2.5,7.451,2.56c-.336.14-.716.237-1.052.377A2.141,2.141,0,0,0,6.367,2.6a8.277,8.277,0,0,1,2.124-.617l.66.265.466.553.465.48.407.131.646-.609-.167-.435V1.98a8.265,8.265,0,0,1,3.54,1.4c-.189.017-.4.045-.631.075a2.1,2.1,0,0,0-.326-.123c.306.658.625,1.307.95,1.957.347.694,1.115,1.438,1.25,2.17.159.863.049,1.647.136,2.663a4.55,4.55,0,0,0,1.1,2.089,2.209,2.209,0,0,0,.862.1A8.306,8.306,0,0,1,15.659,16.159Z' transform='translate(0 -0.5)' />
                </svg>
                <svg width='' height='' viewBox='0 0 15 8.478' className='svg_down_angle'>
                  <path id='Shape' d='M7.5,5.642,13.333.1a.384.384,0,0,1,.529.007l1.025.991a.356.356,0,0,1,.007.514L7.771,8.378a.352.352,0,0,1-.271.1.373.373,0,0,1-.271-.1L.106,1.613A.356.356,0,0,1,.113,1.1L1.137.109A.384.384,0,0,1,1.666.1Z'/>
                </svg>
                <Dropdown className='form-select' placeholder='Select Language'
                  options={[
                    {id: 1, name: 'English - En'},
                  ]}
                  onChange={(e) => console.log(e)}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
    <Image src={footer_bg_left} className='img-fluid footer_bg_left' alt='Circle Image' />
    <Image src={footer_bg_right} className='img-fluid footer_bg_right' alt='Mail Image' />
  </footer>
  )
}

export default Footer