import api from './api-config';

export const CreateComments = async (data) => {
  const resp = await api.post('/comments', { teacher: data })
  return resp.data
}

export const readAllComments = async () => {
  const resp = await api.get('/comments')
  return resp.data
}

export const readOneComments = async (id) => {
  const resp = await api.get(`/comments/${id}`);
  return resp.data
}

export const updateComments = async (id, data) => {
  const resp = await api.put(`/comments/${id}`, { comment : data })
  return resp.data
}

export const destroyComments = async (id) => {
  const resp = await api.delete(`/comments/${id}`)
  return resp.data
}