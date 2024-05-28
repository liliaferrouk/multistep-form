import React from 'react'

function Plan({ id, name, monthlyPrice, yearlyPrice, icon, isSelected, onSelect,isMonthly }) {
  return (
    <div className={`plan ${isSelected ? 'selected' : ''}`} onClick={() => onSelect(id)}>
        <img src={icon} alt="icon plan" />
        <div>
            <h2>{name}</h2>
            {
                isMonthly
                ?
                <p className='price'>${monthlyPrice}/mo</p>
                :
                <>
                    <p className='price'>${yearlyPrice}/yr</p>
                    <p className='free2'>2 months free</p>
                </>
            }
        </div>
    </div>
  )
}

export default Plan