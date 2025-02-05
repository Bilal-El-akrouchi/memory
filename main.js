let btn = document.querySelectorAll('.btn')
let menu = document.querySelector('.menu')
let jeuCaché = document.querySelector('.jeuCaché')
let jeu = document.querySelector('.jeu')
let facile = document.querySelector('.facile')
let moyen = document.querySelector('.moyen')
let diffcile = document.querySelector('.diffcile')
let plateauJeu = document.querySelector('.plateauJeu')
let laFacile=['a','a','b','b','c','c','d','d','e','e','f','f','g','g']
let laMoyen=['a','a','b','b','c','c','d','d','e','e','f','f','g','g','h','h','i','i']
let laDifficile=['a','a','b','b','c','c','d','d','e','e','f','f','g','g','h','h','i','i','j','j','k','k','L','L','M','M']
let stock=[]
let compteur=0


btn.forEach(element => {
    element.addEventListener('click', function() {
        menu.classList.add("displayNon")
        jeuCaché.style = "transform: translateX(0)"

    })
});
// nota mwa meme on va mélanger le tableau avec sort qui permet d'organiser en fonction de math random pour mélanger
function melangerCartes(x) {
    return x.sort(() => Math.random() - 0.5)
}

laFacile = melangerCartes(laFacile)
laMoyen = melangerCartes(laMoyen)
laDifficile = melangerCartes(laDifficile)
// la fonction pour créer des carte UwU
function creerCartes(nombreCartes,difficulté) {
    if (difficulté.length < nombreCartes) {
        console.error("GG TA TROUVER LERREUR");
        return;}
        // (conlol.log erreur c op) !!!!! NOTA BENE
    for (let index = 0; index < nombreCartes; index++) {
        const carré = document.createElement('div')
        carré.classList.add('carré', 'bg1')
        // pour tocker la valeur de la carte
        carré.dataset.valeur = difficulté[index] 
        plateauJeu.append(carré)

        carré.addEventListener('click', function () {
            carré.style.backgroundImage = "none"
            carré.style.backgroundColor = "red"
            carré.textContent = carré.dataset.valeur
            stock.push(carré)
            console.log(stock);
            if (stock.length===2) {
                console.log('wouhou');
                setTimeout( vérifierPair, 1000);
            }
            
        })
    }
}
// C PARTIT POUR VERIFIER
// OKAAAAAY LETSGOOOOOOOOOOOOOOOOOOO
// on se sent developpeur, on se sent- easteregsssszzzzzzzzz JSUIS TROP CONTENT AENDAOIZDNAZIDNZAIDNZADINJ
// ok bilal ne perd pas le file maintenant il faut quoi 
// il faut les retourner si c perdu et le garder si c gagner ne pas oublie le bug de la 3eme carte
// mettre un timeset
function vérifierPair() {
    
    
    let [marouane, cactus] = stock
    if (marouane.dataset.valeur === cactus.dataset.valeur) {
        console.log('wouhou x2');
        stock=[]
        compteur++
        console.log(compteur.length);
    }else{
        console.log('nooo');
        stock=[]
        compteur++
        console.log(compteur);
        marouane.style=`backgroundColor:"",background-image: url(/img/pixlr-image-generator-ea04cbe4-13a8-4855-85f4-20aa784d8a54.png);
                      background-size: cover;
                      background-repeat: no-repeat;`
        marouane.textContent=""
        cactus.style=`backgroundColor:"",background-image: url(/img/pixlr-image-generator-ea04cbe4-13a8-4855-85f4-20aa784d8a54.png);
                      background-size: cover;
                      background-repeat: no-repeat;`
        cactus.textContent=""
        
        

    }
}
// la création de carte en utilisantla fonction
facile.addEventListener('click',function () {
    creerCartes(12, laFacile)
})
moyen.addEventListener('click',function () {
    creerCartes(18, laMoyen)
})
diffcile.addEventListener('click',function () {
    creerCartes(24, laDifficile)
})


// N O T A   B E N E   
// ////////////////////////////
// TOUJOURS FAIR UN PLAN 




// ok ok maintenant il me manque quoi, a répartir en 2h
// le compteur 5min indispensable
// un bouton menu principal 10min dispensable
// un bouton recommencer 30min dispensable
// une victoire éventuellementm dépand du temps restant dispensable
// le son 1h au cas ou indispensable
//ajouter un true fals pour bloquer le click le temps du retournement pour eviter le bug des 3 cartes

// donc si je met en prio le son et le compteur j'estime que j'en ai pour 1h10 
// il me resetera 30min a répartir selon les prio, ne pas oublier de commencer par le plus simple max 10 min pas de chichi
