

let list = {
    value: 1,
    rest: {
        value: "Miki",
        rest: {
            value: 3,
            rest: {
                value: "4",
                rest: null
            }
        }
    }
};

let brojElemenata = function (l) {
    if (l == null)
        return 0;
    return 1 + brojElemenata(l.rest)
}

console.log(brojElemenata(list))

let stringReprezentacija = function (l) {
    if (l == null)
        return ""
    s = stringReprezentacija(l.rest)
    return String(l.value) + " " + s
}
console.log(stringReprezentacija(list))

let dodajNaPocetak = function (l, x) {
    let obj = {}
    obj.value = x
    obj.rest = l
    return obj
}

let dodajNaKraj = function (l, x) {
    if (l.rest == null) {
        l.rest = { value: x, rest: null }
    }
    else
        dodajNaKraj(l.rest, x)
    return l;
}

list2 = dodajNaPocetak(list, 43)
list3 = dodajNaPocetak(list2, "Paja")
list4 = dodajNaKraj(list3, 44)
list5 = dodajNaKraj(list4, false)
console.log(stringReprezentacija(list5))
