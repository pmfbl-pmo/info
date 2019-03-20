// rekurzivna funkcija za stepenovanje
let stepen = function (osnova, izlozilac) {
    if (izlozilac == 0)
        return 1;
    return osnova * stepen(osnova, izlozilac - 1);
}

console.log(stepen(2, 10))

let stepen2 = function (osnova, izlozilac) {
    if (izlozilac < 0)
        return (stepen2(1.0 / osnova, -izlozilac))
    if (izlozilac == 0)
        return 1;
    return osnova * stepen2(osnova, izlozilac - 1);
}

console.log(stepen2(2, 10))
console.log(stepen2(2, -10))


