import React, { useState } from 'react'

export default function CreateComments(props) {
  const [formData, setFormData] = useState({
    name: ''
  })
  const { name } = formData;
  const {handleCreate} = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData)
    }}>
      <h3>Add your comments</h3>
      <label>Comments:
        <input
          type='text'
          comments='comments'
          value={name}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}