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
            logoWhite();
            h3TitleColor('#fff');
            //mainImg.style.background='url(img/signature_big_size_white.png) no-repeat 50% /cover';
        } else {
            i = 0;
            menuLi_a.forEach(el => el.classList.remove('darkTxt'));
            darkBtn.innerText = "Dark Mode"
            darkBtn.style.color = "#333";
            wrap.style.transition = 'all 0.5s'
            wrap.style.background = '#fff';
            logoBlack();
            h3TitleColor('#000');
            //mainImg.style.background='url(img/signature_big_size_black.png) no-repeat 50% /cover';
        }
    })
}

//lnb ??????
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
            logoWhite();
            h3TitleColor('#fff');
            lnbColorDark();
            //mainImg.style.background='url(img/signature_big_size_white.png) no-repeat 50% /cover';
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
            //mainImg.style.background='url(img/signature_big_size_black.png) no-repeat 50% /cover';
        }
    })
}

{
    //section_2 li ?????? ???????????? ??? li??? ?????? ??????
    const sec2Items = document.querySelectorAll('.section_2>ul>li');

    for (let i = 0; i < sec2Items.length; i++) {
        if (window.innerWidth <= 639) {
            let rand_0_200 = Math.floor(Math.random() * 200);
            sec2Items[i].style.height = `${100+rand_0_200}px`;
        } else {
            let rand_0_300 = Math.floor(Math.random() * 300);
            sec2Items[i].style.height = `${300+rand_0_300}px`;
        }
    }

    const sec2ImgArr = []
    for (let i = 0; i < sec2Items.length; i++) {
        sec2ImgArr.push('url(img/main/item_' + i + '.jpg) no-repeat 50% /cover')
        sec2Items[i].style.background = sec2ImgArr[i];
    }
}

//????????? ?????? ??? ??????
const $layerPopup = $('.layerPopup');
const $btnLayerPopupClose = $('.layerBox>span.btnPopupClose');
const layerPopup = document.querySelector('.layerPopup');
const btnLayerPopupClose = document.querySelector('.layerBox>span.btnPopupClose');

//?????? ??????????????? ??????
window.onload = function(){
    setTimeout(layerPopupShow, 300);
   };

//??????????????? ?????? ?????? ??????
btnLayerPopupClose.addEventListener('click',()=>{
    layerPopupHide();
});

//??????????????? ?????? ??????
// function layerPopupShow() {
//     layerPopup.style.display = 'block'
//     layerPopup.style.zIndex = '999'
// }
function layerPopupShow() {
    $layerPopup.show(500);
}

//??????????????? ??????
// function layerPopupHide() {
//     layerPopup.style.display = 'none'
// }
function layerPopupHide() {
    $layerPopup.hide(500);
}