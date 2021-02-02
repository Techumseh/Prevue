import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addCompany} from '../services/companies';
import { getOneCompany } from '../services/companies';

export default function CompanyDetail(props) {
  const [companyItem, setCompanyItem] = useState(null);
  const [companyId, setCompanyId] = useState('')
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
    const companyItem = await addCompany({ company_id: companyId, commpany_id: id });
    setCompanyItem(companyItem);
  }

  
  const handleChange = (e) => {
    const { value } = e.target;
    setCompanyId(value);
  }

  return (
    <div>
      <h3>{companyItem?.name}</h3>
      {companyItem?.companies.map(company => (
        <p key={company.id}>{company.name}</p>
      ))}
      
      <form onSubmit={handleSubmit}>
        <select defaultValue='default' onChange={handleChange}>
          <option disabled value='default'>-- Select a company --</option>
          {props.company.map(company => (
            <option value={company.id} key={company.id}>{company.name}</option>
          ))}
        </select>
        <button>add</button>
      </form>
    </div>
  )
}