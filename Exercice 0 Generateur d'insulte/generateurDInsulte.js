partieDuCorps = ["nez","main","piez"]
adjectifs =["puant","moche","vieux"]
animaux =["singe","cabri","éléphant"]
// math.floor arrondi un nombre en inférieur

corpsAleatoire = Math.floor(Math.random()*partieDuCorps.length)
adjectifsAleatoire = Math.floor(Math.random()*adjectifs.length)
animauxAleatoire = Math.floor(Math.random()*animaux.length)

insulte = "Ton "+partieDuCorps[corpsAleatoire]+" est un "+animaux[animauxAleatoire]+" "+adjectifs[adjectifsAleatoire]
insulteConcat = `Ton ${partieDuCorps}`; // Autre exemple de concaténation

console.log(insulte);
console.log(insulteConcat)
