import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { postComments , deleteComments } from '../services/comments';
import { getOneCompany } from '../services/companies';

export default function CompanyDetail(props) {
  const [companyItem, setCompanyItem] = useState(null);
  const [companyId, setCompanyId] = useState('')
  const [formdata, setFormData] = useState('')
  const { id } = useParams();
  const { currentUser } = props;
  
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
    setFormData("")
// const companyItem = await addCompany({ company_id: companyId, commpany_id: id });
    // setCompanyItem(companyItem);
  }

  const handleDelete = async (id) => {
    const newComment = await deleteComments(id)
    // let comments = companyItem.comments
    // comments.pus(newComment)
    setCompanyItem(prevsState => ({
      ...prevsState,
      comments: prevsState.comments.filter(X => X.id != id)
    }))
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
        companyItem?.comments.map(comment => {
          return <div>{
            comment.comment_text
          }{
              comment.user_id.toString() === currentUser?.id.toString() ?
               <> <button onClick={
                  ()=>handleDelete(comment.id)
                }>delete</button> 
                <Link to= {`/comments/${comment.id}`}><button> edit </button></Link></>: "  "
          }
          </div>
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