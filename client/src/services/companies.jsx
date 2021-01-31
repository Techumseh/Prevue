import api from './api-assist';
import { Link } from 'react-router-dom';

const getCompanies = async () => {
  const resp = await api.get('/companies');
  return resp.data
    <div>
    <h3>Companies</h3>
  {
    companies.map(company => (
    <p>(companies.name</p>
    ))
  }
  <button>Create</button>;
  
}