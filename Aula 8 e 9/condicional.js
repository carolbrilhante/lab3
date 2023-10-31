//se não chover então => não vou á praia
// senão => eu vou

let chuva = "Não";

let div = document.getElementById('resposta');

//estrutura condicional
if(chuva == 'Não'){ 
    div.textContent = "vou á praia"; //condição se sim


} else {
    div.textContent = "não vou á praia"; //condição se não
}

let nota = 6; //precisa ser 6 ou mais

if(nota>=6)