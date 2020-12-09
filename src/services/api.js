import axios from 'axios';

const API_KEY = "ntzIk5iasX7PLW5ybOi-2aaWyRTA6PTwWi4Da9VWUJ-3CL9w8r5aV1hdg94JGxd7OjuckoCLKtUyzuotRbAMnJDptMqCQMq_xqFRLa1nM38FUP-fLNKEO2bC9OPLX3Yx";

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

