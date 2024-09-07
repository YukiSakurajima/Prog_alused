const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage oma nimi: `, nimi => 
    rl.question('Sisestage lubatud kiirus: ', number =>
        rl.question('Sisestage tegelik kiirus: ', number2 => {
            let tulemus2 = (((`${number2}`- `${number}` )) *3)
  let tulemus = ((`${nimi}` + `, teie kiiruse yletamise trahv on: ` + tulemus2 + ` eurot` ));
  if (tulemus2 < 190) {
        console.log(tulemus)
        } 
  else {
console.log(nimi + ', teie kiiruse yletamise trahv on: 190 eurot.')
  }
  rl.close();
})));
