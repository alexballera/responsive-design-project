(function (){
  'use strict';
  var btnMenu = document.getElementById('btnMenu');
  var navbarMenu = document.getElementById('navbarMenu');

  btnMenu.addEventListener('click', onClickMenu);
  
  function onClickMenu(){
    navbarMenu.classList.toggle('header__menu--list--show');
    navbarMenu.classList.toggle('header__menu--list');
  }
}());
