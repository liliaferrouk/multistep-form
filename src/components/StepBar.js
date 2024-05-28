import React from 'react'
import './StepBar.css'

function StepBar({step}) {
  return (
    <div className='setepBar'>
        {[1,2,3,4].map((n)=>(
            <div key={n} className={`step ${step === n ? 'active' : ''}`}>
                <div className="num">{n}</div>
            </div>
        ))}
    </div>
  )
}

export default StepBar