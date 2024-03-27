import React from 'react'
import "./Banner.css"
import heroImg from "../../assets/header_img.png"

const Banner = () => {
  return (
    <div className='banner-sec'>
      <img src={heroImg} width={'100%'}  alt="" />
      <div className="header-contents">
          <h2>Order your favourite food here</h2>
          <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delecious meal at a time.</p>
          <button>View Menu</button>
      </div>
    </div>
  )
}

export default Banner;