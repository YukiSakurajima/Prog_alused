const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage algarv: `, number => 
    rl.question('Sisestage astendaja: ', number2 => {
  console.log((`${number}` ** `${number2}` ));
  rl.close();
}));
