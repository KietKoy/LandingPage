const btnDisplaySearch = document.querySelector('.search');
let isSearch = true;
btnDisplaySearch.addEventListener('click', () => {
    if(isSearch === true) {
        const iconSearch = document.querySelector('.fa-magnifying-glass');
        const iconNotSearch = document.querySelector('.fa-xmark');
        const formSearch = document.querySelector('.form-search');
        iconSearch.setAttribute('style', 'opacity: 0');
        iconNotSearch.setAttribute('style', 'opacity: 1');
        formSearch.setAttribute('style', 'visibility: visible; opacity: 1');
        isSearch = false;
    }
    else {
        const iconSearch = document.querySelector('.fa-magnifying-glass');
        const iconNotSearch = document.querySelector('.fa-xmark');
        const formSearch = document.querySelector('.form-search');
        iconSearch.setAttribute('style', 'opacity: 1');
        iconNotSearch.setAttribute('style', 'opacity: 0');
        formSearch.setAttribute('style', 'visibility: hidden; opacity: 0');
        isSearch = true;
    }
})
const inputSearch = document.querySelector('#input-search');
inputSearch.addEventListener('keyup', () => {
    if (inputSearch.value.length > 0 ) {
        const iconSearch = document.querySelector('.js-icon-search');
        iconSearch.setAttribute('style', 'opacity:0');
    }
    else {
        const iconSearch = document.querySelector('.js-icon-search');
        iconSearch.setAttribute('style', 'opacity:1');
    }
})
const btnCuler = document.querySelector('.culer');
btnCuler.addEventListener('click', () => {
    const userOptions = document.querySelector('.user-options');
    userOptions.setAttribute('style', 'transform: translateX(0) scale(1); ')
})
const btnExitUserOption = document.querySelector('.btn-exit-user-options');
btnExitUserOption.addEventListener('click', () => {
    const userOptions = document.querySelector('.user-options');
    userOptions.setAttribute('style', 'transform: translateX(100%) scale(0);')
})
const btnOptionMobile = document.querySelector('.fa-bars');
btnOptionMobile.addEventListener('click', () => {
    const navMobile = document.querySelector('.nav-mobile');
    navMobile.setAttribute('style', 'transform: translateX(0);');
});
const btnExitNavMobile = document.querySelector('.button-exit-nav-mobile');
btnExitNavMobile.addEventListener('click', () => {
    const navMobile = document.querySelector('.nav-mobile');
    navMobile.setAttribute('style', 'transform: translateX(-100%);');
});