let buttonPageHeader = document.querySelector('.top-header__button');
let mainNavMenu = document.querySelector('.main-nav--mobile');

  buttonPageHeader.addEventListener('click', function() {
    let mainNavStatus = document.querySelector('.hidden');
    if (mainNavStatus) {
      mainNavMenu.classList.remove('hidden');
      buttonPageHeader.classList.add('active');
    }
    else {
      mainNavMenu.classList.add('hidden');
      buttonPageHeader.classList.remove('active');
    }
  })


let catSwitch = document.querySelector('#cat-switch');
let catBefore = document.querySelector('.living-example__img-before');
let catAfter = document.querySelector('.living-example__img-after');

catSwitch.addEventListener('click', function() {
  if (!catSwitch.checked) {
    catAfter.classList.add('living-example__img--hidden');
    catAfter.classList.remove('living-example__img--show');
    catBefore.classList.remove('living-example__img--hidden');
    catBefore.classList.add('living-example__img--show');
  }
  else {
    catAfter.classList.remove('living-example__img--hidden');
    catAfter.classList.add('living-example__img--show');
    catBefore.classList.add('living-example__img--hidden');
    catBefore.classList.remove('living-example__img--show');
  }
})


const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.slider-container');
const leftPhoto = document.querySelector('.left');
const rightPhoto = document.querySelector('.right');
const photoContainer = document.querySelector('.container');
let flag = false;

slider.addEventListener('mousedown', function (evt) {
  evt.preventDefault();
  flag = true;
  slider.style.backgroundColor = "green";
}, false);


document.addEventListener('mouseup', function () {
  flag = false;
  slider.style.backgroundColor = "red";
}, false);


sliderContainer.addEventListener('mousemove', function (evt) {
  let res = evt.pageX - photoContainer.offsetLeft;
  

  if (flag && (res > 0) && (res < rightPhoto.offsetWidth)) {
    slider.style.left = (res - 5) + 'px';
    leftPhoto.style.width = res + 'px';
  }

}, false);
