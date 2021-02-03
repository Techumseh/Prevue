import api from './api-assist';

export const createComments = async (data) => {
  const resp = await api.post('/comments', { comment: data })
  return resp.data
}

export const getAllComments = async () => {
  const resp = await api.get('/comments')
  return resp.data
}

export const readOneComment = async (id) => {
  const resp = await api.get(`/comments/${id}`);
  return resp.data
}

export const updateComment = async (id, data) => {
  const resp = await api.put(`/comments/${id}`, { comment: data })
  return resp.data
}

export const postComments = async (id, data) => {
  const resp = await api.post(`companies/${id}/comments/`, { comment: {comment_text: data } })
  return resp.data
}

export const deleteComments = async (id) => {
  const resp = await api.delete(`/comments/${id}`)
  return resp.data
}

export const putComments = async (id, data) => {
  const resp = await api.put(`/comments/${id}`, { comment: data })
  return resp.data
}