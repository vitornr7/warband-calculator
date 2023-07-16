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

const skillLevel = (lbl, lvl) => {
    const li = document.createElement('li')

    const label = document.createElement('p')

    const lvlPanel = document.createElement('span')
    const btnSub = document.createElement('button')
    const level = document.createElement('p')
    const btnAdd = document.createElement('button')

    label.innerText = lbl

    btnSub.innerText = "-"
    level.innerText = lvl
    btnAdd.innerText = "+"

    lvlPanel.append(btnSub)
    lvlPanel.append(level)
    lvlPanel.append(btnAdd)

    li.append(label)
    li.append(lvlPanel)

    return li
}

const attributes = () => {

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
hero.push(skillLevel("STR", "15"))

hero.forEach(element => {
    heroPanel.append(element)
});

companions.append(heroPanel)
