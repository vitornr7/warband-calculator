const companions = document.querySelector('#selected-heroes')

const heroPanel = document.createElement('div')
heroPanel.classList.add('hero-panel')


const info = (name) => {
    const infoSection = document.createElement('div')

    const portrait = document.createElement('div')
    const heroName = document.createElement('div')

    infoSection.classList.add('hp-info')

    heroName.innerText = name
    portrait.classList.add('box')

    infoSection.append(portrait)
    infoSection.append(heroName)

    return infoSection
}

const skillLevel = (lbl, lvl) => {
    const li = document.createElement('li')

    const label = document.createElement('div')

    const lvlPanel = document.createElement('div')
    const btnSub = document.createElement('button')
    const level = document.createElement('div')
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

const attributes = (attr) => {
    const attrSection = document.createElement('div')

    const title = document.createElement('div')
    title.innerText = "Attributes"

    const attrList = document.createElement('ul')
    const str = skillLevel('STR', attr.str)
    const agi = skillLevel('AGI', attr.agi)
    const int = skillLevel('INT', attr.int)
    const cha = skillLevel('CHA', attr.cha)

    attrList.append(str)
    attrList.append(agi)
    attrList.append(int)
    attrList.append(cha)

    attrSection.append(title)
    attrSection.append(attrList)

    return attrSection
}

const skills = () => {
    const sec = document.createElement('section')
    const title = document.createElement('p')
    title.innerText = 'Skills'

    const skillName = document.createElement('p')

    sec.append(title)
    return sec
}

const hero = []
hero.push(info('Ymira'))
hero.push(attributes({ str: 6, agi: 9, int: 11, cha: 6 }))

hero.forEach(element => {
    heroPanel.append(element)
});

companions.append(heroPanel)
