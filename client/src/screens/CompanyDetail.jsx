import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postComments } from '../services/comments';
import { getOneCompany } from '../services/companies';

export default function CompanyDetail(props) {
  const [companyItem, setCompanyItem] = useState(null);
  const [companyId, setCompanyId] = useState('')
  const [formdata, setFormData] = useState('')
  const { id } = useParams();

  useEffect(() => {
    const fetchCompanyItem = async () => {
      const companyData = await getOneCompany(id);
      setCompanyItem(companyData);
    }
    fetchCompanyItem();
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = await postComments(id, formdata)
    let comments = companyItem.comments
    comments.push(newComment)
    setCompanyItem(prevsState => ({
      ...prevsState, 
      comments
    }))
    // const companyItem = await addCompany({ company_id: companyId, commpany_id: id });
    // setCompanyItem(companyItem);
  }

  
  const handleChange = (e) => {
    const { value } = e.target;
    setFormData(value);
  }

  return (
    <div>
      <h3>{companyItem?.name}</h3>
      {/* {companyItem?.companies.map(company => (
        <p key={company.id}>{company.name}</p>
      ))} */}
      {
        companyItem?.comments.map(comments => {
          return <div>{
            comments.comment_text
          }</div>
        })
      }
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={
            handleChange
        }
          value={
            formdata
          }
        />
          
       
        <button>add</button>
      </form>
    </div>
  )
}