const companions = document.querySelector('#companions')

const heroPanel = document.createElement('section')
heroPanel.classList.add('hero-panel')


const info = (name) => {
    const heroInfo = document.createElement('section')

    const portrait = document.createElement('div')
    const heroName = document.createElement('h2')

    heroName.innerText = name
    portrait.classList.add('box')

    heroInfo.append(portrait)
    heroInfo.append(heroName)

    return heroInfo
}

const skills = () => {
    const sec = document.createElement('section')
    const title = document.createElement('h2')
    title.innerText = 'Skills'

    const skillName = document.createElement('p')

    sec.append(title)
    return sec
}

const hero = []
hero.push(info('Ymira'))
hero.push(skills())

hero.forEach(element => {
    heroPanel.append(element)
});

companions.append(heroPanel)
