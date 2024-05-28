import React from 'react'

function Plan({ id, name, monthlyPrice, yearlyPrice, icon, isSelected, onSelect }) {
  return (
    <div className={`plan ${isSelected ? 'selected' : ''}`} onClick={() => onSelect(id)}>
        <img src={icon} alt="icon plan" />
        <div>
            <h2>{name}</h2>
            <p className='price'>${monthlyPrice}/mo</p>
        </div>
    </div>
  )
}

export default Plan