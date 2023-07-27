window.addEventListener('popstate', () => {
  // listen browser's back and forward buttons
  let urlParams = new URLSearchParams(window.location.search);
  debounceTimer = null;
  window.scrollTo(0, 0);
  if (urlParams.get('category')) {
    productAPI(urlParams.get('category'), 0, 'refresh');
    changeColorByBtnClick(urlParams.get('category'));
  } else if (urlParams.get('q')) {
    searchAPI(urlParams.get('q'), 0, 'refresh');
    changeColorByBtnClick('search');
  } else {
    productAPI('all', 0, 'refresh');
    changeColorByBtnClick('all');
  }
});
