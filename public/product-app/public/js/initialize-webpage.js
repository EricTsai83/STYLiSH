// Get the current URL
sessionStorage.clear();
const urlParams = new URLSearchParams(window.location.search);
const silder = document.querySelector('.silder');
getSilderImg();
// stopTimeOutWhenMouseOver();

if (urlParams.get('category')) {
  productAPI(urlParams.get('category'), 0, 'refresh');
  changeColorByBtnClick(urlParams.get('category'));
} else if (urlParams.get('q')) {
  searchAPI(urlParams.get('q'), 0, 'refresh');
} else {
  productAPI('all', 0, 'refresh');
}
