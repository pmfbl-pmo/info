const n = 20
let ukupnoPokusaja = 0
for (let i = 0; i < n; i++) {
  var slucajan = Math.random();
  for (var pokusaja = 1; ; pokusaja++) {
    if (slucajan < 0.1)
      break;
    slucajan = Math.random();
  }
  ukupnoPokusaja += pokusaja
}
console.log(`Укупан број покушаја је ${ukupnoPokusaja}`);