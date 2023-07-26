// const origins = {
//     0: {
//         question: 'Your father was a: ',
//         options: {
//             0: { an: 'noble', at: '', sk: '' },
//             1: { an: 'merchant', at: '', sk: '' },
//             2: { an: 'warrior', at: '', sk: '' },
//             3: { an: 'hunter', at: '', sk: '' },
//             4: { an: 'nomad', at: '', sk: '' },
//             5: { an: 'thief', at: '', sk: '' }
//         },
//     },
//     0: {
//         q: 'Your father was: ',
//         a: {
//             0: 'a noble',
//             1: 'a merchant',
//             2: 'a warrior',
//             3: 'a hunter',
//             4: 'a thief',
//         }
//     },
// }

const books = {
    alixenus: {
        name: 'The Life of Alixenus the Great',
        bonus: skills.leadership.id,
        int: 7,
        selected: false
    },
    rhetorica: {
        name: 'Rhetorica ad Herennium',
        bonus: skills.persuasion.id,
        int: 8,
        selected: false
    },
    fighting: {
        name: 'On the Art of Fighting with Swords',
        bonus: skills.weapon_master.id,
        int: 9,
        selected: false
    },
    militari: {
        name: 'De Re Militari',
        bonus: skills.tactics.id,
        int: 9,
        selected: false
    },
    logic: {
        name: 'Essays on Logic',
        bonus: attributes.int,
        int: 10,
        selected: false
    },
    value: {
        name: 'A Treatise on the Value of Things',
        bonus: skills.trade.id,
        int: 11,
        selected: false
    },
    mechanical: {
        name: 'Method of Mechanical Theorems',
        bonus: skills.engineer.id,
        int: 12,
        selected: false
    },
    manual: {
        name: 'Manual of Arms',
        bonus: skills.trainer.id,
        int: 0,
        selected: false
    },
    healing: {
        name: 'The Book of Healing',
        bonus: skills.wound_treatment.id,
        int: 0,
        selected: false
    },
    surgery: {
        name: 'The Great Book of Surgery',
        bonus: skills.surgery.id,
        int: 0,
        selected: false
    }
}

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
            if (tr.classList.contains('selected-book')) {
                tr.classList.remove('selected-book')

                tr.querySelector('td').innerText = 'X'
            }
            else {
                tr.classList.add('selected-book')
                tr.querySelector('td').innerText = 'V'
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
