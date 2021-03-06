"use strict";

var gnbOpen = 'false';
var menuBtn = document.querySelector('.js-menu-btn');
var gnbElem = document.querySelector('.gnb');
var dimElem = document.querySelector('.dim');
var depth1 = document.querySelector('.type-1depth');
var headerElem = document.querySelector('.header');
var windowElem = document.querySelector('window');
var gnbBodyElem = document.querySelector('.gnb-body__link');

function menuActive(e) {
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

menuBtn.addEventListener('click', function (e) {
  e.preventDefault();
  menuActive();
});
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
  scrollStop();
});
$('.js-search-close').off('click').on('click', function (e) {
  e.preventDefault();
  $('.search').removeClass('is-active');
  scrollStart();
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
      // ????????? ?????? 
      console.log('??????');
      header.classList.remove('type-bg');
    } else {
      // ????????? ?????????
      console.log('?????????');
      header.classList.add('type-bg');
    }
  } else {
    // ?????? ???
    console.log('?????????');
  }

  beforePosition = afterPosition;
}); //??????????????????

var accordionElemAll = document.querySelectorAll('.js-accordion');
Array.prototype.forEach.call(accordionElemAll, function (accordionElem) {
  accordionElem.addEventListener('click', function (e) {
    e.preventDefault();
    var parent = this.parentNode;
    var accordionList = parent.querySelector('ul');

    if (this.classList.contains('is-active')) {
      //??????
      accordionList.classList.remove('is-hide');
      this.classList.remove('is-active');
    } else {
      //??????
      accordionList.classList.add('is-hide');
      this.classList.add('is-active');
    }
  });
}); //????????????

function selectAll(selectAll, name) {
  var checkboxes = document.querySelectorAll("input[name=\"".concat(name, "\"]"));
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = selectAll.checked;
  });
}