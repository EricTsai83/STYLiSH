function searchAPI(keyword, paging, displayMethod) {
  clothesWrapperContainer = document.querySelector('.clothes-wrapper');
  clothesWrapperContainer.replaceChildren();

  const API_HOST = 'https://api.appworks-school.tw/api/1.0/products/search';
  // 顯示 loading icon
  const loadingDiv = document.createElement('div');
  loadingDiv.setAttribute('id', 'loading');

  const loadImgHtmlText = '<img src="../img/loading.gif">';
  if (displayMethod === 'refresh') {
    loadingDiv.innerHTML = loadImgHtmlText;
  } else if (displayMethod === 'add-below') {
    loadingDiv.insertAdjacentHTML('beforeend', loadImgHtmlText);
  } else {
    // pass
  }
  document.querySelector('main').appendChild(loadingDiv);

  // 請求 API
  let productDiv;
  fetch(API_HOST + `?keyword=${keyword}&paging=${paging}`)
    .then(res => res.json())
    .then(data => {
      // when API respond was back, remove loading icon
      loadingDiv.parentNode.removeChild(loadingDiv);
      // show API data to the console
      // console.log(data);
      // API data
      data.data.forEach(element => {
        productDiv = document.createElement('div');
        // Deal with product image
        productDiv.innerHTML = `
        <img class='clothes' src="${element.main_image}" alt="image">`;

        // Deal with product color
        colorsDiv = document.createElement('div');
        colorsDiv.setAttribute('class', 'clothes-color');
        // Deal with product color
        element.colors.forEach(color => {
          colorsDiv.insertAdjacentHTML(
            'beforeend',
            `<div class="color" style="background:#${color.code};"></div>`,
          );
        });
        productDiv.appendChild(colorsDiv);

        infoDiv = document.createElement('div');
        infoDiv.innerHTML = `
        <p class="clothes-title">${element.title}</p>
        <p class="clothes-price">TWD.${element.price}</p>
      `;
        productDiv.appendChild(infoDiv);

        // append element to dom
        clothesWrapperContainer.appendChild(productDiv);
      });
    })

    .catch(err => console.log('ERROR: ', err))
    .finally(data => console.log('api-search.js done!'));
}
