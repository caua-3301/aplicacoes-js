/*Crie um projeto com apenas um botão com rótulo “Simular”. Esse botão deve estar associado a um evento que vai realizar uma simulação de um rolamento de dados comuns (com valores de 1 a 6) 1 milhão de vezes. Ao final, deve mostrar na tela quantas vezes cada um dos números apareceu na simulação. Use o método Math.random() pra gerar esse número entre 1 e 6, fazendo o arredondamento quando necessário.
*/

//Botao que ativa a funcao
const simularDados = document.querySelector("#sorte")
//Local que sera exibido
const exibirValores = document.querySelector("#exibir-dados")

//Definindo variaveis
let controle = 0
let limite = 1000000

//Lista com valores
const valores = {1:2, 2:0, 3:0, 4:0, 5:0, 6:0}

simularDados.addEventListener("click", () => {
    while (controle < limite){
        let valorRadom = parseInt(Math.random() * (7))

        for (let opcao in valores){
            if (valorRadom == opcao){
                valores[opcao]++
            }
        }
        controle++
    }
    

    exibirValores.innerHTML = ' '
    exibirValores.innerHTML = 'Em um milhão de jogadas (em um dado), temos: <br><br>'
    for (let valor in valores){
        exibirValores.innerHTML += `<br> ${valor} - ${valores[valor]} vezes; <br><br>  `
        controle = 0
    }

    exibirValores.innerHTML += '<br> <p style="text-align: center">Até a próxima !<p>'
})
