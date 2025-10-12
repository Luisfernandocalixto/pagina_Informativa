const nav = document.querySelector('#nav') // selector for nav => id='nav'
const openMenu = document.querySelector('#openMenu') // open Menu sidebar => id="openMenu"
const closeMenu = document.querySelector('#closeMenu') // close Menu sidebar => id="closeMenu"
const clickQuestions = document.querySelectorAll('.article__question') // open the section of an question => id="article__question"


openMenu.addEventListener('click', () => {
    nav.classList.add("visible");
})
closeMenu.addEventListener('click', () => {
    nav.classList.remove("visible");
})


/* Questions */
clickQuestions.forEach(clickQuestion => {

    clickQuestion.addEventListener('click', () => {
        const arrow = clickQuestion.children[0];
        arrow.classList.toggle('article__arrow--rotate');

        const answerContainer = clickQuestion.nextElementSibling;

        answerContainer.classList.toggle('article__content--show');

    })

});


$(function () {
    $('.carousel-item').eq(0).addClass('active');
    let total = $('.carousel-item').length;
    let current = 0;
    $('#moveRight').on('click', function () {
        let next = current;
        current = current + 1;
        setSlide(next, current);
    });
    $('#moveLeft').on('click', function () {
        let prev = current;
        current = current - 1;
        setSlide(prev, current);
    });
    function setSlide(prev, next) {
        let slide = current;
        if (next > total - 1) {
            slide = 0;
            current = 0;
        }
        if (next < 0) {
            slide = total - 1;
            current = total - 1;
        }
        $('.carousel-item').eq(prev).removeClass('active');
        $('.carousel-item').eq(slide).addClass('active');
        setTimeout(function () {

        }, 800);



    }
});
