'use strict';

const password = document.getElementById('password'),
      eye = document.getElementById('eye'),
      icon = document.getElementById('icon-input');

let state = false;

eye.addEventListener('click', () => {
    if (state) {
        password.setAttribute('type','password');
        eye.style.color = '#312BB3';
        state = false;
    } else {
        password.setAttribute('type','text');
        eye.style.color = '#6587FD';
        state = true;
    };
});