const overlay = document.querySelector('.input-overlay');
const inputArea = document.querySelector('.input-area');

overlay.addEventListener('click', () => {
  if (inputArea.value.trim() === '') {
    //pass
  } else {
    debounceTimer = null;
    window.scrollTo(0, 0);
    arrangeUrlParam('q', inputArea.value, ['category']);
    searchAPI(inputArea.value, 0, 'refresh');
    changeColorByBtnClick('search');
  }
});

const mobileInputOverlay = document.querySelector('.mobile-input-overlay');
const mobileInputArea = document.querySelector('.mobile-input-area');
mobileInputOverlay.addEventListener('click', () => {
  if (mobileInputArea.value.trim() === '') {
    //pass
  } else {
    debounceTimer = null;
    window.scrollTo(0, 0);
    arrangeUrlParam('q', mobileInputArea.value, ['category']);
    window.scrollTo(0, 0);
    searchAPI(mobileInputArea.value, 0, 'refresh');
    changeColorByBtnClick('search');
  }
});

// https://[HOST_NAME]/api/[API_VERSION]/products/search?keyword=洋裝
