/* 3 Formas de Declarar Variavel
-> var permite reatribuir valores 
-> let
-> const

*/

//DECLARAÇÃO DE VARIAVEIS
var a,b,c;

//ATRIBUIÇÃO DE VALORES
a = 2;
b = 3;
c = a + b;
alert(c);

let nome, sobrenome, nomeCompleto;

nome = "Janaina";
sobrenome = "Ribeiro";
nomeCompleto = nome +" " + sobrenome;

document.getElementById("texto1").innerHTML = nomeCompleto

//Diferenças entre Var e Let

var x= 10; //aqui é 10
{
    var x = 2; // aqui é 2
}
//aqui também vai ser 2 pois o valor foi redefinido a partir do escopo
document.getElementById("texto2").innerHTML = x;

let y= 10; //aqui é 10
{
    let y = 2; // aqui é 2
}
//aqui permanece o 10 pois o valor que prevalece será o do escopo geral. O outro valor só é valido dentro do bloco especifico
document.getElementById("texto3").innerHTML = y;

//Const nunca pode ser alterada
