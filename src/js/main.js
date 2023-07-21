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
        // puts the player panel on the ui and create the books and origin buttons
        document.querySelector('#hero-list li button').click()

        const title = document.querySelector('#Player-panel .title')

        const btnOrigin = document.createElement('details')
        const btnBooks = document.createElement('details')
        const btnOriginTitle = document.createElement('summary')
        const btnBooksTitle = document.createElement('summary')
        const btnOriginContent = document.createElement('div')
        const btnBooksContent = document.createElement('div')


        btnOrigin.setAttribute('data-popover', 'down')
        btnBooks.setAttribute('data-popover', 'down')

        btnOriginTitle.innerText = 'Origin'
        btnBooksTitle.innerText = 'Books'

        btnOrigin.append(btnOriginTitle)
        btnOrigin.append(btnOriginContent)

        btnBooks.append(btnBooksTitle)
        btnBooks.append(btnBooksContent)

        title.append(btnOrigin)
        title.append(btnBooks)
    })
