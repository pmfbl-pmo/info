// kreiranje objekta
let obj = {
   rad: "Odlazak na posao",
   drvo: "Grljenje drveća",
   pica: "Jedenje pice",
   trcanje: "Trčanje kroz park",
   televizija: "Gledanje televizije",
   spavanje: 42
}

for (let osobina in obj)
   console.log(`${osobina} - ${obj[osobina]}`)

console.log("---")


obj = {
   ime: "Miki",
   length: 4,
   sirina: 8
}

for (let osobina in obj)
   console.log(`${osobina} - ${obj[osobina]}`)

