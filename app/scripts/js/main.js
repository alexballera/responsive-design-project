(function (){
  'use strict';
  document.addEventListener('DOMContentLoaded', onDOMLoad);

  function onDOMLoad(){
    //Variables Globales
    var btnMenu = document.getElementById('btnMenu');
    var navbarMenu = document.getElementById('navbarMenu');
    var video = document.getElementsByTagName('video')[0];
    var videoVideo = document.getElementById('video');
    var headerElem = document.querySelector('header');

    //Menú
    btnMenu.addEventListener('click', onClickMenu);
    
    function onClickMenu(){
      navbarMenu.classList.toggle('header__menu--list--show');
      navbarMenu.classList.toggle('header__menu--list');
    }
    // Video
    
    videoVideo.addEventListener('click', onClickVideo);
    
    function onClickVideo(){
      videoVideo.setAttribute('controls', 'controls');
      video.play();
    }

    //Scroll
    headerElem.addEventListener('scroll', onScroll);

    function onScroll(){
      if(window.scrollY >= 200) {
        headerElem.classList.toggle('.header__light');
      }else{
        headerElem.classList.toggle('.header__light');
      }
    }
  }
}());
