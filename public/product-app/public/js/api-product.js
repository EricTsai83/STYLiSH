function productAPI(category, paging, displayMethod) {
  let clothesWrapper = document.querySelector('.clothes-wrapper');
  let mainWrapper = document.querySelector('main');

  const API_HOST = 'https://api.appworks-school.tw/api/1.0/products';
  // 顯示 loading icon
  const loadingDiv = document.createElement('div');
  loadingDiv.setAttribute('id', 'loading');
  const loadImgHtmlText = '<img src="../img/loading.gif">';
  loadingDiv.innerHTML = loadImgHtmlText;

  if (displayMethod === 'refresh') {
    clothesWrapper.replaceChildren();
  }

  mainWrapper.appendChild(loadingDiv);

  // 請求 API
  let productDiv;
  let productImg;
  fetch(API_HOST + `/${category}` + `?paging=${paging}`)
    .then(res => res.json())
    .then(data => {
      // when API respond was back, remove loading icon
      loadingDiv.parentNode.removeChild(loadingDiv);

      // Get product data
      data.data.forEach(element => {
        productDiv = document.createElement('div');
        // Add product image to frontend
        productDiv.innerHTML = `
        <img class='clothes' src="${element.main_image}" id=main-img-${element.id} alt="image">`;

        // Add product color to frontend
        let colorsDiv = document.createElement('div');
        colorsDiv.setAttribute('class', 'clothes-color');
        element.colors.forEach(color => {
          colorsDiv.insertAdjacentHTML(
            'beforeend',
            `<div class="color" style="background:#${color.code};"></div>`,
          );
        });
        productDiv.appendChild(colorsDiv);
        // Add product info to frontend
        let infoDiv = document.createElement('div');
        infoDiv.innerHTML = `
        <p class="clothes-title">${element.title}</p>
        <p class="clothes-price">TWD.${element.price}</p>
      `;
        productDiv.appendChild(infoDiv);

        // Append whole procuct element  to DOM
        clothesWrapper.appendChild(productDiv);

        productImg = document.getElementById(`main-img-${element.id}`);
        // productImg = clothesWrapper[0].getElementById(element.id);
        productImg.addEventListener('click', () => {
          window.location.href = `/product?id=${element.id}`;
          window.scrollTo(0, 0);
        });
      });

      const nextPaging = JSON.stringify(data.next_paging);
      // Save data to sessionStorage
      sessionStorage.setItem(
        'next-page',
        nextPaging ? nextPaging : 'stopScrollFetch',
      );
    })
    .catch(err => console.log('ERROR: ', err));
  // .finally(data => console.log('api-product.js done!'));
}
