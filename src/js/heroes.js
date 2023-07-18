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
    return {
        defaults: { ...defaults },

        name: defaults.name,
        level: defaults.level,
        health: defaults.health,

        attributes: { ...defaults.attributes, points: 0 },
        skills: createSkills(defaults.skills)
    }
}

function levelUp(hero) {
    hero.level++
    hero.attributes.points++
    hero.skills.points++
}

function removeLevel(hero) {
    if (hero.level > hero.defaults.level) {
        hero.level--
        hero.attributes.points--
        hero.skills.points--
    }
}

const ymira = Hero({
    name: "Ymira",
    level: 1,
    health: 41,
    attributes: { str: 6, agi: 9, int: 11, cha: 6 },
    skills: { athletics: 1, riding: 3, inventory_management: 3, wound_treatment: 1, surgery: 1, first_aid: 3, trade: 3 }
})

const deshavi = Hero({
    name: "Deshavi",
    level: 2,
    health: 45,
    attributes: { str: 8, agi: 9, int: 10, cha: 6 },
    skills: { ironflesh: 1, power_draw: 2, weapon_master: 1, athletics: 2, tracking: 2, path_finding: 3, spotting: 3, inventory_management: 2 }
})

for (let i = 0; i < 5; i++) {
    levelUp(ymira)
}


console.log(ymira)
