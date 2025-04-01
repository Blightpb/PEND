//exercício 1
{
    let x = 10;

    console.log("exercício 1:");
    console.log(x);

    console.log();
}

//exercício 2
{
    let a = 20;
    let b = 5;

    console.log("exercício 2: ");
    console.log("soma:", a + b);
    console.log("subtração:", a - b);
    console.log("multiplicação:", a * b);
    console.log("divisão:", a / b);
    console.log("resto da divisão:", a % b);

    console.log();

}

// exercício 3
{
    let num = -15;

    console.log("exercício 3:");
    console.log(-num)

    console.log();
}

// exercício 4

{
    let count = 5;

    console.log("exercício 4:");
    console.log(++count);
    console.log(--count);

    console.log();
}

// exercício 5

{
    let x = 10;

    console.log("exercício 5:");

    console.log(x += 5);
    console.log(x -= 3);
    console.log(x *= 2);
    console.log(x /= 4);
    console.log(x %= 3);

    console.log();
}

// exercício 6

{
    let p = true;
    let q = false;

    console.log("exercício 6:");
    console.log(p && q);
    console.log(p || q);
    console.log(!p);
    console.log(!q);

    console.log();
}

//exercício 7
/*{
    console.log("exercício 7:");
    console.log(0 || "Hello");
    console.log("" && "World");
    console.log(null ?? "Default Value");
    console.log(undefined ?? 42);

    console.log();
}*/

//exercício 8
{
    let resultado = 10 + 5 * 2 > 20 && !false;

    console.log("exercício 8:");
    console.log(resultado);

    console.log();

    /* aparece "false" porque "10 + 5 * 2" é igual a 20, e "&&" 
    serve para comparar se a operação é verdadeira (tornou verdadeiro por conta do ! na frente do false), 
    e no caso 20 NÂO é maior do que 20 porque eles são iguais, logo é "false" */

}

//exercício 9
{
    console.log("exercício 9:")
    console.log("5" - 2); // o - em uma varíavel tipo string é interpretado como número então ele subtrai 5 por 2, porém o + em uma varíavel String independente se é um número ou letra, ele junta as duas informações
    console.log("5" + 2);
    console.log(true + 1); //true soma 1
    console.log(false + 10);// false soma 0

    console.log();

}

//exercício 10
{
    console.log("exercício 10:")
    let x = 5;
    let y = 10;
    let z = (x++ * --y) / 2 + (y % 3);
    console.log(z);

    /* o x++ faz com que some 1 na próxima vez que a varíavel for chamada, porém isso não ocorre, logo permanece 5. 
    --y faz com que o 10 vire 9 e o * multiplica esses valores (5 * 9 = 45).
    Logo em seguida ele divide o valor dado na primeira parte por 2 usando / e depois soma com o resultado dado em"(y % 3)".
    (y % 3) é igual a  0 (9/3 = 0).
    Sendo assim fica 45 / 2 = 22.5 + 0 = 22.5 */
}