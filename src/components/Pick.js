import React, { useState } from 'react'

function Pick({id,title,details,priceMonthly,priceYearly,isMonthly}) {
    const [isSelected,setIsSelected] = useState(false)
  return (
    <div className='pick-div'>
        <div className='checkBox'>

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