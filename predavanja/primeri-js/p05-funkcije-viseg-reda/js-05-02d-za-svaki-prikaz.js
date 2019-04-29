var nizBrojeva = [1, "Miki Maus", 2, 3, 4];

function zaSvaki(niz, akcija) {
    for (let i = 0; i < niz.length; i++)
        akcija(niz[i]);
}

let prikazNaKonzolu = function(x){
    console.log(x);
};
zaSvaki(nizBrojeva, prikazNaKonzolu);


let prikazNaKonzolu2 = x => console.log(x)
zaSvaki(nizBrojeva, prikazNaKonzolu2);

