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

            // check for books the player cannot use anymore
            if (hero.name === "Player") {
                if (hero.attributes.int === 10 && books.logic.selected) {
                    deselectBook('logic')
                }
                for (const bk in books) {
                    if (books[bk].selected && hero.attributes.int < books[bk].int) {
                        deselectBook(bk)
                    }
                }
            }
        }
    }
    return hero.attributes[attr]
}

const canSkillUp = (hero, skill) => {
    if (hero.skills[skill] < 10) {

        let canInvest = parseInt(hero.attributes[skills[skill].attr] / 3)

        for (const bk in books) {
            if (books[bk].bonus === skill && books[bk].selected)
                canInvest++
        }

        if (hero.skills.points > 0) {
            return hero.skills[skill] < canInvest
        }
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
