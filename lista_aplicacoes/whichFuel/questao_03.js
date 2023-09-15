/*Crie um novo projeto com uma página e dois campos para que o usuário possa digitar o valor atual da gasolina e do álcool e um botão para realizar o cálculo e informar ao usuário qual o melhor combustível para abastecer no momento, crie uma função chamada calcularMelhorCombustivel que recebe os dois valores e retorna 0 para gasolina e 1 para álcool.
*/

//Botao ativa função
const ativaFuncao = document.querySelector("#calcular")
//Local em que o resuktado sera exibido
const exibirOpcao = document.querySelector("#resultado")

//Valores
let precoAlcool = document.querySelector("#alcool")
let precoGasolina = document.querySelector("#gasolina")

let calcularMelhorCombustivel = function (precoAlcool, precoGasolina) {
    
    let divisaoPreco = precoAlcool.value/precoGasolina.value

    //Verificando qual é melhor
    if(divisaoPreco > .7){
        return 0
    }
    return 1
}

//Chamada da função calcular melhor combustivel
ativaFuncao.addEventListener("click", () => {
    let melhorOpcao = calcularMelhorCombustivel(precoAlcool, precoGasolina)
    if (melhorOpcao){
        exibirOpcao.innerHTML = 'O melhor é comprar uma bike, zoas, é o ALCOOL'
    }
    else{
        exibirOpcao.innerHTML = 'O melhor é comprar uma bike, zoas, é a GASOLINA'
    }

    precoAlcool.value = ' '
    precoGasolina.value = ' '

    precoAlcool.focus()
})
