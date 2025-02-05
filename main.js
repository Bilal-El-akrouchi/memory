let btn = document.querySelectorAll('.btn')
let menu = document.querySelector('.menu')
let jeuCaché = document.querySelector('.jeuCaché')
let jeu = document.querySelector('.jeu')
let facile = document.querySelector('.facile')
let moyen = document.querySelector('.moyen')
let diffcile = document.querySelector('.diffcile')
let plateauJeu = document.querySelector('.plateauJeu')
let laFacile=['a','a','b','b','c','c','d','d','e','e','f','f','g','g']
let stock=[]


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
// la fonction pour créer des carte UwU
function creerCartes(nombreCartes) {
    for (let index = 0; index < nombreCartes; index++) {
        const carré = document.createElement('div')
        carré.classList.add('carré', 'bg1')
        carré.dataset.valeur = laFacile[index] // Stocker la valeur de la carte
        plateauJeu.append(carré)

        carré.addEventListener('click', function () {
            carré.style.backgroundImage = "none"
            carré.style.backgroundColor = "red"
            carré.textContent = carré.dataset.valeur // Afficher la vraie valeur
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
    }else{
        console.log('nooo');
        stock=[]
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
    creerCartes(12)
})
moyen.addEventListener('click',function () {
    creerCartes(18)
})
diffcile.addEventListener('click',function () {
    creerCartes(24)
})


// N O T A   B E N E   
// ////////////////////////////
// TOUJOURS FAIR UN PLAN 




// ok ok maintenant il me manque quoi, a répartir en 2h
// le compteur 10min indispensable
// un bouton menu principal 10min dispensable
// un bouton recommencer 30min dispensable
// une victoire éventuellementm dépand du temps restant dispensable
// le son 1h au cas ou indispensable

// donc si je met en prio le son et le compteur j'estime que j'en ai pour 1h10 
// il me resetera 30min a répartir selon les prio, ne pas oublier de commencer par le plus simple max 10 min pas de chichi
