import api from './api-assist';

const getAllComments = async () => {
  const resp = await api.get('/comments');
  return resp.data
}