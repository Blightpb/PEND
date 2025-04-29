//exercício 1
function ex1() {
    let nomes = ["isabele", "rafaela", "julia", "khalli", "Gabriella"];
    for (let nome of nomes) {
        console.log(nome);
    }
}

//exercício 2
function ex2() {
    let numeros = [2, 4, 6, 8, 10];
    let soma = 0;

    for (let numero of numeros) {
        soma += numero;
    }
    console.log("soma: ", soma);
}

//exercício 3
function ex3() {
    let pessoa = { nome: "Isabele", idade: 17, cidade: "c# do mundo" };
    for (let chave in pessoa) {
        console.log(`${chave}: ${pessoa[chave]}`);
    }
}

//exercício 4
function ex4() {
    let objeto = {
        nome: "isinha",
        idade: 17,
        cidade: "sorocaba"
    };
    let contador = 0;
    let quantidade;

    for (quantidade in objeto) {
        contador++;
    }
    console.log(contador);
}

//exercício 5
function ex5() {
    let nomes = ["isabele", "rafaela", "julia", "khalli", "Gabriella"];
    let separados = "";
    let nome;

    for (nome of nomes) {
        if (separados !== "") {
            separados += ", ";
        }
        separados += nome;
    }
    console.log(separados);
}

//exercício 6
function ex6() {
    let array = [5, "sei la", true, null];
    let valor;

    for (valor of array) {
        console.log(typeof valor);
    }
}

//exercício 7
function ex7() {
    //nn consegui  
}

//exercício 8
function ex8() {
    let dados = {
        nome: "Isinha",
        idade: 17,
    };
    let resultado = [];
    let chave;

    for (chave in dados) {
        console.log(`${chave}: ${dados[chave]}`);
    }
}

let opcao = prompt("Escolha um exercício de 1 a 8: ");
console.log()
    switch (opcao) {
        case "1":
            ex1();
            break;
            
        case "2":
            ex2();
            break;
            
        case "3":
            ex3();
            break;
            
        case "4":
            ex4();
            break;
            
        case "5":
            ex5();
            break;
            
        case "6":
            ex6();
            break;
            
        case "7":
            ex7();
            break;
            
        case "8":
            ex8();
            break;  
    }






