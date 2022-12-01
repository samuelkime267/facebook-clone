'use strict';

// selecting element
const navSearchInputField = document.querySelector('.nav-search-input');
const navSearchResultContainer = document.querySelector(
  '.search-result-container'
);
const navProfileLink = document.querySelector('.nav-profile-link');
const profilePicContainer = document.querySelector('.profile-pic-container');
const closeProfileLink = document.querySelector('.close-profile-nav');
const sidebar = document.querySelector('.side-bar');
const navMenuBtn = document.querySelector('.nav-menu-btn');

// code

navSearchInputField.addEventListener('focus', function () {
  navSearchResultContainer.classList.remove('displayNone');
});
navSearchInputField.addEventListener('blur', function () {
  navSearchResultContainer.classList.add('displayNone');
});
profilePicContainer.addEventListener('click', function () {
  navProfileLink.classList.toggle('displayNone');
});
closeProfileLink.addEventListener('click', function () {
  navProfileLink.classList.add('displayNone');
});
navMenuBtn.addEventListener('click', function () {
  sidebar.classList.toggle('sidebar-hidden');
});

// post container display and hide
const postContainer = document.getElementById('post-container-modal');
const btnClosePostContainer = document.getElementById('close-post-container');
const btnOpenPostContainer = document.getElementById('open-post-container');
const btnOpenSearchMobile = document.getElementById('open-search-mobile');
const mobileSearchContainer = document.getElementById(
  'mobile-search-container'
);
const btnCloseSearchMobile = document.getElementById('close-search-container');

btnOpenPostContainer.addEventListener('click', e => {
  e.preventDefault();
  postContainer.classList.toggle('displayNone');
});
btnClosePostContainer.addEventListener('click', e => {
  e.preventDefault();
  postContainer.classList.add('displayNone');
});
btnOpenSearchMobile.addEventListener('click', () => {
  mobileSearchContainer.classList.remove('displayNone');
  sidebar.classList.toggle('sidebar-hidden');
});
btnCloseSearchMobile.addEventListener('click', () => {
  mobileSearchContainer.classList.add('displayNone');
});
