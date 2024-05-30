import React from 'react'
import img_check from '../images/icon-checkmark.svg'

function Pick({id,title,details,priceMonthly,priceYearly,isMonthly,isSelected,hundleClick}) {
  return (
    <div className={`pick-div ${isSelected?'selected':''}`} onClick={hundleClick}>
        <div className='checkBox'>
            <img src={img_check} alt="checkmark" />
        </div>
        <div className='info'>
            <h2>{title}</h2>
            <p>{details}</p>
        </div>
        <div className='price'>
            {
                isMonthly
                ?
                `+$${priceMonthly}/mo`
                :
                `+$${priceYearly}/yr`
            }
        </div>
    </div>
  )
}

export default Pick