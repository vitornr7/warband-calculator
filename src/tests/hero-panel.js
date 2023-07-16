const companions = document.querySelector('#selected-heroes')

const createHeroPanel = (hero) => {
    const panel = document.createElement('div')
    panel.classList.add('hero-panel')
    panel.setAttribute('id', hero)

    return panel
}

const createInfoSection = (name) => {
    const infoSection = document.createElement('section')

    const portrait = document.createElement('div')
    const heroName = document.createElement('h2')

    heroName.innerText = name
    portrait.classList.add('portrait')

    infoSection.append(portrait)
    infoSection.append(heroName)

    return infoSection
}

const createStatsSection = (stats) => {
    const statsSection = document.createElement('section')

    const level = createLevelController('Level', stats.level)
    const health = document.createElement('p')

    health.innerText = "Health: " + stats.hp

    statsSection.append(level)
    statsSection.append(health)

    return statsSection
}

const createLevelController = (lbl, lvl) => {
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

    lvlPanel.classList.add('lvl-controller')

    lvlPanel.append(btnSub)
    lvlPanel.append(level)
    lvlPanel.append(btnAdd)

    li.append(label)
    li.append(lvlPanel)

    return li
}

const createAttributesSection = (attr) => {
    const attrSection = document.createElement('section')

    const title = document.createElement('h2')
    title.innerText = "Attributes"

    const attrList = document.createElement('ul')
    const str = createLevelController('STR', attr.str)
    const agi = createLevelController('AGI', attr.agi)
    const int = createLevelController('INT', attr.int)
    const cha = createLevelController('CHA', attr.cha)

    attrList.append(str)
    attrList.append(agi)
    attrList.append(int)
    attrList.append(cha)

    attrSection.append(title)
    attrSection.append(attrList)

    return attrSection
}

const createSkillsSection = () => {

}

const ymira = {
    info: { name: 'Ymira', level: 1, hp: 41 },
    attributes: { str: 6, agi: 9, int: 11, cha: 6 },
    skills: {
        ironflesh: 0,
        power_strike: 0,
        power_throw: 0,
        power_draw: 0,
        weapon_master: 0,
        shield: 0,
        athletics: 1,
        riding: 3,
        horse_archery: 0,
        looting: 0,
        trainer: 0,
        tracking: 0,
        tactics: 0,
        path_finding: 0,
        spotting: 0,
        inventory_management: 3,
        wound_treatment: 1,
        surgery: 1,
        first_aid: 3,
        engineer: 0,
        persuasion: 0,
        prisoner_management: 0,
        leadership: 0,
        trade: 3
    }
}

const ymiraPanel = createHeroPanel('yimira-panel')

const ymiraSec = createInfoSection(ymira.info.name)
const ymiraAttr = createAttributesSection(ymira.attributes)
const ymiraStats = createStatsSection(ymira.info)

ymiraPanel.append(ymiraSec)
ymiraPanel.append(ymiraStats)
ymiraPanel.append(ymiraAttr)

companions.append(ymiraPanel)
