const heroList = document.querySelector('#hero-list')

function createHeroLi(hero) {
    const li = document.createElement('li')
    const btnHero = document.createElement('button')
    const btnX = document.createElement('button')

    btnHero.innerText = hero.name
    btnX.innerText = 'X'

    btnHero.classList.add('benched')

    btnHero.onclick = () => {
        const panel = document.querySelector('#' + hero.name + '-panel')
        if (!panel) {
            createHeroPanel(hero)

            // btnHero.classList.remove('benched-hero')
            // btnX.classList.remove('benched-x')

            btnHero.classList.add('selected-hero')
            btnX.classList.add('selected-x')
        } else {
            console.log('focus on: ' + hero.name)
        }
    }

    btnX.onclick = () => {
        const panel = document.querySelector('#' + hero.name + '-panel')
        if (panel) {
            panel.remove()

            btnHero.classList.remove('selected-hero')
            btnX.classList.remove('selected-x')

            // btnHero.classList.add('benched-hero')
            // btnX.classList.add('benched-x')
        }
    }

    li.append(btnHero)
    li.append(btnX)
    heroList.append(li)
}

const heroes = []

fetch('src/res/heroes.json')
    .then((response) => response.json())
    .then(hero => {
        hero.forEach(h => {
            h['defaults'] = structuredClone(h)
            heroes.push(h)
            createHeroLi(h)
        });
    })
