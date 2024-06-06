import '../scripts/data-source.js';
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/responsive.css';
import '../styles/main.css';


const menuApp = document.querySelector('#menuApp');
const drawerApp = document.querySelector('#drawerApp');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');

menuApp.addEventListener('click', function (event) {
    drawerApp.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function() {
    drawerApp.classList.remove('open');
});

main.addEventListener('click', function () {
    drawerApp.classList.remove('open');
})