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
function creerCartes(nombreCartes) {
    for (let index = 0; index < nombreCartes; index++) {
        const carré = document.createElement('div')
        carré.classList.add('carré', 'bg1')
        if (index%2==0) {
            carré.classList.add('bg2')
        }
        plateauJeu.append(carré)
        carré.addEventListener('click',function() {
            carré.style.backgroundImage = "none" // Pour enlever l'image
            carré.style.backgroundColor = "red" // Pour mettre un fond rouge            
        })
    }d
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


