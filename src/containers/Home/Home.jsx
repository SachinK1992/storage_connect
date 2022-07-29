import '../../scss/Home.scss';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../../components/ui-kit/Button';
import { BUTTON_TYPES } from '../../utils/constants';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
// =============================================================================
// IMPORT SWIPER SLIDER HERE
// =============================================================================
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
// =============================================================================
// IMPORT IMAGES HERE
// =============================================================================
import reach_out_circle from '../../assets/images/stock-images/reach-out-circle.png';
import reach_out_mail from '../../assets/images/stock-images/reach-out-mail.png';
import learning_card_img_one from '../../assets/images/stock-images/learning-card-img-one.png';
import learning_card_img_two from '../../assets/images/stock-images/learning-card-img-two.png';
import learning_card_img_three from '../../assets/images/stock-images/learning-card-img-three.png';
import learning_card_img_four from '../../assets/images/stock-images/learning-card-img-four.png';
import user_img from '../../assets/images/stock-images/user-img.png';
import learning_circle_half_left from '../../assets/images/stock-images/learning-circle-half-left.png';
import learning_circle_half_right from '../../assets/images/stock-images/learning-circle-half-right.png';
import buy_self_storage_person from '../../assets/images/stock-images/buy-self-storage-person.png';
import sell_self_storage_person from '../../assets/images/stock-images/sell-self-storage-person.png';
import buy_sell_self_storage_circle from '../../assets/images/stock-images/buy-sell-self-storage-circle.png';
import find_properties_circle_half_left from '../../assets/images/stock-images/find-properties-circle-half-left.png';
import find_properties_circle_half_right from '../../assets/images/stock-images/find-properties-circle-half-right.png';
import property_img_one from '../../assets/images/stock-images/property-img-one.png';
import property_img_two from '../../assets/images/stock-images/property-img-two.png';
import property_img_three from '../../assets/images/stock-images/property-img-three.png';
import property_img_four from '../../assets/images/stock-images/property-img-four.png';
import property_img_five from '../../assets/images/stock-images/property-img-five.png';
import property_img_six from '../../assets/images/stock-images/property-img-six.png';
import featured_self_storage_circle from '../../assets/images/stock-images/featured-self-storage-circle.png';


const Home = () => {

  return (
        <Container fluid>
          {/* HEADER BANNER START */}
          <section className='header_banner_section'>
            <div className='content_holder'>
              <div className='text_box'>
                <h1 className='title_text'>Self Storage Business Buy. Sell. Learn.</h1>
                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sagittis, aliquam non tortor blandit lobortis.</p>
              </div>
              <div className='btn_box'>
                <Row className='justify-content-center'>
                  <Col sm={6} className='d-grid'>
                    <Button buttonType={BUTTON_TYPES.submit} title={'Sell Your Self Storage'} className='btn primaryBtn' />
                  </Col>

                  <Col sm={6} className='d-grid'>
                    <Button buttonType={BUTTON_TYPES.submit} title={'Active Self Storage Listings'} className='btn optionalBtn' />
                  </Col>
                </Row>
              </div>
            </div>
          </section>
          {/* HEADER BANNER END */}


          {/* <!-- FEATURED SELF STORAGE SECTION START --> */}
          <section className='self_storage_section'>
            <div className='content_holder'>
              <div className='section_heading_container'>
                <h1 className='section_heading'>Featured Self Storages</h1>
                <p className='section_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor sapien sagittis maecenas tincidunt. Quis pretium ornare</p>
              </div>
              {/* <!-- SWIPER SLIDER START --> */}
                <Swiper
                  modules={[Pagination]}
                  slidesPerView={3}
                  spaceBetween={50}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    576: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                >
                  <SwiperSlide>
                    <Card className='slider_card'>
                      <div className='img_box'>
                        <Card.Img variant='top' src={property_img_one} className='card_img' />
                      </div>
                      <Card.Body>
                        <Card.Title>
                        <svg width='' height='' viewBox='0 0 15.714 20'>
                          <g id='location' transform='translate(0 -0.77)'>
                            <path id='Path_372' data-name='Path 372' d='M14.286,8.627a6.429,6.429,0,1,0-12.857,0c0,2.637,2.11,6.074,6.429,10.191C12.176,14.7,14.286,11.264,14.286,8.627ZM7.857,20.77Q0,13.628,0,8.627a7.857,7.857,0,1,1,15.714,0Q15.714,13.626,7.857,20.77Z' transform='translate(0)' />
                            <path id='Path_373' data-name='Path 373' d='M8,10.952a2.182,2.182,0,1,0-1.543-.639A2.182,2.182,0,0,0,8,10.952Zm0,1.455a3.636,3.636,0,1,1,2.571-1.065A3.636,3.636,0,0,1,8,12.406Z' transform='translate(-0.143 -0.121)' />
                          </g>
                        </svg>
                          <span className='text'>Jersy City, NJ</span>
                        </Card.Title>
                        <Card.Text>
                          <svg id='unit' width='' height='' viewBox='0 0 19.2 17.2' className='svg_units'>
                            <path id='Path_374' data-name='Path 374' d='M16.6,0H6.6A2.6,2.6,0,0,0,4,2.6V5.4a2.446,2.446,0,0,0-.238.193l-3,3A2.583,2.583,0,0,0,0,10.431V14.6a2.6,2.6,0,0,0,2.6,2.6h14a2.6,2.6,0,0,0,2.6-2.6V2.6A2.6,2.6,0,0,0,16.6,0ZM1.2,14.6V10.431a1.388,1.388,0,0,1,.41-.989l3-3a1.434,1.434,0,0,1,1.979,0l3,3a1.386,1.386,0,0,1,.411.989V16H6.2V12.6a.6.6,0,1,0-1.2,0V16H2.6A1.4,1.4,0,0,1,1.2,14.6Zm16.8,0A1.4,1.4,0,0,1,16.6,16H11.2V10.431a2.581,2.581,0,0,0-.762-1.838l-3-3a2.634,2.634,0,0,0-2.238-.7V2.6A1.4,1.4,0,0,1,6.6,1.2h10A1.4,1.4,0,0,1,18,2.6Z'/>
                            <path id='Path_375' data-name='Path 375' d='M14.178,4.175a.585.585,0,0,0-.18.43.563.563,0,0,0,.18.42.6.6,0,0,0,.42.18.639.639,0,0,0,.43-.18.585.585,0,0,0,.17-.42.578.578,0,0,0-.18-.43A.617.617,0,0,0,14.178,4.175Z'/>
                            <path id='Path_376' data-name='Path 376' d='M10.178,4.175A.576.576,0,0,0,10,4.6a.615.615,0,0,0,.6.61.639.639,0,0,0,.43-.18.626.626,0,0,0,.17-.43.572.572,0,0,0-.18-.42A.607.607,0,0,0,10.178,4.175Z'/>
                            <path id='Path_377' data-name='Path 377' d='M14.178,8.175a.6.6,0,0,0-.18.43.563.563,0,0,0,.18.42.578.578,0,0,0,.84,0,.556.556,0,0,0,.18-.42.594.594,0,0,0-.18-.43A.617.617,0,0,0,14.178,8.175Z'/>
                            <path id='Path_378' data-name='Path 378' d='M14.178,12.174A.588.588,0,0,0,14,12.6a.563.563,0,0,0,.18.42.6.6,0,0,0,.42.18.635.635,0,0,0,.43-.18.585.585,0,0,0,.17-.42.613.613,0,0,0-.17-.431A.622.622,0,0,0,14.178,12.174Z'/>
                          </svg>
                          <span className='text'>Total Units: 89</span>
                        </Card.Text>
                        <Card.Text>
                          <svg width='' height='' viewBox='0 0 20 15.715' className='svg_occupancy'>
                            <path id='occupancy' data-name='Vector (1)' d='M3.572,4.062A2.5,2.5,0,1,1,4.3,5.83,2.5,2.5,0,0,1,3.572,4.062ZM6.072.134A3.929,3.929,0,1,0,8.85,1.284,3.929,3.929,0,0,0,6.072.134Zm7.5,5a1.429,1.429,0,1,1,.418,1.01A1.429,1.429,0,0,1,13.572,5.134ZM15,2.277a2.857,2.857,0,1,0,2.02.837A2.857,2.857,0,0,0,15,2.277ZM0,11.563A2.143,2.143,0,0,1,2.143,9.42H10a2.143,2.143,0,0,1,2.143,2.143v.161a1.984,1.984,0,0,1-.014.2,3.518,3.518,0,0,1-.093.49,3.974,3.974,0,0,1-.714,1.441c-.836,1.073-2.408,1.994-5.251,1.994S1.657,14.927.821,13.854a3.975,3.975,0,0,1-.714-1.441,3.5,3.5,0,0,1-.1-.641c0-.016,0-.032,0-.048v-.161Zm1.429.127V11.7a2.081,2.081,0,0,0,.061.356,2.546,2.546,0,0,0,.458.922c.5.646,1.61,1.444,4.124,1.444s3.622-.8,4.124-1.443a2.551,2.551,0,0,0,.457-.923,2.083,2.083,0,0,0,.061-.356v-.136A.714.714,0,0,0,10,10.848H2.143a.714.714,0,0,0-.714.714Zm11.055,2.367A7.817,7.817,0,0,0,15,14.42c2.287,0,3.586-.681,4.3-1.518a3.034,3.034,0,0,0,.611-1.137A2.629,2.629,0,0,0,20,11.244v-.069A1.755,1.755,0,0,0,18.244,9.42H12.395a3.208,3.208,0,0,1,.739,1.429h5.11a.327.327,0,0,1,.327.319,1.188,1.188,0,0,1-.04.21,1.608,1.608,0,0,1-.326.6c-.361.428-1.2,1.012-3.2,1.012a6.59,6.59,0,0,1-1.944-.25A5.028,5.028,0,0,1,12.484,14.057Z' transform='translate(0 -0.134)' />
                          </svg>
                          <span className='text'>Occupancy: 50%</span>
                        </Card.Text>
                        <Card.Text>
                          <svg width='' height='' viewBox='0 0 16 16' className='svg_sqft'>
                            <path id='sqft' data-name='Vector (2)' d='M3.25.7A3.25,3.25,0,0,0,0,3.952v3a.75.75,0,0,0,1.5,0v-3A1.751,1.751,0,0,1,3.25,2.2h3a.75.75,0,0,0,0-1.5Zm6.5,0a.75.75,0,0,0,0,1.5h3a1.751,1.751,0,0,1,1.75,1.75v3a.75.75,0,0,0,1.5,0v-3A3.25,3.25,0,0,0,12.75.7Zm-9,9a.75.75,0,0,1,.75.75v3A1.751,1.751,0,0,0,3.25,15.2h3a.75.75,0,1,1,0,1.5h-3A3.25,3.25,0,0,1,0,13.451v-3A.75.75,0,0,1,.75,9.7Zm15.25.75a.75.75,0,0,0-1.5,0v3a1.75,1.75,0,0,1-1.75,1.75h-3a.75.75,0,1,0,0,1.5h3A3.25,3.25,0,0,0,16,13.451Z' transform='translate(0 -0.702)' />
                          </svg>
                          <span className='text'>Size: 40,233 Sq Ft</span>
                        </Card.Text>
                        <div className='d-grid px-md-4'>
                          <Button buttonType={BUTTON_TYPES.button} title={'View More Details'} className='btn mainBtn btn-sm' />
                        </div>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>

                  <SwiperSlide>
                    <Card className='slider_card'>
                      <div className='img_box'>
                        <Card.Img variant='top' src={property_img_two} className='card_img' />
                      </div>
                      <Card.Body>
                        <Card.Title>
                        <svg width='' height='' viewBox='0 0 15.714 20'>
                          <g id='location' transform='translate(0 -0.77)'>
                            <path id='Path_372' data-name='Path 372' d='M14.286,8.627a6.429,6.429,0,1,0-12.857,0c0,2.637,2.11,6.074,6.429,10.191C12.176,14.7,14.286,11.264,14.286,8.627ZM7.857,20.77Q0,13.628,0,8.627a7.857,7.857,0,1,1,15.714,0Q15.714,13.626,7.857,20.77Z' transform='translate(0)' />
                            <path id='Path_373' data-name='Path 373' d='M8,10.952a2.182,2.182,0,1,0-1.543-.639A2.182,2.182,0,0,0,8,10.952Zm0,1.455a3.636,3.636,0,1,1,2.571-1.065A3.636,3.636,0,0,1,8,12.406Z' transform='translate(-0.143 -0.121)' />
                          </g>
                        </svg>
                          <span className='text'>Jersy City, NJ</span>
                        </Card.Title>
                        <Card.Text>
                          <svg id='unit' width='' height='' viewBox='0 0 19.2 17.2' className='svg_units'>
                            <path id='Path_374' data-name='Path 374' d='M16.6,0H6.6A2.6,2.6,0,0,0,4,2.6V5.4a2.446,2.446,0,0,0-.238.193l-3,3A2.583,2.583,0,0,0,0,10.431V14.6a2.6,2.6,0,0,0,2.6,2.6h14a2.6,2.6,0,0,0,2.6-2.6V2.6A2.6,2.6,0,0,0,16.6,0ZM1.2,14.6V10.431a1.388,1.388,0,0,1,.41-.989l3-3a1.434,1.434,0,0,1,1.979,0l3,3a1.386,1.386,0,0,1,.411.989V16H6.2V12.6a.6.6,0,1,0-1.2,0V16H2.6A1.4,1.4,0,0,1,1.2,14.6Zm16.8,0A1.4,1.4,0,0,1,16.6,16H11.2V10.431a2.581,2.581,0,0,0-.762-1.838l-3-3a2.634,2.634,0,0,0-2.238-.7V2.6A1.4,1.4,0,0,1,6.6,1.2h10A1.4,1.4,0,0,1,18,2.6Z'/>
                            <path id='Path_375' data-name='Path 375' d='M14.178,4.175a.585.585,0,0,0-.18.43.563.563,0,0,0,.18.42.6.6,0,0,0,.42.18.639.639,0,0,0,.43-.18.585.585,0,0,0,.17-.42.578.578,0,0,0-.18-.43A.617.617,0,0,0,14.178,4.175Z'/>
                            <path id='Path_376' data-name='Path 376' d='M10.178,4.175A.576.576,0,0,0,10,4.6a.615.615,0,0,0,.6.61.639.639,0,0,0,.43-.18.626.626,0,0,0,.17-.43.572.572,0,0,0-.18-.42A.607.607,0,0,0,10.178,4.175Z'/>
                            <path id='Path_377' data-name='Path 377' d='M14.178,8.175a.6.6,0,0,0-.18.43.563.563,0,0,0,.18.42.578.578,0,0,0,.84,0,.556.556,0,0,0,.18-.42.594.594,0,0,0-.18-.43A.617.617,0,0,0,14.178,8.175Z'/>
                            <path id='Path_378' data-name='Path 378' d='M14.178,12.174A.588.588,0,0,0,14,12.6a.563.563,0,0,0,.18.42.6.6,0,0,0,.42.18.635.635,0,0,0,.43-.18.585.585,0,0,0,.17-.42.613.613,0,0,0-.17-.431A.622.622,0,0,0,14.178,12.174Z'/>
                          </svg>
                          <span className='text'>Total Units: 89</span>
                        </Card.Text>
                        <Card.Text>
                          <svg width='' height='' viewBox='0 0 20 15.715' className='svg_occupancy'>
                            <path id='occupancy' data-name='Vector (1)' d='M3.572,4.062A2.5,2.5,0,1,1,4.3,5.83,2.5,2.5,0,0,1,3.572,4.062ZM6.072.134A3.929,3.929,0,1,0,8.85,1.284,3.929,3.929,0,0,0,6.072.134Zm7.5,5a1.429,1.429,0,1,1,.418,1.01A1.429,1.429,0,0,1,13.572,5.134ZM15,2.277a2.857,2.857,0,1,0,2.02.837A2.857,2.857,0,0,0,15,2.277ZM0,11.563A2.143,2.143,0,0,1,2.143,9.42H10a2.143,2.143,0,0,1,2.143,2.143v.161a1.984,1.984,0,0,1-.014.2,3.518,3.518,0,0,1-.093.49,3.974,3.974,0,0,1-.714,1.441c-.836,1.073-2.408,1.994-5.251,1.994S1.657,14.927.821,13.854a3.975,3.975,0,0,1-.714-1.441,3.5,3.5,0,0,1-.1-.641c0-.016,0-.032,0-.048v-.161Zm1.429.127V11.7a2.081,2.081,0,0,0,.061.356,2.546,2.546,0,0,0,.458.922c.5.646,1.61,1.444,4.124,1.444s3.622-.8,4.124-1.443a2.551,2.551,0,0,0,.457-.923,2.083,2.083,0,0,0,.061-.356v-.136A.714.714,0,0,0,10,10.848H2.143a.714.714,0,0,0-.714.714Zm11.055,2.367A7.817,7.817,0,0,0,15,14.42c2.287,0,3.586-.681,4.3-1.518a3.034,3.034,0,0,0,.611-1.137A2.629,2.629,0,0,0,20,11.244v-.069A1.755,1.755,0,0,0,18.244,9.42H12.395a3.208,3.208,0,0,1,.739,1.429h5.11a.327.327,0,0,1,.327.319,1.188,1.188,0,0,1-.04.21,1.608,1.608,0,0,1-.326.6c-.361.428-1.2,1.012-3.2,1.012a6.59,6.59,0,0,1-1.944-.25A5.028,5.028,0,0,1,12.484,14.057Z' transform='translate(0 -0.134)' />
                          </svg>
                          <span className='text'>Occupancy: 50%</span>
                        </Card.Text>
                        <Card.Text>
                          <svg width='' height='' viewBox='0 0 16 16' className='svg_sqft'>
                            <path id='sqft' data-name='Vector (2)' d='M3.25.7A3.25,3.25,0,0,0,0,3.952v3a.75.75,0,0,0,1.5,0v-3A1.751,1.751,0,0,1,3.25,2.2h3a.75.75,0,0,0,0-1.5Zm6.5,0a.75.75,0,0,0,0,1.5h3a1.751,1.751,0,0,1,1.75,1.75v3a.75.75,0,0,0,1.5,0v-3A3.25,3.25,0,0,0,12.75.7Zm-9,9a.75.75,0,0,1,.75.75v3A1.751,1.751,0,0,0,3.25,15.2h3a.75.75,0,1,1,0,1.5h-3A3.25,3.25,0,0,1,0,13.451v-3A.75.75,0,0,1,.75,9.7Zm15.25.75a.75.75,0,0,0-1.5,0v3a1.75,1.75,0,0,1-1.75,1.75h-3a.75.75,0,1,0,0,1.5h3A3.25,3.25,0,0,0,16,13.451Z' transform='translate(0 -0.702)' />
                          </svg>
                          <span className='text'>Size: 40,233 Sq Ft</span>
                        </Card.Text>
                        <div className='d-grid px-md-4'>
                          <Button buttonType={BUTTON_TYPES.button} title={'View More Details'} className='btn mainBtn btn-sm' />
                        </div>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>

                  <SwiperSlide>
                    <Card className='slider_card'>
                      <div className='img_box'>
                        <Card.Img variant='top' src={property_img_three} className='card_img' />
                      </div>
                      <Card.Body>
                        <Card.Title>
                        <svg width='' height='' viewBox='0 0 15.714 20'>
                          <g id='location' transform='translate(0 -0.77)'>
                            <path id='Path_372' data-name='Path 372' d='M14.286,8.627a6.429,6.429,0,1,0-12.857,0c0,2.637,2.11,6.074,6.429,10.191C12.176,14.7,14.286,11.264,14.286,8.627ZM7.857,20.77Q0,13.628,0,8.627a7.857,7.857,0,1,1,15.714,0Q15.714,13.626,7.857,20.77Z' transform='translate(0)' />
                            <path id='Path_373' data-name='Path 373' d='M8,10.952a2.182,2.182,0,1,0-1.543-.639A2.182,2.182,0,0,0,8,10.952Zm0,1.455a3.636,3.636,0,1,1,2.571-1.065A3.636,3.636,0,0,1,8,12.406Z' transform='translate(-0.143 -0.121)' />
                          </g>
                        </svg>
                          <span className='text'>Jersy City, NJ</span>
                        </Card.Title>
                        <Card.Text>
                          <svg id='unit' width='' height='' viewBox='0 0 19.2 17.2' className='svg_units'>
                            <path id='Path_374' data-name='Path 374' d='M16.6,0H6.6A2.6,2.6,0,0,0,4,2.6V5.4a2.446,2.446,0,0,0-.238.193l-3,3A2.583,2.583,0,0,0,0,10.431V14.6a2.6,2.6,0,0,0,2.6,2.6h14a2.6,2.6,0,0,0,2.6-2.6V2.6A2.6,2.6,0,0,0,16.6,0ZM1.2,14.6V10.431a1.388,1.388,0,0,1,.41-.989l3-3a1.434,1.434,0,0,1,1.979,0l3,3a1.386,1.386,0,0,1,.411.989V16H6.2V12.6a.6.6,0,1,0-1.2,0V16H2.6A1.4,1.4,0,0,1,1.2,14.6Zm16.8,0A1.4,1.4,0,0,1,16.6,16H11.2V10.431a2.581,2.581,0,0,0-.762-1.838l-3-3a2.634,2.634,0,0,0-2.238-.7V2.6A1.4,1.4,0,0,1,6.6,1.2h10A1.4,1.4,0,0,1,18,2.6Z'/>
                            <path id='Path_375' data-name='Path 375' d='M14.178,4.175a.585.585,0,0,0-.18.43.563.563,0,0,0,.18.42.6.6,0,0,0,.42.18.639.639,0,0,0,.43-.18.585.585,0,0,0,.17-.42.578.578,0,0,0-.18-.43A.617.617,0,0,0,14.178,4.175Z'/>
                            <path id='Path_376' data-name='Path 376' d='M10.178,4.175A.576.576,0,0,0,10,4.6a.615.615,0,0,0,.6.61.639.639,0,0,0,.43-.18.626.626,0,0,0,.17-.43.572.572,0,0,0-.18-.42A.607.607,0,0,0,10.178,4.175Z'/>
                            <path id='Path_377' data-name='Path 377' d='M14.178,8.175a.6.6,0,0,0-.18.43.563.563,0,0,0,.18.42.578.578,0,0,0,.84,0,.556.556,0,0,0,.18-.42.594.594,0,0,0-.18-.43A.617.617,0,0,0,14.178,8.175Z'/>
                            <path id='Path_378' data-name='Path 378' d='M14.178,12.174A.588.588,0,0,0,14,12.6a.563.563,0,0,0,.18.42.6.6,0,0,0,.42.18.635.635,0,0,0,.43-.18.585.585,0,0,0,.17-.42.613.613,0,0,0-.17-.431A.622.622,0,0,0,14.178,12.174Z'/>
                          </svg>
                          <span className='text'>Total Units: 89</span>
                        </Card.Text>
                        <Card.Text>
                          <svg width='' height='' viewBox='0 0 20 15.715' className='svg_occupancy'>
                            <path id='occupancy' data-name='Vector (1)' d='M3.572,4.062A2.5,2.5,0,1,1,4.3,5.83,2.5,2.5,0,0,1,3.572,4.062ZM6.072.134A3.929,3.929,0,1,0,8.85,1.284,3.929,3.929,0,0,0,6.072.134Zm7.5,5a1.429,1.429,0,1,1,.418,1.01A1.429,1.429,0,0,1,13.572,5.134ZM15,2.277a2.857,2.857,0,1,0,2.02.837A2.857,2.857,0,0,0,15,2.277ZM0,11.563A2.143,2.143,0,0,1,2.143,9.42H10a2.143,2.143,0,0,1,2.143,2.143v.161a1.984,1.984,0,0,1-.014.2,3.518,3.518,0,0,1-.093.49,3.974,3.974,0,0,1-.714,1.441c-.836,1.073-2.408,1.994-5.251,1.994S1.657,14.927.821,13.854a3.975,3.975,0,0,1-.714-1.441,3.5,3.5,0,0,1-.1-.641c0-.016,0-.032,0-.048v-.161Zm1.429.127V11.7a2.081,2.081,0,0,0,.061.356,2.546,2.546,0,0,0,.458.922c.5.646,1.61,1.444,4.124,1.444s3.622-.8,4.124-1.443a2.551,2.551,0,0,0,.457-.923,2.083,2.083,0,0,0,.061-.356v-.136A.714.714,0,0,0,10,10.848H2.143a.714.714,0,0,0-.714.714Zm11.055,2.367A7.817,7.817,0,0,0,15,14.42c2.287,0,3.586-.681,4.3-1.518a3.034,3.034,0,0,0,.611-1.137A2.629,2.629,0,0,0,20,11.244v-.069A1.755,1.755,0,0,0,18.244,9.42H12.395a3.208,3.208,0,0,1,.739,1.429h5.11a.327.327,0,0,1,.327.319,1.188,1.188,0,0,1-.04.21,1.608,1.608,0,0,1-.326.6c-.361.428-1.2,1.012-3.2,1.012a6.59,6.59,0,0,1-1.944-.25A5.028,5.028,0,0,1,12.484,14.057Z' transform='translate(0 -0.134)' />
                          </svg>
                          <span className='text'>Occupancy: 50%</span>
                        </Card.Text>
                        <Card.Text>
                          <svg width='' height='' viewBox='0 0 16 16' className='svg_sqft'>
                            <path id='sqft' data-name='Vector (2)' d='M3.25.7A3.25,3.25,0,0,0,0,3.952v3a.75.75,0,0,0,1.5,0v-3A1.751,1.751,0,0,1,3.25,2.2h3a.75.75,0,0,0,0-1.5Zm6.5,0a.75.75,0,0,0,0,1.5h3a1.751,1.751,0,0,1,1.75,1.75v3a.75.75,0,0,0,1.5,0v-3A3.25,3.25,0,0,0,12.75.7Zm-9,9a.75.75,0,0,1,.75.75v3A1.751,1.751,0,0,0,3.25,15.2h3a.75.75,0,1,1,0,1.5h-3A3.25,3.25,0,0,1,0,13.451v-3A.75.75,0,0,1,.75,9.7Zm15.25.75a.75.75,0,0,0-1.5,0v3a1.75,1.75,0,0,1-1.75,1.75h-3a.75.75,0,1,0,0,1.5h3A3.25,3.25,0,0,0,16,13.451Z' transform='translate(0 -0.702)' />
                          </svg>
                          <span className='text'>Size: 40,233 Sq Ft</span>
                        </Card.Text>
                        <div className='d-grid px-md-4'>
                          <Button buttonType={BUTTON_TYPES.button} title={'View More Details'} className='btn mainBtn btn-sm' />
                        </div>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>

                  <SwiperSlide>
                    <Card className='slider_card'>
                      <div className='img_box'>
                        <Card.Img variant='top' src={property_img_four} className='card_img' />
                      </div>
                      <Card.Body>
                        <Card.Title>
                        <svg width='' height='' viewBox='0 0 15.714 20'>
                          <g id='location' transform='translate(0 -0.77)'>
                            <path id='Path_372' data-name='Path 372' d='M14.286,8.627a6.429,6.429,0,1,0-12.857,0c0,2.637,2.11,6.074,6.429,10.191C12.176,14.7,14.286,11.264,14.286,8.627ZM7.857,20.77Q0,13.628,0,8.627a7.857,7.857,0,1,1,15.714,0Q15.714,13.626,7.857,20.77Z' transform='translate(0)' />
                            <path id='Path_373' data-name='Path 373' d='M8,10.952a2.182,2.182,0,1,0-1.543-.639A2.182,2.182,0,0,0,8,10.952Zm0,1.455a3.636,3.636,0,1,1,2.571-1.065A3.636,3.636,0,0,1,8,12.406Z' transform='translate(-0.143 -0.121)' />
                          </g>
                        </svg>
                          <span className='text'>Jersy City, NJ</span>
                        </Card.Title>
                        <Card.Text>
                          <svg id='unit' width='' height='' viewBox='0 0 19.2 17.2' className='svg_units'>
                            <path id='Path_374' data-name='Path 374' d='M16.6,0H6.6A2.6,2.6,0,0,0,4,2.6V5.4a2.446,2.446,0,0,0-.238.193l-3,3A2.583,2.583,0,0,0,0,10.431V14.6a2.6,2.6,0,0,0,2.6,2.6h14a2.6,2.6,0,0,0,2.6-2.6V2.6A2.6,2.6,0,0,0,16.6,0ZM1.2,14.6V10.431a1.388,1.388,0,0,1,.41-.989l3-3a1.434,1.434,0,0,1,1.979,0l3,3a1.386,1.386,0,0,1,.411.989V16H6.2V12.6a.6.6,0,1,0-1.2,0V16H2.6A1.4,1.4,0,0,1,1.2,14.6Zm16.8,0A1.4,1.4,0,0,1,16.6,16H11.2V10.431a2.581,2.581,0,0,0-.762-1.838l-3-3a2.634,2.634,0,0,0-2.238-.7V2.6A1.4,1.4,0,0,1,6.6,1.2h10A1.4,1.4,0,0,1,18,2.6Z'/>
                            <path id='Path_375' data-name='Path 375' d='M14.178,4.175a.585.585,0,0,0-.18.43.563.563,0,0,0,.18.42.6.6,0,0,0,.42.18.639.639,0,0,0,.43-.18.585.585,0,0,0,.17-.42.578.578,0,0,0-.18-.43A.617.617,0,0,0,14.178,4.175Z'/>
                            <path id='Path_376' data-name='Path 376' d='M10.178,4.175A.576.576,0,0,0,10,4.6a.615.615,0,0,0,.6.61.639.639,0,0,0,.43-.18.626.626,0,0,0,.17-.43.572.572,0,0,0-.18-.42A.607.607,0,0,0,10.178,4.175Z'/>
                            <path id='Path_377' data-name='Path 377' d='M14.178,8.175a.6.6,0,0,0-.18.43.563.563,0,0,0,.18.42.578.578,0,0,0,.84,0,.556.556,0,0,0,.18-.42.594.594,0,0,0-.18-.43A.617.617,0,0,0,14.178,8.175Z'/>
                            <path id='Path_378' data-name='Path 378' d='M14.178,12.174A.588.588,0,0,0,14,12.6a.563.563,0,0,0,.18.42.6.6,0,0,0,.42.18.635.635,0,0,0,.43-.18.585.585,0,0,0,.17-.42.613.613,0,0,0-.17-.431A.622.622,0,0,0,14.178,12.174Z'/>
                          </svg>
                          <span className='text'>Total Units: 89</span>
                        </Card.Text>
                        <Card.Text>
                          <svg width='' height='' viewBox='0 0 20 15.715' className='svg_occupancy'>
                            <path id='occupancy' data-name='Vector (1)' d='M3.572,4.062A2.5,2.5,0,1,1,4.3,5.83,2.5,2.5,0,0,1,3.572,4.062ZM6.072.134A3.929,3.929,0,1,0,8.85,1.284,3.929,3.929,0,0,0,6.072.134Zm7.5,5a1.429,1.429,0,1,1,.418,1.01A1.429,1.429,0,0,1,13.572,5.134ZM15,2.277a2.857,2.857,0,1,0,2.02.837A2.857,2.857,0,0,0,15,2.277ZM0,11.563A2.143,2.143,0,0,1,2.143,9.42H10a2.143,2.143,0,0,1,2.143,2.143v.161a1.984,1.984,0,0,1-.014.2,3.518,3.518,0,0,1-.093.49,3.974,3.974,0,0,1-.714,1.441c-.836,1.073-2.408,1.994-5.251,1.994S1.657,14.927.821,13.854a3.975,3.975,0,0,1-.714-1.441,3.5,3.5,0,0,1-.1-.641c0-.016,0-.032,0-.048v-.161Zm1.429.127V11.7a2.081,2.081,0,0,0,.061.356,2.546,2.546,0,0,0,.458.922c.5.646,1.61,1.444,4.124,1.444s3.622-.8,4.124-1.443a2.551,2.551,0,0,0,.457-.923,2.083,2.083,0,0,0,.061-.356v-.136A.714.714,0,0,0,10,10.848H2.143a.714.714,0,0,0-.714.714Zm11.055,2.367A7.817,7.817,0,0,0,15,14.42c2.287,0,3.586-.681,4.3-1.518a3.034,3.034,0,0,0,.611-1.137A2.629,2.629,0,0,0,20,11.244v-.069A1.755,1.755,0,0,0,18.244,9.42H12.395a3.208,3.208,0,0,1,.739,1.429h5.11a.327.327,0,0,1,.327.319,1.188,1.188,0,0,1-.04.21,1.608,1.608,0,0,1-.326.6c-.361.428-1.2,1.012-3.2,1.012a6.59,6.59,0,0,1-1.944-.25A5.028,5.028,0,0,1,12.484,14.057Z' transform='translate(0 -0.134)' />
                          </svg>
                          <span className='text'>Occupancy: 50%</span>
                        </Card.Text>
                        <Card.Text>
                          <svg width='' height='' viewBox='0 0 16 16' className='svg_sqft'>
                            <path id='sqft' data-name='Vector (2)' d='M3.25.7A3.25,3.25,0,0,0,0,3.952v3a.75.75,0,0,0,1.5,0v-3A1.751,1.751,0,0,1,3.25,2.2h3a.75.75,0,0,0,0-1.5Zm6.5,0a.75.75,0,0,0,0,1.5h3a1.751,1.751,0,0,1,1.75,1.75v3a.75.75,0,0,0,1.5,0v-3A3.25,3.25,0,0,0,12.75.7Zm-9,9a.75.75,0,0,1,.75.75v3A1.751,1.751,0,0,0,3.25,15.2h3a.75.75,0,1,1,0,1.5h-3A3.25,3.25,0,0,1,0,13.451v-3A.75.75,0,0,1,.75,9.7Zm15.25.75a.75.75,0,0,0-1.5,0v3a1.75,1.75,0,0,1-1.75,1.75h-3a.75.75,0,1,0,0,1.5h3A3.25,3.25,0,0,0,16,13.451Z' transform='translate(0 -0.702)' />
                          </svg>
                          <span className='text'>Size: 40,233 Sq Ft</span>
                        </Card.Text>
                        <div className='d-grid px-md-4'>
                          <Button buttonType={BUTTON_TYPES.button} title={'View More Details'} className='btn mainBtn btn-sm' />
                        </div>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>

                  <SwiperSlide>
                    <Card className='slider_card'>
                      <div className='img_box'>
                        <Card.Img variant='top' src={property_img_five} className='card_img' />
                      </div>
                      <Card.Body>
                        <Card.Title>
                        <svg width='' height='' viewBox='0 0 15.714 20'>
                          <g id='location' transform='translate(0 -0.77)'>
                            <path id='Path_372' data-name='Path 372' d='M14.286,8.627a6.429,6.429,0,1,0-12.857,0c0,2.637,2.11,6.074,6.429,10.191C12.176,14.7,14.286,11.264,14.286,8.627ZM7.857,20.77Q0,13.628,0,8.627a7.857,7.857,0,1,1,15.714,0Q15.714,13.626,7.857,20.77Z' transform='translate(0)' />
                            <path id='Path_373' data-name='Path 373' d='M8,10.952a2.182,2.182,0,1,0-1.543-.639A2.182,2.182,0,0,0,8,10.952Zm0,1.455a3.636,3.636,0,1,1,2.571-1.065A3.636,3.636,0,0,1,8,12.406Z' transform='translate(-0.143 -0.121)' />
                          </g>
                        </svg>
                          <span className='text'>Jersy City, NJ</span>
                        </Card.Title>
                        <Card.Text>
                          <svg id='unit' width='' height='' viewBox='0 0 19.2 17.2' className='svg_units'>
                            <path id='Path_374' data-name='Path 374' d='M16.6,0H6.6A2.6,2.6,0,0,0,4,2.6V5.4a2.446,2.446,0,0,0-.238.193l-3,3A2.583,2.583,0,0,0,0,10.431V14.6a2.6,2.6,0,0,0,2.6,2.6h14a2.6,2.6,0,0,0,2.6-2.6V2.6A2.6,2.6,0,0,0,16.6,0ZM1.2,14.6V10.431a1.388,1.388,0,0,1,.41-.989l3-3a1.434,1.434,0,0,1,1.979,0l3,3a1.386,1.386,0,0,1,.411.989V16H6.2V12.6a.6.6,0,1,0-1.2,0V16H2.6A1.4,1.4,0,0,1,1.2,14.6Zm16.8,0A1.4,1.4,0,0,1,16.6,16H11.2V10.431a2.581,2.581,0,0,0-.762-1.838l-3-3a2.634,2.634,0,0,0-2.238-.7V2.6A1.4,1.4,0,0,1,6.6,1.2h10A1.4,1.4,0,0,1,18,2.6Z'/>
                            <path id='Path_375' data-name='Path 375' d='M14.178,4.175a.585.585,0,0,0-.18.43.563.563,0,0,0,.18.42.6.6,0,0,0,.42.18.639.639,0,0,0,.43-.18.585.585,0,0,0,.17-.42.578.578,0,0,0-.18-.43A.617.617,0,0,0,14.178,4.175Z'/>
                            <path id='Path_376' data-name='Path 376' d='M10.178,4.175A.576.576,0,0,0,10,4.6a.615.615,0,0,0,.6.61.639.639,0,0,0,.43-.18.626.626,0,0,0,.17-.43.572.572,0,0,0-.18-.42A.607.607,0,0,0,10.178,4.175Z'/>
                            <path id='Path_377' data-name='Path 377' d='M14.178,8.175a.6.6,0,0,0-.18.43.563.563,0,0,0,.18.42.578.578,0,0,0,.84,0,.556.556,0,0,0,.18-.42.594.594,0,0,0-.18-.43A.617.617,0,0,0,14.178,8.175Z'/>
                            <path id='Path_378' data-name='Path 378' d='M14.178,12.174A.588.588,0,0,0,14,12.6a.563.563,0,0,0,.18.42.6.6,0,0,0,.42.18.635.635,0,0,0,.43-.18.585.585,0,0,0,.17-.42.613.613,0,0,0-.17-.431A.622.622,0,0,0,14.178,12.174Z'/>
                          </svg>
                          <span className='text'>Total Units: 89</span>
                        </Card.Text>
                        <Card.Text>
                          <svg width='' height='' viewBox='0 0 20 15.715' className='svg_occupancy'>
                            <path id='occupancy' data-name='Vector (1)' d='M3.572,4.062A2.5,2.5,0,1,1,4.3,5.83,2.5,2.5,0,0,1,3.572,4.062ZM6.072.134A3.929,3.929,0,1,0,8.85,1.284,3.929,3.929,0,0,0,6.072.134Zm7.5,5a1.429,1.429,0,1,1,.418,1.01A1.429,1.429,0,0,1,13.572,5.134ZM15,2.277a2.857,2.857,0,1,0,2.02.837A2.857,2.857,0,0,0,15,2.277ZM0,11.563A2.143,2.143,0,0,1,2.143,9.42H10a2.143,2.143,0,0,1,2.143,2.143v.161a1.984,1.984,0,0,1-.014.2,3.518,3.518,0,0,1-.093.49,3.974,3.974,0,0,1-.714,1.441c-.836,1.073-2.408,1.994-5.251,1.994S1.657,14.927.821,13.854a3.975,3.975,0,0,1-.714-1.441,3.5,3.5,0,0,1-.1-.641c0-.016,0-.032,0-.048v-.161Zm1.429.127V11.7a2.081,2.081,0,0,0,.061.356,2.546,2.546,0,0,0,.458.922c.5.646,1.61,1.444,4.124,1.444s3.622-.8,4.124-1.443a2.551,2.551,0,0,0,.457-.923,2.083,2.083,0,0,0,.061-.356v-.136A.714.714,0,0,0,10,10.848H2.143a.714.714,0,0,0-.714.714Zm11.055,2.367A7.817,7.817,0,0,0,15,14.42c2.287,0,3.586-.681,4.3-1.518a3.034,3.034,0,0,0,.611-1.137A2.629,2.629,0,0,0,20,11.244v-.069A1.755,1.755,0,0,0,18.244,9.42H12.395a3.208,3.208,0,0,1,.739,1.429h5.11a.327.327,0,0,1,.327.319,1.188,1.188,0,0,1-.04.21,1.608,1.608,0,0,1-.326.6c-.361.428-1.2,1.012-3.2,1.012a6.59,6.59,0,0,1-1.944-.25A5.028,5.028,0,0,1,12.484,14.057Z' transform='translate(0 -0.134)' />
                          </svg>
                          <span className='text'>Occupancy: 50%</span>
                        </Card.Text>
                        <Card.Text>
                          <svg width='' height='' viewBox='0 0 16 16' className='svg_sqft'>
                            <path id='sqft' data-name='Vector (2)' d='M3.25.7A3.25,3.25,0,0,0,0,3.952v3a.75.75,0,0,0,1.5,0v-3A1.751,1.751,0,0,1,3.25,2.2h3a.75.75,0,0,0,0-1.5Zm6.5,0a.75.75,0,0,0,0,1.5h3a1.751,1.751,0,0,1,1.75,1.75v3a.75.75,0,0,0,1.5,0v-3A3.25,3.25,0,0,0,12.75.7Zm-9,9a.75.75,0,0,1,.75.75v3A1.751,1.751,0,0,0,3.25,15.2h3a.75.75,0,1,1,0,1.5h-3A3.25,3.25,0,0,1,0,13.451v-3A.75.75,0,0,1,.75,9.7Zm15.25.75a.75.75,0,0,0-1.5,0v3a1.75,1.75,0,0,1-1.75,1.75h-3a.75.75,0,1,0,0,1.5h3A3.25,3.25,0,0,0,16,13.451Z' transform='translate(0 -0.702)' />
                          </svg>
                          <span className='text'>Size: 40,233 Sq Ft</span>
                        </Card.Text>
                        <div className='d-grid px-md-4'>
                          <Button buttonType={BUTTON_TYPES.button} title={'View More Details'} className='btn mainBtn btn-sm' />
                        </div>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>

                  <SwiperSlide>
                    <Card className='slider_card'>
                      <div className='img_box'>
                        <Card.Img variant='top' src={property_img_six} className='card_img' />
                      </div>
                      <Card.Body>
                        <Card.Title>
                        <svg width='' height='' viewBox='0 0 15.714 20'>
                          <g id='location' transform='translate(0 -0.77)'>
                            <path id='Path_372' data-name='Path 372' d='M14.286,8.627a6.429,6.429,0,1,0-12.857,0c0,2.637,2.11,6.074,6.429,10.191C12.176,14.7,14.286,11.264,14.286,8.627ZM7.857,20.77Q0,13.628,0,8.627a7.857,7.857,0,1,1,15.714,0Q15.714,13.626,7.857,20.77Z' transform='translate(0)' />
                            <path id='Path_373' data-name='Path 373' d='M8,10.952a2.182,2.182,0,1,0-1.543-.639A2.182,2.182,0,0,0,8,10.952Zm0,1.455a3.636,3.636,0,1,1,2.571-1.065A3.636,3.636,0,0,1,8,12.406Z' transform='translate(-0.143 -0.121)' />
                          </g>
                        </svg>
                          <span className='text'>Jersy City, NJ</span>
                        </Card.Title>
                        <Card.Text>
                          <svg id='unit' width='' height='' viewBox='0 0 19.2 17.2' className='svg_units'>
                            <path id='Path_374' data-name='Path 374' d='M16.6,0H6.6A2.6,2.6,0,0,0,4,2.6V5.4a2.446,2.446,0,0,0-.238.193l-3,3A2.583,2.583,0,0,0,0,10.431V14.6a2.6,2.6,0,0,0,2.6,2.6h14a2.6,2.6,0,0,0,2.6-2.6V2.6A2.6,2.6,0,0,0,16.6,0ZM1.2,14.6V10.431a1.388,1.388,0,0,1,.41-.989l3-3a1.434,1.434,0,0,1,1.979,0l3,3a1.386,1.386,0,0,1,.411.989V16H6.2V12.6a.6.6,0,1,0-1.2,0V16H2.6A1.4,1.4,0,0,1,1.2,14.6Zm16.8,0A1.4,1.4,0,0,1,16.6,16H11.2V10.431a2.581,2.581,0,0,0-.762-1.838l-3-3a2.634,2.634,0,0,0-2.238-.7V2.6A1.4,1.4,0,0,1,6.6,1.2h10A1.4,1.4,0,0,1,18,2.6Z'/>
                            <path id='Path_375' data-name='Path 375' d='M14.178,4.175a.585.585,0,0,0-.18.43.563.563,0,0,0,.18.42.6.6,0,0,0,.42.18.639.639,0,0,0,.43-.18.585.585,0,0,0,.17-.42.578.578,0,0,0-.18-.43A.617.617,0,0,0,14.178,4.175Z'/>
                            <path id='Path_376' data-name='Path 376' d='M10.178,4.175A.576.576,0,0,0,10,4.6a.615.615,0,0,0,.6.61.639.639,0,0,0,.43-.18.626.626,0,0,0,.17-.43.572.572,0,0,0-.18-.42A.607.607,0,0,0,10.178,4.175Z'/>
                            <path id='Path_377' data-name='Path 377' d='M14.178,8.175a.6.6,0,0,0-.18.43.563.563,0,0,0,.18.42.578.578,0,0,0,.84,0,.556.556,0,0,0,.18-.42.594.594,0,0,0-.18-.43A.617.617,0,0,0,14.178,8.175Z'/>
                            <path id='Path_378' data-name='Path 378' d='M14.178,12.174A.588.588,0,0,0,14,12.6a.563.563,0,0,0,.18.42.6.6,0,0,0,.42.18.635.635,0,0,0,.43-.18.585.585,0,0,0,.17-.42.613.613,0,0,0-.17-.431A.622.622,0,0,0,14.178,12.174Z'/>
                          </svg>
                          <span className='text'>Total Units: 89</span>
                        </Card.Text>
                        <Card.Text>
                          <svg width='' height='' viewBox='0 0 20 15.715' className='svg_occupancy'>
                            <path id='occupancy' data-name='Vector (1)' d='M3.572,4.062A2.5,2.5,0,1,1,4.3,5.83,2.5,2.5,0,0,1,3.572,4.062ZM6.072.134A3.929,3.929,0,1,0,8.85,1.284,3.929,3.929,0,0,0,6.072.134Zm7.5,5a1.429,1.429,0,1,1,.418,1.01A1.429,1.429,0,0,1,13.572,5.134ZM15,2.277a2.857,2.857,0,1,0,2.02.837A2.857,2.857,0,0,0,15,2.277ZM0,11.563A2.143,2.143,0,0,1,2.143,9.42H10a2.143,2.143,0,0,1,2.143,2.143v.161a1.984,1.984,0,0,1-.014.2,3.518,3.518,0,0,1-.093.49,3.974,3.974,0,0,1-.714,1.441c-.836,1.073-2.408,1.994-5.251,1.994S1.657,14.927.821,13.854a3.975,3.975,0,0,1-.714-1.441,3.5,3.5,0,0,1-.1-.641c0-.016,0-.032,0-.048v-.161Zm1.429.127V11.7a2.081,2.081,0,0,0,.061.356,2.546,2.546,0,0,0,.458.922c.5.646,1.61,1.444,4.124,1.444s3.622-.8,4.124-1.443a2.551,2.551,0,0,0,.457-.923,2.083,2.083,0,0,0,.061-.356v-.136A.714.714,0,0,0,10,10.848H2.143a.714.714,0,0,0-.714.714Zm11.055,2.367A7.817,7.817,0,0,0,15,14.42c2.287,0,3.586-.681,4.3-1.518a3.034,3.034,0,0,0,.611-1.137A2.629,2.629,0,0,0,20,11.244v-.069A1.755,1.755,0,0,0,18.244,9.42H12.395a3.208,3.208,0,0,1,.739,1.429h5.11a.327.327,0,0,1,.327.319,1.188,1.188,0,0,1-.04.21,1.608,1.608,0,0,1-.326.6c-.361.428-1.2,1.012-3.2,1.012a6.59,6.59,0,0,1-1.944-.25A5.028,5.028,0,0,1,12.484,14.057Z' transform='translate(0 -0.134)' />
                          </svg>
                          <span className='text'>Occupancy: 50%</span>
                        </Card.Text>
                        <Card.Text>
                          <svg width='' height='' viewBox='0 0 16 16' className='svg_sqft'>
                            <path id='sqft' data-name='Vector (2)' d='M3.25.7A3.25,3.25,0,0,0,0,3.952v3a.75.75,0,0,0,1.5,0v-3A1.751,1.751,0,0,1,3.25,2.2h3a.75.75,0,0,0,0-1.5Zm6.5,0a.75.75,0,0,0,0,1.5h3a1.751,1.751,0,0,1,1.75,1.75v3a.75.75,0,0,0,1.5,0v-3A3.25,3.25,0,0,0,12.75.7Zm-9,9a.75.75,0,0,1,.75.75v3A1.751,1.751,0,0,0,3.25,15.2h3a.75.75,0,1,1,0,1.5h-3A3.25,3.25,0,0,1,0,13.451v-3A.75.75,0,0,1,.75,9.7Zm15.25.75a.75.75,0,0,0-1.5,0v3a1.75,1.75,0,0,1-1.75,1.75h-3a.75.75,0,1,0,0,1.5h3A3.25,3.25,0,0,0,16,13.451Z' transform='translate(0 -0.702)' />
                          </svg>
                          <span className='text'>Size: 40,233 Sq Ft</span>
                        </Card.Text>
                        <div className='d-grid px-md-4'>
                          <Button buttonType={BUTTON_TYPES.button} title={'View More Details'} className='btn mainBtn btn-sm' />
                        </div>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </Swiper>
              {/* <!-- SWIPER SLIDER END --> */}
              <Image src={featured_self_storage_circle} className='img-fluid circle_img' alt='Circle Image' />
            </div>
          </section>
          {/* <!-- FEATURED SELF STORAGE SECTION END --> */}


          {/* <!-- SELF STORAGE SECTION START --> */}
          <section className='self_storage_section'>
            <div className='content_holder'>
              <div className='section_heading_container'>
                <h1 className='section_heading'>Active Listing Self Storages</h1>
                <p className='section_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor sapien sagittis maecenas tincidunt. Quis pretium ornare</p>
              </div>
              <Form className='form_container'>
                <div className='input_box'>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Location</Form.Label>
                    <div className='position-relative'>
                      <Form.Control type='text' placeholder='Search Location' />
                      <svg width='' height='' viewBox='0 0 14 17.818' className='svg_location'>
                        <g id='location' transform='translate(0 -0.77)'>
                          <path id='Path_372' data-name='Path 372' d='M12.727,7.77a5.727,5.727,0,1,0-11.455,0c0,2.349,1.88,5.412,5.727,9.08C10.847,13.182,12.727,10.119,12.727,7.77ZM7,18.588Q0,12.225,0,7.77a7,7,0,1,1,14,0Q14,12.224,7,18.588Z' transform='translate(0 0)' />
                          <path id='Path_373' data-name='Path 373' d='M7.6,10.317a1.944,1.944,0,1,0-1.374-.569A1.944,1.944,0,0,0,7.6,10.317Zm0,1.3a3.24,3.24,0,1,1,2.291-.949A3.24,3.24,0,0,1,7.6,11.613Z' transform='translate(-0.603 -0.584)' />
                        </g>
                      </svg>
                    </div>
                  </Form.Group>
                </div>

                <div className='input_box'>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Properties</Form.Label>
                    <div className='d-sm-flex'>
                      <div className='position-relative w-100 me-sm-3 mb-sm-0 mb-3'>
                        <Form.Control type='text' placeholder='Unit Count' />
                        <svg id='Vector' width='' height='' viewBox='0 0 18 16.125' className='svg_units'>
                          <path id='Path_374' data-name='Path 374' d='M15.562,0H6.188A2.441,2.441,0,0,0,3.75,2.437V5.062a2.293,2.293,0,0,0-.223.181L.714,8.056A2.422,2.422,0,0,0,0,9.779v3.908a2.44,2.44,0,0,0,2.437,2.438H15.562A2.44,2.44,0,0,0,18,13.687V2.438A2.442,2.442,0,0,0,15.562,0ZM1.125,13.687V9.779a1.3,1.3,0,0,1,.384-.927L4.323,6.039a1.345,1.345,0,0,1,1.855,0L8.99,8.852a1.3,1.3,0,0,1,.385.927V15H5.812V11.813a.563.563,0,1,0-1.125,0V15H2.437A1.315,1.315,0,0,1,1.125,13.687Zm15.75,0A1.315,1.315,0,0,1,15.562,15H10.5V9.779a2.42,2.42,0,0,0-.714-1.723L6.973,5.243a2.469,2.469,0,0,0-2.1-.656V2.437A1.315,1.315,0,0,1,6.188,1.125h9.375a1.315,1.315,0,0,1,1.312,1.312Z'/>
                          <path id='Path_375' data-name='Path 375' d='M14.167,4.165a.549.549,0,0,0-.169.4.528.528,0,0,0,.169.394.56.56,0,0,0,.394.169.6.6,0,0,0,.4-.169.549.549,0,0,0,.159-.394.542.542,0,0,0-.169-.4A.578.578,0,0,0,14.167,4.165Z' transform='translate(-0.875 -0.251)'/>
                          <path id='Path_376' data-name='Path 376' d='M10.167,4.164A.54.54,0,0,0,10,4.558a.576.576,0,0,0,.563.572.6.6,0,0,0,.4-.169.587.587,0,0,0,.159-.4.536.536,0,0,0-.169-.394A.569.569,0,0,0,10.167,4.164Z' transform='translate(-0.625 -0.25)'/>
                          <path id='Path_377' data-name='Path 377' d='M14.167,8.165a.564.564,0,0,0-.169.4.528.528,0,0,0,.169.394.542.542,0,0,0,.788,0,.521.521,0,0,0,.169-.394.557.557,0,0,0-.169-.4A.578.578,0,0,0,14.167,8.165Z' transform='translate(-0.875 -0.501)'/>
                          <path id='Path_378' data-name='Path 378' d='M14.167,12.164a.551.551,0,0,0-.169.4.528.528,0,0,0,.169.394.56.56,0,0,0,.394.169.6.6,0,0,0,.4-.169.549.549,0,0,0,.159-.394.575.575,0,0,0-.159-.4A.584.584,0,0,0,14.167,12.164Z' transform='translate(-0.875 -0.75)'/>
                        </svg>
                      </div>

                      <div className='position-relative w-100'>
                        <Form.Control type='text' placeholder='Occupancy' className='occupancy' />
                        <svg width='' height='' viewBox='0 0 20 15.715' className='svg_occupancy'>
                          <path id='Vector_1_' data-name='Vector (1)' d='M3.572,4.062A2.5,2.5,0,1,1,4.3,5.83,2.5,2.5,0,0,1,3.572,4.062ZM6.072.134A3.929,3.929,0,1,0,8.85,1.284,3.929,3.929,0,0,0,6.072.134Zm7.5,5a1.429,1.429,0,1,1,.418,1.01A1.429,1.429,0,0,1,13.572,5.134ZM15,2.277a2.857,2.857,0,1,0,2.02.837A2.857,2.857,0,0,0,15,2.277ZM0,11.563A2.143,2.143,0,0,1,2.143,9.42H10a2.143,2.143,0,0,1,2.143,2.143v.161a1.984,1.984,0,0,1-.014.2,3.518,3.518,0,0,1-.093.49,3.974,3.974,0,0,1-.714,1.441c-.836,1.073-2.408,1.994-5.251,1.994S1.657,14.927.821,13.854a3.975,3.975,0,0,1-.714-1.441,3.5,3.5,0,0,1-.1-.641c0-.016,0-.032,0-.048v-.161Zm1.429.127V11.7a2.081,2.081,0,0,0,.061.356,2.546,2.546,0,0,0,.458.922c.5.646,1.61,1.444,4.124,1.444s3.622-.8,4.124-1.443a2.551,2.551,0,0,0,.457-.923,2.083,2.083,0,0,0,.061-.356v-.136A.714.714,0,0,0,10,10.848H2.143a.714.714,0,0,0-.714.714Zm11.055,2.367A7.817,7.817,0,0,0,15,14.42c2.287,0,3.586-.681,4.3-1.518a3.034,3.034,0,0,0,.611-1.137A2.629,2.629,0,0,0,20,11.244v-.069A1.755,1.755,0,0,0,18.244,9.42H12.395a3.208,3.208,0,0,1,.739,1.429h5.11a.327.327,0,0,1,.327.319,1.188,1.188,0,0,1-.04.21,1.608,1.608,0,0,1-.326.6c-.361.428-1.2,1.012-3.2,1.012a6.59,6.59,0,0,1-1.944-.25A5.028,5.028,0,0,1,12.484,14.057Z' transform='translate(0 -0.134)' />
                        </svg>
                        <svg width='' height='' viewBox='0 0 12.132 12.978' className='svg_percent'>
                          <path id='_' data-name='%' d='M.1,2.92a2.523,2.523,0,0,0,2.628,2.7,2.514,2.514,0,0,0,2.628-2.7A2.508,2.508,0,0,0,2.726.238,2.518,2.518,0,0,0,.1,2.92ZM2.726,1.246c.792,0,1.332.54,1.332,1.674,0,1.116-.54,1.692-1.332,1.692S1.412,4.036,1.412,2.92C1.412,1.786,1.934,1.246,2.726,1.246ZM1.7,13H3.32L10.61.436H8.99Zm5.292-2.484a2.523,2.523,0,0,0,2.628,2.7,2.519,2.519,0,0,0,2.61-2.7,2.509,2.509,0,0,0-2.61-2.7A2.514,2.514,0,0,0,6.992,10.516ZM9.6,8.842c.792,0,1.332.54,1.332,1.674,0,1.116-.54,1.656-1.332,1.656s-1.332-.54-1.332-1.656C8.27,9.382,8.81,8.842,9.6,8.842Z' transform='translate(-0.098 -0.238)'/>
                        </svg>
                      </div>
                    </div>
                  </Form.Group>
                </div>

                <div className='btn_box'>
                  <div className='position-relative'>
                    <Button buttonType={BUTTON_TYPES.submit} title={'Search'} className='btn primaryBtn btn-sm icon_left_btn' />
                    <svg width='' height='' viewBox='0 0 20 20' className='svg_search'>
                      <path id='Vector_3_' data-name='Vector (3)' d='M19,20a1,1,0,0,1-.708-.294l-3.58-3.587a9.053,9.053,0,0,1-12.06-.666A9.052,9.052,0,0,1,9.053,0a9.053,9.053,0,0,1,7.072,14.7l3.583,3.59A1,1,0,0,1,19,20ZM9.053,2a7.052,7.052,0,1,0,0,14.1,7,7,0,0,0,4.986-2.066h0l0,0a0,0,0,0,1,0,0A7.052,7.052,0,0,0,9.053,2Z' />
                    </svg>
                  </div>
                </div>
              </Form>
            </div>
          </section>
          {/* <!-- SELF STORAGE SECTION END --> */}


          {/* <!-- FIND PROPERTIES SECTION START --> */}
          <section className='find_properties_section'>
            <Container fluid className='position-relative px-0'>
              <div className='content_holder'>
                <Row>
                  <Col md={4} sm={6}>
                    <Card className='find_properties_card'>
                      <div className='img_box'>
                        <Card.Img variant='top' src={property_img_one} className='card_img' />
                      </div>
                      <Card.Body>
                        <Card.Title>
                        <svg width='' height='' viewBox='0 0 15.714 20'>
                          <g id='location' transform='translate(0 -0.77)'>
                            <path id='Path_372' data-name='Path 372' d='M14.286,8.627a6.429,6.429,0,1,0-12.857,0c0,2.637,2.11,6.074,6.429,10.191C12.176,14.7,14.286,11.264,14.286,8.627ZM7.857,20.77Q0,13.628,0,8.627a7.857,7.857,0,1,1,15.714,0Q15.714,13.626,7.857,20.77Z' transform='translate(0)' />
                            <path id='Path_373' data-name='Path 373' d='M8,10.952a2.182,2.182,0,1,0-1.543-.639A2.182,2.182,0,0,0,8,10.952Zm0,1.455a3.636,3.636,0,1,1,2.571-1.065A3.636,3.636,0,0,1,8,12.406Z' transform='translate(-0.143 -0.121)' />
                          </g>
                        </svg>
                          <span className='text'>Jersy City, NJ</span>
                        </Card.Title>
                        <Card.Text>
                          <svg id='unit' width='' height='' viewBox='0 0 19.2 17.2' className='svg_units'>
                            <path id='Path_374' data-name='Path 374' d='M16.6,0H6.6A2.6,2.6,0,0,0,4,2.6V5.4a2.446,2.446,0,0,0-.238.193l-3,3A2.583,2.583,0,0,0,0,10.431V14.6a2.6,2.6,0,0,0,2.6,2.6h14a2.6,2.6,0,0,0,2.6-2.6V2.6A2.6,2.6,0,0,0,16.6,0ZM1.2,14.6V10.431a1.388,1.388,0,0,1,.41-.989l3-3a1.434,1.434,0,0,1,1.979,0l3,3a1.386,1.386,0,0,1,.411.989V16H6.2V12.6a.6.6,0,1,0-1.2,0V16H2.6A1.4,1.4,0,0,1,1.2,14.6Zm16.8,0A1.4,1.4,0,0,1,16.6,16H11.2V10.431a2.581,2.581,0,0,0-.762-1.838l-3-3a2.634,2.634,0,0,0-2.238-.7V2.6A1.4,1.4,0,0,1,6.6,1.2h10A1.4,1.4,0,0,1,18,2.6Z'/>
                            <path id='Path_375' data-name='Path 375' d='M14.178,4.175a.585.585,0,0,0-.18.43.563.563,0,0,0,.18.42.6.6,0,0,0,.42.18.639.639,0,0,0,.43-.18.585.585,0,0,0,.17-.42.578.578,0,0,0-.18-.43A.617.617,0,0,0,14.178,4.175Z'/>
                            <path id='Path_376' data-name='Path 376' d='M10.178,4.175A.576.576,0,0,0,10,4.6a.615.615,0,0,0,.6.61.639.639,0,0,0,.43-.18.626.626,0,0,0,.17-.43.572.572,0,0,0-.18-.42A.607.607,0,0,0,10.178,4.175Z'/>
                            <path id='Path_377' data-name='Path 377' d='M14.178,8.175a.6.6,0,0,0-.18.43.563.563,0,0,0,.18.42.578.578,0,0,0,.84,0,.556.556,0,0,0,.18-.42.594.594,0,0,0-.18-.43A.617.617,0,0,0,14.178,8.175Z'/>
                            <path id='Path_378' data-name='Path 378' d='M14.178,12.174A.588.588,0,0,0,14,12.6a.563.563,0,0,0,.18.42.6.6,0,0,0,.42.18.635.635,0,0,0,.43-.18.585.585,0,0,0,.17-.42.613.613,0,0,0-.17-.431A.622.622,0,0,0,14.178,12.174Z'/>
                          </svg>
                          <span className='text'>Total Units: 89</span>
                        </Card.Text>
                        <Card.Text>
                          <svg width='' height='' viewBox='0 0 20 15.715' className='svg_occupancy'>
                            <path id='occupancy' data-name='Vector (1)' d='M3.572,4.062A2.5,2.5,0,1,1,4.3,5.83,2.5,2.5,0,0,1,3.572,4.062ZM6.072.134A3.929,3.929,0,1,0,8.85,1.284,3.929,3.929,0,0,0,6.072.134Zm7.5,5a1.429,1.429,0,1,1,.418,1.01A1.429,1.429,0,0,1,13.572,5.134ZM15,2.277a2.857,2.857,0,1,0,2.02.837A2.857,2.857,0,0,0,15,2.277ZM0,11.563A2.143,2.143,0,0,1,2.143,9.42H10a2.143,2.143,0,0,1,2.143,2.143v.161a1.984,1.984,0,0,1-.014.2,3.518,3.518,0,0,1-.093.49,3.974,3.974,0,0,1-.714,1.441c-.836,1.073-2.408,1.994-5.251,1.994S1.657,14.927.821,13.854a3.975,3.975,0,0,1-.714-1.441,3.5,3.5,0,0,1-.1-.641c0-.016,0-.032,0-.048v-.161Zm1.429.127V11.7a2.081,2.081,0,0,0,.061.356,2.546,2.546,0,0,0,.458.922c.5.646,1.61,1.444,4.124,1.444s3.622-.8,4.124-1.443a2.551,2.551,0,0,0,.457-.923,2.083,2.083,0,0,0,.061-.356v-.136A.714.714,0,0,0,10,10.848H2.143a.714.714,0,0,0-.714.714Zm11.055,2.367A7.817,7.817,0,0,0,15,14.42c2.287,0,3.586-.681,4.3-1.518a3.034,3.034,0,0,0,.611-1.137A2.629,2.629,0,0,0,20,11.244v-.069A1.755,1.755,0,0,0,18.244,9.42H12.395a3.208,3.208,0,0,1,.739,1.429h5.11a.327.327,0,0,1,.327.319,1.188,1.188,0,0,1-.04.21,1.608,1.608,0,0,1-.326.6c-.361.428-1.2,1.012-3.2,1.012a6.59,6.59,0,0,1-1.944-.25A5.028,5.028,0,0,1,12.484,14.057Z' transform='translate(0 -0.134)' />
                          </svg>
                          <span className='text'>Occupancy: 50%</span>
                        </Card.Text>
                        <Card.Text>
                          <svg width='' height='' viewBox='0 0 16 16' className='svg_sqft'>
                            <path id='sqft' data-name='Vector (2)' d='M3.25.7A3.25,3.25,0,0,0,0,3.952v3a.75.75,0,0,0,1.5,0v-3A1.751,1.751,0,0,1,3.25,2.2h3a.75.75,0,0,0,0-1.5Zm6.5,0a.75.75,0,0,0,0,1.5h3a1.751,1.751,0,0,1,1.75,1.75v3a.75.75,0,0,0,1.5,0v-3A3.25,3.25,0,0,0,12.75.7Zm-9,9a.75.75,0,0,1,.75.75v3A1.751,1.751,0,0,0,3.25,15.2h3a.75.75,0,1,1,0,1.5h-3A3.25,3.25,0,0,1,0,13.451v-3A.75.75,0,0,1,.75,9.7Zm15.25.75a.75.75,0,0,0-1.5,0v3a1.75,1.75,0,0,1-1.75,1.75h-3a.75.75,0,1,0,0,1.5h3A3.25,3.25,0,0,0,16,13.451Z' transform='translate(0 -0.702)' />
                          </svg>
                          <span className='text'>Size: 40,233 Sq Ft</span>
                        </Card.Text>
                        <div className='d-grid px-md-4'>
                          <Button buttonType={BUTTON_TYPES.button} title={'View More Details'} className='btn mainBtn btn-sm' />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col md={4} sm={6}>
                    <Card className='find_properties_card'>
                      <div className='img_box'>
                        <Card.Img variant='top' src={property_img_two} className='card_img' />
                      </div>
                      <Card.Body>
                        <Card.Title>
                        <svg width='' height='' viewBox='0 0 15.714 20'>
                          <g id='location' transform='translate(0 -0.77)'>
                            <path id='Path_372' data-name='Path 372' d='M14.286,8.627a6.429,6.429,0,1,0-12.857,0c0,2.637,2.11,6.074,6.429,10.191C12.176,14.7,14.286,11.264,14.286,8.627ZM7.857,20.77Q0,13.628,0,8.627a7.857,7.857,0,1,1,15.714,0Q15.714,13.626,7.857,20.77Z' transform='translate(0)' />
                            <path id='Path_373' data-name='Path 373' d='M8,10.952a2.182,2.182,0,1,0-1.543-.639A2.182,2.182,0,0,0,8,10.952Zm0,1.455a3.636,3.636,0,1,1,2.571-1.065A3.636,3.636,0,0,1,8,12.406Z' transform='translate(-0.143 -0.121)' />
                          </g>
                        </svg>
                          <span className='text'>Jersy City, NJ</span>
                        </Card.Title>
                        <Card.Text>
                          <svg id='unit' width='' height='' viewBox='0 0 19.2 17.2' className='svg_units'>
                            <path id='Path_374' data-name='Path 374' d='M16.6,0H6.6A2.6,2.6,0,0,0,4,2.6V5.4a2.446,2.446,0,0,0-.238.193l-3,3A2.583,2.583,0,0,0,0,10.431V14.6a2.6,2.6,0,0,0,2.6,2.6h14a2.6,2.6,0,0,0,2.6-2.6V2.6A2.6,2.6,0,0,0,16.6,0ZM1.2,14.6V10.431a1.388,1.388,0,0,1,.41-.989l3-3a1.434,1.434,0,0,1,1.979,0l3,3a1.386,1.386,0,0,1,.411.989V16H6.2V12.6a.6.6,0,1,0-1.2,0V16H2.6A1.4,1.4,0,0,1,1.2,14.6Zm16.8,0A1.4,1.4,0,0,1,16.6,16H11.2V10.431a2.581,2.581,0,0,0-.762-1.838l-3-3a2.634,2.634,0,0,0-2.238-.7V2.6A1.4,1.4,0,0,1,6.6,1.2h10A1.4,1.4,0,0,1,18,2.6Z'/>
                            <path id='Path_375' data-name='Path 375' d='M14.178,4.175a.585.585,0,0,0-.18.43.563.563,0,0,0,.18.42.6.6,0,0,0,.42.18.639.639,0,0,0,.43-.18.585.585,0,0,0,.17-.42.578.578,0,0,0-.18-.43A.617.617,0,0,0,14.178,4.175Z'/>
                            <path id='Path_376' data-name='Path 376' d='M10.178,4.175A.576.576,0,0,0,10,4.6a.615.615,0,0,0,.6.61.639.639,0,0,0,.43-.18.626.626,0,0,0,.17-.43.572.572,0,0,0-.18-.42A.607.607,0,0,0,10.178,4.175Z'/>
                            <path id='Path_377' data-name='Path 377' d='M14.178,8.175a.6.6,0,0,0-.18.43.563.563,0,0,0,.18.42.578.578,0,0,0,.84,0,.556.556,0,0,0,.18-.42.594.594,0,0,0-.18-.43A.617.617,0,0,0,14.178,8.175Z'/>
                            <path id='Path_378' data-name='Path 378' d='M14.178,12.174A.588.588,0,0,0,14,12.6a.563.563,0,0,0,.18.42.6.6,0,0,0,.42.18.635.635,0,0,0,.43-.18.585.585,0,0,0,.17-.42.613.613,0,0,0-.17-.431A.622.622,0,0,0,14.178,12.174Z'/>
                          </svg>
                          <span className='text'>Total Units: 89</span>
                        </Card.Text>
                        <Card.Text>
                          <svg width='' height='' viewBox='0 0 20 15.715' className='svg_occupancy'>
                            <path id='occupancy' data-name='Vector (1)' d='M3.572,4.062A2.5,2.5,0,1,1,4.3,5.83,2.5,2.5,0,0,1,3.572,4.062ZM6.072.134A3.929,3.929,0,1,0,8.85,1.284,3.929,3.929,0,0,0,6.072.134Zm7.5,5a1.429,1.429,0,1,1,.418,1.01A1.429,1.429,0,0,1,13.572,5.134ZM15,2.277a2.857,2.857,0,1,0,2.02.837A2.857,2.857,0,0,0,15,2.277ZM0,11.563A2.143,2.143,0,0,1,2.143,9.42H10a2.143,2.143,0,0,1,2.143,2.143v.161a1.984,1.984,0,0,1-.014.2,3.518,3.518,0,0,1-.093.49,3.974,3.974,0,0,1-.714,1.441c-.836,1.073-2.408,1.994-5.251,1.994S1.657,14.927.821,13.854a3.975,3.975,0,0,1-.714-1.441,3.5,3.5,0,0,1-.1-.641c0-.016,0-.032,0-.048v-.161Zm1.429.127V11.7a2.081,2.081,0,0,0,.061.356,2.546,2.546,0,0,0,.458.922c.5.646,1.61,1.444,4.124,1.444s3.622-.8,4.124-1.443a2.551,2.551,0,0,0,.457-.923,2.083,2.083,0,0,0,.061-.356v-.136A.714.714,0,0,0,10,10.848H2.143a.714.714,0,0,0-.714.714Zm11.055,2.367A7.817,7.817,0,0,0,15,14.42c2.287,0,3.586-.681,4.3-1.518a3.034,3.034,0,0,0,.611-1.137A2.629,2.629,0,0,0,20,11.244v-.069A1.755,1.755,0,0,0,18.244,9.42H12.395a3.208,3.208,0,0,1,.739,1.429h5.11a.327.327,0,0,1,.327.319,1.188,1.188,0,0,1-.04.21,1.608,1.608,0,0,1-.326.6c-.361.428-1.2,1.012-3.2,1.012a6.59,6.59,0,0,1-1.944-.25A5.028,5.028,0,0,1,12.484,14.057Z' transform='translate(0 -0.134)' />
                          </svg>
                          <span className='text'>Occupancy: 50%</span>
                        </Card.Text>
                        <Card.Text>
                          <svg width='' height='' viewBox='0 0 16 16' className='svg_sqft'>
                            <path id='sqft' data-name='Vector (2)' d='M3.25.7A3.25,3.25,0,0,0,0,3.952v3a.75.75,0,0,0,1.5,0v-3A1.751,1.751,0,0,1,3.25,2.2h3a.75.75,0,0,0,0-1.5Zm6.5,0a.75.75,0,0,0,0,1.5h3a1.751,1.751,0,0,1,1.75,1.75v3a.75.75,0,0,0,1.5,0v-3A3.25,3.25,0,0,0,12.75.7Zm-9,9a.75.75,0,0,1,.75.75v3A1.751,1.751,0,0,0,3.25,15.2h3a.75.75,0,1,1,0,1.5h-3A3.25,3.25,0,0,1,0,13.451v-3A.75.75,0,0,1,.75,9.7Zm15.25.75a.75.75,0,0,0-1.5,0v3a1.75,1.75,0,0,1-1.75,1.75h-3a.75.75,0,1,0,0,1.5h3A3.25,3.25,0,0,0,16,13.451Z' transform='translate(0 -0.702)' />
                          </svg>
                          <span className='text'>Size: 40,233 Sq Ft</span>
                        </Card.Text>
                        <div className='d-grid px-md-4'>
                          <Button buttonType={BUTTON_TYPES.button} title={'View More Details'} className='btn mainBtn btn-sm' />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col md={4} sm={6}>
                    <Card className='find_properties_card'>
                      <div className='img_box'>
                        <Card.Img variant='top' src={property_img_three} className='card_img' />
                      </div>
                      <Card.Body>
                        <Card.Title>
                        <svg width='' height='' viewBox='0 0 15.714 20'>
                          <g id='location' transform='translate(0 -0.77)'>
                            <path id='Path_372' data-name='Path 372' d='M14.286,8.627a6.429,6.429,0,1,0-12.857,0c0,2.637,2.11,6.074,6.429,10.191C12.176,14.7,14.286,11.264,14.286,8.627ZM7.857,20.77Q0,13.628,0,8.627a7.857,7.857,0,1,1,15.714,0Q15.714,13.626,7.857,20.77Z' transform='translate(0)' />
                            <path id='Path_373' data-name='Path 373' d='M8,10.952a2.182,2.182,0,1,0-1.543-.639A2.182,2.182,0,0,0,8,10.952Zm0,1.455a3.636,3.636,0,1,1,2.571-1.065A3.636,3.636,0,0,1,8,12.406Z' transform='translate(-0.143 -0.121)' />
                          </g>
                        </svg>
                          <span className='text'>Jersy City, NJ</span>
                        </Card.Title>
                        <Card.Text>
                          <svg id='unit' width='' height='' viewBox='0 0 19.2 17.2' className='svg_units'>
                            <path id='Path_374' data-name='Path 374' d='M16.6,0H6.6A2.6,2.6,0,0,0,4,2.6V5.4a2.446,2.446,0,0,0-.238.193l-3,3A2.583,2.583,0,0,0,0,10.431V14.6a2.6,2.6,0,0,0,2.6,2.6h14a2.6,2.6,0,0,0,2.6-2.6V2.6A2.6,2.6,0,0,0,16.6,0ZM1.2,14.6V10.431a1.388,1.388,0,0,1,.41-.989l3-3a1.434,1.434,0,0,1,1.979,0l3,3a1.386,1.386,0,0,1,.411.989V16H6.2V12.6a.6.6,0,1,0-1.2,0V16H2.6A1.4,1.4,0,0,1,1.2,14.6Zm16.8,0A1.4,1.4,0,0,1,16.6,16H11.2V10.431a2.581,2.581,0,0,0-.762-1.838l-3-3a2.634,2.634,0,0,0-2.238-.7V2.6A1.4,1.4,0,0,1,6.6,1.2h10A1.4,1.4,0,0,1,18,2.6Z'/>
                            <path id='Path_375' data-name='Path 375' d='M14.178,4.175a.585.585,0,0,0-.18.43.563.563,0,0,0,.18.42.6.6,0,0,0,.42.18.639.639,0,0,0,.43-.18.585.585,0,0,0,.17-.42.578.578,0,0,0-.18-.43A.617.617,0,0,0,14.178,4.175Z'/>
                            <path id='Path_376' data-name='Path 376' d='M10.178,4.175A.576.576,0,0,0,10,4.6a.615.615,0,0,0,.6.61.639.639,0,0,0,.43-.18.626.626,0,0,0,.17-.43.572.572,0,0,0-.18-.42A.607.607,0,0,0,10.178,4.175Z'/>
                            <path id='Path_377' data-name='Path 377' d='M14.178,8.175a.6.6,0,0,0-.18.43.563.563,0,0,0,.18.42.578.578,0,0,0,.84,0,.556.556,0,0,0,.18-.42.594.594,0,0,0-.18-.43A.617.617,0,0,0,14.178,8.175Z'/>
                            <path id='Path_378' data-name='Path 378' d='M14.178,12.174A.588.588,0,0,0,14,12.6a.563.563,0,0,0,.18.42.6.6,0,0,0,.42.18.635.635,0,0,0,.43-.18.585.585,0,0,0,.17-.42.613.613,0,0,0-.17-.431A.622.622,0,0,0,14.178,12.174Z'/>
                          </svg>
                          <span className='text'>Total Units: 89</span>
                        </Card.Text>
                        <Card.Text>
                          <svg width='' height='' viewBox='0 0 20 15.715' className='svg_occupancy'>
                            <path id='occupancy' data-name='Vector (1)' d='M3.572,4.062A2.5,2.5,0,1,1,4.3,5.83,2.5,2.5,0,0,1,3.572,4.062ZM6.072.134A3.929,3.929,0,1,0,8.85,1.284,3.929,3.929,0,0,0,6.072.134Zm7.5,5a1.429,1.429,0,1,1,.418,1.01A1.429,1.429,0,0,1,13.572,5.134ZM15,2.277a2.857,2.857,0,1,0,2.02.837A2.857,2.857,0,0,0,15,2.277ZM0,11.563A2.143,2.143,0,0,1,2.143,9.42H10a2.143,2.143,0,0,1,2.143,2.143v.161a1.984,1.984,0,0,1-.014.2,3.518,3.518,0,0,1-.093.49,3.974,3.974,0,0,1-.714,1.441c-.836,1.073-2.408,1.994-5.251,1.994S1.657,14.927.821,13.854a3.975,3.975,0,0,1-.714-1.441,3.5,3.5,0,0,1-.1-.641c0-.016,0-.032,0-.048v-.161Zm1.429.127V11.7a2.081,2.081,0,0,0,.061.356,2.546,2.546,0,0,0,.458.922c.5.646,1.61,1.444,4.124,1.444s3.622-.8,4.124-1.443a2.551,2.551,0,0,0,.457-.923,2.083,2.083,0,0,0,.061-.356v-.136A.714.714,0,0,0,10,10.848H2.143a.714.714,0,0,0-.714.714Zm11.055,2.367A7.817,7.817,0,0,0,15,14.42c2.287,0,3.586-.681,4.3-1.518a3.034,3.034,0,0,0,.611-1.137A2.629,2.629,0,0,0,20,11.244v-.069A1.755,1.755,0,0,0,18.244,9.42H12.395a3.208,3.208,0,0,1,.739,1.429h5.11a.327.327,0,0,1,.327.319,1.188,1.188,0,0,1-.04.21,1.608,1.608,0,0,1-.326.6c-.361.428-1.2,1.012-3.2,1.012a6.59,6.59,0,0,1-1.944-.25A5.028,5.028,0,0,1,12.484,14.057Z' transform='translate(0 -0.134)' />
                          </svg>
                          <span className='text'>Occupancy: 50%</span>
                        </Card.Text>
                        <Card.Text>
                          <svg width='' height='' viewBox='0 0 16 16' className='svg_sqft'>
                            <path id='sqft' data-name='Vector (2)' d='M3.25.7A3.25,3.25,0,0,0,0,3.952v3a.75.75,0,0,0,1.5,0v-3A1.751,1.751,0,0,1,3.25,2.2h3a.75.75,0,0,0,0-1.5Zm6.5,0a.75.75,0,0,0,0,1.5h3a1.751,1.751,0,0,1,1.75,1.75v3a.75.75,0,0,0,1.5,0v-3A3.25,3.25,0,0,0,12.75.7Zm-9,9a.75.75,0,0,1,.75.75v3A1.751,1.751,0,0,0,3.25,15.2h3a.75.75,0,1,1,0,1.5h-3A3.25,3.25,0,0,1,0,13.451v-3A.75.75,0,0,1,.75,9.7Zm15.25.75a.75.75,0,0,0-1.5,0v3a1.75,1.75,0,0,1-1.75,1.75h-3a.75.75,0,1,0,0,1.5h3A3.25,3.25,0,0,0,16,13.451Z' transform='translate(0 -0.702)' />
                          </svg>
                          <span className='text'>Size: 40,233 Sq Ft</span>
                        </Card.Text>
                        <div className='d-grid px-md-4'>
                          <Button buttonType={BUTTON_TYPES.button} title={'View More Details'} className='btn mainBtn btn-sm' />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col md={4} sm={6}>
                    <Card className='find_properties_card'>
                      <div className='img_box'>
                        <Card.Img variant='top' src={property_img_four} className='card_img' />
                      </div>
                      <Card.Body>
                        <Card.Title>
                        <svg width='' height='' viewBox='0 0 15.714 20'>
                          <g id='location' transform='translate(0 -0.77)'>
                            <path id='Path_372' data-name='Path 372' d='M14.286,8.627a6.429,6.429,0,1,0-12.857,0c0,2.637,2.11,6.074,6.429,10.191C12.176,14.7,14.286,11.264,14.286,8.627ZM7.857,20.77Q0,13.628,0,8.627a7.857,7.857,0,1,1,15.714,0Q15.714,13.626,7.857,20.77Z' transform='translate(0)' />
                            <path id='Path_373' data-name='Path 373' d='M8,10.952a2.182,2.182,0,1,0-1.543-.639A2.182,2.182,0,0,0,8,10.952Zm0,1.455a3.636,3.636,0,1,1,2.571-1.065A3.636,3.636,0,0,1,8,12.406Z' transform='translate(-0.143 -0.121)' />
                          </g>
                        </svg>
                          <span className='text'>Jersy City, NJ</span>
                        </Card.Title>
                        <Card.Text>
                          <svg id='unit' width='' height='' viewBox='0 0 19.2 17.2' className='svg_units'>
                            <path id='Path_374' data-name='Path 374' d='M16.6,0H6.6A2.6,2.6,0,0,0,4,2.6V5.4a2.446,2.446,0,0,0-.238.193l-3,3A2.583,2.583,0,0,0,0,10.431V14.6a2.6,2.6,0,0,0,2.6,2.6h14a2.6,2.6,0,0,0,2.6-2.6V2.6A2.6,2.6,0,0,0,16.6,0ZM1.2,14.6V10.431a1.388,1.388,0,0,1,.41-.989l3-3a1.434,1.434,0,0,1,1.979,0l3,3a1.386,1.386,0,0,1,.411.989V16H6.2V12.6a.6.6,0,1,0-1.2,0V16H2.6A1.4,1.4,0,0,1,1.2,14.6Zm16.8,0A1.4,1.4,0,0,1,16.6,16H11.2V10.431a2.581,2.581,0,0,0-.762-1.838l-3-3a2.634,2.634,0,0,0-2.238-.7V2.6A1.4,1.4,0,0,1,6.6,1.2h10A1.4,1.4,0,0,1,18,2.6Z'/>
                            <path id='Path_375' data-name='Path 375' d='M14.178,4.175a.585.585,0,0,0-.18.43.563.563,0,0,0,.18.42.6.6,0,0,0,.42.18.639.639,0,0,0,.43-.18.585.585,0,0,0,.17-.42.578.578,0,0,0-.18-.43A.617.617,0,0,0,14.178,4.175Z'/>
                            <path id='Path_376' data-name='Path 376' d='M10.178,4.175A.576.576,0,0,0,10,4.6a.615.615,0,0,0,.6.61.639.639,0,0,0,.43-.18.626.626,0,0,0,.17-.43.572.572,0,0,0-.18-.42A.607.607,0,0,0,10.178,4.175Z'/>
                            <path id='Path_377' data-name='Path 377' d='M14.178,8.175a.6.6,0,0,0-.18.43.563.563,0,0,0,.18.42.578.578,0,0,0,.84,0,.556.556,0,0,0,.18-.42.594.594,0,0,0-.18-.43A.617.617,0,0,0,14.178,8.175Z'/>
                            <path id='Path_378' data-name='Path 378' d='M14.178,12.174A.588.588,0,0,0,14,12.6a.563.563,0,0,0,.18.42.6.6,0,0,0,.42.18.635.635,0,0,0,.43-.18.585.585,0,0,0,.17-.42.613.613,0,0,0-.17-.431A.622.622,0,0,0,14.178,12.174Z'/>
                          </svg>
                          <span className='text'>Total Units: 89</span>
                        </Card.Text>
                        <Card.Text>
                          <svg width='' height='' viewBox='0 0 20 15.715' className='svg_occupancy'>
                            <path id='occupancy' data-name='Vector (1)' d='M3.572,4.062A2.5,2.5,0,1,1,4.3,5.83,2.5,2.5,0,0,1,3.572,4.062ZM6.072.134A3.929,3.929,0,1,0,8.85,1.284,3.929,3.929,0,0,0,6.072.134Zm7.5,5a1.429,1.429,0,1,1,.418,1.01A1.429,1.429,0,0,1,13.572,5.134ZM15,2.277a2.857,2.857,0,1,0,2.02.837A2.857,2.857,0,0,0,15,2.277ZM0,11.563A2.143,2.143,0,0,1,2.143,9.42H10a2.143,2.143,0,0,1,2.143,2.143v.161a1.984,1.984,0,0,1-.014.2,3.518,3.518,0,0,1-.093.49,3.974,3.974,0,0,1-.714,1.441c-.836,1.073-2.408,1.994-5.251,1.994S1.657,14.927.821,13.854a3.975,3.975,0,0,1-.714-1.441,3.5,3.5,0,0,1-.1-.641c0-.016,0-.032,0-.048v-.161Zm1.429.127V11.7a2.081,2.081,0,0,0,.061.356,2.546,2.546,0,0,0,.458.922c.5.646,1.61,1.444,4.124,1.444s3.622-.8,4.124-1.443a2.551,2.551,0,0,0,.457-.923,2.083,2.083,0,0,0,.061-.356v-.136A.714.714,0,0,0,10,10.848H2.143a.714.714,0,0,0-.714.714Zm11.055,2.367A7.817,7.817,0,0,0,15,14.42c2.287,0,3.586-.681,4.3-1.518a3.034,3.034,0,0,0,.611-1.137A2.629,2.629,0,0,0,20,11.244v-.069A1.755,1.755,0,0,0,18.244,9.42H12.395a3.208,3.208,0,0,1,.739,1.429h5.11a.327.327,0,0,1,.327.319,1.188,1.188,0,0,1-.04.21,1.608,1.608,0,0,1-.326.6c-.361.428-1.2,1.012-3.2,1.012a6.59,6.59,0,0,1-1.944-.25A5.028,5.028,0,0,1,12.484,14.057Z' transform='translate(0 -0.134)' />
                          </svg>
                          <span className='text'>Occupancy: 50%</span>
                        </Card.Text>
                        <Card.Text>
                          <svg width='' height='' viewBox='0 0 16 16' className='svg_sqft'>
                            <path id='sqft' data-name='Vector (2)' d='M3.25.7A3.25,3.25,0,0,0,0,3.952v3a.75.75,0,0,0,1.5,0v-3A1.751,1.751,0,0,1,3.25,2.2h3a.75.75,0,0,0,0-1.5Zm6.5,0a.75.75,0,0,0,0,1.5h3a1.751,1.751,0,0,1,1.75,1.75v3a.75.75,0,0,0,1.5,0v-3A3.25,3.25,0,0,0,12.75.7Zm-9,9a.75.75,0,0,1,.75.75v3A1.751,1.751,0,0,0,3.25,15.2h3a.75.75,0,1,1,0,1.5h-3A3.25,3.25,0,0,1,0,13.451v-3A.75.75,0,0,1,.75,9.7Zm15.25.75a.75.75,0,0,0-1.5,0v3a1.75,1.75,0,0,1-1.75,1.75h-3a.75.75,0,1,0,0,1.5h3A3.25,3.25,0,0,0,16,13.451Z' transform='translate(0 -0.702)' />
                          </svg>
                          <span className='text'>Size: 40,233 Sq Ft</span>
                        </Card.Text>
                        <div className='d-grid px-md-4'>
                          <Button buttonType={BUTTON_TYPES.button} title={'View More Details'} className='btn mainBtn btn-sm' />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col md={4} sm={6}>
                    <Card className='find_properties_card'>
                      <div className='img_box'>
                        <Card.Img variant='top' src={property_img_five} className='card_img' />
                      </div>
                      <Card.Body>
                        <Card.Title>
                        <svg width='' height='' viewBox='0 0 15.714 20'>
                          <g id='location' transform='translate(0 -0.77)'>
                            <path id='Path_372' data-name='Path 372' d='M14.286,8.627a6.429,6.429,0,1,0-12.857,0c0,2.637,2.11,6.074,6.429,10.191C12.176,14.7,14.286,11.264,14.286,8.627ZM7.857,20.77Q0,13.628,0,8.627a7.857,7.857,0,1,1,15.714,0Q15.714,13.626,7.857,20.77Z' transform='translate(0)' />
                            <path id='Path_373' data-name='Path 373' d='M8,10.952a2.182,2.182,0,1,0-1.543-.639A2.182,2.182,0,0,0,8,10.952Zm0,1.455a3.636,3.636,0,1,1,2.571-1.065A3.636,3.636,0,0,1,8,12.406Z' transform='translate(-0.143 -0.121)' />
                          </g>
                        </svg>
                          <span className='text'>Jersy City, NJ</span>
                        </Card.Title>
                        <Card.Text>
                          <svg id='unit' width='' height='' viewBox='0 0 19.2 17.2' className='svg_units'>
                            <path id='Path_374' data-name='Path 374' d='M16.6,0H6.6A2.6,2.6,0,0,0,4,2.6V5.4a2.446,2.446,0,0,0-.238.193l-3,3A2.583,2.583,0,0,0,0,10.431V14.6a2.6,2.6,0,0,0,2.6,2.6h14a2.6,2.6,0,0,0,2.6-2.6V2.6A2.6,2.6,0,0,0,16.6,0ZM1.2,14.6V10.431a1.388,1.388,0,0,1,.41-.989l3-3a1.434,1.434,0,0,1,1.979,0l3,3a1.386,1.386,0,0,1,.411.989V16H6.2V12.6a.6.6,0,1,0-1.2,0V16H2.6A1.4,1.4,0,0,1,1.2,14.6Zm16.8,0A1.4,1.4,0,0,1,16.6,16H11.2V10.431a2.581,2.581,0,0,0-.762-1.838l-3-3a2.634,2.634,0,0,0-2.238-.7V2.6A1.4,1.4,0,0,1,6.6,1.2h10A1.4,1.4,0,0,1,18,2.6Z'/>
                            <path id='Path_375' data-name='Path 375' d='M14.178,4.175a.585.585,0,0,0-.18.43.563.563,0,0,0,.18.42.6.6,0,0,0,.42.18.639.639,0,0,0,.43-.18.585.585,0,0,0,.17-.42.578.578,0,0,0-.18-.43A.617.617,0,0,0,14.178,4.175Z'/>
                            <path id='Path_376' data-name='Path 376' d='M10.178,4.175A.576.576,0,0,0,10,4.6a.615.615,0,0,0,.6.61.639.639,0,0,0,.43-.18.626.626,0,0,0,.17-.43.572.572,0,0,0-.18-.42A.607.607,0,0,0,10.178,4.175Z'/>
                            <path id='Path_377' data-name='Path 377' d='M14.178,8.175a.6.6,0,0,0-.18.43.563.563,0,0,0,.18.42.578.578,0,0,0,.84,0,.556.556,0,0,0,.18-.42.594.594,0,0,0-.18-.43A.617.617,0,0,0,14.178,8.175Z'/>
                            <path id='Path_378' data-name='Path 378' d='M14.178,12.174A.588.588,0,0,0,14,12.6a.563.563,0,0,0,.18.42.6.6,0,0,0,.42.18.635.635,0,0,0,.43-.18.585.585,0,0,0,.17-.42.613.613,0,0,0-.17-.431A.622.622,0,0,0,14.178,12.174Z'/>
                          </svg>
                          <span className='text'>Total Units: 89</span>
                        </Card.Text>
                        <Card.Text>
                          <svg width='' height='' viewBox='0 0 20 15.715' className='svg_occupancy'>
                            <path id='occupancy' data-name='Vector (1)' d='M3.572,4.062A2.5,2.5,0,1,1,4.3,5.83,2.5,2.5,0,0,1,3.572,4.062ZM6.072.134A3.929,3.929,0,1,0,8.85,1.284,3.929,3.929,0,0,0,6.072.134Zm7.5,5a1.429,1.429,0,1,1,.418,1.01A1.429,1.429,0,0,1,13.572,5.134ZM15,2.277a2.857,2.857,0,1,0,2.02.837A2.857,2.857,0,0,0,15,2.277ZM0,11.563A2.143,2.143,0,0,1,2.143,9.42H10a2.143,2.143,0,0,1,2.143,2.143v.161a1.984,1.984,0,0,1-.014.2,3.518,3.518,0,0,1-.093.49,3.974,3.974,0,0,1-.714,1.441c-.836,1.073-2.408,1.994-5.251,1.994S1.657,14.927.821,13.854a3.975,3.975,0,0,1-.714-1.441,3.5,3.5,0,0,1-.1-.641c0-.016,0-.032,0-.048v-.161Zm1.429.127V11.7a2.081,2.081,0,0,0,.061.356,2.546,2.546,0,0,0,.458.922c.5.646,1.61,1.444,4.124,1.444s3.622-.8,4.124-1.443a2.551,2.551,0,0,0,.457-.923,2.083,2.083,0,0,0,.061-.356v-.136A.714.714,0,0,0,10,10.848H2.143a.714.714,0,0,0-.714.714Zm11.055,2.367A7.817,7.817,0,0,0,15,14.42c2.287,0,3.586-.681,4.3-1.518a3.034,3.034,0,0,0,.611-1.137A2.629,2.629,0,0,0,20,11.244v-.069A1.755,1.755,0,0,0,18.244,9.42H12.395a3.208,3.208,0,0,1,.739,1.429h5.11a.327.327,0,0,1,.327.319,1.188,1.188,0,0,1-.04.21,1.608,1.608,0,0,1-.326.6c-.361.428-1.2,1.012-3.2,1.012a6.59,6.59,0,0,1-1.944-.25A5.028,5.028,0,0,1,12.484,14.057Z' transform='translate(0 -0.134)' />
                          </svg>
                          <span className='text'>Occupancy: 50%</span>
                        </Card.Text>
                        <Card.Text>
                          <svg width='' height='' viewBox='0 0 16 16' className='svg_sqft'>
                            <path id='sqft' data-name='Vector (2)' d='M3.25.7A3.25,3.25,0,0,0,0,3.952v3a.75.75,0,0,0,1.5,0v-3A1.751,1.751,0,0,1,3.25,2.2h3a.75.75,0,0,0,0-1.5Zm6.5,0a.75.75,0,0,0,0,1.5h3a1.751,1.751,0,0,1,1.75,1.75v3a.75.75,0,0,0,1.5,0v-3A3.25,3.25,0,0,0,12.75.7Zm-9,9a.75.75,0,0,1,.75.75v3A1.751,1.751,0,0,0,3.25,15.2h3a.75.75,0,1,1,0,1.5h-3A3.25,3.25,0,0,1,0,13.451v-3A.75.75,0,0,1,.75,9.7Zm15.25.75a.75.75,0,0,0-1.5,0v3a1.75,1.75,0,0,1-1.75,1.75h-3a.75.75,0,1,0,0,1.5h3A3.25,3.25,0,0,0,16,13.451Z' transform='translate(0 -0.702)' />
                          </svg>
                          <span className='text'>Size: 40,233 Sq Ft</span>
                        </Card.Text>
                        <div className='d-grid px-md-4'>
                          <Button buttonType={BUTTON_TYPES.button} title={'View More Details'} className='btn mainBtn btn-sm' />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col md={4} sm={6}>
                    <Card className='find_properties_card'>
                      <div className='img_box'>
                        <Card.Img variant='top' src={property_img_six} className='card_img' />
                      </div>
                      <Card.Body>
                        <Card.Title>
                        <svg width='' height='' viewBox='0 0 15.714 20'>
                          <g id='location' transform='translate(0 -0.77)'>
                            <path id='Path_372' data-name='Path 372' d='M14.286,8.627a6.429,6.429,0,1,0-12.857,0c0,2.637,2.11,6.074,6.429,10.191C12.176,14.7,14.286,11.264,14.286,8.627ZM7.857,20.77Q0,13.628,0,8.627a7.857,7.857,0,1,1,15.714,0Q15.714,13.626,7.857,20.77Z' transform='translate(0)' />
                            <path id='Path_373' data-name='Path 373' d='M8,10.952a2.182,2.182,0,1,0-1.543-.639A2.182,2.182,0,0,0,8,10.952Zm0,1.455a3.636,3.636,0,1,1,2.571-1.065A3.636,3.636,0,0,1,8,12.406Z' transform='translate(-0.143 -0.121)' />
                          </g>
                        </svg>
                          <span className='text'>Jersy City, NJ</span>
                        </Card.Title>
                        <Card.Text>
                          <svg id='unit' width='' height='' viewBox='0 0 19.2 17.2' className='svg_units'>
                            <path id='Path_374' data-name='Path 374' d='M16.6,0H6.6A2.6,2.6,0,0,0,4,2.6V5.4a2.446,2.446,0,0,0-.238.193l-3,3A2.583,2.583,0,0,0,0,10.431V14.6a2.6,2.6,0,0,0,2.6,2.6h14a2.6,2.6,0,0,0,2.6-2.6V2.6A2.6,2.6,0,0,0,16.6,0ZM1.2,14.6V10.431a1.388,1.388,0,0,1,.41-.989l3-3a1.434,1.434,0,0,1,1.979,0l3,3a1.386,1.386,0,0,1,.411.989V16H6.2V12.6a.6.6,0,1,0-1.2,0V16H2.6A1.4,1.4,0,0,1,1.2,14.6Zm16.8,0A1.4,1.4,0,0,1,16.6,16H11.2V10.431a2.581,2.581,0,0,0-.762-1.838l-3-3a2.634,2.634,0,0,0-2.238-.7V2.6A1.4,1.4,0,0,1,6.6,1.2h10A1.4,1.4,0,0,1,18,2.6Z'/>
                            <path id='Path_375' data-name='Path 375' d='M14.178,4.175a.585.585,0,0,0-.18.43.563.563,0,0,0,.18.42.6.6,0,0,0,.42.18.639.639,0,0,0,.43-.18.585.585,0,0,0,.17-.42.578.578,0,0,0-.18-.43A.617.617,0,0,0,14.178,4.175Z'/>
                            <path id='Path_376' data-name='Path 376' d='M10.178,4.175A.576.576,0,0,0,10,4.6a.615.615,0,0,0,.6.61.639.639,0,0,0,.43-.18.626.626,0,0,0,.17-.43.572.572,0,0,0-.18-.42A.607.607,0,0,0,10.178,4.175Z'/>
                            <path id='Path_377' data-name='Path 377' d='M14.178,8.175a.6.6,0,0,0-.18.43.563.563,0,0,0,.18.42.578.578,0,0,0,.84,0,.556.556,0,0,0,.18-.42.594.594,0,0,0-.18-.43A.617.617,0,0,0,14.178,8.175Z'/>
                            <path id='Path_378' data-name='Path 378' d='M14.178,12.174A.588.588,0,0,0,14,12.6a.563.563,0,0,0,.18.42.6.6,0,0,0,.42.18.635.635,0,0,0,.43-.18.585.585,0,0,0,.17-.42.613.613,0,0,0-.17-.431A.622.622,0,0,0,14.178,12.174Z'/>
                          </svg>
                          <span className='text'>Total Units: 89</span>
                        </Card.Text>
                        <Card.Text>
                          <svg width='' height='' viewBox='0 0 20 15.715' className='svg_occupancy'>
                            <path id='occupancy' data-name='Vector (1)' d='M3.572,4.062A2.5,2.5,0,1,1,4.3,5.83,2.5,2.5,0,0,1,3.572,4.062ZM6.072.134A3.929,3.929,0,1,0,8.85,1.284,3.929,3.929,0,0,0,6.072.134Zm7.5,5a1.429,1.429,0,1,1,.418,1.01A1.429,1.429,0,0,1,13.572,5.134ZM15,2.277a2.857,2.857,0,1,0,2.02.837A2.857,2.857,0,0,0,15,2.277ZM0,11.563A2.143,2.143,0,0,1,2.143,9.42H10a2.143,2.143,0,0,1,2.143,2.143v.161a1.984,1.984,0,0,1-.014.2,3.518,3.518,0,0,1-.093.49,3.974,3.974,0,0,1-.714,1.441c-.836,1.073-2.408,1.994-5.251,1.994S1.657,14.927.821,13.854a3.975,3.975,0,0,1-.714-1.441,3.5,3.5,0,0,1-.1-.641c0-.016,0-.032,0-.048v-.161Zm1.429.127V11.7a2.081,2.081,0,0,0,.061.356,2.546,2.546,0,0,0,.458.922c.5.646,1.61,1.444,4.124,1.444s3.622-.8,4.124-1.443a2.551,2.551,0,0,0,.457-.923,2.083,2.083,0,0,0,.061-.356v-.136A.714.714,0,0,0,10,10.848H2.143a.714.714,0,0,0-.714.714Zm11.055,2.367A7.817,7.817,0,0,0,15,14.42c2.287,0,3.586-.681,4.3-1.518a3.034,3.034,0,0,0,.611-1.137A2.629,2.629,0,0,0,20,11.244v-.069A1.755,1.755,0,0,0,18.244,9.42H12.395a3.208,3.208,0,0,1,.739,1.429h5.11a.327.327,0,0,1,.327.319,1.188,1.188,0,0,1-.04.21,1.608,1.608,0,0,1-.326.6c-.361.428-1.2,1.012-3.2,1.012a6.59,6.59,0,0,1-1.944-.25A5.028,5.028,0,0,1,12.484,14.057Z' transform='translate(0 -0.134)' />
                          </svg>
                          <span className='text'>Occupancy: 50%</span>
                        </Card.Text>
                        <Card.Text>
                          <svg width='' height='' viewBox='0 0 16 16' className='svg_sqft'>
                            <path id='sqft' data-name='Vector (2)' d='M3.25.7A3.25,3.25,0,0,0,0,3.952v3a.75.75,0,0,0,1.5,0v-3A1.751,1.751,0,0,1,3.25,2.2h3a.75.75,0,0,0,0-1.5Zm6.5,0a.75.75,0,0,0,0,1.5h3a1.751,1.751,0,0,1,1.75,1.75v3a.75.75,0,0,0,1.5,0v-3A3.25,3.25,0,0,0,12.75.7Zm-9,9a.75.75,0,0,1,.75.75v3A1.751,1.751,0,0,0,3.25,15.2h3a.75.75,0,1,1,0,1.5h-3A3.25,3.25,0,0,1,0,13.451v-3A.75.75,0,0,1,.75,9.7Zm15.25.75a.75.75,0,0,0-1.5,0v3a1.75,1.75,0,0,1-1.75,1.75h-3a.75.75,0,1,0,0,1.5h3A3.25,3.25,0,0,0,16,13.451Z' transform='translate(0 -0.702)' />
                          </svg>
                          <span className='text'>Size: 40,233 Sq Ft</span>
                        </Card.Text>
                        <div className='d-grid px-md-4'>
                          <Button buttonType={BUTTON_TYPES.button} title={'View More Details'} className='btn mainBtn btn-sm' />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <div className='btn_box'>
                  <Button buttonType={BUTTON_TYPES.button} title={'View More Listing'} className='btn primaryBtn btn-lg' />
                </div>
              </div>
              <Image src={find_properties_circle_half_left} className='img-fluid circle_left_img' alt='Circle Image' />
              <Image src={find_properties_circle_half_right} className='img-fluid circle_right_img' alt='Circle Image' />
            </Container>
          </section>
          {/* <!-- FIND PROPERTIES SECTION END --> */}


          {/* <!-- SELL SELF STORAGE SECTION START --> */}
          <section className='sell_self_storage_section'>
            <div className='content_holder'>
              <Row className='flex-md-row-reverse flex-column-reverse justify-content-center'>
                <Col md={6}>
                  <Image src={sell_self_storage_person} className='img-fluid person_img' alt='Person Image' />
                </Col>

                <Col md={6} className='d-flex flex-column justify-content-center'>
                  <div className='text_box'>
                    <h1 className='title_text'>Do you have a Self Storage for Sale?</h1>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet proin scelerisque nunc.</p>
                  </div>
                  <div className='btn_box'>
                    <Button buttonType={BUTTON_TYPES.button} title={'Sell Your Self Storage'} className='btn mainBtn' />
                  </div>
                </Col>
              </Row>
              <Image src={buy_sell_self_storage_circle} className='img-fluid circle_bottom_left_img' alt='Circle Image' />
            </div>
          </section>
          {/* <!-- SELL SELF STORAGE SECTION END --> */}


          {/* <!-- BUY SELF STORAGE SECTION START --> */}
          <section className='buy_self_storage_section'>
            <div className='content_holder'>
              <Row className='flex-md-row flex-column-reverse justify-content-center'>
                <Col md={6}>
                  <Image src={buy_self_storage_person} className='img-fluid person_img' alt='Person Image' />
                </Col>

                <Col md={6} className='d-flex flex-column justify-content-center'>
                  <div className='text_box'>
                    <h1 className='title_text'>Do you want to buy a Self Storage?</h1>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet proin scelerisque nunc.</p>
                  </div>
                  <div className='btn_box'>
                    <Button buttonType={BUTTON_TYPES.button} title={'Buy a Self Storage'} className='btn mainBtn' />
                  </div>
                </Col>
              </Row>
            </div>
          </section>
          {/* <!-- BUY SELF STORAGE SECTION END --> */}


          {/* <!-- LEARNING SECTION START --> */}
          <section className='learning_section'>
            <div className='content_holder'>
              <div className='section_heading_container dark_bg'>
                <h1 className='section_heading'>Learn Everything About Buying, Selling, and Operating a Self Storage</h1>
                <p className='section_text'>Learn about literally anything to know about Selling or Buying a Self Storage</p>
              </div>
              <Row>
                <Col lg={3} md={6} sm={6}>
                  <Card className='learning_card'>
                    <Card.Img variant='top' src={learning_card_img_one} className='card_img' />
                    <Card.Body>
                      <Card.Title>Everything you need to know about how to buy a Self Storage</Card.Title>
                      <div className='details_box'>
                        <span className='details_text'>
                          <svg width='' height='' viewBox='0 0 18 18'>
                            <path id='clock' d='M8.991,0A9,9,0,1,0,18,9,9,9,0,0,0,8.991,0ZM9,16.2A7.2,7.2,0,1,1,16.2,9,7.2,7.2,0,0,1,9,16.2ZM9.45,4.5H8.1V9.9l4.725,2.835.675-1.107-4.05-2.4Z' />
                          </svg>
                          <span className='text'>5 hrs ago</span>
                        </span>
                        <span className='details_text'>
                          <svg width='' height='' viewBox='0 0 18 18'>
                            <path id='Path_370' data-name='Path 370' d='M9.128,18a1.839,1.839,0,0,0,1.29-.53l6.408-6.418a1,1,0,0,0,.29-.61L18,1.094A1,1,0,0,0,16.906,0L7.559.884a1,1,0,0,0-.61.29L.531,7.582a1.819,1.819,0,0,0,0,2.569l7.318,7.318A1.82,1.82,0,0,0,9.128,18Zm6-8.108-6,6L2.081,8.842l6-6,7.808-.73Z' />
                            <path id='Path_371' data-name='Path 371' d='M11.5,8A1.5,1.5,0,1,1,13,6.5,1.5,1.5,0,0,1,11.5,8Z' />
                          </svg>
                          <span className='text'>Buy</span>
                        </span>
                        <span className='details_text'>
                          <Image src={user_img} className='img-fluid user_img' alt='User Image' />
                          <span className='text'>Raza</span>
                        </span>
                      </div>
                      <div className='d-grid px-md-4'>
                        <Button buttonType={BUTTON_TYPES.button} title={'Read More'} className='btn mainBtn btn-sm' />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={3} md={6} sm={6}>
                  <Card className='learning_card'>
                    <Card.Img variant='top' src={learning_card_img_two} className='card_img' />
                    <Card.Body>
                      <Card.Title>Everything you need to know about how to buy a Self Storage</Card.Title>
                      <div className='details_box'>
                        <span className='details_text'>
                          <svg width='' height='' viewBox='0 0 18 18'>
                            <path id='clock' d='M8.991,0A9,9,0,1,0,18,9,9,9,0,0,0,8.991,0ZM9,16.2A7.2,7.2,0,1,1,16.2,9,7.2,7.2,0,0,1,9,16.2ZM9.45,4.5H8.1V9.9l4.725,2.835.675-1.107-4.05-2.4Z' />
                          </svg>
                          <span className='text'>5 hrs ago</span>
                        </span>
                        <span className='details_text'>
                          <svg width='' height='' viewBox='0 0 18 18'>
                            <path id='Path_370' data-name='Path 370' d='M9.128,18a1.839,1.839,0,0,0,1.29-.53l6.408-6.418a1,1,0,0,0,.29-.61L18,1.094A1,1,0,0,0,16.906,0L7.559.884a1,1,0,0,0-.61.29L.531,7.582a1.819,1.819,0,0,0,0,2.569l7.318,7.318A1.82,1.82,0,0,0,9.128,18Zm6-8.108-6,6L2.081,8.842l6-6,7.808-.73Z' />
                            <path id='Path_371' data-name='Path 371' d='M11.5,8A1.5,1.5,0,1,1,13,6.5,1.5,1.5,0,0,1,11.5,8Z' />
                          </svg>
                          <span className='text'>Buy</span>
                        </span>
                        <span className='details_text'>
                          <Image src={user_img} className='img-fluid user_img' alt='User Image' />
                          <span className='text'>Raza</span>
                        </span>
                      </div>
                      <div className='d-grid px-md-4'>
                        <Button buttonType={BUTTON_TYPES.button} title={'Read More'} className='btn mainBtn btn-sm' />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={3} md={6} sm={6}>
                  <Card className='learning_card'>
                    <Card.Img variant='top' src={learning_card_img_three} className='card_img' />
                    <Card.Body>
                      <Card.Title>Everything you need to know about how to buy a Self Storage</Card.Title>
                      <div className='details_box'>
                        <span className='details_text'>
                          <svg width='' height='' viewBox='0 0 18 18'>
                            <path id='clock' d='M8.991,0A9,9,0,1,0,18,9,9,9,0,0,0,8.991,0ZM9,16.2A7.2,7.2,0,1,1,16.2,9,7.2,7.2,0,0,1,9,16.2ZM9.45,4.5H8.1V9.9l4.725,2.835.675-1.107-4.05-2.4Z' />
                          </svg>
                          <span className='text'>5 hrs ago</span>
                        </span>
                        <span className='details_text'>
                          <svg width='' height='' viewBox='0 0 18 18'>
                            <path id='Path_370' data-name='Path 370' d='M9.128,18a1.839,1.839,0,0,0,1.29-.53l6.408-6.418a1,1,0,0,0,.29-.61L18,1.094A1,1,0,0,0,16.906,0L7.559.884a1,1,0,0,0-.61.29L.531,7.582a1.819,1.819,0,0,0,0,2.569l7.318,7.318A1.82,1.82,0,0,0,9.128,18Zm6-8.108-6,6L2.081,8.842l6-6,7.808-.73Z' />
                            <path id='Path_371' data-name='Path 371' d='M11.5,8A1.5,1.5,0,1,1,13,6.5,1.5,1.5,0,0,1,11.5,8Z' />
                          </svg>
                          <span className='text'>Buy</span>
                        </span>
                        <span className='details_text'>
                          <Image src={user_img} className='img-fluid user_img' alt='User Image' />
                          <span className='text'>Raza</span>
                        </span>
                      </div>
                      <div className='d-grid px-md-4'>
                        <Button buttonType={BUTTON_TYPES.button} title={'Read More'} className='btn mainBtn btn-sm' />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={3} md={6} sm={6}>
                  <Card className='learning_card'>
                    <Card.Img variant='top' src={learning_card_img_four} className='card_img' />
                    <Card.Body>
                      <Card.Title>Everything you need to know about how to buy a Self Storage</Card.Title>
                      <div className='details_box'>
                        <span className='details_text'>
                          <svg width='' height='' viewBox='0 0 18 18'>
                            <path id='clock' d='M8.991,0A9,9,0,1,0,18,9,9,9,0,0,0,8.991,0ZM9,16.2A7.2,7.2,0,1,1,16.2,9,7.2,7.2,0,0,1,9,16.2ZM9.45,4.5H8.1V9.9l4.725,2.835.675-1.107-4.05-2.4Z' />
                          </svg>
                          <span className='text'>5 hrs ago</span>
                        </span>
                        <span className='details_text'>
                          <svg width='' height='' viewBox='0 0 18 18'>
                            <path id='Path_370' data-name='Path 370' d='M9.128,18a1.839,1.839,0,0,0,1.29-.53l6.408-6.418a1,1,0,0,0,.29-.61L18,1.094A1,1,0,0,0,16.906,0L7.559.884a1,1,0,0,0-.61.29L.531,7.582a1.819,1.819,0,0,0,0,2.569l7.318,7.318A1.82,1.82,0,0,0,9.128,18Zm6-8.108-6,6L2.081,8.842l6-6,7.808-.73Z' />
                            <path id='Path_371' data-name='Path 371' d='M11.5,8A1.5,1.5,0,1,1,13,6.5,1.5,1.5,0,0,1,11.5,8Z' />
                          </svg>
                          <span className='text'>Buy</span>
                        </span>
                        <span className='details_text'>
                          <Image src={user_img} className='img-fluid user_img' alt='User Image' />
                          <span className='text'>Raza</span>
                        </span>
                      </div>
                      <div className='d-grid px-md-4'>
                        <Button buttonType={BUTTON_TYPES.button} title={'Read More'} className='btn mainBtn btn-sm' />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <div className='btn_box'>
                <Button buttonType={BUTTON_TYPES.button} title={'Explore the Learning Section'} className='btn primaryBtn btn-lg' />
              </div>
              <Image src={learning_circle_half_left} className='img-fluid circle_left_img' alt='Circle Image' />
              <Image src={learning_circle_half_right} className='img-fluid circle_right_img' alt='Circle Image' />
            </div>   
          </section>
          {/* <!-- LEARNING SECTION END --> */}


          {/* <!-- REACH OUT SECTION START --> */}
          <section className='reach_out_section'>
            <div className='content_holder'>
              <Row className='justify-content-center'>
                <Col lg={10} className=''>
                  <div className='reach_out_container'>
                    <Row className='row_fluid'>
                      <Col xl={9} md={7}>
                        <div className='text_box'>
                          <h1 className='title_text'>Any Queries? Reach Out to Us</h1>
                          <p className='text'>Feel free to write to us, we are happy to help you</p>
                        </div>
                      </Col>

                      <Col xl={3} md={5}>
                        <div className='btn_box d-flex justify-content-md-end justify-content-center align-items-center h-100 mt-md-0 mt-4'>
                          <div>
                            <div className='position-relative'>
                              <Button buttonType={BUTTON_TYPES.button} title={'Write to Us'} className='btn mainBtn align-self-center icon_right_btn' />
                              <svg width='' height='' viewBox='0 0 16 18.62' className='svg_send'>
                                <path id='Shape' d='M0,19.31,16,10,0,.69V7.931L11.462,10,0,12.069Z' transform='translate(0 -0.69)' />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Image src={reach_out_circle} className='img-fluid circle_img' alt='Circle Image' />
                    <Image src={reach_out_mail} className='img-fluid mail_img' alt='Mail Image' />
                  </div>
                </Col>
              </Row>
            </div>   
          </section>
        </Container>
  );
};

export default Home;
