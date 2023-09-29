/*Crie um projeto com uma página contendo um campo de texto onde o usuário vai digitar uma temperatura em escala Celsius. O que deve ser feito:
Crie duas funções, uma para converter a temperatura para Fahrenheit (converterFahrenheit) e outra para converter para Kelvin (converterKelvin).
Crie um ouvinte de evento 'keyup' no campo de texto para atualizar os elementos do tipo span #temp-fahrenheit e #temp-kelvin com as temperaturas nas respectivas escalas à medida que o usuário digita um valor numérico.
Caso o usuário não tenha digitado nada ou o valor seja inválido, o valor das temperaturas após a conversão deve ser um “-”, logo abaixo deve existir uma mensagem pedindo para o usuário digitar um valo
*/

//Corpo da pagina
const corpoPagina = document.getElementsByTagName("body")[0]
//Exibir erro
const exibirErro = document.querySelector("#error")
//Botao ativa funcao
const temperaturaEmCelcius = document.querySelector("#temp_c")
//Campos de reposta kelvin e Fah
const exibirKelvin = document.querySelector("#temp-kelvin")
const exibirFahn = document.querySelector("#temp-fahrenheit")

function converterKelvin(temperaturaEmCelcius) {
    let tempEmKelvin = Number(temperaturaEmCelcius.value) + 273
    exibirKelvin.innerHTML = `Em Kelvin = ${tempEmKelvin} ºK`
}

function converterFahrenheit(temperaturaEmCelcius) {
    let tempEmFah = (Number(temperaturaEmCelcius.value)*1.8) + 32
    exibirFahn.innerHTML = `Em Fahrenheit = ${tempEmFah.toFixed(2)} ºF`
}

temperaturaEmCelcius.addEventListener("keyup", function(event) {

 
    if (event.key === " " && temperaturaEmCelcius.value != 0){
        converterKelvin(temperaturaEmCelcius)
        converterFahrenheit(temperaturaEmCelcius)

        //Apenas um detalhe -----------------------
        if (temperaturaEmCelcius.value >= 30){
            corpoPagina.classList.remove("frio")
            corpoPagina.classList.add("quente")
        }
        else{
            corpoPagina.classList.remove("quente")
            corpoPagina.classList.add("frio")
        }

        temperaturaEmCelcius.value = ' '
        exibirErro.innerHTML = ' '
    }
    else if (event.key === " "){
        exibirKelvin.innerHTML = 'Em Kelvin = "-"'
        exibirFahn.innerHTML = 'Em Fahrenheit = "-"'

        temperaturaEmCelcius.value = ' '
        exibirErro.innerHTML = "Informe um valor válido!"
    }

    temperaturaEmCelcius.focus()
    
})




