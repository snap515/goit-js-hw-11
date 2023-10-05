export function makeMarkup(data) {
  return data.reduce((acc, element) => {
    return (
      acc +
      `<div class="photo-card">
  <img src="${element.webformatURL}" alt="${element.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes ${element.likes}</b>
    </p>
    <p class="info-item">
      <b>Views ${element.views}</b>
    </p>
    <p class="info-item">
      <b>Comments ${element.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads ${element.downloads}</b>
    </p>
  </div>
</div>`
    );
  }, '');
}
