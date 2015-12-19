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
    
    var onClickMenu = function onClickMenu(){
      navbarMenu.classList.toggle('header__menu--list--show');
      navbarMenu.classList.toggle('header__menu--list');
    };
    // Video
    videoVideo.addEventListener('click', onClickVideo);
    
    var onClickVideo = function onClickVideo(){
      videoVideo.setAttribute('controls', 'controls');
      video.play();
    };

    //Scroll
    headerElem.addEventListener('scroll', onScroll);

    var onScroll = function onScroll(){
      if(window.scrollY >= 100) {
        headerElem.classList.toggle('.header__light');
      }else{
        headerElem.classList.toggle('.header__light');
      }
    };

    //Load CSS
    var url = [
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.css',
    'https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css',
    'https://fonts.googleapis.com/css?family=Lato:400,700,300|Montserrat:400,700'
    ];
    var loadCSS = function loadCSS(url){
      for (var i = 0; i < url.length; i++){
      var elem = document.createElement('link');
        elem.rel = 'stylesheet';
        elem.href = url[i];
        document.head.appendChild(elem);
      }
    };
    loadCSS(url);
  }
}());

