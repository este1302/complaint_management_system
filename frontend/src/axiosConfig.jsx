import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://3.27.208.20:5001',
  //baseURL: 'http://3.26.96.188:5001', // live
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
