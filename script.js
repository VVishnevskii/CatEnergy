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

catSwitch.addEventListener('click', function() {
  
  if (!catSwitch.checked) {
    console.log('Толстый кот');
  }
  else {
    console.log('Худой кот');
  }
})

