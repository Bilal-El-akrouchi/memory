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
function vérifierPair() {
    let [marouane, cactus] = stock
    if (marouane.dataset.valeur === cactus.dataset.valeur) {
        console.log('wouhou x2');
        stock=[]
    }else{
        console.log('nooo');
        stock=[]
        // OKAAAAAY LETSGOOOOOOOOOOOOOOOOOOO
        // on se sent developpeur, on se sent- easteregsssszzzzzzzzz JSUIS TROP CONTENT AENDAOIZDNAZIDNZAIDNZADINJ
        // ok bilal ne perd pas le file maintenant il faut quoi 
        // il faut les retourner si c perdu et le garder si c gagner ne pas oublie le bug de la 3eme carte
        // mettre un timeset
        
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


