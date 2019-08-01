import React from 'react'
import {Carousel} from 'react-bootstrap';
import dog1 from '../assets/images/girl1.jpg'
import dog2 from '../assets/images/puppy2.jpg'
import dog3 from '../assets/images/adorable.jpg'

const main=()=>{
       return(
           <>
           
                <Carousel >
                          <Carousel.Item style={{height:'550px'}}>
                              <img
                                  className="d-block w-100"
                                  src={dog1}
                                  style={{marginTop:"-30px"}}
                                  alt="First slide"
                                  />
                              <Carousel.Caption>
                                  <h3>First slide label</h3>
                                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                              </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item style={{height:'550px'}}>
                              <img
                                  className="d-block w-100"
                                  src={dog2}
                                  alt="Third slide"
                              />
                              <Carousel.Caption>
                                  <h3>Second slide label</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item style={{height:'550px'}}>
                              <img
                                  className="d-block w-100"
                                  src={dog3}
                                  style={{marginTop:"-230px"}}
                                  alt="Third slide"
                              />
                              <Carousel.Caption>
                                  <h3>Third slide label</h3>
                                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                              </Carousel.Caption>
                          </Carousel.Item>
                      </Carousel> 
           </>
       );
}

export default main;