const btnDisplaySearch = document.querySelector('.search');
let isSearch = true;
btnDisplaySearch.addEventListener('click', () => {
    if(isSearch === true) {
        const iconSearch = document.querySelector('.js-icon-search-header');
        const iconNotSearch = document.querySelector('.js-icon-notsearch');
        const formSearch = document.querySelector('.form-search');
        const aboveBackground = document.querySelector('.above-background-search');
        iconSearch.setAttribute('style', 'opacity: 0');
        iconNotSearch.setAttribute('style', 'opacity: 1');
        formSearch.setAttribute('style', 'visibility: visible; opacity: 1');
        aboveBackground.setAttribute('style', 'opacity: .1');
        isSearch = false;
    }
    else {
        const iconSearch = document.querySelector('.js-icon-search-header');
        const iconNotSearch = document.querySelector('.js-icon-notsearch');
        const formSearch = document.querySelector('.form-search');
        const aboveBackground = document.querySelector('.above-background-search');
        iconSearch.setAttribute('style', 'opacity: 1');
        iconNotSearch.setAttribute('style', 'opacity: 0');
        formSearch.setAttribute('style', 'visibility: hidden; opacity: 0');
        aboveBackground.setAttribute('style', 'opacity: .0');
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
const btnChooseLanguage = document.querySelector('.btn-choose-language');
btnChooseLanguage.addEventListener('click', () => {
    const languageOptionsDropdown = document.querySelector('.language-options-mobile-dropdown');
    languageOptionsDropdown.setAttribute('style', 'transform: translateY(0)');
    const navMobileFirst = document.querySelector('.nav-mobile-first');
    navMobileFirst.setAttribute('style', 'transform: translateY(200%)');
})
const btnExitLanguageOptions = document.querySelector('.btn-exit-language-options');
btnExitLanguageOptions.addEventListener('click', () => {
    const languageOptionsDropdown = document.querySelector('.language-options-mobile-dropdown');
    languageOptionsDropdown.setAttribute('style', 'transform: translateY(100%)');
    const navMobileFirst = document.querySelector('.nav-mobile-first');
    navMobileFirst.setAttribute('style', 'transform: translateY(0)');
})

//Not working
// function navMobileFirstControlling (buttonNavMobileFirst, classMoblieSecondActive){
//     console.log(buttonNavMobileFirst);
//     console.log(classMoblieSecondActive);
//     butttonActive = document.querySelector('.nav-mobile-first-top-choose');
//     butttonActive.classList.remove('nav-mobile-first-top-choose');
//     buttonNavMobileFirst.classList.add('nav-mobile-first-top-choose');
//     const navMobileSecondActive = document.querySelector('.nav-mobile-second.active')
//     navMobileSecondActive.classList.remove("active");
//     navMobileSecondActive.classList.add("hidden");
//     const navMobileSecondFocus =  document.querySelector(classMoblieSecondActive);
//     navMobileSecondFocus.classList.remove("hidden");
//     navMobileSecondFocus.classList.add("active");
//     const listLiActive = navMobileSecondFocus.querySelectorAll('li');
//     let delay = 100;
//     listLiActive.forEach((item) => {
//         item.setAttribute('style', `transition-delay: ${delay}ms`);
//         delay +=100;
//     })
// }

const homeButton = document.querySelector('.js-home-logo');
homeButton.addEventListener('click', () => {
    const panel = document.querySelector('.panel-nav-mobile-second');
    panel.setAttribute('style', 'background: linear-gradient(rgb(205, 18, 45) 0px, rgb(21, 66, 132));');
    butttonActive = document.querySelector('.nav-mobile-first-top-choose');
    butttonActive.classList.remove('nav-mobile-first-top-choose');
    homeButton.classList.add('nav-mobile-first-top-choose');
    const navMobileSecondActive = document.querySelector('.nav-mobile-second.active')
    navMobileSecondActive.classList.remove("active");
    navMobileSecondActive.classList.add("hidden");
    const navMobileSecondFocus =  document.querySelector('.nav-mobile-second-dont-miss');
    navMobileSecondFocus.classList.remove("hidden");
    navMobileSecondFocus.classList.add("active");
    const listLiActive = navMobileSecondFocus.querySelectorAll('li');
    let delay = 100;
    listLiActive.forEach((item) => {
        item.setAttribute('style', `transition-delay: ${delay}ms`);
        delay +=100;
    })
})
const firstTeamButton = document.querySelector('.js-first-team');
firstTeamButton.addEventListener('click', () => {
    const panel = document.querySelector('.panel-nav-mobile-second');
    panel.setAttribute('style', 'background: linear-gradient(rgb(205, 18, 45) 0px, rgb(21, 66, 132));');
    butttonActive = document.querySelector('.nav-mobile-first-top-choose');
    butttonActive.classList.remove('nav-mobile-first-top-choose');
    firstTeamButton.classList.add('nav-mobile-first-top-choose');
    console.log(firstTeamButton.classList);
    const navMobileSecondActive = document.querySelector('.nav-mobile-second.active')
    navMobileSecondActive.classList.remove("active");
    navMobileSecondActive.classList.add("hidden");
    const navMobileSecondFocus =  document.querySelector('.nav-mobile-second-first-team');
    navMobileSecondFocus.classList.remove("hidden");
    navMobileSecondFocus.classList.add("active");
    const listLiActive = navMobileSecondFocus.querySelectorAll('li');
    let delay = 100;
    listLiActive.forEach((item) => {
        item.setAttribute('style', `transition-delay: ${delay}ms`);
        delay +=100;
    })
})

const buttonTicketAndMuseum = document.querySelector('.js-ticket-museum');
buttonTicketAndMuseum.addEventListener('click', () => {
    const panel = document.querySelector('.panel-nav-mobile-second');
    panel.setAttribute('style', 'background: linear-gradient(rgb(205, 18, 45) 0px, rgb(21, 66, 132));');
    butttonActive = document.querySelector('.nav-mobile-first-top-choose');
    butttonActive.classList.remove('nav-mobile-first-top-choose');
    buttonTicketAndMuseum.classList.add('nav-mobile-first-top-choose');
    const navMobileSecondActive = document.querySelector('.nav-mobile-second.active')
    navMobileSecondActive.classList.remove("active");
    navMobileSecondActive.classList.add("hidden");
    const navMobileSecondFocus =  document.querySelector('.nav-mobile-second-tickets-museum');
    navMobileSecondFocus.classList.remove("hidden");
    navMobileSecondFocus.classList.add("active");
    const listLiActive = navMobileSecondFocus.querySelectorAll('li');
    let delay = 100;
    listLiActive.forEach((item) => {
        item.setAttribute('style', `transition-delay: ${delay}ms`);
        delay +=100;
    })
})

const buttonBarcaTV = document.querySelector('.js-barca-TV');
buttonBarcaTV.addEventListener('click', () => {
    const panel = document.querySelector('.panel-nav-mobile-second');
    panel.setAttribute('style', 'background: linear-gradient(rgb(205, 18, 45) 0px, rgb(21, 66, 132));');
    butttonActive = document.querySelector('.nav-mobile-first-top-choose');
    butttonActive.classList.remove('nav-mobile-first-top-choose');
    buttonBarcaTV.classList.add('nav-mobile-first-top-choose');
    const navMobileSecondActive = document.querySelector('.nav-mobile-second.active')
    navMobileSecondActive.classList.remove("active");
    navMobileSecondActive.classList.add("hidden");
    const navMobileSecondFocus =  document.querySelector('.nav-mobile-second-barcaTV');
    navMobileSecondFocus.classList.remove("hidden");
    navMobileSecondFocus.classList.add("active");
    const listLiActive = navMobileSecondFocus.querySelectorAll('li');
    let delay = 100;
    listLiActive.forEach((item) => {
        item.setAttribute('style', `transition-delay: ${delay}ms`);
        delay +=100;
    })
})
const buttonClub = document.querySelector('.js-club');
buttonClub.addEventListener('click', () => {
    const panel = document.querySelector('.panel-nav-mobile-second');
    panel.setAttribute('style', 'background: linear-gradient(rgb(205, 18, 45) 0px, rgb(21, 66, 132));');
    butttonActive = document.querySelector('.nav-mobile-first-top-choose');
    butttonActive.classList.remove('nav-mobile-first-top-choose');
    buttonClub.classList.add('nav-mobile-first-top-choose');
    const navMobileSecondActive = document.querySelector('.nav-mobile-second.active')
    navMobileSecondActive.classList.remove("active");
    navMobileSecondActive.classList.add("hidden");
    const navMobileSecondFocus =  document.querySelector('.nav-mobile-second-club');
    navMobileSecondFocus.classList.remove("hidden");
    navMobileSecondFocus.classList.add("active");
    const listLiActive = navMobileSecondFocus.querySelectorAll('li');
    let delay = 100;
    listLiActive.forEach((item) => {
        item.setAttribute('style', `transition-delay: ${delay}ms`);
        delay +=100;
    })
})
const buttonBarcaTeams = document.querySelector('.js-barca-teams');
buttonBarcaTeams.addEventListener('click', () => {
    const panel = document.querySelector('.panel-nav-mobile-second');
    panel.setAttribute('style', 'background: linear-gradient(rgb(205, 18, 45) 0px, rgb(21, 66, 132));');
    butttonActive = document.querySelector('.nav-mobile-first-top-choose');
    butttonActive.classList.remove('nav-mobile-first-top-choose');
    buttonBarcaTeams.classList.add('nav-mobile-first-top-choose');
    const navMobileSecondActive = document.querySelector('.nav-mobile-second.active')
    navMobileSecondActive.classList.remove("active");
    navMobileSecondActive.classList.add("hidden");
    const navMobileSecondFocus =  document.querySelector('.nav-mobile-second-barca-team');
    navMobileSecondFocus.classList.remove("hidden");
    navMobileSecondFocus.classList.add("active");
    const listLiActive = navMobileSecondFocus.querySelectorAll('li');
    let delay = 100;
    listLiActive.forEach((item) => {
        item.setAttribute('style', `transition-delay: ${delay}ms`);
        delay +=100;
    })
})
const buttonBarcaSocial = document.querySelector('.js-barca-on-social');
buttonBarcaSocial.addEventListener('click', () => {
    const panel = document.querySelector('.panel-nav-mobile-second');
    panel.setAttribute('style', 'background: #154284');
    butttonActive = document.querySelector('.nav-mobile-first-top-choose');
    butttonActive.classList.remove('nav-mobile-first-top-choose');
    buttonBarcaSocial.classList.add('nav-mobile-first-top-choose');
    const navMobileSecondActive = document.querySelector('.nav-mobile-second.active')
    navMobileSecondActive.classList.remove("active");
    navMobileSecondActive.classList.add("hidden");
    const navMobileSecondFocus =  document.querySelector('.nav-mobile-second-barca-on-social');
    navMobileSecondFocus.classList.remove("hidden");
    navMobileSecondFocus.classList.add("active");
    const listLiActive = navMobileSecondFocus.querySelectorAll('li');
    let delay = 100;
    listLiActive.forEach((item) => {
        item.setAttribute('style', `transition-delay: ${delay}ms`);
        delay +=100;
    })
})
const buttonAllBarcaSites = document.querySelector('.js-all-barca-sites');
buttonAllBarcaSites.addEventListener('click', () => {
    const panel = document.querySelector('.panel-nav-mobile-second');
    panel.setAttribute('style', 'background: #154284');
    butttonActive = document.querySelector('.nav-mobile-first-top-choose');
    butttonActive.classList.remove('nav-mobile-first-top-choose');
    buttonAllBarcaSites.classList.add('nav-mobile-first-top-choose');
    const navMobileSecondActive = document.querySelector('.nav-mobile-second.active')
    navMobileSecondActive.classList.remove("active");
    navMobileSecondActive.classList.add("hidden");
    const navMobileSecondFocus =  document.querySelector('.nav-mobile-second-all-barca-sites');
    navMobileSecondFocus.classList.remove("hidden");
    navMobileSecondFocus.classList.add("active");
    const listLiActive = navMobileSecondFocus.querySelectorAll('li');
    let delay = 100;
    listLiActive.forEach((item) => {
        item.setAttribute('style', `transition-delay: ${delay}ms`);
        delay +=100;
    })
})