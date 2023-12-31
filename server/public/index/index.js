/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// Javascript for index page

// ====== IMPORTS ======

// Css


// ====== MAIN ======

main();

// ====== FUNCTIONS ======

function main() {
  setCssVars();
  addListeners();
}
function setCssVars() {
  const root = document.querySelector(':root');
  console.log(window.innerHeight);
  root.style.setProperty('--screen-height', window.innerHeight + 'px');
  root.style.setProperty('--screen-width', window.innerWidth + 'px');
}
function addListeners() {
  addWindowListener();
  addLoginBtnListener();
  addLogoutBtnListener();
  addPostBtnListener();
  addSubmitBtnListener();
}
function addSubmitBtnListener() {
  const submitBtn = document.querySelector('.signUpBtn');
  if (submitBtn) {
    submitBtn.addEventListener('click', submitBtnListner);
  }
}
function submitBtnListner() {
  window.location.href = '/auth/sign_up';
}
function addWindowListener() {
  window.addEventListener('resize', windowResizeListener);
}
function windowResizeListener() {
  setCssVars();
}
function addLoginBtnListener() {
  const loginBtn = document.querySelector('.loginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', loginBtnListener);
  }
}
function loginBtnListener() {
  window.location.href = '/sign_in';
}
function addLogoutBtnListener() {
  const logoutBtn = document.querySelector('.logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logoutBtnListener);
  }
}
function logoutBtnListener() {
  window.location.href = '/auth/logout';
}
function addPostBtnListener() {
  const addPostBtn = document.querySelector('.addPostBtn');
  if (addPostBtn) {
    addPostBtn.addEventListener('click', postBtnListener);
  }
}
function postBtnListener() {
  showAddPostModal();
}
function showAddPostModal() {
  const modalWrapper = document.querySelector('.modalWrapper');
  modalWrapper.style.display = 'flex';
}
/******/ })()
;
//# sourceMappingURL=index.js.map