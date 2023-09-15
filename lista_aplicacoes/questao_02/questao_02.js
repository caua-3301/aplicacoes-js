/*Crie um novo projeto com uma página que tenha 2 campos de texto com os seguintes rótulos: base e expoente, e 1 botão com o rótulo "Calcular". Para essa questão, crie um ouvinte de evento no referido botão que busca os valores digitados e realiza uma chamada para uma função calcularPotencia(base, expoente) que você irá implementar usando arrow function e que invoca a função Math.pow() e mostra o número gerado para o usuário em uma <div>.*/

const resultado = document.querySelector("#resultado")
//Botao que ativa a função
const ativarFuncao = document.querySelector("#calcular")

//Arrow function que realiza o calculo
let valor = (base, expoente) => Math.pow(base, expoente) 

//Criando div :)
let divPrintar = document.createElement("div")
divPrintar.classList.add("saida")

//Chamando a função atrves de um evento click no botao
ativarFuncao.addEventListener("click", ()=> calcularPotencia())

function calcularPotencia() {
    let base = document.querySelector("#base")
    let expoente = document.querySelector("#expoente")

    let potencia = valor(base.value, expoente.value)
    divPrintar.innerHTML = potencia

    base.value = ' '
    expoente.value = ' '

    base.focus()

    resultado.appendChild(divPrintar)
}