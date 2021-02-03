import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { readOneComment, updateComment } from '../services/comments'
export default function EditComments(props) {
  const [formData, setFormData] = useState({
    name: ''
  })
  const { comment_text} = formData;
  // const { comments, handleUpdate } = props;
  const { id } = useParams();
  const history = useHistory()
  useEffect(() => {
    const prefillFormData = async() => {
      const commentItem = await readOneComment(id)
      console.log(commentItem)
      setFormData({
        comment_text: commentItem.comment_text
      })
    }
    if ( id ) {
      prefillFormData()
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  const handleUpdate = async (id, formData) => {
    const resp = await updateComment(id, formData)
    console.log(resp)
    history.push(`/companies/${resp.company_id}`)
  }
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
    }}>
      <h3>Edit Comments</h3>
      
        <input
          type='text'
          name='comment_text'
          value={comment_text}
          onChange={handleChange}
        />
    
      <button>Submit</button>
    </form>
  )
}