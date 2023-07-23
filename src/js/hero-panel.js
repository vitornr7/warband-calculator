const selectedHeroes = document.querySelector('#selected-heroes')

function updateUi(hero) {
    const panel = document.querySelector("#" + hero.name + '-panel')

    document.querySelector("#" + hero.name + '-attr-lbl').innerText = "Attribute points: " + hero.attributes.points
    document.querySelector("#" + hero.name + '-skill-lbl').innerText = "Skill points: " + hero.skills.points

    const sec1 = panel.querySelector('.lvl-controller button:first-of-type')
    const sec2 = panel.querySelectorAll('section:nth-child(2) button')
    const sec3 = panel.querySelectorAll('section:nth-child(3) button')

    if (canLvlDown(hero)) {
        sec1.style.visibility = "visible"
    } else {
        sec1.style.visibility = "hidden"
    }

    // this i places a neddle on the buttons pairs of a section element
    let i = 0

    for (const attr in attributes) {
        if (canAttrDown(hero, attr)) {
            sec2[i].style.visibility = "visible"
        } else {
            sec2[i].style.visibility = "hidden"
        }

        if (canAttrUp(hero)) {
            sec2[i + 1].style.visibility = "visible"
        } else {
            sec2[i + 1].style.visibility = "hidden"
        }
        i += 2
    }

    i = 0

    for (const sk in skills) {
        if (canSkillDown(hero, sk)) {
            sec3[i].style.visibility = "visible"
        } else {
            sec3[i].style.visibility = "hidden"
        }

        if (canSkillUp(hero, sk)) {
            sec3[i + 1].style.visibility = "visible"
        } else {
            sec3[i + 1].style.visibility = "hidden"
        }
        i += 2
    }
}

const createLevelController = (lbl, lvl, hero, callbackSub, callbackAdd) => {
    const li = document.createElement('li')

    const label = document.createElement('div')

    const lvlPanel = document.createElement('div')
    const level = document.createElement('div')
    const btnSub = document.createElement('button')
    const btnAdd = document.createElement('button')

    label.innerText = lbl

    btnSub.innerText = "-"
    level.innerText = lvl
    btnAdd.innerText = "+"

    btnSub.onclick = () => {
        level.innerText = callbackSub()

        updateUi(hero)
    }

    btnAdd.onclick = () => {
        level.innerText = callbackAdd()

        updateUi(hero)
    }

    lvlPanel.classList.add('lvl-controller')

    lvlPanel.append(btnSub)
    lvlPanel.append(level)
    lvlPanel.append(btnAdd)

    li.append(label)
    li.append(lvlPanel)

    return li
}

const createInfoSection = (hero) => {
    const section = document.createElement('section')

    const title = document.createElement('div')
    const portrait = document.createElement('div')
    const heroName = document.createElement('h2')
    const list = document.createElement('ul')
    const health = document.createElement('li')

    const level = createLevelController('Level:', hero.level, hero, () => levelDown(hero), () => levelUp(hero))

    heroName.innerText = hero.name
    portrait.classList.add('portrait')

    health.innerText = "Health: " + hero.health

    section.append(portrait)

    title.append(heroName)
    title.classList.add('title')
    section.append(title)

    list.append(level)
    list.append(health)

    section.append(list)

    return section
}

const createAttributesSection = (hero) => {
    const section = document.createElement('section')

    const title = document.createElement('h2')
    const points = document.createElement('p')
    title.innerText = "Attributes"
    points.innerText = "Attribute points: 0"

    points.setAttribute('id', hero.name + '-attr-lbl')

    const list = document.createElement('ul')

    for (const attr in attributes) {
        const atc = createLevelController(attr.toUpperCase(),
            hero.attributes[attr],
            hero,
            () => attributeDown(hero, attr),
            () => attributeUp(hero, attr))

        list.append(atc)
    }

    section.append(title)
    section.append(list)
    section.append(points)

    return section
}

const createSkillsSection = (hero) => {
    const section = document.createElement('section')

    const title = document.createElement('h2')
    const points = document.createElement('p')
    title.innerText = "Skills"
    points.innerText = "Skill points: 0"
    points.setAttribute('id', hero.name + '-skill-lbl')

    const list = document.createElement('ul')

    section.append(title)
    section.append(list)

    for (const sk in skills) {
        list.append(createLevelController(skills[sk].name,
            hero.skills[sk],
            hero,
            () => skillDown(hero, sk),
            () => skillUp(hero, sk)))
    }

    section.append(points)

    return section
}

const createHeroPanel = (hero) => {
    const panel = document.createElement('div')

    panel.classList.add('hero-panel')
    panel.setAttribute('id', hero.name + '-panel')

    const info = createInfoSection(hero)
    const attr = createAttributesSection(hero)
    const skills = createSkillsSection(hero)

    panel.append(info)
    panel.append(attr)
    panel.append(skills)

    selectedHeroes.append(panel)

    updateUi(hero)
}
