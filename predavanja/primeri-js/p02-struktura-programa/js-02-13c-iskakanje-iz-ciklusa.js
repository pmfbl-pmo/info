// beskonačni for ciklus sa iskakanjem izvlačenje negativnog pseudoslučajnog broja
var slucajan = Math.random();
console.log(slucajan);
for (var pokusaja = 1; ; pokusaja++) {
  if (slucajan < 0.1)
    break;
  slucajan = Math.random();
  console.log(slucajan);
}
console.log(`Извучен је случајан број ${slucajan} мањи од 0.1 из покушаја бр. ${pokusaja + 1}`);