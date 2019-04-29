let niz = [1, 2, 3];

// prvi način
for (let i = 0; i < niz.length; i++) {
    let tekuci = niz[i];
    console.log(tekuci);
}

console.log("---");

// drugi način, kolekcijski ciklus in
for (let i in niz) {
    let tekuci = niz[i];
    console.log(tekuci);
}

console.log("---");

// treci način, kolekcijski ciklus of
for (let x of niz) {
    let tekuci = x;
    console.log(tekuci);
}

console.log("---")

// cetvrti način, while petlja
let i = 0
while(i < niz.length) {
    let tekuci = niz[i]
    console.log(tekuci)
    i++
}

