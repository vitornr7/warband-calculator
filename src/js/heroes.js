const attributes = { str: 'str', agi: 'agi', int: 'int', cha: 'cha' }

const skills = {
    ironflesh: { attr: attributes.str },
    power_strike: { attr: attributes.str },
    power_throw: { attr: attributes.str },
    power_draw: { attr: attributes.str },
    weapon_master: { attr: attributes.agi },
    shield: { attr: attributes.agi },
    athletics: { attr: attributes.agi },
    riding: { attr: attributes.agi },
    horse_archery: { attr: attributes.agi },
    looting: { attr: attributes.agi },
    trainer: { attr: attributes.int },
    tracking: { attr: attributes.int },
    tactics: { attr: attributes.int },
    path_finding: { attr: attributes.int },
    spotting: { attr: attributes.int },
    inventory_management: { attr: attributes.int },
    wound_treatment: { attr: attributes.int },
    surgery: { attr: attributes.int },
    first_aid: { attr: attributes.int },
    engineer: { attr: attributes.int },
    persuasion: { attr: attributes.int },
    prisoner_management: { attr: attributes.cha },
    leadership: { attr: attributes.cha },
    trade: { attr: attributes.cha }
}

for (const sk in skills) {
    skills[sk]['id'] = sk;

    const arr = sk.split("_");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    skills[sk]['name'] = arr.join(" ");
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

        if (attr === attributes.int) {
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

        if (attr === attributes.int) {
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
