function selectBook(book) {
    const tr = document.querySelector('#' + book)

    if (player.attributes.int < books[book].int) {
        tr.classList.add('blink')
        setTimeout(() => {
            tr.classList.remove('blink')
        }, "2000");

        return
    }

    if (!books[book].selected) {
        books[book].selected = true

        if (books[book].bonus === 'int') {
            player.attributes.int++
            player.defaults.attributes.int++
            // player.skills.points++

            updateAttrLabel()
        } else {
            if (player.skills[books[book].bonus] === 10) {
                player.skills.points++
            } else {
                player.skills[books[book].bonus]++
            }

            player.defaults.skills[books[book].bonus]++

            updateSkillLabel(book)
        }
    }

    tr.classList.add('selected-book')
    tr.querySelector('td').innerText = 'V'
}

function deselectBook(book) {
    books[book].selected = false

    if (books[book].bonus === 'int') {
        player.attributes.int--
        player.defaults.attributes.int--
        // player.skills.points--

        updateAttrLabel()
    } else {
        player.defaults.skills[books[book].bonus]--
        player.skills[books[book].bonus]--

        updateSkillLabel(book)
    }

    const tr = document.querySelector('#' + book)
    tr.classList.remove('selected-book')
    tr.querySelector('td').innerText = 'X'
}

function updateSkillLabel(book) {
    document.querySelector('#Player-' + books[book].bonus).innerText = player.skills[books[book].bonus]
    updateUi(player)
}

function updateAttrLabel() {
    document.querySelector('#Player-INT').innerText = player.attributes.int
    updateUi(player)
}
