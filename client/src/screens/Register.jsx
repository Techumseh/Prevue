import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Register() {
  const [formData, setFormdata] = useState({
    username: '',
    password: '',
    email: ''
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
      <h3>Sign Up</h3>
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
        type='password'
        name='password'
        value={password}
        onChange={handleChange}
        />
      <input 
        type='email'
        name='email'
        value={email}
        onChange={handleChange}
        />
    </label>
  
    <button>Submit</button>
    </form>
  )
}