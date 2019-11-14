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

