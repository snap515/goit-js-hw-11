import QueryService from './query-service';

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

  queryService.fetchImages();
}

function onLoadMore() {
  queryService.fetchImages();
}
