import React from 'react'
import './FormPick.css'
import Pick from './Pick'
import pickData from '../pickData'

function FormPick({data,updateFields}) {
  return (
    <div className='div-form-pick'>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      {
        pickData.map(p=>{
          return(
            <Pick
              key={p.id}
              id={p.id}
              title={p.name}
              details={p.details}
              priceMonthly={p.monthlyPrice}
              priceYearly={p.yearlyPrice}
              isMonthly={data.monthly}
            />
          )
        })
      }
    </div>
  )
}

export default FormPick