import React from 'react';
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <form>
      <h3>Login</h3>
      <label>Username:
        <input />
      </label>
      <br/>
    <label>Password:
     <input />
    </label>
    <Link>Register</Link>
    <button>Submit</button>
    </form>
  )
}

export default Login;