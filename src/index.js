import QueryService from './query-service';
import { makeMarkup } from './helpers/markupMaker';

const queryService = new QueryService();
const refs = {
  queryForm: document.querySelector('.search-form'),
  loadMoreBtn: document.querySelector('.load-more'),
  gallery: document.querySelector('.gallery'),
};

refs.queryForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();
  queryService.searchQuery = e.currentTarget.elements.searchQuery.value;
  clearPage();
  queryService.resetPageCounter();
  queryService.fetchImages().then(appendMarkup);
}

function onLoadMore() {
  queryService.fetchImages().then(appendMarkup);
}

function appendMarkup(data) {
  refs.gallery.insertAdjacentHTML('beforeend', makeMarkup(data));
}

function clearPage() {
  refs.gallery.innerHTML = '';
}
