window.addEventListener('scroll', handleScroll);

let debounceTimer = null;

function handleScroll() {
  const wholeDoc = document.documentElement;
  // 可視為捲軸總高度
  const scrollHeight = wholeDoc.scrollHeight;
  // 可視為元素在頂端和被畫面呈現到的最頂端之距離
  const scrollTop = wholeDoc.scrollTop;
  // 回傳元素內部高度（像素），包含 padding 但並未包含水平滾動條、border、margin。
  const clientHeight = wholeDoc.clientHeight;

  if (
    sessionStorage.getItem('next-page') &&
    scrollTop + clientHeight >= scrollHeight * 0.7
  ) {
    if (debounceTimer) {
      return;
    } else {
      // setTimeout will returned timeoutID is a positive integer value
      // which identifies the timer created by the call to setTimeout()
      debounceTimer = setTimeout(addProduct, 1000);
    }
  }
}

const addProduct = () => {
  // Get saved data from sessionStorage
  const nextPage = sessionStorage.getItem('next-page');

  if (nextPage !== 'stopScrollFetch') {
    let searchParams = new URLSearchParams(window.location.search);
    let val;
    if (searchParams.get('category')) {
      val = searchParams.get('category');
      productAPI(val, nextPage, 'add-below');
    } else if (searchParams.get('q')) {
      val = searchParams.get('q');
      searchAPI(val, nextPage, 'add-below');
    } else {
      productAPI('all', nextPage, 'add-below');
    }
    debounceTimer = null;
  } else {
    //pass
  }
};
