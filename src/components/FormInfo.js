import React from 'react'
import './FormInfo.css'

function FormInfo({data,updateFields,errors, handleBlur}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFields({
      [name]: value
    });
    console.log("name:"+data.name+" email:"+data.email+" num: "+data.phoneNumber)
  };

  return (
    <div className='div-form-info'>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          required
          type="text"
          placeholder="e.g. Stephen King"
          id="name"
          name="name"
          value={data.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${errors.name ? 'input-error' : ''}`}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          required
          placeholder="e.g. stephenking@lorem.com"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${errors.email ? 'input-error' : ''}`}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          required
          placeholder="e.g. +1 234 567 890"
          id="phone"
          name="phoneNumber"
          value={data.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${errors.phoneNumber ? 'input-error' : ''}`}
        />
        {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
      </div>
    </div>
  )
}

export default FormInfo