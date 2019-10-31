var buttonPageHeader = document.querySelector('.top-header__button');
var mainNavMenu = document.querySelector('.main-nav--mobile');

buttonPageHeader.addEventListener('click', function() {
  var mainNavStatus = document.querySelector('.hidden');
  if (mainNavStatus) {
    mainNavMenu.classList.remove('hidden');
    buttonPageHeader.classList.add('active');
  }
  else {
    mainNavMenu.classList.add('hidden');
    buttonPageHeader.classList.remove('active');
  }
})




