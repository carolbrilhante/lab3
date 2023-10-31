//var nome = "Daian"; //String e colocar aspas 'simples' ou "dupla"

//let idade_atual = 24;

//let altura = 1.70; //Números não precisam de aspas mas se usa . ao inves de virgula

//var num = 5;

//var num2 = 10;

//alert(" Olá " + nome + " Seja Bem Vindo! ");
//alert(num + num2); Podemos Somar (+) Subtrair (-) Dividir (/) Multiplicar (*)

//document.write(" <h1>Olá " + nome + " Seja Bem Vindo!</h1>");

//document.write(' Minha idade atual é ' + idade_atual);

//const pi = 3.14;

//let nome = "Carol";
//let idade = "22";
//let hobbie = "Passear";

//document.write("<h1>Nome: " + nome + "<br>");
//document.write("Idade: " + idade + "<br>");
//document.write("Hobbie: " + hobbie + "</h1>");

//array - variável com vários valores
//const lista = ["Nicole", "Julia", "Pedro", "Ana", "Victória"];

//lista toda
//document.write(lista);

//aparecer só um da lista (começamos contar do 0)
//document.write(lista[3]);

//let nome = "Mateus"; 
//let idade = 22;
//let hobbie = "Sair para beber";
//let cargo = "Videomaker";
//alert(" Olá " + nome + " Seja Bem Vindo! "); 
//document.write(' Minha idade atual é ' + idade);

let num= 10;
let num2 = 15;
let resultado = num2+num;

//document.write("<h1> Total é:" + resultado);

let variavel = false; //negativo -
let outra = true; //positivo +

const lista = ["Nicole", "Julia", "Pedro", "Ana", "Victória"];
document.write("<h1>" + lista[3] + "<br>");

const objeto= {
    "nome": "Lilia",
    "idade": 40,
    "cargo": "Professora"

}
 
document.write(objeto.cargo + "<br>");
document.write(objeto.idade + "<br>");
document.write(objeto['cargo'] + "<br>");//outra forma de fazer com ['...']
document.write(objeto['idade'] + "<br>");//outra forma de fazer com ['...']
document.write(objeto.nome);