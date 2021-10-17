const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const clickMenusidebar = $('.js-header__navbar-icon-menu');
const showSidebar = $('.js-side-bar');
const clickClosesidebar = $('.js-side-bar-icon-close');

function showSideBaritem() {
    showSidebar.classList.add('open');
}

function hideSideBaritem() {
    showSidebar.classList.remove('open');
}

clickMenusidebar.addEventListener('click', showSideBaritem);

clickClosesidebar.addEventListener('click', hideSideBaritem);

// Slider img
const lines = $$('.js-click-line');
const imgs = $$('.js-img-three');

lines.forEach((line, index) => {
    const img = imgs[index];

    line.onclick = function () {

        $(".contact-content__three-col-right-line-one.active").classList.remove("active");
        $(".js-img-three.active").classList.remove("active");

        this.classList.add("active");
        img.classList.add("active");
    }
});


// Slide animation

// var i = 0;
// var changeImg = function () {

//     imgs.forEach((imgItem, index) => {
//         if (imgItem.src) {
//             index++;
//         }
//     });
// }

// changeImg();

// setInterval(changeImg, 1000);


// time free

var daysEl = $('.js-time-days');
var hoursEl = $('.js-time-hours');
var minutesEl = $('.js-time-minutes');
var secondsEl = $('.js-time-seconds');

var newDate = '10 October 2022';

function timeDown() {
    var newDateDay = new Date(newDate);
    var currentDay = new Date();

    var totalsSecond = (newDateDay - currentDay) / 1000;

    var days = Math.floor(totalsSecond / 3600 / 24);
    var hours = Math.floor((totalsSecond / 3600) % 24);
    var minutes = Math.floor((totalsSecond / 60) % 24);
    var seconds = Math.floor(totalsSecond % 60);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    if (time < 10) {
        return `0${time}`;
    } else {
        return time;
    }
}

timeDown();

setInterval(timeDown, 1000);


// Side bar mobile
const sideBarMB = $('.js-side-bar-mb');
const closeSidebarMB = $('.js-icon-close-mb');

clickMenusidebar.addEventListener("click", function () {
    sideBarMB.classList.add('open');
});

closeSidebarMB.addEventListener("click", function () {
    sideBarMB.classList.remove('open');
})
