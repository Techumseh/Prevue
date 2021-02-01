import api from './api-assist';

export const createComments = async (data) => {
  const resp = await api.post('/comments', { teacher: data })
  return resp.data
}

export const getAllComments = async () => {
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

export const postComments = async (id, data) => {
  const resp = await api.post(`/comments/${id}`, { comment : data })
  return resp.data
}

export const destroyComments = async (id) => {
  const resp = await api.delete(`/comments/${id}`)
  return resp.data
}

export const putComments = async (id, data) => {
  const resp = await api.put(`/comments/${id}`, { comment : data })
  return resp.data
}