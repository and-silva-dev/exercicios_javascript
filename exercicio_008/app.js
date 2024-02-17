/* ----------------------------------------------------------------------------

Exercício: 008
Enunciado:
    Existem 5 botões, cada um com uma cor diferente do Bootstrap.
    A ideia é criar o código javascript que permita que o clique em cada
    um dos botões altere o texto acima para a cor de fundo do botão.
---------------------------------------------------------------------------- */
const texto = document.querySelector('.container h3')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const btn5 = document.querySelector('#btn5')

btn1.addEventListener('click',(event)=>{
   const cor = window.getComputedStyle(btn1).backgroundColor
   texto.style.color= cor;
})
btn2.addEventListener('click',(event)=>{
    const cor = window.getComputedStyle(btn2).backgroundColor
    texto.style.color= cor;
 })
 btn3.addEventListener('click',(event)=>{
    const cor = window.getComputedStyle(btn3).backgroundColor
    texto.style.color= cor;
 })
 btn4.addEventListener('click',(event)=>{
    const cor = window.getComputedStyle(btn4).backgroundColor
    texto.style.color= cor;
 })
 btn5.addEventListener('click',(event)=>{
    const cor = window.getComputedStyle(btn5).backgroundColor
    texto.style.color= cor;
 })
 
