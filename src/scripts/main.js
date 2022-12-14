'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--menu-is-open');
  } else {
    document.body.classList.remove('page__body--menu-is-open');
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  e.target.reset();
});
