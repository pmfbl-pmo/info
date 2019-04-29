function opseg(start, end) {
    let niz = [];
    for (let i = start; i <= end; i++)
        niz.push(i);
    return niz;
}

function suma(niz) {
    let suma = 0;
    for (let i = 0; i < niz.length; i++)
        suma += niz[i];
    return suma;
}

console.log(suma(opseg(1,100)));
