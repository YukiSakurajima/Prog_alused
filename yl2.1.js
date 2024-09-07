const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage 6hutemperatuuri: `, number => {

if (number < 4.0){
        console.log("On j22tumise oht")
    } 
    else {
        console.log("Ei ole j22tumise ohtu")
    }
  rl.close();
});
