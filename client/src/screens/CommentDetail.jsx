import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addCompany} from '../services/companies';
import { getOneComment } from '../services/companies';

export default function CompanyDetail(props) {
  const [companyItem, setCompanyItem] = useState(null);
  const [commentId, setCommentId] = useState('')
  const { id } = useParams();

  useEffect(() => {
    const fetchCompanyItem = async () => {
      const companyData = await getOneCompany(id);
      setCOmpanyItem(companydata);
    }
    fetchCompanyItem();
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const companyItem = await addCompany({ company_id: comapnyId, comment_id: id });
    setCompanyItem(companyItem);
  }

  
  const handleChange = (e) => {
    const { value } = e.target;
    setCommentId(value);
  }

  return (
    <div>
      <h3>{comapnyItem?.name}</h3>
      {companyItem?.comments.map(flavor => (
        <p key={comment.id}>{comment.name}</p>
      ))}
      
      <form onSubmit={handleSubmit}>
        <select defaultValue='default' onChange={handleChange}>
          <option disabled value='default'>-- Select a comment --</option>
          {props.comment.map(flavor => (
            <option value={comment.id} key={comment.id}>{comment.name}</option>
          ))}
        </select>
        <button>add</button>
      </form>
    </div>
  )
}