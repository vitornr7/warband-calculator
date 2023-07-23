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


function createPlayerOrigins() {
    const titlePanel = document.querySelector('#Player-panel .title')



    titlePanel.append(createExtrasButton('Origin'))
    titlePanel.append(createExtrasButton('Books'))

}

const details = []

function createExtrasButton(title, content) {
    const btn = document.createElement('details')

    const btnTitle = document.createElement('summary')
    const btnContent = document.createElement('div')

    btn.setAttribute('data-popover', 'down')
    btnTitle.innerText = title

    details.push(btn)
    btn.onclick = () => {
        details.forEach(el => {
            if (el !== btn && el.hasAttribute('open'))
                el.removeAttribute('open')
        })
    }

    btnContent.append(createExtraContent(content))

    btn.append(btnTitle)
    btn.append(btnContent)

    return btn
}

function createExtraContent(content) {
    // const table = document.createElement('table')
    // const tHead = document.createElement('thead')
    // const tHeadRow = document.createElement('tr')

    // const columns = ['option', 'attributes', 'skills']
    // for (let i = 0; i < columns.length; i++) {
    //     const title = document.createElement('th')
    //     title.innerText = columns[i]
    //     tHeadRow.append(title)
    // }

    // tHead.append(tHeadRow)
    // table.append(tHead)

    // return table

    const p = document.createElement('p')
    p.innerText = 'Work in progress.'
    return p
}
