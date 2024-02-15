/* ----------------------------------------------------------------------------

Exercício: 002
Enunciado: CONTADOR COM INTERVALO DE VALORES
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    O valor nunca poderá ser inferior a -10 ou superior a 10.

---------------------------------------------------------------------------- */
const btn_decremento = document.querySelector('#btn_decremento')
const btn_incremento = document.querySelector('#btn_incremento')
const texto = document.querySelector('.text-warning')

let valor_decremento =1;
let valor_incremento =1;
if(btn_decremento){
btn_decremento.addEventListener('click',(evt)=>{
console.log(evt.target);
if(valor_decremento > -10){
let conversao = parseInt(texto.innerHTML);
valor_decremento =  --conversao;
texto.innerHTML = valor_decremento;
}
 })
}

if(btn_incremento){
    btn_incremento.addEventListener('click',(evt)=>{
    console.log(evt.target);
    if(valor_incremento < 10){
    let conversao = parseInt(texto.innerHTML);
    valor_incremento =  ++conversao;
    texto.innerHTML = valor_incremento;
    }
     })
    }
