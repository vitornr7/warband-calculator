const strSkills = ['ironflesh', 'power_strike', 'power_throw', 'power_draw']
const agiSkills = ['weapon_master', 'shield', 'athletics', 'riding', 'horse_archery', 'looting',]
const intSkills = ['trainer', 'tracking', 'tactics', 'path_finding', 'spotting', 'inventory_management', 'wound_treatment', 'surgery', 'first_aid', 'engineer', 'persuasion']
const chaSkills = ['prisoner_management', 'leadership', 'trade']
const skillsArr = [...strSkills, ...agiSkills, ...intSkills, ...chaSkills]

const createSkills = (skills) => {
    return {
        ironflesh: skills.ironflesh | 0,
        power_strike: skills.power_strike | 0,
        power_throw: skills.power_throw | 0,
        power_draw: skills.power_draw | 0,
        weapon_master: skills.weapon_master | 0,
        shield: skills.shield | 0,
        athletics: skills.athletics | 0,
        riding: skills.riding | 0,
        horse_archery: skills.horse_archery | 0,
        looting: skills.looting | 0,
        trainer: skills.trainer | 0,
        tracking: skills.tracking | 0,
        tactics: skills.tactics | 0,
        path_finding: skills.path_finding | 0,
        spotting: skills.spotting | 0,
        inventory_management: skills.inventory_management | 0,
        wound_treatment: skills.wound_treatment | 0,
        surgery: skills.surgery | 0,
        first_aid: skills.first_aid | 0,
        engineer: skills.engineer | 0,
        persuasion: skills.persuasion | 0,
        prisoner_management: skills.prisoner_management | 0,
        leadership: skills.leadership | 0,
        trade: skills.trade | 0,

        points: 0
    }
}

const Hero = (defaults) => {
    const hero = {
        name: defaults.name,
        level: defaults.level,
        health: defaults.health,

        attributes: { ...defaults.attributes, points: 0 },
        skills: createSkills(defaults.skills),
    }
    hero['defaults'] = structuredClone(hero)

    return hero
}

function levelUp(hero) {
    hero.level++
    hero.attributes.points++
    hero.skills.points++

    return hero.level
}

const canLvlDown = hero => hero.level > hero.defaults.level
function levelDown(hero) {
    if (canLvlDown(hero)) {
        hero.level--
        hero.attributes.points--
        hero.skills.points--
    }

    return hero.level
}

const canAttrUp = hero => hero.attributes.points > 0
function attributeUp(hero, attr) {
    if (canAttrUp(hero)) {
        hero.attributes[attr]++
        hero.attributes.points--

        if (attr === 'int') {
            hero.skills.points++
        }
    }
    return hero.attributes[attr]
}

const canAttrDown = (hero, attr) => hero.attributes[attr] > hero.defaults.attributes[attr]
function attributeDown(hero, attr) {
    if (canAttrDown(hero, attr)) {
        hero.attributes[attr]--
        hero.attributes.points++

        if (attr === 'int') {
            hero.skills.points--
        }
    }
    return hero.attributes[attr]
}

function getAttribute(skill) {
    if (strSkills.includes(skill))
        return 'str'

    if (agiSkills.includes(skill))
        return 'agi'

    if (chaSkills.includes(skill))
        return 'cha'

    return 'int'
}

const canSkillUp = (hero, skill) => {
    if (hero.skills.points > 0 && hero.skills[skill] < 10) {
        const attr = getAttribute(skill)
        return hero.skills[skill] < parseInt(hero.attributes[attr] / 3)
    }
}
function skillUp(hero, skill) {
    if (canSkillUp(hero, skill)) {
        hero.skills[skill]++
        hero.skills.points--
    }

    return hero.skills[skill]
}

const canSkillDown = (hero, skill) => hero.skills[skill] > hero.defaults.skills[skill]
function skillDown(hero, skill) {
    if (canSkillDown(hero, skill)) {
        hero.skills[skill]--
        hero.skills.points++
    }

    return hero.skills[skill]
}
