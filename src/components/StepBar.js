import React from 'react'
import './StepBar.css'

function StepBar({step}) {
  const steps=[
    {
      id:1,
      step:"STEP 1",
      info:"YOUR INFO"
    },
    {
      id:2,
      step:"STEP 2",
      info:"SELECT PLAN"
    },
    {
      id:3,
      step:"STEP 3",
      info:"ADD-ONS"
    },
    {
      id:4,
      step:"STEP 4",
      info:"SUMMARY"
    }
  ]
  return (
    <div className='setepBar'>
        {steps.map((s)=>(
          <div key={s.id} className='oneStep'>
            <div className={`step ${step === s.id ? 'active' : ''}`}>
                <div className="num">{s.id}</div>
            </div>
            <div className="info-step">
              <p>{s.step}</p>
              <span>{s.info}</span>
            </div>
          </div>
        ))}
    </div>
  )
}

export default StepBar