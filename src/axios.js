import axios from 'axios'
import routers from './routers/routers'
import store from './store/index'

axios.default.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json'

const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use = instance.interceptors.request.use
instance.interceptors.request.use(config => {
	if(localStorage.getItem('token')) {
		config.headers.Authorization = `token ${localStorage.getItem('token')}`
			.replace(/(^\")|(\"$)/g, '')
	}
	return config
}, err => {
	return Promise.reject(err)
})
// axios拦截响应
axios.interceptors.request.use(
	config => {
		const token = localStorage.getItem('userToken');
		if (token) {
			config.headers.common['Authorization'] = token;
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);