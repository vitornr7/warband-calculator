function createPlayerOrigins() {
    const titlePanel = document.querySelector('#Player-panel .title')

    const btnOrigin = createExtrasButton('Origin', createOriginTable)
    const btnBook = createExtrasButton('Books', createBooksTable)

    titlePanel.append(btnOrigin)
    titlePanel.append(btnBook)
}


function createExtrasButton(title, content) {
    const btn = document.createElement('details')

    const btnTitle = document.createElement('summary')
    const btnContent = document.createElement('div')

    btn.setAttribute('data-popover', 'down')
    btnTitle.innerText = title

    // btn.onclick = () => {
    //     details.forEach(el => {
    //         if (el !== btn && el.hasAttribute('open'))
    //             el.removeAttribute('open')
    //     })
    // }

    btnContent.append(content())

    btn.append(btnTitle)
    btn.append(btnContent)

    return btn
}

function createOriginTable() {
    return document.createElement('table')
}


function createBooksTable() {
    const table = document.createElement('table')
    const tHead = document.createElement('thead')
    const tBody = document.createElement('tbody')

    // header
    const tHeadRow = document.createElement('tr')
    const header = ['#', 'Book Name', 'Bonus', 'INT Required']
    header.forEach(el => {
        const th = document.createElement('th')
        th.innerText = el
        tHeadRow.append(th)
    });

    // rows
    for (const bk in books) {
        const tr = document.createElement('tr')
        tr.setAttribute('id', bk)

        const status = document.createElement('td')
        const name = document.createElement('td')
        const bonus = document.createElement('td')
        const intRequired = document.createElement('td')

        status.innerText = 'X'
        name.innerText = books[bk].name
        if (books[bk].bonus === 'int') {
            bonus.innerText = '+1 INT'
        }
        else {
            bonus.innerText = '+1 ' + skills[books[bk].bonus].name
        }
        intRequired.innerText = books[bk].int

        tr.onclick = () => {
            if (books[bk].selected) {
                deselectBook(bk)
            } else {
                selectBook(bk)
            }
        }

        tr.append(status)
        tr.append(name)
        tr.append(bonus)
        tr.append(intRequired)

        tBody.append(tr)

        // for (const prop in books[bk]) {
        //     const td = document.createElement('td')
        //     td.innerText = books[bk][prop]
        //     tr.append(td)
        // }
    }


    tHead.append(tHeadRow)

    table.append(tHead)
    table.append(tBody)

    return table
}
