(function (){
  'use strict';
  //Menú
  var btnMenu = document.getElementById('btnMenu');
  var navbarMenu = document.getElementById('navbarMenu');

  btnMenu.addEventListener('click', onClickMenu);
  
  function onClickMenu(){
    navbarMenu.classList.toggle('header__menu--list--show');
    navbarMenu.classList.toggle('header__menu--list');
  }
  // Video
  var v = document.getElementsByTagName("video")[0];
  var video = document.getElementById('video');
  
  video.addEventListener('click', initVideo);
  
  function initVideo(){
    v.play()
  }
}());
