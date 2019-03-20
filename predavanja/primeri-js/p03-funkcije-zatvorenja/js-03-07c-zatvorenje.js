// primer zatvorenja
let naStepen = function (izlozilac) {
    return function(osnova) {
        let ret = 1;
        for (let i = 0; i < izlozilac; i++)
            ret *= osnova;
        return ret;
    };
}

let  kvadriraj = naStepen(2);
console.log(kvadriraj(4.5));
let  naKub = naStepen(3);
console.log(naKub(4));
let  naDeseti = naStepen(10);
console.log(naDeseti(2));
