/* ----------------------------------------------------------------------------

Exercício: 006
Enunciado:
    Existem 3 botões no layout. Cada botão está associado a uma área de
    informação. O objetivo é criar a lógica que permite apresentar cada
    uma das áreas de acordo com o botão clicado.
    A área de informação um deve estar visível por padrão.

    NOTA: quando uma área é apresentada, as outras devem ficar escondidas
---------------------------------------------------------------------------- */
const tab1 = document.querySelector("#tab1");
const tab2 = document.querySelector("#tab2");
const tab3 = document.querySelector("#tab3");
const info1 = document.querySelector("#info1");
const info2 = document.querySelector("#info2");
const info3 = document.querySelector("#info3");

tab1.addEventListener("click", (event) => {reset()
  reset();
  info2.classList.add("dpnone");
  info3.classList.add("dpnone");
});

tab2.addEventListener("click", (event) => {
  reset();
  info1.classList.add("dpnone");
  info3.classList.add("dpnone");
});
tab3.addEventListener("click", (event) => {
  reset();
  info1.classList.add("dpnone");
  info2.classList.add("dpnone");
});

function reset() {
  info1.classList.remove("dpnone");
  info2.classList.remove("dpnone");
  info3.classList.remove("dpnone");
}
