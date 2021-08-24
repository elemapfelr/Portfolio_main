'use strict';

const wrap = document.querySelector('#wrap');
const gnbMenu = document.querySelector('.gnb>.menu');
const menuUl = document.querySelector('.menu>ul');
const menuLi = document.querySelectorAll('.menu>ul>li')
const menuLi_a = document.querySelectorAll('.menu>ul>li>a')
const darkBtn = document.querySelector('button.dark');
const h2Title = document.getElementsByClassName('title')
const footertxt = document.getElementsByClassName('footertxt')
const sec3_h2 = $('.section_3>.bannerTxt>h2')
const sec3_h3 = $('.section_3>.bannerTxt>h3')
const sec3_p = $('.section_3>.bannerTxt>p')


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

function h2TitleColor(key) {
    for (let i = 0; i < h2Title.length; i++) {
        h2Title[i].style.color = key
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
            closeBanner.css('color', '#fff');
            sec3_h2.css('color', '#fff');
            sec3_h3.css('color', '#bbb');
            sec3_p.css('color', '#ddd');
            logoWhite();
            h2TitleColor('#fff');
        } else {
            i = 0;
            menuLi_a.forEach(el => el.classList.remove('darkTxt'));
            darkBtn.innerText = "Dark Mode"
            darkBtn.style.color = "#333";
            wrap.style.transition = 'all 0.5s'
            wrap.style.background = '#fff';
            closeBanner.css('color', '#000');
            sec3_h2.css('color', '#000');
            sec3_h3.css('color', '#555');
            sec3_p.css('color', '#000');
            logoBlack();
            h2TitleColor('#000');
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
            closeBanner.css('color', '#fff');
            sec3_h2.css('color', '#fff');
            sec3_h3.css('color', '#bbb');
            sec3_p.css('color', '#ddd');
            logoWhite();
            h2TitleColor('#fff');
            lnbColorDark();
        } else {
            i = 0;
            lnbLi_a.forEach(el => el.classList.remove('darkTxt'));
            darkMini.innerText = "Dark Mode"
            darkMini.style.color = "#333";
            wrap.style.transition = 'all 0.5s'
            wrap.style.background = '#fff';
            closeBanner.css('color', '#000');
            sec3_h2.css('color', '#000');
            sec3_h3.css('color', '#555');
            sec3_p.css('color', '#000');
            logoBlack();
            h2TitleColor('#000');
            lnbColorLight();
        }
    })
}
//여기까지 다크모드관련

//section_1 관련
const sec1Li = $('.section_1>ul>li');
const liPtxt = $('.section_1>ul>li>p');

const bgArr = [];
for (let i = 0; i < sec1Li.length; i++) {
    bgArr.push('url(img/main/item_' + i + '.jpg) no-repeat 50% /cover')
    sec1Li.eq(i).css('background', bgArr[i])
}

sec1Li.on('mouseover', () => {
    let _this_index = $(event.currentTarget).index();
    let _this = $(event.currentTarget);

    // console.log('hover')
    if (window.innerWidth <= 767) {
        _this.addClass('target767').siblings().addClass('siblings767')
        liPtxt.eq(_this_index).addClass('targetTxt767')
    } else {
        _this.addClass('target1980').siblings().addClass('siblings1980')
        liPtxt.eq(_this_index).addClass('targetTxt1980')
    }
})

sec1Li.on('mouseout', () => {
    let _this = $(event.currentTarget);
    let _this_index = $(event.currentTarget).index();

    if (window.innerWidth <= 767) {
        sec1Li.removeClass('siblings767')
        sec1Li.removeClass('target767')
        liPtxt.removeClass('targetTxt767')
    } else {
        sec1Li.removeClass('siblings1980')
        sec1Li.removeClass('target1980')
        liPtxt.removeClass('targetTxt1980')
    }
})

//section_2 관련
const sec2 = $('.section_2');
const sec3 = $('.section_3');
const sec2_bcon = $('.section_2>.banner-parent>.bcon');
const bannercon = $('.banner-con');
const bannerconUl = $('.banner-con>ul');
const bannerconLi = $('.banner-con>ul>li');

const sec3_h2Name = $('.bannerTxt>h2.name');
const sec3_txt1 = $('.bannerTxt>p.txt1');
const sec3_h3dsc = $('.bannerTxt>h3.description');
const sec3_txt2 = $('.bannerTxt>p.txt2');
const sec3_h3render = $('.bannerTxt>h3.render');
const sec3_txt3 = $('.bannerTxt>p.txt3');
const sec3_txt4 = $('.bannerTxt>p.txt4');

function abTop(key) {
    let topreturn = window.pageYOffset + key.getBoundingClientRect().top;
    return topreturn;
}

sec1Li.on('click', () => {
    let _this_index = $(event.target).index();
    let _this = $(event.target);

    sec2.show(500);
    sec3.show(500);

    if (_this_index == 0) {
        bannerBg('speaker')
        popupBg('speaker')
        sec3_h2Name.text('ARCHI SPEAKER');
        sec3_txt1.text('건축물의 야간경관에서 모티브를 얻은 조명 겸 스피커');
        sec3_h3dsc.text('DESCRIPTION')
        sec3_txt2.text('Archi speaker는 도시의 밤을 모티브로 삼았다. 직선으로 이루어진 빌딩들과 각진 모서리, 은은하게 빛나는 수많은 조명들과 소음 등, 도시를 이루는 요소들을 재해석하여 스피커를 디자인 하였다.')
        sec3_h3render.text('RENDER')
        sec3_txt3.text('스피커의 본질인 소리가 나는 부분은 중앙에 위치하여 상단으로 소리가 울려퍼지며 각 모서리에 위치한 4개의 각진 조형은 내부에 조명장치가 있어 밤에 무드조명으로 활용이 가능하다.')
        sec3_txt4.text('플라스틱과 목재를 사용하여 소재에 대비를 줌으로써 형상이 단조롭지 않도록 유도함. 전원부 옆에 LED라이트가 위치하여 작동 여부를 확인 가능')
    }
    if (_this_index == 1) {
        bannerBg('onduler')
        popupBg('onduler')
        sec3_h2Name.text('ONDULER');
        sec3_txt1.text('파도치는 물결을 형상화한 보울 세트');
        sec3_h3dsc.text('DESCRIPTION')
        sec3_txt2.text('쌀이나 채소를 씻어내고 물을 버릴 때 식재들이 물과 함께 떨어지는 경우가 종종 있다. Onduler의 형태가 파도처럼 올라가 있는 것은 이를 방지하고, 손잡이로써 사용자가 제품을 편히 집을 수 있도록 하기 위함이다. 사용중이 아닌 보관시에도 Onduler의 독특한 색상 조합과 물결 무늬는 부엌의 분위기를 한층 활기 있게 바꿔줄 것이다.')
        sec3_h3render.text('RENDER')
        sec3_txt3.text('총 3개의 보울로 구성되어 있으며 각각 쌀, 야채, 믹싱볼 등으로 사용자가 필요한 용도에 따라 원하는 보울을 사용할 수 있다.')
        sec3_txt4.text('실물 제작은 3D프린트로 진행하여 후가공 후 도색작업을 하였다. 사용된 재료는 PLA이며 사이즈는 최대 240 x 235 x 111 (mm) 이다.')

    }
    if (_this_index == 2) {
        bannerBg('hanger')
        popupBg('hanger')
        sec3_h2Name.text('DOUBTRI');
        sec3_txt1.text('Doubtri 는‘Double’ 과 ‘Triangle’의 합성어로 삼각형 두개가 겹쳐진 형태를 의미하는 옷걸이이다.');
        sec3_h3dsc.text('DESCRIPTION')
        sec3_txt2.text('기존의 차량용 옷걸이는 차량의 진동으로 인한 소음발생이 소비자들의 주요 불만요소로 제기되어 왔다. 따라서 소음 발생을 줄이기 위해 관절부를 최소화하고 각 파트들이 연결되는 부분은 실리콘을 이용하여 충격을 완화시키도록 디자인하였다. ‘Doubtri’의 외형은 정면에서 봤을 때 삼각형 두개가 겹쳐진 형태인데, 기존 옷걸이의 형태를 크게 벗어나지 않으면서 모든 차량에 어울리도록 고급스러운 브러쉬드 메탈을 소재로 단순한 지오메트릭 디자인을 지향하여 탄생되었다. 옷걸이의 두께는 튼튼하면서도 차량의 헤드레스트에 부착하였을 때 뒷자리의 탑승자가 불편을 느끼지 않도록 최대한 얇은 형태를 띄고 있다.')
        sec3_h3render.text('RENDER')
        sec3_txt3.text('옷걸이 단독으로 사용하거나 마운트 브라켓을 이용하여 차량 헤드레스트 뒤에도 부착이 가능하다. 마운트 브라켓과 옷걸이의 연결부는 네오디뮴 자석을 이용한 고정방식을 사용하여 쉽게 탈부착 할 수 있도록 하였다.')
        sec3_txt4.text('옷을 거는 면에는 실리콘 패드가 부착되어 의류가 미끄러지는 것을 방지한다.')

    }
    if (_this_index == 3) {
        bannerBg('wheel')
        popupBg('wheel')
        sec3_h2Name.text('VERTICA WHEEL');
        sec3_txt1.text('커피를 저을때 표면의 물결이 소용돌이 치는것에서 모티브를 얻어 디자인하였다.');
        sec3_h3dsc.text('DESCRIPTION')
        sec3_txt2.text('Vertica wheel은 아두이노로 코딩된 탁상용 무드등이다. 블루투스 모듈이 내장되어 있기에 별도의 리모컨 없이 자신의 스마트폰을 통해 조명을 켜거나 끌 수 있다. 차량의 앰비언트 라이트와 같이 광섬유를 이용하여 빛이 곡선을 그리도록 디자인하였으며, 지나치게 밝은 조명을 지양하여 무드등으로서 은은한 조도를 유지하도록 하였다.')
        sec3_h3render.text('RENDER')
        sec3_txt3.text('이 조명에는 9가지 모드가 있어, 전용 컨트롤러 어플을 다운받아 변경할 수 있다. 조명 하단에는 마이크로 5핀 USB포트가 있는데, 이는 전원 및 충전포트로 18650배터리 4개가 내장된 VERTICA WHEEL을 선 없이도 원하는 위치에 가져다 놓고 사용할 수 있다. USB포트 옆의 작은 LED로 충전이 완료되었는지 확인이 가능하다. (충전완료시 파란색, 충전중일 경우 빨간색)')
        sec3_txt4.text('')

    }
    if (_this_index == 4) {
        bannerBg('desk')
        popupBg('desk')
        sec3_h2Name.text('CENTER FASCIA DESK');
        sec3_txt1.text('자동차의 센터페시아와 같이 사용자 중심의 다양한 기능을 추가한 데스크');
        sec3_h3dsc.text('DESCRIPTION')
        sec3_txt2.text('자동차의 센터페시아에는 센터콘솔 및  오디오·에어컨·히터의 컨트롤러, 내비게이터, 송풍구, 시거잭과 재떨이, 컵홀더 등이 설치되어 있다. 이를 데스크에 접목하여 블루투스 스피커, 멀티탭, 무선충전기, 컵홀더 등의 다양한 기능을 추가할 수 있다.')
        sec3_h3render.text('RENDER')
        sec3_txt3.text('나무와 철재, 황동을 사용하여 클래식한 느낌을 주었으며 중앙부가 들어가 있어 사용자를 감싸는 형태로 디자인 하였다. 집안에 놓이는 가구는 집의 형태에 맞게 제작되어야 하기 때문에 지나치게 유기적인 형태는 피하도록 하였다.')
        sec3_txt4.text('')

    }
    if (_this_index == 5) {
        bannerBg('battery')
        popupBg('battery')
        sec3_h2Name.text('ONGO');
        sec3_txt1.text('다이얼로 스마트폰의 음량을 조절할 수 있는 무선충전 보조배터리');
        sec3_h3dsc.text('DESCRIPTION')
        sec3_txt2.text('온고지신. 옛것을 익히고 새것을 배우다. 이 제품은 옛날 오디오에 쓰이던 다이얼로부터 영감을 받아 디자인을 기획하였다. 스마트폰의 볼륨조절 버튼은 디지털식으로 누를때 마다 일정 단계만큼 소리가 올라가거나 줄어든다. 이 때문에 음량을 사용자가 원하는만큼 살짝 작게 줄이거나 키우는것이 어렵다. 아날로그 방식의 노브는 정확한 수치를 나타내지는 못하지만 부드럽게 돌아가며 사용자가 원하는 만큼의 소리를 들을 수 있도록 세밀한 조정이 가능하다.')
        sec3_h3render.text('KEYWORD')
        sec3_txt3.text('COMPACT SIZE, WIRELESS, KNOB, BLUETOOTH')
        sec3_txt4.text('')
    }
    if (_this_index == 6) {
        bannerBg('card')
        popupBg('card')
        sec3_h2Name.text('TIK');
        sec3_txt1.text('TIK은 ‘Tools In my Card’의 줄임말과 카드를 꺼낼 때 나는 소리의 중의적 의미를 담고 있다.');
        sec3_h3dsc.text('DESCRIPTION')
        sec3_txt2.text('기존의 공구들은 부피가 크고 항상 휴대할 수 없어 막상 필요할 때 찾지 못하거나 사용하지 못할 경우가 많다. 그러한 문제를 해결하기 위해 휴대할 수 있는 카드형 공구를 만들어보면 어떨까 하는 생각에서 시작하여 TIK을 디자인하였다. 휴대성을 강조한 제품이기에 지갑에 항상 가지고 다니는 신용카드의 두께와 크기를 그대로 적용하였으며, 공구로서 사용하는데 문제가 없도록 드라이버, 렌치, 병따개, 와이어 커터, 컴퍼스 등의 기능을 가지고 있다. 소재로는 스테인리스 스틸을 사용하여 견고함 또한 갖추었다.')
        sec3_h3render.text('RENDER')
        sec3_txt3.text('드라이버는 중간부에 위치하여 수납되어 있다가 필요할때 꺼내서 조립하여 사용한다. 큰 힘이 필요한 공구는 3장을 겹쳐서 사용하게 되어 있으며, 와이어 커터의 경우 내부로 파여 있어 손가락 부상을 방지한다.')
        sec3_txt4.text('')
    }
    setTimeout(function () {
        let goSec3 = document.querySelector('.section_3');
        let goto = abTop(goSec3)
        let location = goto - ((window.innerHeight - goSec3.offsetHeight) / 2);
        window.scrollTo({
            top: location,
            left: 0,
            behavior: 'smooth'
        });
    }, 500)
});

sec2_bcon.on('click', () => {
    const sec2_arrowBtn = sec2_bcon.find('span.arrow');
    let _eTarget = event.target;

    sec2_arrowBtn.each((idx, el) => {
        if (el == _eTarget) {
            if (idx == 0) {
                let liFirst = $('.banner-con>ul>li').first();
                bannerconUl.append(liFirst);
                bannerconLi.hide().show(200);
            } else {
                let liLast = $('.banner-con>ul>li').last();
                bannerconUl.prepend(liLast);
                bannerconLi.hide().show(200)
            }
        }
    })
})

function bannerBg(key) {
    const bgArr2 = [];
    for (let i = 0; i < bannerconLi.length; i++) {
        bgArr2.push('url(img/industrial/' + key + '_' + i + '.jpg) no-repeat 50% /cover')
        bannerconLi.eq(i).css('background', bgArr2[i])
    }
}

const closeBanner = $('.banner-parent>span.closeBanner');
closeBanner.on('click', () => {
    sec2.hide(500);
    sec3.hide(500);
})



const popup = $('.popup')
const lightSub = document.querySelector('.lightBox-sub')
const subCon = document.querySelector('.sub-con')
const closeBtn = document.querySelector('span.close')
const subConImg = $('.sub-con>img')
const bannerArrow = $('.bannerArrow')
const bannerArrowLeft = $('.bannerArrowLeft')
const bannerArrowRight = $('.bannerArrowRight')

function popupBg(key) {
    for (let i = 0; i < bannerconLi.length; i++) {
        bannerconLi[i].addEventListener('click', () => {
            subConImg.attr({
                'src': 'img/industrial/big/' + key + '_' + i + '.jpg',
                'alt': 'product img' + i
            });
            popup.fadeIn(300);
        });
    }
}
closeBtn.addEventListener('click', () => {
    popup.fadeOut(300);
})

// function popupleft(key) {
//     for (let i = 0; i < bannerconLi.length; i++) {
//         bannerArrowLeft.on('click', () => {
//             let left = i - 1;
//             if (left <= -1) {
//                 subConImg.attr({
//                     'src': 'img/industrial/big/' + key + '_' + bannerconLi.length - 1 + '.jpg',
//                     'alt': 'product img' + bannerconLi.length - 1
//                 })
//                 left = bannerconLi.length - 1;
//             } else {
//                 subConImg.attr({
//                     'src': 'img/industrial/big/' + key + '_' + left + '.jpg',
//                     'alt': 'product img' + left
//                 })
//             }
//         })
//     }
// }

// function popupright(key) {
//     for (let i = 0; i < bannerconLi.length; i++) {
//         bannerArrowRight.on('click', () => {
//             let right = i + 1;
//             if (right > bannerconLi.length - 1) {
//                 subConImg.attr({
//                     'src': 'img/industrial/big/' + key + '_' + 0 + '.jpg',
//                     'alt': 'product img' + 0
//                 })
//                 right = 0;
//             } else {
//                 subConImg.attr({
//                     'src': 'img/industrial/big/' + key + '_' + right + '.jpg',
//                     'alt': 'product img' + right
//                 })
//             }
//         })
//     }
// }