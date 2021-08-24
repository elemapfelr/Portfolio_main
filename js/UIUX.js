'use strict';

const wrap = document.querySelector('#wrap');
const gnbMenu = document.querySelector('.gnb>.menu');
const menuUl = document.querySelector('.menu>ul');
const menuLi = document.querySelectorAll('.menu>ul>li')
const menuLi_a = document.querySelectorAll('.menu>ul>li>a')
const darkBtn = document.querySelector('button.dark');
const h3Title = document.getElementsByClassName('title')
const footertxt = document.getElementsByClassName('footertxt')

const h3Name = $('.h3name')
const sec2_txt1=$('.txt1')
const sec2_txt2=$('.txt2')


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

function h3TitleColor(key) {
    for (let i = 0; i < h3Title.length; i++) {
        h3Title[i].style.color = key
    }
    for (let i = 0; i < footertxt.length; i++) {
        footertxt[i].style.color = key
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
            h3Name.css('color','#fff');
            sec2_txt1.css('color','#ccc');
            sec2_txt2.css('color','#fff');
            logoWhite();
            h3TitleColor('#fff');
        } else {
            i = 0;
            menuLi_a.forEach(el => el.classList.remove('darkTxt'));
            darkBtn.innerText = "Dark Mode"
            darkBtn.style.color = "#333";
            wrap.style.transition = 'all 0.5s'
            wrap.style.background = '#fff';
            h3Name.css('color','#000');
            sec2_txt1.css('color','#555');
            sec2_txt2.css('color','#000');
            logoBlack();
            h3TitleColor('#000');
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
        console.log(i)
        if (i == 0) {
            i = 1;
            lnbLi_a.forEach(el => el.classList.add('darkTxt'));
            darkMini.innerText = "Light Mode"
            darkMini.style.color = "#fff";
            wrap.style.transition = 'all 0.5s'
            wrap.style.background = '#1a1a1a';
            h3Name.css('color','#fff');
            sec2_txt1.css('color','#ccc');
            sec2_txt2.css('color','#fff');
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
            h3Name.css('color','#000');
            sec2_txt1.css('color','#555');
            sec2_txt2.css('color','#000');
            logoBlack();
            h3TitleColor('#000');
            lnbColorLight();
        }
    })
}
//여기까지 다크모드관련

const sec2=$('.section.sec2')
const sec3=$('.section.sec3')

window.addEventListener('resize',()=>{
    resizeAOS();
})

resizeAOS();

function resizeAOS(){
    if(window.innerWidth<=767){
        sec2.attr('data-aos-anchor-placement','top-center')
        sec3.attr('data-aos-anchor-placement','top-center')
    }else{
        sec2.attr('data-aos-anchor-placement','center-bottom')
        sec3.attr('data-aos-anchor-placement','center-bottom')
    }
}