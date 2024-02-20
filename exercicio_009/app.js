// /* ----------------------------------------------------------------------------

// Exercício: 009
// Enunciado:
//     Exercício simples: O texto é branco e o elemento range vai servir para
//     alterar a transparência do texto. Do valor mais opaco à esquerda, até
//     à transparência total à direita.

//     NOTA: Deves definir os valores do range.
// ---------------------------------------------------------------------------- */
// const range = document.querySelector('#range')
// const texto = document.querySelector('.col h3')
// const cor= getComputedStyle(texto).color
// texto.style.color = 'rgba(255, 255, 255, 1)';

// console.log(cor)

// range.setAttribute('min', .0)
// range.setAttribute('max', 1)
// range.value = 0;
// console.log(texto.innerHTML)

// function mudarCor(entrada){
//     texto.style.color = `rgb(255,0,0,${entrada})`
   
//     }

// range.addEventListener('input',(event)=>{
//    const valor = event.target.value
//    mudarCor(valor)
// })


const range = document.querySelector('#range');
const texto = document.querySelector('.col h3');

// Definir a cor inicial explicitamente como branco

range.setAttribute('min', 0);
range.setAttribute('max', 1);
range.setAttribute('step', 0.01)
range.value = 0;

function mudarCor(entrada) {
    return texto.style.color = `rgba(255, 255, 255, ${entrada})`;
}

range.addEventListener('input', (event) => {
    const valor = event.target.value;
    mudarCor(valor);
    console.log(mudarCor(valor))
});



