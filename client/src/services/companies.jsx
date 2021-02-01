import api from './api-assist';

export const getAllCompanies = async () => {
  const resp = await api.get('/companies');
  return resp.data;
}

export const addCompany = async (data) => {
  const resp = await api.put('/companies', data);
  return resp.data;
}

export const newCompany = async (data) => {
  const resp = await api.post('/companies', data);
  return resp.data;
}

  <button>Create</button>;
  
