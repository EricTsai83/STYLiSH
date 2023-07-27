// ===============
// desktop version
// ===============
const womenDress = document.querySelector('.women-dress');
const menDress = document.querySelector('.men-dress');
const accessories = document.querySelector('.accessories');

womenDress.addEventListener('click', () => {
  // Get the current URL
  arrangeUrlParam('category', womenDress.dataset.name, ['q']);
  // console.log(url);
  debounceTimer = null;
  window.scrollTo(0, 0);
  productAPI('women', 0, 'refresh');
  changeColorByBtnClick(womenDress.dataset.name);
  inputArea.value = '';
});

menDress.addEventListener('click', () => {
  arrangeUrlParam('category', menDress.dataset.name, ['q']);
  debounceTimer = null;
  window.scrollTo(0, 0);
  productAPI('men', 0, 'refresh');
  changeColorByBtnClick(menDress.dataset.name);
  inputArea.value = '';
});

accessories.addEventListener('click', () => {
  arrangeUrlParam('category', accessories.dataset.name, ['q']);
  debounceTimer = null;
  window.scrollTo(0, 0);
  productAPI('accessories', 0, 'refresh');
  changeColorByBtnClick(accessories.dataset.name);
  inputArea.value = '';
});

// ===============
// mobile version
// ===============
const mobileWomenDress = document.querySelector('.mobile-women-dress');
const mobileMenDress = document.querySelector('.mobile-men-dress');
const mobileAccessories = document.querySelector('.mobile-accessories');

mobileWomenDress.addEventListener('click', () => {
  arrangeUrlParam('category', mobileWomenDress.dataset.name, ['q']);
  debounceTimer = null;
  window.scrollTo(0, 0);
  productAPI('women', 0, 'refresh');
  changeColorByBtnClick(mobileWomenDress.dataset.name);
  mobileInputArea.value = '';
});

mobileMenDress.addEventListener('click', () => {
  arrangeUrlParam('category', mobileMenDress.dataset.name, ['q']);
  debounceTimer = null;
  window.scrollTo(0, 0);
  productAPI('men', 0, 'refresh');
  changeColorByBtnClick(mobileMenDress.dataset.name);
  mobileInputArea.value = '';
});

mobileAccessories.addEventListener('click', () => {
  arrangeUrlParam('category', mobileAccessories.dataset.name, ['q']);
  debounceTimer = null;
  window.scrollTo(0, 0);
  productAPI('accessories', 0, 'refresh');
  changeColorByBtnClick(mobileAccessories.dataset.name);
  mobileInputArea.value = '';
});
