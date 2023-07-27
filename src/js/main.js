const heroes = []

fetch('src/res/heroes.json')
    .then((res) => res.json())
    .then(heroArr => {
        heroArr.forEach(hero => {
            hero['defaults'] = structuredClone(hero)
            heroes.push(hero)

            createHeroLi(hero)
        });
    })
    .then(() => {
        document.querySelector('#hero-list li button').click()
        createPlayerOrigins()

        player = heroes[0]
    })
