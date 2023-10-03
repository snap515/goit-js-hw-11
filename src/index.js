import axios from 'axios';

const API_KEY = '39808878-d17211b11e4a3c923ce198349';
const BASE_URL = `https://pixabay.com/api/`;

axios
  .get(`${BASE_URL}?key=${API_KEY}&q=yellow+flowers`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => console.log(error));
