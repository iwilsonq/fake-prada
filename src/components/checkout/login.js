import React, { useState } from 'react'
import { Link } from 'gatsby'
import { TextInput } from '../form/text-input'

export const Login = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="checkout-right">
      <h2 className="title center">Login</h2>
      <form onSubmit={e => e.preventDefault()}>
        <TextInput
          name="email"
          label="Email Address"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />

        <TextInput
          name="password"
          label="Password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />

        <p className="center">
          <Link className="has-text-black" to="/reset-password">Forgot your password?</Link>
        </p>

        <div className="checkout-button-wrapper">
          <button className="default-button small mb-36">Login</button>
        </div>
      </form>
    </div>
  )
}
