const companions = document.querySelector('#selected-heroes')

const createHeroPanel = (id) => {
    const panel = document.createElement('div')
    panel.classList.add('hero-panel')
    panel.setAttribute('id', id)

    return panel
}

const createLevelController = (lbl, lvl, callbackUp, callbackDown) => {
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

    btnAdd.onclick = () => {
        let lvl = callbackUp()
        level.innerText = lvl
    }

    btnSub.onclick = () => {
        let lvl = callbackDown()
        level.innerText = lvl
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

    const level = createLevelController('Level:', hero.info.level, hero.lvlUp.bind(hero), hero.lvlDown.bind(hero))

    heroName.innerText = hero.info.name
    portrait.classList.add('portrait')

    health.innerText = "Health: " + hero.info.hp

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
    points.innerText = "Attribute points: 3"

    const list = document.createElement('ul')

    const str = createLevelController('STR', hero.attributes.str)
    const agi = createLevelController('AGI', hero.attributes.agi)
    const int = createLevelController('INT', hero.attributes.int)
    const cha = createLevelController('CHA', hero.attributes.cha)

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
    points.innerText = "Skill points: 2"

    const list = document.createElement('ul')

    const skillsLI = []
    skillsLI.push(createLevelController('Ironflesh', hero.skills.ironflesh))
    skillsLI.push(createLevelController('Power Strike', hero.skills.power_strike))
    skillsLI.push(createLevelController('Power Throw', hero.skills.power_throw))
    skillsLI.push(createLevelController('Power Draw', hero.skills.power_draw))
    skillsLI.push(createLevelController('Weapon Master', hero.skills.weapon_master))
    skillsLI.push(createLevelController('Shield', hero.skills.shield))
    skillsLI.push(createLevelController('Athletics', hero.skills.athletics))
    skillsLI.push(createLevelController('Riding', hero.skills.riding))
    skillsLI.push(createLevelController('Horse Archery', hero.skills.horse_archery))
    skillsLI.push(createLevelController('Looting', hero.skills.looting))
    skillsLI.push(createLevelController('Trainer', hero.skills.trainer))
    skillsLI.push(createLevelController('Tracking', hero.skills.tracking))
    skillsLI.push(createLevelController('Tactics', hero.skills.tactics))
    skillsLI.push(createLevelController('Path Finding', hero.skills.path_finding))
    skillsLI.push(createLevelController('Spotting', hero.skills.spotting))
    skillsLI.push(createLevelController('Inventory Management', hero.skills.inventory_management))
    skillsLI.push(createLevelController('Wound Treatment', hero.skills.wound_treatment))
    skillsLI.push(createLevelController('Surgery', hero.skills.surgery))
    skillsLI.push(createLevelController('First Aid', hero.skills.first_aid))
    skillsLI.push(createLevelController('Engineer', hero.skills.engineer))
    skillsLI.push(createLevelController('Persuasion', hero.skills.persuasion))
    skillsLI.push(createLevelController('Prisoner Management', hero.skills.prisoner_management))
    skillsLI.push(createLevelController('Leadership', hero.skills.leadership))
    skillsLI.push(createLevelController('Trade', hero.skills.trade))

    section.append(title)
    section.append(list)

    skillsLI.forEach(el => {
        list.append(el)
    })

    section.append(points)

    return section
}

// ymira ---------------------------------------------
const ymiraPanel = createHeroPanel('ymira-panel')
const ymiraInfo = createInfoSection(ymira)
const ymiraAttr = createAttributesSection(ymira)
const ymiraSkills = createSkillsSection(ymira)


ymiraPanel.append(ymiraInfo)
ymiraPanel.append(ymiraAttr)
ymiraPanel.append(ymiraSkills)

companions.append(ymiraPanel)

// deshavi ---------------------------------------------

const deshaviPanel = createHeroPanel('deshavi-panel')
const deshaviInfo = createInfoSection(deshavi)
const deshaviAttr = createAttributesSection(deshavi)
const deshaviSkills = createSkillsSection(deshavi)


deshaviPanel.append(deshaviInfo)
deshaviPanel.append(deshaviAttr)
deshaviPanel.append(deshaviSkills)

companions.append(deshaviPanel)
