import api from './api-assist';

const getAllIndustries = async () => {
  const resp = await api.get('/industries');
  return resp.data
}