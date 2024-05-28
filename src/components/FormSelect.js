import React from 'react'
import './FormSelect.css'
import Plan from './Plan'
import plansData from '../plansData.js'

function FormSelect({data,updateFields}) {
  const handlePlanSelect = (selectedPlanId) => {
    updateFields({ plan: selectedPlanId });
    console.log("selcted"+ data.plan)
  };
  const toggle = () => {
    updateFields({ monthly: !data.monthly });
  };
  return (
    <div className='div-form-select'>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      {plansData.map(plan => (
          <Plan
            key={plan.id}
            id={plan.id}
            name={plan.name}
            monthlyPrice={plan.monthlyPrice}
            yearlyPrice={plan.yearlyPrice}
            isMonthly={data.monthly}
            icon={plan.icon}
            isSelected={data.plan === plan.id}
            onSelect={handlePlanSelect}
          />
        ))}
      <div className={`type-plan ${data.monthly ? 'm':'y'}`} onClick={toggle}>
        <span className="monthly">Monthly</span>
        <span className="clickPlan">
          <span className="circle"></span>
        </span>
        <span className='yearly'>Yearly</span>
      </div>
    
    </div>
  )
}

export default FormSelect