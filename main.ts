// let numero : Number = 12345;
// let letras : String = "dasdadas";
// let data : Date = new Date(2018, 1, 13);
//let lista : Array<String> = [];
// function facaAlgo(): Number { ... }
// function facaAlgo(): String { ... }
// function facaAlgo(): Array { ... }

import {JogoDeFutebol} from './src/jogo-futebol';

const jogo = new JogoDeFutebol();
jogo.incluirTime(1, "Santos", new Date(1950, 2, 1), "Branco", "Preto e branco");
console.log(jogo.times);