
let niz = [1, 3, "Mika", "pera", false];

console.log("iteracija pomocu brojackog for ciklusa:");
for (let i = 0; i < niz.length; i++)
   console.log(niz[i]);

console.log("iteracija pomocu for-in ciklusa:");
for (let i in niz)
   console.log(niz[i]);

console.log("iteracija pomocu for-of ciklusa:");
for (let x of niz)
   console.log(x);