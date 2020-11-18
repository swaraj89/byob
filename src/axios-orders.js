import axios from 'axios';

const orderInstance = axios.create({
    baseURL: 'https://heybuildurburger.firebaseio.com/'
});

export default orderInstance;