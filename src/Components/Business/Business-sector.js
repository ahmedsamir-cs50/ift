
import {  div } from 'react-bootstrap'
import bio from './pexels-artem-podrez-5726693.jpg'
import pro from './pexels-cottonbro-studio-3952236.jpg'
import pharma from './pexels-pixabay-139398.jpg'
import feed from './27662.jpg'
import './Business.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Businesssector = () => {
  useEffect(() => {
    AOS.init({
      
      duration: 800,
      easing: 'ease',
      
    });
  }, [])
  
  return (
    <>
     <hr ></hr>
    <h3 className='text-center business-h1'>Business Sectors</h3>
    <div className='overlay'>
    <div className='business mx-3  '>
     
      <div className='business-image' >
       <img   data-aos="fade-up" src={bio} alt=''></img>
      </div>
      <div  className='d-flex align-items-center justify-content-center business-text'>
        <h3 data-aos="fade-up" className='text-center '>Biosecurity</h3>
      </div>
      <div  className='d-flex align-items-center justify-content-center business-text'>
        <h3 data-aos="fade-up">Biological Products</h3>
      </div>
      <div  className='business-image' >
      <img  data-aos="fade-up"src={pro} alt=''></img>
      </div>
      <div  className='business-image' >
      <img  data-aos="fade-up"src={pharma} alt=''></img>
      </div>
      <div  className='d-flex align-items-center justify-content-center business-text'>
        <h3 data-aos="fade-up">Pharmaceuticals</h3>
      </div>
      <div  className='d-flex align-items-center justify-content-center business-text'>
        <h3 data-aos="fade-up">Feed Additives</h3>
      </div>
      <div  className='business-image' >
      <img data-aos="fade-up"  src={feed} alt=''></img>
      </div>
     
    </div>
    </div>
    </>
  )
}

export default Businesssector