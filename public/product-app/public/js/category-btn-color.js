function changeColorByBtnClick(name) {
  const womenDress = document.querySelector('.women-dress');
  const mobileWomenDress = document.querySelector('.mobile-women-dress');
  const menDress = document.querySelector('.men-dress');
  const mobileMenDress = document.querySelector('.mobile-men-dress');
  const accessories = document.querySelector('.accessories');
  const mobileAccessories = document.querySelector('.mobile-accessories');

  if (name === 'women') {
    womenDress.style.color = '#8b572a';
    mobileWomenDress.style.color = '#FFFFFF';

    menDress.style.color = '#3f3a3a';
    accessories.style.color = '#3f3a3a';
    mobileMenDress.style.color = '#828282';
    mobileAccessories.style.color = '#828282';
  } else if (name === 'men') {
    menDress.style.color = '#8b572a';
    mobileMenDress.style.color = '#FFFFFF';

    womenDress.style.color = '#3f3a3a';
    accessories.style.color = '#3f3a3a';
    mobileWomenDress.style.color = '#828282';
    mobileAccessories.style.color = '#828282';
  } else if (name === 'accessories') {
    accessories.style.color = '#8b572a';
    mobileAccessories.style.color = '#FFFFFF';

    womenDress.style.color = '#3f3a3a';
    menDress.style.color = '#3f3a3a';
    mobileWomenDress.style.color = '#828282';
    mobileMenDress.style.color = '#828282';
  } else if (name === 'search') {
    womenDress.style.color = '#3f3a3a';
    menDress.style.color = '#3f3a3a';
    accessories.style.color = '#3f3a3a';
    mobileWomenDress.style.color = '#828282';
    mobileMenDress.style.color = '#828282';
    mobileAccessories.style.color = '#828282';
  } else {
    womenDress.style.color = '#3f3a3a';
    menDress.style.color = '#3f3a3a';
    accessories.style.color = '#3f3a3a';
    mobileWomenDress.style.color = '#828282';
    mobileMenDress.style.color = '#828282';
    mobileAccessories.style.color = '#828282';
  }
}
