const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage punktide arv: `, number => 
    rl.question('Sisestage nadalate arv: ', number2 => {
  let ajakulu = (Math.round((number * 26) / number2));
    console.log(`yhe nadala eeldetav ajakulu on: ` + ajakulu)
  rl.close();
}));
