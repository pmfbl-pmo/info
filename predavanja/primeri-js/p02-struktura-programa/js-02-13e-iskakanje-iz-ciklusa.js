const n = 20
let ukupnoPokusaja = 0
centralna:
for (let i = 0; i < n; i++) {
  var slucajan = Math.random();
  ukupnoPokusaja++;
  for (; ;) {
    if (slucajan < 0.1)
      break centralna;
    slucajan = Math.random();
    ukupnoPokusaja++;
  }
}
console.log(`Укупан број покушаја је ${ukupnoPokusaja}`);