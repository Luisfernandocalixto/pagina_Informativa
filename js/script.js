const nav = document.querySelector('#nav') // selector para nav => id='nav'
const abrir = document.querySelector('#abrir') // abrir el sidebar => id="abrir"
const cerrar = document.querySelector('#cerrar') // cerrar el sidebar => id="cerrar"
const clickQuestions = document.querySelectorAll('.articulo__pregunta') // abrir la seccion de cada pregunta => id="articulo__pregunta"


abrir.addEventListener('click', () => {
    nav.classList.add("visible");
})
cerrar.addEventListener('click', () => {
    nav.classList.remove("visible");
})


/* Preguntas */
clickQuestions.forEach(clickQuestion => {

    clickQuestion.addEventListener('click', () => {
        const arrow = clickQuestion.children[0];
        arrow.classList.toggle('articulo__arrow--rotate');

        const answerContainer = clickQuestion.nextElementSibling;

        answerContainer.classList.toggle('articulo__content--mostrar');

    })

});


$(function () {
    $('.carousel-item').eq(0).addClass('active');
    var total = $('.carousel-item').length;
    var current = 0;
    $('#moveRight').on('click', function () {
        var next = current;
        current = current + 1;
        setSlide(next, current);
    });
    $('#moveLeft').on('click', function () {
        var prev = current;
        current = current - 1;
        setSlide(prev, current);
    });
    function setSlide(prev, next) {
        var slide = current;
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
