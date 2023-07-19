const companions = document.querySelector('#selected-heroes')

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

    // btnSub.style.visibility = "hidden"
    // btnAdd.style.visibility = "hidden"

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
    const skillsLI = []
    skillsLI.push(createLevelController('Ironflesh', hero.skills.ironflesh, hero, () => skillDown(hero, 'ironflesh'), () => skillUp(hero, 'ironflesh')))
    skillsLI.push(createLevelController('Power Strike', hero.skills.power_strike, hero, () => skillDown(hero, 'power_strike'), () => skillUp(hero, 'power_strike')))
    skillsLI.push(createLevelController('Power Throw', hero.skills.power_throw, hero, () => skillDown(hero, 'power_throw'), () => skillUp(hero, 'power_throw')))
    skillsLI.push(createLevelController('Power Draw', hero.skills.power_draw, hero, () => skillDown(hero, 'power_draw'), () => skillUp(hero, 'power_draw')))
    skillsLI.push(createLevelController('Weapon Master', hero.skills.weapon_master, hero, () => skillDown(hero, 'weapon_master'), () => skillUp(hero, 'weapon_master')))
    skillsLI.push(createLevelController('Shield', hero.skills.shield, hero, () => skillDown(hero, 'shield'), () => skillUp(hero, 'shield')))
    skillsLI.push(createLevelController('Athletics', hero.skills.athletics, hero, () => skillDown(hero, 'athletics'), () => skillUp(hero, 'athletics')))
    skillsLI.push(createLevelController('Riding', hero.skills.riding, hero, () => skillDown(hero, 'riding'), () => skillUp(hero, 'riding')))
    skillsLI.push(createLevelController('Horse Archery', hero.skills.horse_archery, hero, () => skillDown(hero, 'horse_archery'), () => skillUp(hero, 'horse_archery')))
    skillsLI.push(createLevelController('Looting', hero.skills.looting, hero, () => skillDown(hero, 'looting'), () => skillUp(hero, 'looting')))
    skillsLI.push(createLevelController('Trainer', hero.skills.trainer, hero, () => skillDown(hero, 'trainer'), () => skillUp(hero, 'trainer')))
    skillsLI.push(createLevelController('Tracking', hero.skills.tracking, hero, () => skillDown(hero, 'tracking'), () => skillUp(hero, 'tracking')))
    skillsLI.push(createLevelController('Tactics', hero.skills.tactics, hero, () => skillDown(hero, 'tactics'), () => skillUp(hero, 'tactics')))
    skillsLI.push(createLevelController('Path Finding', hero.skills.path_finding, hero, () => skillDown(hero, 'path_finding'), () => skillUp(hero, 'path_finding')))
    skillsLI.push(createLevelController('Spotting', hero.skills.spotting, hero, () => skillDown(hero, 'spotting'), () => skillUp(hero, 'spotting')))
    skillsLI.push(createLevelController('Inventory Management', hero.skills.inventory_management, hero, () => skillDown(hero, 'inventory_management'), () => skillUp(hero, 'inventory_management')))
    skillsLI.push(createLevelController('Wound Treatment', hero.skills.wound_treatment, hero, () => skillDown(hero, 'wound_treatment'), () => skillUp(hero, 'wound_treatment')))
    skillsLI.push(createLevelController('Surgery', hero.skills.surgery, hero, () => skillDown(hero, 'surgery'), () => skillUp(hero, 'surgery')))
    skillsLI.push(createLevelController('First Aid', hero.skills.first_aid, hero, () => skillDown(hero, 'first_aid'), () => skillUp(hero, 'first_aid')))
    skillsLI.push(createLevelController('Engineer', hero.skills.engineer, hero, () => skillDown(hero, 'engineer'), () => skillUp(hero, 'engineer')))
    skillsLI.push(createLevelController('Persuasion', hero.skills.persuasion, hero, () => skillDown(hero, 'persuasion'), () => skillUp(hero, 'persuasion')))
    skillsLI.push(createLevelController('Prisoner Management', hero.skills.prisoner_management, hero, () => skillDown(hero, 'prisoner_management'), () => skillUp(hero, 'prisoner_management')))
    skillsLI.push(createLevelController('Leadership', hero.skills.leadership, hero, () => skillDown(hero, 'leadership'), () => skillUp(hero, 'leadership')))
    skillsLI.push(createLevelController('Trade', hero.skills.trade, hero, () => skillDown(hero, 'trade'), () => skillUp(hero, 'trade')))

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
