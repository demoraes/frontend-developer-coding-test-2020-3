import axios from 'axios';

const API_KEY = "wJXxFFxcnVARFmM3IYYCtIhEVQxM2q_1sFXOoGmonQSs_855_k1K6ZFsf-SUZhZIiFrZoXLL_OLwyYE4Rl0ap6Ugoy1ENgOwlD0MBvYdVZIixS-AdookQerZiVxPYHYx";

// REST
const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-type": "application/json",
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'x-requested-with': 'xmlhttprequest',
  },
})


export default api;

