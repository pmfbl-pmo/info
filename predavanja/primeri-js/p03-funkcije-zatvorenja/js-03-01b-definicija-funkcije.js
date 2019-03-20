// primer definicje i poziva funkcije
// vidimo da su funkcije istovremeno i vrednosti
let buka = function() {
    console.log(" Tras !");
};

buka();
buka();
// vidimo da se parametri mogu razlikovati od argumenata
buka("Petar");

buka = function(x){
    console.log(` Tras ! ${x}`);
};

buka("Petar");
buka("Mitar");