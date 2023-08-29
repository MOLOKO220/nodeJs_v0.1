// слайдер
$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4500,
    });
});

// слайдер 2 "2" потому что делался вторым ПРАВКИ ЗЛО
$(document).ready(function () {
    $('.slider2').slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 1000,
        dots: true,
        // autoplay: true,
        autoplaySpeed: 4500,
        responsive: [
            {
                breakpoint: 1125,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});
// кнопки faq
const FaqBtn = document.querySelectorAll('.five-section-mine__item-btn-wrapp');
const FaqInf = document.querySelectorAll('.five-section-mine__item-inf');
// кнопки меню
const scrilBtns = document.querySelectorAll('.scril__Btn');
// точки для скрола
const points = document.querySelectorAll('.point-title');
// бургер меню
const burgerBtn = document.querySelector('.burger-menu_btn');
const burgerManu = document.querySelector('.burger-manu');


// первый попап
// кнопки вызова попапов
const showPopapBtn = document.querySelectorAll('.show-popap');
// инпут показуши суммы
const investmentBtn = document.querySelector('.investment-input_main');
// вывод суммы
const investmentMain = document.querySelector('.investment-input_main>span');
// врапер с другими сумами 
const investmentOtherPrice = document.querySelector('.investment-input-ather-prise');
// разные суммы другие сумы 
const investmentIta = document.querySelectorAll('#investmentIta');
// стрелка в суме
const popupArrew = document.querySelector('.popup-arrew-img');
// первый попап
const popupOne = document.querySelector('.popup-wrapp');
// кнопка закрытия
const popupClosebtn = document.querySelector('.form-Close-btn');
// инпуты формы
const Name = document.getElementById('Name');
const LastName = document.getElementById('LastName');
const Phone = document.getElementById('Phone');
const Email = document.getElementById('Email');
const formCheckbox = document.querySelector('.form-popup-checkbox>input');
// кнопка вызова второго попапа
const NextBtn = document.querySelector('.popup-form-btn');

// второй попап
// показать языки
const LanguageChengBtn = document.querySelector('.Language-input_main');
// контейнер с выбором языка
const contenerLangung = document.querySelector('.diveren__Language');
// записовать выбраный язык 
const LanguageInput = document.querySelector('.Language-input_main>span');
// стрелка
const secondPopupArrew = document.querySelector('.leng-popup-arrew-img');
// кнопка закрытия 
const secondPopupCloseBtn = document.querySelector('.closeBtn');
// второй попап
const secondPopup = document.querySelector('.second-popup-wrapp');
// кнопки языув и банки 
const lengBtn = document.querySelectorAll('.leng-btn');
const backs = document.querySelectorAll('.second-popup-main__banck');
// кнопка собмит 
const SubmitBtn = document.querySelector('.Submit-Btn');

// попап 1
showPopapBtn.forEach((e) => {
    e.addEventListener('click', openClosePopup);
})
popupClosebtn.addEventListener('click', openClosePopup)
investmentBtn.addEventListener('click', showOtherPrice);
investmentIta.forEach((e) => {
    e.addEventListener('click', chengPrice);
});
// скрол
scrilBtns.forEach((e) => {
    e.addEventListener('click', scroling);
});
//  faq
FaqBtn.forEach((e) => {
    e.addEventListener('click', showFaqInf);
});
burgerBtn.addEventListener('click', showBurgerMenu);

//2попап вобор языка показ банка
lengBtn.forEach((e) => {
    e.addEventListener('click', showBank);
})
// закрыть 2 попап
secondPopupCloseBtn.addEventListener('click', openCloseSecondPopup)

// показать список языков
LanguageChengBtn.addEventListener('click', showLanguach);
function showLanguach() {
    contenerLangung.classList.toggle('display__none');
    secondPopupArrew.classList.toggle('popUp-arrow_activ');
}
function openCloseSecondPopup() {
    secondPopup.classList.toggle('display__none');
}

function showBank() {
    backs.forEach((e) => {
        if (e.classList[0] == this.id) {
            e.classList.toggle('display__none');
            SubmitBtn.classList.add('Submit-Btn_bank-on');
        }
        else if (e.classList.length == 2) {
            console.log(e);
            e.classList.toggle('display__none');
        }
    })
    LanguageInput.innerHTML = this.innerHTML;
    lengBtn.forEach((e) => {
        if (e.classList.contains('display__none')) {
            e.classList.toggle('display__none');
        }
    });
    this.classList.toggle('display__none');
    contenerLangung.classList.add('display__none');
}

// скрол
function scroling() {
    if (this.innerHTML == 'Home') {
        const piontHome = document.querySelector('html');
        piontHome.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
    points.forEach((e) => {
        if (e.innerHTML == this.innerHTML) {
            e.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    });
}
// faq отыкрыть
function showFaqInf() {

    this.children[1].classList.toggle('FAQ-arrow_activ');
    this.classList.toggle('FAQ-active');
    this.nextSibling.nextSibling.classList.toggle('display__none');
    FaqBtn.forEach((e) => {
        if (e != this) {
            e.classList.remove('FAQ-active');
            e.children[1].classList.remove('FAQ-arrow_activ');
            if (e.nextSibling.nextSibling.classList.contains('display__none')) {

            }
            else {
                e.nextSibling.nextSibling.classList.add('display__none');
            }
        }
    });
}
function showBurgerMenu() {
    this.classList.toggle('burger-menu_btn-active');
    burgerManu.classList.toggle('burger-manu-active');
}

// 1попаы
// выбор цены
function showOtherPrice() {
    investmentOtherPrice.classList.toggle('display__none');
    popupArrew.classList.toggle('popUp-arrow_activ');
}
function chengPrice() {
    investmentMain.innerHTML = this.innerHTML;
    this.classList.toggle('display__none');
    investmentIta.forEach((e) => {
        if (e != this) {
            if (e.classList[1] == 'display__none') {
                e.classList.toggle('display__none');
            }
        }
    })

    investmentOtherPrice.classList.add('display__none');

}
NextBtn.addEventListener('click', showSecondPopup);
// закрытия\открытие первого попап
function openClosePopup() {
    popupOne.classList.toggle('display__none');
}
function showSecondPopup() {
    if (Name.value != '') {
        if (LastName.value != '') {
            if (Phone.value != '') {
                if (Email.value != '') {
                    if (formCheckbox.checked) {
                        openClosePopup();
                        openCloseSecondPopup();
                    }
                }
            }
        }
    }
}

// удаление натписи "Country" из списка
const countryRemuv = document.querySelector('#countryRemuv');
countryRemuv.classList.add('display__none');