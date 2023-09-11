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
