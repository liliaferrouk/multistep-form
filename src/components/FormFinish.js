import React from 'react'
import './FormFinish.css'
import plansData from '../plansData'
import pickData from '../pickData'

function FormFinish({data,setStep}) {
  function getPlan(id){
    return plansData.find(plan=>plan.id===id)
  }
  function getPicks(listId){
    return pickData.filter(pick=>listId.includes(pick.id))
  }

  const selectedPlan = getPlan(data.plan)
  const selectedPicks = getPicks(data.bonus)
  const totalPrice = data.monthly
  ? selectedPicks.reduce((acc, p) => acc + p.monthlyPrice, selectedPlan.monthlyPrice)
  : selectedPicks.reduce((acc, p) => acc + p.yearlyPrice, selectedPlan.yearlyPrice);

  return (
    <div className='div-form-finish'>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className='recap'>
        <div className='main-service'>
          <div>
            <h2>{selectedPlan.name} {data.monthly? "(Monthly)": "(Yearly)"}</h2>
            <p onClick={()=>setStep(2)}>Change</p>
          </div>
          <div className='prix'>{data.monthly? `$${selectedPlan.monthlyPrice}/mo`:`$${selectedPlan.yearlyPrice}/yr`}</div>
        </div>
        {
          selectedPicks.length >0
          &&
          <div className="additional-service">
            {selectedPicks.map(p=>{
              return(
                <div key={selectedPicks.id} className='add'>
                  <p>{p.name}</p>
                  <span>{data.monthly? `+$${p.monthlyPrice}/mo`:`+$${p.yearlyPrice}/yr`}</span>
                </div>
              )
            })}
          </div>
        }
      </div>
      <div className='total'>
        <p>Total (per {data.monthly?"month":"year"})</p>
        <span>+${totalPrice}/{data.monthly?"mo":"yr"}</span>
      </div>
    </div>
  )
}

export default FormFinish