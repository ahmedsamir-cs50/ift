import React from 'react'
import social from '../../Components/social/pexels-farida-najafguliyeva-18333874.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import './social.css'
import CountUp from 'react-countup';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
export const Social = () => {
  useEffect(() => {
    AOS.init({
      
      duration: 800,
      easing: 'ease',
      
    });
  }, [])
  return (
   <>
<Container>
 <Row className='social d-flex flex-row'>
    <Col md={6} sm={12}>
    <img   data-aos="fade-right" src={social} alt=''></img></Col>
    <Col>
    <div data-aos="fade-left" className='social-text'>
        <h1>Social Responsibility </h1>
        <h1>A Commitment Towards the Nation and the Industry.</h1>
        <h1>The First International "Multicentric Study"  on the Respiratory Causes of Mortality in Broiler Flocks

</h1>
        </div></Col>
 </Row>
 </Container>
   </>
  )
}

