//exercício 1
function ex1() {
    let numero = prompt("Digite um valor: ");

    if (numero > 0) {
        console.log("o número é positivo")
    }
    else {
        console.log("o número é negativo")
    }
}

//exercício 2
function ex2() {
    let numero = prompt("Insira um número");

    if (numero % 2 == 0) {
        console.log("o número é par")
    }
    else {
        console.log("o número é impar")
    }
}

//exercício 3
function ex3() {
    let letra = prompt("Escolha uma letra entre M, T e N")

    if (letra == "M") {
        console.log("Bom dia")
    }
    else if (letra == "T") {
        console.log("Boa tarde")
    }
    else if (letra == "N") {
        console.log("Boa noite")
    }
    else {
        console.log("Valor inválido")
    }
}

//exercício 4
function ex4() {
    let numero1 = prompt("Insira um número: ");
    let numero2 = prompt("Insira outro número: ");

    if (numero1 > numero2) {
        console.log("maior número: " + numero1)
    }
    else if (numero1 < numero2) {
        console.log("maior número: " + numero2)
    }
    else {
        console.log("São iguais")
    }
}

//exercício 5

//exercício 6
function ex6() {
    let opcao = prompt("Escolha uma opção:\n1-Início\n2-Sobre\n3-Sair");
    console.log()

    switch (opcao) {
        case "1":
            console.log("Início");
            break;
        case "2":
            console.log("Sobre");
            break;
        case "3":
            console.log("Sair");
            break;
    }
}

//exercício 7
function ex7() {
    let numero = 1;
    while (numero < 6) {
        console.log(numero);
        numero += 1;
    }
}

//exercício 8

//exercício 9
function ex9() {
    for (let i = 1; i < 11; i++) {
        console.log(i);
    }
}

//exercício 10

//exercício 11

//exercício 12
function ex12() {
    let array = ["Rafa", "Isinha", "Júlia Matos"];

    for (let nomes of array) {
        console.log(nomes);
    }
}

//exercício 13

//exercício 14

//exercício 15

//exercício 16

function ex16() {
    let nota = prompt("Insira a nota: ")
    if (nota <= 6) {
        console.log("reprovado")
    }
    else if (nota <= 7.9) {
        console.log("Recuperação")
    }
    else if (nota => 8) {
        console.log("Aprovado")
    }
    else {
        console.log("Nota inválida")
    }
}

//exercício 17

function ex17() {
    let numero = prompt("Insira um número")

    for (let i = 0; i <= 20; i++) {
        console.log(numero * i)
    }
}


let opcao = prompt("Escolha um exercício de 1 a 20: ");
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
            
        case "9":
            ex9();
            break;
            
        case "10":
            ex10();
            break;
        
        case "11":
            ex11();
            break;
            
        case "12":
            ex12();
            break;
            
        case "13":
            ex13();
            break;
            
        case "14":
            ex14();
            break;
            
        case "15":
            ex15();
            break;
            
        case "16":
            ex16();
            break;
            
        case "17":
            ex17();
            break;
            
        case "18":
            ex18();
            break;
            
        case "19":
            ex19();
            break;
            
        case "20":
            ex20();
            break;
        
            
    }


