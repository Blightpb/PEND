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

    /*aparece "false" porque "10 + 5 * 2" é igual a 20, e "&&" 
    serve para comparar se a operação é verdadeira, e no 
    caso 20 não é maior do que 20 porque eles são iguais, logo é "false" */

}

//exercício 9
{
    console.log("exercício 9:")
    console.log("5" - 2);
    console.log("5" + 2);
    console.log(true + 1);
    console.log(false + 10);
}