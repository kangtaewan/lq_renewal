"use strict";

var gnbOpen = 'false';
var menuBtn = document.querySelector('.js-menu-btn');
var gnbElem = document.querySelector('.gnb');
var dimElem = document.querySelector('.dim');
var depth1 = document.querySelector('.type-1depth');
var headerElem = document.querySelector('.header');
var windowElem = document.querySelector('window');
var gnbBodyElem = document.querySelector('.gnb-body__link');

function menuActive() {
  if (depth1.classList.contains('is-active')) {
    gnbElem.classList.remove('is-active');
    dimElem.classList.remove('is-active');
    gnbOpen = 'false';

    if (window.scrollY == 0) {
      headerElem.classList.remove('is-active');
    }
  } else {
    depth1.classList.add('is-active');
    dimElem.classList.add('is-active');
    headerElem.classList.add('is-active');
    gnbOpen = 'true';

    if (window.scrollY == 0) {
      headerElem.classList.add('is-active');
    }
  }
}

menuBtn.addEventListener('click', menuActive);
$('.gnb-body__link').off('click').on('click', function (e) {
  e.preventDefault();
  var dataPage = $(this).attr('data-page'); //3depth open/close

  if (dataPage == "3depth") {
    e.preventDefault();
    var gnbItem = $(this).parents('.gnb-body__item');

    if (gnbItem.hasClass('is-active')) {
      gnbItem.removeClass('is-active');
      gnbItem.find('.gnb-3depth').removeClass('is-active');
    } else {
      gnbItem.siblings().removeClass('is-active');
      gnbItem.siblings().find('.gnb-3depth').removeClass('is-active');
      gnbItem.addClass('is-active');
      gnbItem.find('.gnb-3depth').addClass('is-active');
    }
  } else if (dataPage != "none") {
    e.preventDefault();
    $("." + dataPage).addClass('is-active');
    $("." + dataPage).find('.gnb-body__item').eq(0).addClass('is-active');
    $("." + dataPage).find('.gnb-3depth').eq(0).addClass('is-active');
  }
});
$('.js-search-open').off('click').on('click', function (e) {
  e.preventDefault();
  $('.search').addClass('is-active');
});
$('.js-search-close').off('click').on('click', function (e) {
  e.preventDefault();
  $('.search').removeClass('is-active');
});
$('.js-gnb-back').off('click').on('click', function (e) {
  e.preventDefault();
  $('.gnb.type-2depth, .dim').removeClass('is-active');
  $('.gnb-body__item, .gnb-3depth').removeClass('is-active');
});
var footerH = $('.footer').outerHeight();
console.log(footerH);
$('body').css('padding-bottom', footerH);
var beforePosition = document.documentElement.scrollTop;
document.addEventListener('scroll', function () {
  var afterPosition = document.documentElement.scrollTop;
  var header = document.querySelector('.header');

  if (afterPosition > 100) {
    if (beforePosition < afterPosition) {
      // 스크롤 위로 
      console.log('위로');
      header.classList.remove('type-bg');
    } else {
      // 스크롤 아래로
      console.log('아래로');
      header.classList.add('type-bg');
    }
  } else {
    // 평상 시
    console.log('평상시');
  }

  beforePosition = afterPosition;
});