const get_info = (name, level) => {
    return {
        name,
        level,
        hp: 0
    }
}

const get_attributes = (str, agi, int, cha) => {
    return {
        str,
        agi,
        int,
        cha
    }
}

const get_skills = (s) => {
    return {
        ironflesh: s.ironflesh | 0,
        power_strike: s.power_strike | 0,
        power_throw: s.power_throw | 0,
        power_draw: s.power_draw | 0,
        weapon_master: s.weapon_master | 0,
        shield: s.shield | 0,
        athletics: s.athletics | 0,
        riding: s.riding | 0,
        horse_archery: s.horse_archery | 0,
        looting: s.looting | 0,
        trainer: s.trainer | 0,
        tracking: s.tracking | 0,
        tactics: s.tactics | 0,
        path_finding: s.path_finding | 0,
        spotting: s.spotting | 0,
        inventory_management: s.inventory_management | 0,
        wound_treatment: s.wound_treatment | 0,
        surgery: s.surgery | 0,
        first_aid: s.first_aid | 0,
        engineer: s.engineer | 0,
        persuasion: s.persuasion | 0,
        prisoner_management: s.prisoner_management | 0,
        leadership: s.leadership | 0,
        trade: s.trade | 0
    }
}

const hero = (info, attributes, skills) => {
    return {
        info: get_info(...info),
        attributes: get_attributes(...attributes),
        skills: get_skills(skills)
    }
}

const ymira = hero(["Ymira", 1], [7, 7, 8, 9], {})
const marnid = hero(["Marnid", 2, 46], [10, 11, 10, 6], { ironflesh: 3 })

console.log(ymira)
console.log(marnid)
