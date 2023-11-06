// Javascript for index page


// ====== IMPORTS ======

// Css
import './index.css';


// ====== MAIN ======

main();


// ====== FUNCTIONS ======

function main () {
    setCssVars();
    addListeners();
}

function setCssVars () {
    const root = document.querySelector(':root');
    console.log(window.innerHeight);
    root.style.setProperty('--screen-height', window.innerHeight + 'px');
    root.style.setProperty('--screen-width', window.innerWidth + 'px');
}

function addListeners () {
    addWindowListener();
    addLoginBtnListener();
    addLogoutBtnListener();
    addPostBtnListener();
}

function addWindowListener () {
    window.addEventListener('resize', windowResizeListener);
}

function windowResizeListener () {
    setCssVars();
}

function addLoginBtnListener () {
    const loginBtn = document.querySelector('.loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', loginBtnListener);
    }
}

function loginBtnListener () {
    window.location.href = '/sign_in';
}

function addLogoutBtnListener () {
    const logoutBtn = document.querySelector('.logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logoutBtnListener);
    }
}

function logoutBtnListener () {
    window.location.href = '/auth/logout';
}

function addPostBtnListener () {
    const addPostBtn = document.querySelector('.addPostBtn');
    if (addPostBtn) {
        addPostBtn.addEventListener('click', postBtnListener);
    }
}

function postBtnListener () {
    showAddPostModal();
}

function showAddPostModal () {
    const modalWrapper = document.querySelector('.modalWrapper');
    modalWrapper.style.display = 'flex';
}