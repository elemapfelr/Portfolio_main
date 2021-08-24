'use strict';

const wrap = document.querySelector('#wrap');
const gnbMenu = document.querySelector('.gnb>.menu');
const menuUl = document.querySelector('.menu>ul');
const menuLi = document.querySelectorAll('.menu>ul>li')
const menuLi_a = document.querySelectorAll('.menu>ul>li>a')
const darkBtn = document.querySelector('button.dark');
const mainImg = document.querySelector('.main_img')
const h3Title = document.getElementsByClassName('title')
const footertxt = document.getElementsByClassName('footertxt')
const section_2 = document.querySelector('.section_2')
const sec2Txt = section_2.getElementsByClassName('txt')

function logoWhite() {
    document.querySelector("#logoId").src = "img/header_footer/signature_logo_white.png";
    document.querySelector("#snsfb").src = "img/header_footer/sns_facebook.png";
    document.querySelector("#snskt").src = "img/header_footer/sns_kakaotalk.png";
    document.querySelector("#snsin").src = "img/header_footer/sns_instagram.png";
    document.querySelector("#snsyt").src = "img/header_footer/sns_youtube.png";
    document.querySelector("#lnbButton").src = "img/header_footer/lnb-button_white.png";
}

function logoBlack() {
    document.querySelector("#logoId").src = "img/header_footer/signature_logo_black.png";
    document.querySelector("#snsfb").src = "img/header_footer/sns_facebook_black.png";
    document.querySelector("#snskt").src = "img/header_footer/sns_kakaotalk_black.png";
    document.querySelector("#snsin").src = "img/header_footer/sns_instagram_black.png";
    document.querySelector("#snsyt").src = "img/header_footer/sns_youtube_black.png";
    document.querySelector("#lnbButton").src = "img/header_footer/lnb-button.png";
}


// const blueTxt = document.querySelectorAll('.blueTxt')
// const blueBg = document.querySelectorAll('.blueBg')
// function blue_indigo(key){
//     for (let i = 0; i < blueTxt.length; i++) {
//         blueTxt[i].style.color = key
//     }
//     for (let i = 0; i < blueBg.length; i++) {
//         blueBg[i].style.color = key
//     }
// }


function h3TitleColor(key) {
    for (let i = 0; i < h3Title.length; i++) {
        h3Title[i].style.color = key
    }
    for (let i = 0; i < footertxt.length; i++) {
        footertxt[i].style.color = key
    }
}

function secTxtColor(key) {
    for (let i = 0; i < sec2Txt.length; i++) {
        sec2Txt[i].style.color = key
    }
    for (let i = 0; i < sec2Txt.length; i++) {
        sec2Txt[i].style.color = key
    }
}

{
    let i = 0;
    darkBtn.addEventListener('click', () => {
        console.log(i)
        if (i == 0) {
            i = 1;
            menuLi_a.forEach(el => el.classList.add('darkTxt'));
            darkBtn.innerText = "Light Mode"
            darkBtn.style.color = "#fff";
            wrap.style.transition = 'all 0.5s'
            wrap.style.background = '#1a1a1a';
            logoWhite();
            h3TitleColor('#fff');
            secTxtColor('#ccc');
          
        } else {
            i = 0;
            menuLi_a.forEach(el => el.classList.remove('darkTxt'));
            darkBtn.innerText = "Dark Mode"
            darkBtn.style.color = "#333";
            wrap.style.transition = 'all 0.5s'
            wrap.style.background = '#fff';
            logoBlack();
            h3TitleColor('#000');
            secTxtColor('#000');
           
        }
    })
}

//lnb 관련
const lnb = document.querySelector('.lnb');
const lnbBtn = document.querySelector('span.lnbBtn');
const leftMenu = document.querySelector('.lnb>.leftMenu');
const lnbCancel = document.querySelector('.leftMenu>span.lnbCancel');
const lnbUl = document.querySelector('.leftMenu>ul');
const lnbLi = document.querySelectorAll('.leftMenu>ul>li');
const darkMini = document.querySelector('button.darkmini');
const lnbLi_a = document.querySelectorAll('.leftMenu>ul>li>a')

lnbBtn.addEventListener('click', () => {
    leftMenu.style.width = '100%';
    leftMenu.style.height = 'auto';
    leftMenu.style.opacity = '1';
    lnbCancel.style.transition = 'all 0.5s';
    lnbCancel.style.left = '50px';
})
lnbCancel.addEventListener('click', () => {
    leftMenu.style.width = '0';
    leftMenu.style.height = '0';
    leftMenu.style.opacity = '0';
    lnbCancel.style.transition = 'all 0.5s';
    lnbCancel.style.left = '-50px';
})

function lnbColorDark() {
    for (let i = 0; i < lnbLi.length; i++) {
        lnbLi[i].style.color = '#fff'
        lnbLi[i].style.background = '#333c'
        lnbLi[i].style.transition = 'all 0.5s'
        lnbLi[i].addEventListener('mouseover', () => {
            lnbLi[i].style.background = '#555c'
        })
        lnbLi[i].addEventListener('mouseout', () => {
            lnbLi[i].style.background = '#333c'
        })
    }
}

function lnbColorLight() {
    for (let i = 0; i < lnbLi.length; i++) {
        lnbLi[i].style.color = '#000'
        lnbLi[i].style.background = '#fffc'
        lnbLi[i].style.transition = 'all 0.5s'
        lnbLi[i].addEventListener('mouseover', () => {
            lnbLi[i].style.background = '#dddc'
        })
        lnbLi[i].addEventListener('mouseout', () => {
            lnbLi[i].style.background = '#fffc'
        })
    }
} {
    let i = 0;
    darkMini.addEventListener('click', () => {
        //console.log(i)
        if (i == 0) {
            i = 1;
            lnbLi_a.forEach(el => el.classList.add('darkTxt'));
            darkMini.innerText = "Light Mode"
            darkMini.style.color = "#fff";
            wrap.style.transition = 'all 0.5s'
            wrap.style.background = '#1a1a1a';
            logoWhite();
            h3TitleColor('#fff');
            lnbColorDark();
            
        } else {
            i = 0;
            lnbLi_a.forEach(el => el.classList.remove('darkTxt'));
            darkMini.innerText = "Dark Mode"
            darkMini.style.color = "#333";
            wrap.style.transition = 'all 0.5s'
            wrap.style.background = '#fff';
            logoBlack();
            h3TitleColor('#000');
            lnbColorLight();
            
        }
    })
}

//우측 스크롤이동 li

const lconUl = document.querySelector('.lcon>ul');
const lconLi = document.querySelectorAll('.lcon>ul>li');
const scrollto1 = document.querySelector('.header');
const scrollto2 = document.querySelector('.intro');
const scrollto3 = document.querySelector('.info');
const scrollto4 = document.querySelector('.stat');
const scrollArr = [scrollto1, scrollto2, scrollto3, scrollto4];


$('.lcon>ul>li').on('click', () => {
    let _this = $(event.target);
    let _this_idx = _this.index();
    //console.log(scrollArr[_this_idx])

    let goto = abTop(scrollArr[_this_idx])
    let centergoto = goto - ((window.innerHeight - scrollArr[_this_idx].offsetHeight) / 2);
    window.scrollTo({
        top: centergoto,
        left: 0,
        behavior: 'smooth'
    });
})

function abTop(key) {
    let topreturn = window.pageYOffset + key.getBoundingClientRect().top;
    return topreturn;
}

window.addEventListener('scroll', () => {
    let scrollLocation = window.pageYOffset + (window.innerHeight / 2)

        if (scrollLocation >= abTop(scrollArr[3])) {
            lconLi[3].classList.add('locationOn')
            lconLi[2].classList.remove('locationOn')
            lconLi[1].classList.remove('locationOn')
            lconLi[0].classList.remove('locationOn')
        } else if (scrollLocation >= abTop(scrollArr[2])) {
            lconLi[2].classList.add('locationOn')
            lconLi[3].classList.remove('locationOn')
            lconLi[1].classList.remove('locationOn')
            lconLi[0].classList.remove('locationOn')
        } else if (scrollLocation >= abTop(scrollArr[1])) {
            lconLi[1].classList.add('locationOn')
            lconLi[2].classList.remove('locationOn')
            lconLi[3].classList.remove('locationOn')
            lconLi[0].classList.remove('locationOn')
        } else {
            lconLi[0].classList.add('locationOn')
            lconLi[2].classList.remove('locationOn')
            lconLi[1].classList.remove('locationOn')
            lconLi[3].classList.remove('locationOn')
        }

})

