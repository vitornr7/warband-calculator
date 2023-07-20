const heroes = []

fetch('src/res/heroes.json')
    .then((res) => res.json())
    .then(hero => {
        hero.forEach(h => {
            h['defaults'] = structuredClone(h)
            heroes.push(h)

            createHeroLi(h)
        });
    })
    .then(() => {
        document.querySelector('#hero-list li button').click()
    })
