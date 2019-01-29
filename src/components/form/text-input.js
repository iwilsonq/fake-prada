import React from 'react'

export const TextInput = ({ field, form: { touched, errors }, label }) => {
  return (
    <div className="text-input">
      <label htmlFor={field.name}>
        <span className="label-text">{label}</span>
        <br />
        <input type="text" {...field} />
      </label>
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>
  )
}
