import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-d3081-default-rtdb.firebaseio.com/'
});

export default instance;