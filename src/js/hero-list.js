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

            btnHero.classList.remove('benched')
            btnHero.classList.add('selected')
        } else {
            console.log('focus on: ' + hero.name)
        }
    }

    btnX.onclick = () => {
        const panel = document.querySelector('#' + hero.name + '-panel')
        if (panel) {
            panel.remove()

            btnHero.classList.remove('selected')
            btnHero.classList.add('benched')
        }
    }

    li.append(btnHero)
    li.append(btnX)
    heroList.append(li)
}

heroes.forEach(hero => {
    createHeroLi(hero)
});
