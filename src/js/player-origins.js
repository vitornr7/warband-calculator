function bookSkillUp(book) {
    const player = heroes[0]

    if (player.attributes.int < book.int) {
        return 'int'
    }

    if (book.selected === false || book.selected === 'int') {
        if (player.skills[book.bonus] === 10) {
            player.skills.points++
        } else {
            player.skills[book.bonus]++
        }

        player.defaults.skills[book.bonus]++

        document.querySelector('#Player-' + book.bonus).innerText = player.skills[book.bonus]
        updateUi(player)

        return 'selected'
    }

    player.defaults.skills[book.bonus]--
    player.skills[book.bonus]--

    document.querySelector('#Player-' + book.bonus).innerText = player.skills[book.bonus]
    updateUi(player)

    return false

}
