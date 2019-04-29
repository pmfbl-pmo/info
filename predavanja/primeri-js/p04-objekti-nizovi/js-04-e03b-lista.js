
function List(value, rest=null) {
    this.value = value
    this.rest = rest
    this.brojElemenata = function () {
        if (this.rest == null)
            return 1;
        return 1 + this.rest.brojElemenata()
    }
    this.stringReprezentacija = function () {
        if (this.rest == null)
            return String(this.value)
        s = this.rest.stringReprezentacija()
        return String(this.value) + " " + s
    }
    this.dodajNaPocetak = function (x) {
        let obj = new List(x)
        obj.rest = this
        return obj
    }
    this.dodajNaKraj = function (x) {
        if (this.rest == null) {
            this.rest = new List(x)
        }
        else
            this.rest.dodajNaKraj(x)
        return this;
    }    

}

let l0 = new List(4);
let l1 = l0.dodajNaPocetak(3).dodajNaKraj(77);

console.log(l1.brojElemenata())
console.log(l1.stringReprezentacija().toUpperCase())

