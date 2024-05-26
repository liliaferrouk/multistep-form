import React from 'react'
import './Buttons.css'

function Buttons({step}) {
  return (
    <div className='buttons'>
      <div className={`btn-back ${step <= 1 ? 'hidden' : ''}`} >
        Go Back
      </div>
      {
        (step>3)
        ?
        <div className='btn-confirm'>
          Confirm
        </div>
        :
        <div className='btn-next'>
          Next Step
        </div>
      }
    </div>
  )
}

export default Buttons