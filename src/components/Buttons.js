import React from 'react'
import './Buttons.css'

function Buttons({step,setStep,setSubmited}) {
  function goBack(){
    (step>1) ? setStep(prev=>prev-1) : setStep(1)
  }
  function next(){
    (step<4) ? setStep(prev=>prev+1) : setStep(4)
  }
  function confirm(){
    setSubmited(true)
  }
  return (
    <div className='buttons'>
      <div className={`btn-back ${step <= 1 ? 'hidden' : ''}`} onClick={goBack} >
        Go Back
      </div>
      {
        (step>3)
        ?
        <div className='btn-confirm' onClick={confirm}>
          Confirm
        </div>
        :
        <div className='btn-next' onClick={next} >
          Next Step
        </div>
      }
    </div>
  )
}

export default Buttons