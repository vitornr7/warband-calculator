function selectBook(book) {
    if (player.attributes.int < book.int) {
        return 'int'
    }

    if (book.selected === false || book.selected === 'int') {
        if (book.bonus === 'int') {
            bookAttrUp(book)
        } else {
            bookSkillUp(book)
        }

        updateUi(player)
        return 'selected'
    }

    if (book.bonus === 'int') {
        bookAttrDown(book)
    } else {
        bookSkillDown(book)
    }

    return false
}

function bookAttrUp(book) {
    player.attributes.int++
    player.defaults.attributes.int++
    // player.skills.points++

    updateAttrLabel()
}

function bookAttrDown(book) {
    player.attributes.int--
    player.defaults.attributes.int--
    // player.skills.points--

    updateAttrLabel()
}

function bookSkillUp(book) {
    if (player.skills[book.bonus] === 10) {
        player.skills.points++
    } else {
        player.skills[book.bonus]++
    }

    player.defaults.skills[book.bonus]++

    updateSkillLabel(book)
}

function bookSkillDown(book) {
    player.defaults.skills[book.bonus]--
    player.skills[book.bonus]--

    updateSkillLabel(book)
}

function updateSkillLabel(book) {
    document.querySelector('#Player-' + book.bonus).innerText = player.skills[book.bonus]
    updateUi(player)
}

function updateAttrLabel() {
    document.querySelector('#Player-INT').innerText = player.attributes.int
    updateUi(player)
}
