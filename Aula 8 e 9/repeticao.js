/* var frutas = [
    "Morango",
    "Laranja",
    "Uva",
    "Melância",
    "Banana"
];

//document.write(frutas.length);

 document.write ('Manualmente <br>');

var i = 0;
    document.write("Fruta 1: ");
    document.write(frutas[0]);
    document.write('<br>');

    document.write("Fruta 2: ");
    document.write(frutas[1]);
    document.write('<br>');

    document.write("Fruta 3: ");
    document.write(frutas[2]);
    document.write('<br>');

    document.write("Fruta 4: ");
    document.write(frutas[3]);
    document.write('<br>');

    document.write("Fruta 5: ");
    document.write(frutas[4]);
    document.write('<br>');
    
    document.write ('<hr>');
    document.write ('Estrutura com repetição <br>');
    
    
    var i = 0;
    
    while (i<frutas.length){

    document.write("Fruta: " + i + ":");
    document.write(frutas[i]);
    document.write('<br>');

    i++;
} */


var frutas = [
    "Morango",
    "Laranja",
    "Uva",
    "Melância",
    "Banana"
];

document.write("Estrutura de repetição WHILE<br>")
var i = 0;
    
    while (i < frutas.length){

        document.write("Fruta: " + i + ":");
        document.write(frutas[i]);
        document.write('<br>');

    i++;
}

document.write('<hr>');
document.write('Estrutura de repetição FOR<br>');

for (let c = 0; c < frutas.length; c++) {

    document.write("Fruta" + c + ":");
    document.write(frutas[c]);
    document.write('<br>');

}

document.write('<hr>');
let j = 0;

while(j <= 10){
    document.write("3 X ")
    document.write(j + ' = ' (3*j));
    document.write('<br>')
    j++;
}

document.write('<hr>');
let a = 0;

do {
    document.write(" 3 x ");
    document.write(a + ' = ' (3*a));
    document.write('<br>')
    a++;
} while (a < 2);

const pessoa = {//objeto chave = valor 
'Nome:' : 'Maria',
'Sobrenome:' : "Silva",
'Idade' : 25,
'Profissao:' : 'Estudante'

}

//repetição (loop)
for (lef  in pessoa){
    document.write(x + ';');
    document.write(pessoa [x] + '<br>');
}

