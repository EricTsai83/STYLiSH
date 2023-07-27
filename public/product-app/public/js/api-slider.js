const API_HOST = 'https://api.appworks-school.tw/api/1.0/marketing/campaigns';
let slideIndex = 0;
let timer,
  flag = 0;
let campaignCount = 0;
let startTime;
let endTime;
let delayTime = 5000;

// silder api
function getSilderImg() {
  fetch(API_HOST)
    .then(res => res.json())
    .then(data => {
      let silderImg;
      let silderString;
      let silderPunchline;

      data.data.forEach(element => {
        silderImg = document.createElement('img');
        silderImg.setAttribute('class', 'banner');
        silderImg.setAttribute('src', element.picture);
        silderImg.setAttribute('id', element.product_id);
        silderImg.style.cursor = 'pointer';

        silder.appendChild(silderImg);

        // productImg = document.getElementById(element.product_id);
        silderImg.addEventListener('click', () => {
          window.location.href = `/product?id=${element.product_id}`;
          window.scrollTo(0, 0);
        });

        silderString = document.createElement('div');
        silderString.setAttribute('class', 'string-on-banner');
        let arry = element.story.split('\r\n');
        let lastElement = arry.pop();
        silderString.innerHTML = arry.join('<br>');
        silder.appendChild(silderString);

        silderPunchline = document.createElement('div');
        silderPunchline.setAttribute('class', 'punchline-on-banner');
        silderPunchline.innerHTML = lastElement;
        silder.appendChild(silderPunchline);
        campaignCount++;
      });

      createDot();
      showSlide();
      stopTimeOutWhenMouseOver();
    });
}

function createDot() {
  const imageButtonWrapper = document.createElement('ul');
  imageButtonWrapper.setAttribute('class', 'image-button-wrapper');

  let imageButton;
  for (let i = 0; i < campaignCount; i++) {
    imageButton = document.createElement('li');

    i === 0
      ? imageButton.setAttribute('class', 'dot selected')
      : imageButton.setAttribute('class', 'dot');

    imageButton.setAttribute('onclick', `turnToSlide(${i})`);

    imageButtonWrapper.appendChild(imageButton);
  }
  silder.appendChild(imageButtonWrapper);
}

// Action after clicked silder's button
function turnToSlide(index) {
  if (index === slideIndex) return;
  slideIndex = index;
  showSlide();
}

function showSlide() {
  deleteTimer();
  const banner = document.querySelectorAll('.banner');
  const dots = document.querySelectorAll('.dot');
  const stringOnBanner = document.querySelectorAll('.string-on-banner');
  const punchlineOnBanner = document.querySelectorAll('.punchline-on-banner');

  if (slideIndex >= banner.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = banner.length - 1;
  }

  banner[flag].style.display = 'none';
  stringOnBanner[flag].style.display = 'none';
  punchlineOnBanner[flag].style.display = 'none';
  dots[flag].classList.remove('selected');

  banner[slideIndex].style.display = 'block';
  stringOnBanner[slideIndex].style.display = 'block';
  punchlineOnBanner[slideIndex].style.display = 'block';
  dots[slideIndex].classList.add('selected');

  flag = slideIndex;
  startTime = Date.now();
  timer = setTimeout(next, 5000);
}

function next() {
  slideIndex++;
  showSlide();
}

function deleteTimer() {
  clearTimeout(timer);
  timer = null;
}

function stopTimeOutWhenMouseOver() {
  const banners = document.querySelectorAll('.banner');
  banners.forEach(banner =>
    banner.addEventListener('mouseenter', () => {
      endTime = Date.now();
      deleteTimer();
    }),
  );

  banners.forEach(banner =>
    banner.addEventListener('mouseleave', () => {
      let elapsedTime = endTime - startTime;
      let remainingTime = delayTime - elapsedTime;
      timer = setTimeout(next, remainingTime);
    }),
  );
}
