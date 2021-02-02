import axios from 'axios'

const baseUrl = process.env.NODE_ENV === 'bf8d5f99335d7877fd8292222abe29be' ? 'https://prevue-api.herokuapp.com/' : 'http://localhost:3000' 

const api = axios.create({
  baseURL: baseUrl
})

export default api;
