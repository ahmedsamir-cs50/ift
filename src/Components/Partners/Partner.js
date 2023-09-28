import React from 'react'
import { PartnerData } from '../../Assests/ImagesData'
import './partner.css'
import { motion } from 'framer-motion'
export const Stratigic = () => {
  return (
    
   <>
   <hr></hr>
   <h3 className='text-center  partner-text'>Strategic Business Unites</h3>
    <motion.div className='slider-container'>
    <motion.div className='slider' drag='x' 
    dragConstraints={{right: 0, left:-2123}} >
    {PartnerData.Images.map((img,index) => (
        <motion.div className='item'>
            <img src={img.img} key={index} alt="" />
        </motion.div>
    ))}
    </motion.div>
    
</motion.div>
</>
  )
}

