const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const clickMenusidebar = $('.js-header__navbar-icon-menu');
const showSidebar = $('.js-side-bar');
const clickClosesidebar = $('.js-side-bar-icon-close');

function showSideBaritem () {
    showSidebar.classList.add('open');
}

function hideSideBaritem () {
    showSidebar.classList.remove('open');
}

clickMenusidebar.addEventListener('click', showSideBaritem);

clickClosesidebar.addEventListener('click', hideSideBaritem);

// Slider img
const lines = $$('.js-click-line');
const imgs = $$('.js-img-item');

lines.forEach((line, index) => {
    const img = imgs[index];

    line.onclick = function () {

        $(".contact-content__three-col-right-line-one.active").classList.remove("active");
        // $(".contact-content__three-col-right-img-item-1.active").classList.remove("active");

        this.classList.add("active");   
        // img.classList.add("active");
    }
});
