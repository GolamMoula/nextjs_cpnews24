import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://capitalnews24.net/api', // Replace with your API's base URL
  // You can add more default configurations here if needed
});

export default axiosInstance;