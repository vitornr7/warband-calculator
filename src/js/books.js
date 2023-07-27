function selectBook(book) {
    const tr = document.querySelector('#' + book)

    if (player.attributes.int < books[book].int) {
        tr.querySelector('td:last-child').classList.add('no-int')
        setTimeout(() => {
            tr.querySelector('td:last-child').classList.remove('no-int')
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
    const lbl = document.querySelector('#Player-' + books[book].bonus)
    lbl.innerText = player.skills[books[book].bonus]

    if (books[book].selected) {
        lbl.classList.add('book-on')
    } else {
        lbl.classList.remove('book-on')
    }

    updateUi(player)
}

function updateAttrLabel() {
    const lbl = document.querySelector('#Player-INT')
    lbl.innerText = player.attributes.int

    if (books.logic.selected) {
        lbl.classList.add('book-on')
    } else {
        lbl.classList.remove('book-on')
    }

    updateUi(player)
}
