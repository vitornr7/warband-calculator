const selectedHeroes = document.querySelector('#selected-heroes')

function updateUi(hero) {
    const panel = document.querySelector("#" + hero.name + '-panel')

    document.querySelector("#" + hero.name + '-attr-lbl').innerText = "Attribute points: " + hero.attributes.points
    document.querySelector("#" + hero.name + '-skill-lbl').innerText = "Skill points: " + hero.skills.points

    const sec1 = panel.querySelector('section button:first-of-type')
    const sec2 = panel.querySelectorAll('section:nth-child(2) button')
    const sec3 = panel.querySelectorAll('section:nth-child(3) button')

    if (canLvlDown(hero)) {
        sec1.style.visibility = "visible"
    } else {
        sec1.style.visibility = "hidden"
    }

    // this i places a neddle on the buttons pairs of a section element
    let i = 0

    const atr = ['str', 'agi', 'int', 'cha']
    atr.forEach(el => {
        if (canAttrDown(hero, el)) {
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
    });

    i = 0
    for (sk in skills) {
        if (canSkillDown(hero, skills[sk].id)) {
            sec3[i].style.visibility = "visible"
        } else {
            sec3[i].style.visibility = "hidden"
        }

        if (canSkillUp(hero, skills[sk].id)) {
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
    const btnSub = document.createElement('button')
    const level = document.createElement('div')
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

    const portrait = document.createElement('div')
    const heroName = document.createElement('h2')
    const list = document.createElement('ul')
    const health = document.createElement('li')

    const level = createLevelController('Level:', hero.level, hero, () => levelDown(hero), () => levelUp(hero))

    heroName.innerText = hero.name
    portrait.classList.add('portrait')

    health.innerText = "Health: " + hero.health

    section.append(portrait)
    section.append(heroName)

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

    const str = createLevelController('STR', hero.attributes.str, hero, () => attributeDown(hero, 'str'), () => attributeUp(hero, 'str'))
    const agi = createLevelController('AGI', hero.attributes.agi, hero, () => attributeDown(hero, 'agi'), () => attributeUp(hero, 'agi'))
    const int = createLevelController('INT', hero.attributes.int, hero, () => attributeDown(hero, 'int'), () => attributeUp(hero, 'int'))
    const cha = createLevelController('CHA', hero.attributes.cha, hero, () => attributeDown(hero, 'cha'), () => attributeUp(hero, 'cha'))

    list.append(str)
    list.append(agi)
    list.append(int)
    list.append(cha)

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
            hero.skills[skills[sk].id],
            hero,
            () => skillDown(hero, skills[sk].id),
            () => skillUp(hero, skills[sk].id)))
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

const createPlayerPanel = (hero) => {
    const panel = document.querySelector('#Player-panel')

    panel.classList.add('hero-panel')
    // panel.setAttribute('id', hero.name + '-panel')

    const info = createInfoSection(hero)
    const attr = createAttributesSection(hero)
    const skills = createSkillsSection(hero)

    panel.append(info)
    panel.append(attr)
    panel.append(skills)


    selectedHeroes.append(panel)

    updateUi(hero)
}

// ----------------------------------------------------------------------------

const player = {
    name: "Player",
    level: 1,
    health: "?",
    attributes: { str: 6, agi: 6, int: 6, cha: 6, points: 0 },
    skills: {
        ironflesh: 0,
        power_strike: 0,
        power_throw: 0,
        power_draw: 0,
        weapon_master: 0,
        shield: 0,
        athletics: 0,
        riding: 0,
        horse_archery: 0,
        looting: 0,
        trainer: 0,
        tracking: 0,
        tactics: 0,
        path_finding: 0,
        spotting: 0,
        inventory_management: 0,
        wound_treatment: 0,
        surgery: 0,
        first_aid: 0,
        engineer: 0,
        persuasion: 0,
        prisoner_management: 0,
        leadership: 0,
        trade: 0,

        points: 0
    }
}
player['defaults'] = structuredClone(player)
createPlayerPanel(player)
