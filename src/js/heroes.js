const get_info = (name, level) => {
    return {
        name,
        level,
        hp: 0,
    }
}

const get_attributes = (str, agi, int, cha) => {
    return {
        str,
        agi,
        int,
        cha,
        points: 0
    }
}

const get_skills = (skills) => {
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

const hero = (info, attributes, skills) => {
    return {
        info: get_info(...info),
        attributes: get_attributes(...attributes),
        skills: get_skills(skills),

        lvlUp() {
            this.info.level++
            this.attributes.points++
            this.skills.points++
        },

        lvlDown() {
            if (this.info.level > 1) {
                this.info.level--
                this.attributes.points--
                this.skills.points--
            }
        },

        upAttribute(attr) {
            if (this.attributes.points > 0) {
                if (attr == 'int') {
                    this.skills.points++
                }

                this.attributes[attr]++
                this.attributes.points--
            }
        },
        downAttribute(attr) {
            if (attr == 'int')
                this.skills.points--

            this.attributes[attr]--
            this.attributes.points++
        },

        upSKill(skill) {
            if (this.skills.points > 0 && this.skills[skill] < 10) {
                this.skills[skill]++
                this.skills.points--
            }
        },
        downSkill(skill) {
            if (this.skills[skill] > 0) {
                this.skills[skill]--
                this.skills.points++
            }
        }
    }
}

// ymira health = 41
const ymiraDef = hero(["Ymira", 1], [6, 9, 11, 6], { athletics: 1, riding: 3, inventory_management: 3, wound_treatment: 1, surgery: 1, first_aid: 3, trade: 3 })
const ymira = { ...ymiraDef }


// deshavi health = 45
const deshaviDef = hero(["Deshavi", 2], [8, 9, 10, 6], { ironflesh: 1, power_draw: 2, weapon_master: 1, athletics: 2, tracking: 2, path_finding: 3, spotting: 3, inventory_management: 2 })
const deshavi = { ...deshaviDef }
