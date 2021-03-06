import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function EditCompany(props) {
  const [formData, setFormData] = useState({
    name: ''
  })
  const { name } = formData;
  const { companies, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const companyItem = companies.find((companyItem) => {
        return companyItem.id === Number(id)
      })
      setFormData({
        name: companyItem.name
      })
    }
    if ( companies.length) {
      prefillFormData()
    }
  }, [companies])

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
      <h3>Edit Company</h3>
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