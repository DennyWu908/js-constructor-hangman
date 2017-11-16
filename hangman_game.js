var Word = require("./word.js");
var Letter = require("./letter.js");
var inquirer = require("inquirer");

var answer_bank = ["skateboard", "rocket", "plum", "phone", "xylophone"];
var game_answer = answer_bank[(Math.floor(Math.random() * answer_bank.length))];

var mystery_word = new Word(game_answer);
console.log(mystery_word)