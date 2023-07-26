function bookSkillUp(book) {
    const player = heroes[0]

    if (!book.selected) {
        if (player.attributes.int >= book.int) {
            if (player.skills[book.bonus] === 10) {
                player.skills.points++
            } else {
                player.skills[book.bonus]++
            }

            player.defaults.skills[book.bonus]++

            book.selected = true

            document.querySelector('#Player-' + book.bonus).innerText = player.skills[book.bonus]

            updateUi(player)
        }
    }
}
