import axios from 'axios'

const service = axios.create({
	baseURL: 'http://www.liulongbin.top:3005',
	timeout: 10000,
	headers: { 'Content-Type': 'application/json; charset=UTF-8' }
})

export default service