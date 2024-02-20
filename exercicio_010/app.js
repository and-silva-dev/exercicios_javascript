/* ----------------------------------------------------------------------------

Exercício: 010
Enunciado:
    Existem 4 áreas a cinza.
    Ao clicar numa das áreas a área clicada deve ficar com fundo
    amarelo e as restantes a vermelho.
---------------------------------------------------------------------------- */


const box = [...document.querySelectorAll('.box')];
box.map((elemento,index)=>{
elemento.addEventListener('click', (evt)=>{
vermelho();
elemento.style.backgroundColor='yellow'

})
})

function vermelho(){
    box.map((elemento)=>{
        elemento.style.backgroundColor ='red'
    })
    
    }
