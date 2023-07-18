const companions = document.querySelector('#selected-heroes')

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
        level.innerText = callbackSub(hero)
        document.querySelector("#" + hero.name + '-attr-lbl').innerText = "Attribute points: " + hero.attributes.points
        document.querySelector("#" + hero.name + '-skill-lbl').innerText = "Skill points: " + hero.skills.points
    }

    btnAdd.onclick = () => {
        level.innerText = callbackAdd(hero)
        document.querySelector("#" + hero.name + '-attr-lbl').innerText = "Attribute points: " + hero.attributes.points
        document.querySelector("#" + hero.name + '-skill-lbl').innerText = "Skill points: " + hero.skills.points
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

    const level = createLevelController('Level:', hero.level, hero, levelDown, levelUp)

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
    points.innerText = "Skill points: 0"
    points.setAttribute('id', hero.name + '-skill-lbl')

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

    return panel
}

const ymiraPanel = createHeroPanel(ymira)
const deshaviPanel = createHeroPanel(deshavi)


companions.append(ymiraPanel)
companions.append(deshaviPanel)
