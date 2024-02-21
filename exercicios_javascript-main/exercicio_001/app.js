/* ----------------------------------------------------------------------------

Exercício: 001
Enunciado: CONTADOR
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento. Ao clicar em cada
    um dos botões, o utilizador irá aumentar ou diminuir o valor em uma unidade.

---------------------------------------------------------------------------- */
const texto = document.querySelector(".text-warning");
const decremento = document.querySelector("#btn_decremento");
const incremento = document.querySelector("#btn_incremento");
let valor_decremento = 1;
let valor_incremento = 1;

if (decremento) {
  decremento.addEventListener("click", (evt) => {
    console.log(evt.target);
    let conversao = parseInt(texto.innerHTML);
    valor_decremento = --conversao;
    texto.innerHTML= valor_decremento;
    console.log(valor_decremento)
  });
  }
  if (incremento) {
    incremento.addEventListener("click", (evt) => {
      console.log(evt.target);
      let conversao = parseInt(texto.innerHTML);
      valor_incremento = ++conversao;
      texto.innerHTML= valor_incremento;
      console.log(valor_incremento)
    });
    }
  
  