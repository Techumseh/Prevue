import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Login() {
  const [formData, setFormdata] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleLogin(formData);
    }}>
      <h3>Login</h3>
      <label>Username:
        <input 
        type='text'
        name='username'
        value={username}
          onChange={handleChange}
          />
      </label>
      <br/>
    <label>Password:
     <input 
     type='passwod'
        name='password'
        value={password}
          onChange={handleChange}
          />
    </label>
    <Link>Register</Link>
    <button>Submit</button>
    </form>
  )
}

