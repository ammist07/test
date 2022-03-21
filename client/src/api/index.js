import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:3000/api',
})

export const insertUser = (payload) => api.post('/user', payload)
export const getAllUser = () => api.get('/user')
export const getUserByID = (id) => api.get(`/movie/${id}`)
export const chechUser = (payload) => api.post('/login', payload)
export const addGame = (payload) => api.post('/game', payload)

const apis = {
	insertUser,
	getAllUser,
	getUserByID,
	chechUser,
	addGame,
}

export default apis
