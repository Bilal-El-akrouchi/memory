let btn = document.querySelectorAll('.btn')
let menu = document.querySelector('.menu')
let jeuCaché = document.querySelector('.jeuCaché')
let jeu = document.querySelector('.jeu')
let facile = document.querySelector('.facile')
let moyen = document.querySelector('.moyen')
let diffcile = document.querySelector('.diffcile')
let plateauJeu = document.querySelector('.plateauJeu')


btn.forEach(element => {
    element.addEventListener('click', function() {
        menu.classList.add("displayNon")
        jeuCaché.style = "transform: translateX(0)"
    
    })
});
// la fonction pour créer des carte
function genererCartes(nombreCartes, colonnes) {
    plateauJeu.innerHTML = '' // Efface les anciennes cartes
    plateauJeu.style.display = 'grid'
    plateauJeu.style.gridTemplateColumns = `repeat(${colonnes}, 1fr)` // Définit le nombre de colonnes dynamiquement
    plateauJeu.style.gap = '10px' // Ajoute un espace entre les cartes

    //:::::::::::::::::::::::::::::::: Calculer la taille des cartes
    let taillePlateau = plateauJeu.clientWidth // Largeur totale du plateau
    let tailleCarte = (taillePlateau / colonnes) - 10 // Soustrait l'espace entre les cartes

    for (let index = 0; index < nombreCartes; index++) {
        const carré = document.createElement('div')
        carré.classList.add('carré')
        carré.classList.add('bg1')
        carré.style.width = `${tailleCarte}px`
        carré.style.height = `${tailleCarte}px` // Garde un format carré

        if (index % 2 == 0) {
            carré.classList.add('bg2')
        }
        plateauJeu.append(carré)
    }
}

// la création de carte en utilisantla fonction
facile.addEventListener('click', function () {
    genererCartes(12, 4) 
})

moyen.addEventListener('click', function () {
    genererCartes(18, 6) 
})

diffcile.addEventListener('click', function () {
    genererCartes(24, 7) 
})
// 6 COLONNE DE 4 LIGNE ll