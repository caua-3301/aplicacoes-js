/*Crie um novo projeto com uma página que tenha 1 botão com o rótulo "Gerar". Para essa questão, crie um ouvinte de evento (addEventListener) no referido botão que realiza uma chamada para uma função gerarNumero() que retorna um número aleatório entre 1 e 100 usando a função Math.random(). Mostre todos os números gerados, para o usuário em elementos <li> dentro de um <ul>.*/

//Botão gerar
const botaoAtivar = document.querySelector("#gerar_numero")
//Local que será exibido os números (ul)
const printarNumero = document.querySelector("#exibir")

function gerarNumero() {
    //Gerando um numero inteiro entre 0 e 100
    let numeroAleatorio = parseInt(Math.random() * (100 - 0))
    //Criando novo item
    let novoItemLista = document.createElement("li")
    //Adicionando uma classe
    novoItemLista.classList.add("itemlista")
    novoItemLista.innerHTML = `${numeroAleatorio}`

    printarNumero.appendChild(novoItemLista)
}

botaoAtivar.addEventListener("click", () => gerarNumero())