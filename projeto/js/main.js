//====================== AULA 1 - CONSOLE.LOG E ALERT ======================

// var nome = "Julliana Samora";
// var idade = 20;
// var idade2 = 10;
// var frase = "oi tutupom";
// alert(nome+" tem "+idade+" anos.");
// alert(idade+idade2);
// console.log(nome);
// console.log(idade+idade2);
// console.log(frase.replace("oi","olá meninas"));
// console.log(frase.toUpperCase());


//====================== AULA 2 - ARRAYS ======================

//lista.push("uva");
//lista.pop();
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.toString()[0]);
// console.log(lista.join(" - "));

// var fruta = {nome: "maçã", cor: "vermelha"};
// console.log(fruta.nome);
// alert(fruta.cor);

// var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
// console.log(frutas);
// alert(frutas[1].nome);


//====================== AULA 3 - CONDICIONAIS ======================

// var idade = prompt("Qual sua iade?");

// if (idade >= 18){
//     alert("maior de idade");
// }
// else {
//     alert("menor de idade");
// }

// var count = 0;

// while (count <= 5){
//     console.log(count);
//     alert(count);
//     count = count +1;
// };

// for (count = 0; count<=5; count++){
//     alert(count);
// }

// var d = new Date();
// alert(d.getMonth()+1);
// alert(d.getMinutes());
// alert(d.getDay());
// alert(d);


//====================== AULA 4 - FUNÇÕES ======================

// function soma(n1,n2){
//     return n1 + n2;
// }
// alert(soma(5,10));

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome)
// }

// alert(setReplace("Vai Japão","Japão","Brasil"));

// function validaIdade(idade){
//     var validar;
//     if (idade >=18){
//         validar = true;
//     }
//     else{
//         validar = false;
//     }
//     return validar;
// }
// var idade = prompt("Qual a sua idade?");
// console.log(validaIdade(idade));

function botao(){
    // alert("obg por clicar");
    document.getElementById("agradecimento").innerHTML = "Obg por clicar";
    console.log(document.getElementById("agradecimento"));
}

function redireciona() {
    window.open("http://www.globallabs.ventures/"); //abre outra aba
    window.location.href = "http://www.globallabs.ventures/"; //abre na msm aba
}

function trocar(elemento){
    // document.getElementById("mousemove").innerHTML = "Obrigado por me obedecer";
    elemento.innerHTML = "Obrigado por obedecer :)";
}

function voltar(elemento){
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}



