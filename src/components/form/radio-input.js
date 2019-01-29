import React from 'react'

export const RadioInput = ({ field, form: { touched, errors }, label }) => {
  return (
    <div className="radio-input">
      <label htmlFor={field.name}>
        <span className="label-radio">{label}</span>
        <br />
        <input type="radio" {...field} />
      </label>
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  )
}
