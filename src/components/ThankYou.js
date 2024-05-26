import React from 'react'
import './ThankYou.css'
import img_done from '../images/icon-thank-you.svg'

function ThankYou() {
  return (
    <div className='thankYouDiv'>
        <img src={img_done} alt="" />
        <h1>Thank you!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun 
            using our platform. If you ever need support, please feel free 
            to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default ThankYou