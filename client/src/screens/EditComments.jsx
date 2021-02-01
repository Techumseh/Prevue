import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function EditComments(props) {
  const [formData, setFormData] = useState({
    name: ''
  })
  const { name } = formData;
  const { comments, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const commentItem = comments.find((commentItem) => {
        return commentItem.id === Number(id)
      })
      setFormData({
        name: commentItem.name
      })
    }
    if ( comments.length) {
      prefillFormData()
    }
  }, [comments])

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
      handleUpdate(id, formData);
    }}>
      <h3>Edit Comments</h3>
      <label>Name:
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}