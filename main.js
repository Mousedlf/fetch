fetch('https://api.chucknorris.io/jokes/random')
    .then(uneReponse=>uneReponse.json()) //désérialisation, langage de transition
    .then(trucDésérialisé=>{ //verif si bien désérialisé

        console.log(trucDésérialisé.value)
    })

function getJoke(){}
let joke = getJoke()