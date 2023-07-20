const Skill = (id, attr) => {
    function makeName() {
        const arr = id.split("_");

        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        return arr.join(" ");
    }

    return {
        id,
        attr,
        name: makeName(),
    }
}

const skills = {
    ironflesh: Skill('ironflesh', 'str'),
    power_strike: Skill('power_strike', 'str'),
    power_throw: Skill('power_throw', 'str'),
    power_draw: Skill('power_draw', 'str'),
    weapon_master: Skill('weapon_master', 'agi'),
    shield: Skill('shield', 'agi'),
    athletics: Skill('athletics', 'agi'),
    riding: Skill('riding', 'agi'),
    horse_archery: Skill('horse_archery', 'agi'),
    looting: Skill('looting', 'agi'),
    trainer: Skill('trainer', 'int'),
    tracking: Skill('tracking', 'int'),
    tactics: Skill('tactics', 'int'),
    path_finding: Skill('path_finding', 'int'),
    spotting: Skill('spotting', 'int'),
    inventory_management: Skill('inventory_management', 'int'),
    wound_treatment: Skill('wound_treatment', 'int'),
    surgery: Skill('surgery', 'int'),
    first_aid: Skill('first_aid', 'int'),
    engineer: Skill('engineer', 'int'),
    persuasion: Skill('persuasion', 'int'),
    prisoner_management: Skill('prisoner_management', 'cha'),
    leadership: Skill('leadership', 'cha'),
    trade: Skill('trade', 'cha'),
}


// const Hero = (defaults) => {
//     const hero = {
//         name: defaults.name,
//         level: defaults.level,
//         health: defaults.health,

//         attributes: { ...defaults.attributes, points: 0 },
//         skills: createSkills(defaults.skills),
//     }
//     hero['defaults'] = structuredClone(hero)

//     return hero
// }

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

const canSkillUp = (hero, skill) => {
    if (hero.skills.points > 0 && hero.skills[skill] < 10) {
        return hero.skills[skill] < parseInt(hero.attributes[skills[skill].attr] / 3)
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
