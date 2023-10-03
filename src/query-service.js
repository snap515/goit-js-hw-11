import axios from 'axios';

const API_KEY = '39808878-d17211b11e4a3c923ce198349';
const BASE_URL = `https://pixabay.com/api/`;

export default class QueryService {
  constructor() {
    this.searchQuery = '';
    this.currentPage = 1;
  }

  fetchImages() {
    const params = {
      key: API_KEY,
      per_page: 40,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    };

    axios
      .get(`${BASE_URL}?page=${this.currentPage}&q=${this.searchQuery}`, {
        params,
      })
      .then(response => {
        console.log(response.data);
        this.currentPage += 1;
      })
      .catch(error => console.log(error));
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get query() {
    return this.searchQuery;
  }

  get page() {
    return this.currentPage;
  }

  set page(newPage) {
    this.currentPage = newPage;
  }
}
