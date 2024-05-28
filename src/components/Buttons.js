import React, { useState, useEffect }  from 'react'
import './Buttons.css'

function Buttons({step,setStep,setSubmited,data }) {
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // validation email
    const validateEmail = (email) => {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(String(email).toLowerCase());
    };

    //validation num
    const validatePhoneNumber = (phoneNumber) => {
      const re = /^\+?[0-9\s\-()]{7,15}$/;
      return re.test(String(phoneNumber));
    };

    setIsFormValid(
      data.name !== '' &&
      validateEmail(data.email) &&
      validatePhoneNumber(data.phoneNumber)
    );
  }, [data]);

  function goBack(){
    (step>1) ? setStep(prev=>prev-1) : setStep(1)
  }
  function next(){
    if(isFormValid){
      (step<4) ? setStep(prev=>prev+1) : setStep(4)
    }
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
        <div className={`btn-next ${!isFormValid ? 'disabled' : ''}`} onClick={next} >
          Next Step
        </div>
      }
    </div>
  )
}

export default Buttons