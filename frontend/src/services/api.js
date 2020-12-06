import axios from 'axios';

const API_KEY = "ntzIk5iasX7PLW5ybOi-2aaWyRTA6PTwWi4Da9VWUJ-3CL9w8r5aV1hdg94JGxd7OjuckoCLKtUyzuotRbAMnJDptMqCQMq_LxFRLa1bCQMq_LxFRLa1nCM38FUP2-f9PKE2";

const URL = 'https://localhost:8080/https://api.yelp.com/v3/';

const api = axios.create({
  baseURL: URL,
  timeout: 30000,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'x-requested-with': 'xmlhttprequest',
  },
});

export default api;

