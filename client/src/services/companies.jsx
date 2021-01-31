import api from './api-assist';
import { Link } from 'react-router-dom';

export const getAllCompanies = async () => {
  const resp = await api.get('/companies');
  return resp.data;
}

export const addCompany = async (data) => {
  const resp = await api.put('/companies', data);
  return resp.data;
}
  <button>Create</button>;
  
