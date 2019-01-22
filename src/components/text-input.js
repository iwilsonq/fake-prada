import React from 'react'

export const TextInput = props => {
  return (
    <div className="text-input">
    <label htmlFor={props.name}>
      <span className="label-text">{props.label}</span><br/>
      <input
        id={props.name}
        type="text"
        onChange={props.onChange}
        value={props.value}
      />
    </label>
    </div>
  )
}
