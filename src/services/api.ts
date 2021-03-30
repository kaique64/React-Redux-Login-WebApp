import axios from 'axios'
import { config } from 'dotenv';

config();

const api = axios.create({
    baseURL: `http://localhost:5000/auth`,
});

export default api;
