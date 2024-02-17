/* ----------------------------------------------------------------------------

Exercício: 003
Enunciado: CONTADOR COM CORES PARA NEGATIVOS, ZERO E POSITIVOS
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    No caso do valor ser zero o texto deve ser branco.
    No caso do valor ser negativo o texto deve ser vermelho puro.
    No caso do valor ser positivo o texto deve ser verde puro.

---------------------------------------------------------------------------- */
// const btn_decremento = document.querySelector("#btn_decremento");
// const btn_incremento = document.querySelector("#btn_incremento");
// const valor_texto = document.querySelector("#valor");
// let valor = 1;
// if (btn_decremento) {
//   btn_decremento.addEventListener("click", () => {
//     valor_texto.innerHTML = valor;
//     --valor;

//     console.log(valor);
//   });
// }
// if (btn_incremento) {
//   btn_incremento.addEventListener("click", () => {
//     valor_texto.innerHTML = valor;
//     ++valor;
//     console.log(valor);
//   });
// }

const texto = document.querySelector("#valor");
const decremento = document.querySelector("#btn_decremento");
const incremento = document.querySelector("#btn_incremento");
let valor = 1;

if (decremento) {
  decremento.addEventListener("click", (evt) => {
    console.log(evt.target);
    let conversao = parseInt(texto.innerHTML);
    valor = --conversao;
    texto.innerHTML = valor;
    definirCor();
    console.log(valor);
  });
}
if (incremento) {
  incremento.addEventListener("click", (evt) => {
    console.log(evt.target);
    let conversao = parseInt(texto.innerHTML);
    valor = ++conversao;
    texto.innerHTML = valor;
    console.log(valor);
    definirCor();
  });
}
const definirCor=()=>{
  if (valor > 0) {
    texto.style.color = "green";
  }
  else if (valor < 0) {
  texto.style.color = "red";
} else{
  texto.style.color = "white";
}

}