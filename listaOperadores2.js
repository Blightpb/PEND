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
