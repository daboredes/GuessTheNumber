'use strict';
/*
DOM es Document Objet model, y lo que hace es representar el html como una estructura de arbol. Cada elemento del html es un objeto.

El primer elemento es el document, por eso todos los metodos comienzan con document.

-document.querySelector('inserte tag, #id, .class') es para seleccionar el objeto.

-document.querySelector('inserte tag, #id, .class').textContent muestra el texto del objeto.

para setear el valor que queremos, por ejemplo el mensaje que se muestre:
-document.querySelector('inserte tag, #id, .class').textContent = "Mensaje a mostrar".

.textContent es para los elementos que no sean form, si es form se usa .value (en inputs por ejemplo)

para hacer que suceda algo al clickear un boton, se usa:
	document.querySelector('.class' seria la clase del boton).addEventListener('click', y se pasa como segundo argumento el valor de una funcion function () {}).

Para acceder a una propiedad de CSS:
/document.querySelector('body').style.backgroundColor = '#rbg'
notese que como background-color lleva un -, se cambia por camelCase
Funciona como inline style.
*/
// console.log(document.querySelector('.message').textContent); //muestra en consola el mensaje.
// document.querySelector('.message').textContent = 'Correct Number!🎉' //Seteamos el valor.

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23; //se usa value porque no tiene child, el input es de form.
// console.log(document.querySelector('.guess').value)

//numero a adivinar, se trunca para que solo aparezca el natural, y se le agrega 1 porque nunca llega a ser 20 sino.
let secretNumber  = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)
    //guarda el valor del input y luego lo console.log, lo transformamos a number porque por lo general lo recibir desde el userinterface es string
    if(!guess){
        console.log(document.querySelector('.message').textContent = '🚫 No number submited!')
        //si adivina
    } else if (guess === secretNumber){
        //muestra el numero
        document.querySelector('.number').textContent = secretNumber

        document.querySelector('.message').textContent = 'Congratulations! You guessed it! 🎉';
        document.querySelector('.highscore').textContent = score;

        //cambiar el background-color a verde
        document.querySelector('body').style.backgroundColor = '#60b347';

        //cambiar el ancho del numero adivinado
        document.querySelector('.number').style.width = '30rem';

        //Si se equivoca
    } else if(guess !== secretNumber){
        
        if(score > 1){
            document.querySelector('.message').textContent = guess > secretNumber ? 'Too high! ↗️' : 'Too low! ↘️';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lose 🥲'
            document.querySelector('.score').textContent = 0;
        }
        
        //Si el numero es mas alto
    } //else if (guess > secretNumber){

    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too high! ↗️';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = 'You lose 🥲'
    //         document.querySelector('.score').textContent = 0;
    //     }

    //     //Si el numero es mas bajo
    // } else {
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too low! ↘️'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = 'You lose 🥲';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    //Todo esto se refactorizo con el ternary operator y con el !==


    if(highscore > score){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
})

//funcion clear para resetear el juego

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber  = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.guess').value = ''; //se usa valueeeeeeee
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    
})

