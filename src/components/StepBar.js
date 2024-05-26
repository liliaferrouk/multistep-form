import React from 'react'
import './StepBar.css'

function StepBar() {
    const step = 1; //props
  return (
    <div className='setepBar'>
        {[1,2,3,4].map((n)=>(
            <div className={`step ${step === n ? 'active' : ''}`}>
                <div className="num">{n}</div>
            </div>
        ))}
    </div>
  )
}

export default StepBar