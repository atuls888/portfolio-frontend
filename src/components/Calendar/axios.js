import axios from 'axios';


const app = axios.create({
    baseURL: 'https://script.google.com/macros/s/AKfycbx39nesvYlKwnzxaP76G9owoGnD8x1maji3EP5hkoSBq0g2mhRf0bxNTP0rrnnW6b4sKQ/exec',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    withCredentials: true
})

export default app;
