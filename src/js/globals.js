const attributes = { str: 'str', agi: 'agi', int: 'int', cha: 'cha' }


const skills = {
    ironflesh: { attr: attributes.str },
    power_strike: { attr: attributes.str },
    power_throw: { attr: attributes.str },
    power_draw: { attr: attributes.str },
    weapon_master: { attr: attributes.agi },
    shield: { attr: attributes.agi },
    athletics: { attr: attributes.agi },
    riding: { attr: attributes.agi },
    horse_archery: { attr: attributes.agi },
    looting: { attr: attributes.agi },
    trainer: { attr: attributes.int },
    tracking: { attr: attributes.int },
    tactics: { attr: attributes.int },
    path_finding: { attr: attributes.int },
    spotting: { attr: attributes.int },
    inventory_management: { attr: attributes.int },
    wound_treatment: { attr: attributes.int },
    surgery: { attr: attributes.int },
    first_aid: { attr: attributes.int },
    engineer: { attr: attributes.int },
    persuasion: { attr: attributes.int },
    prisoner_management: { attr: attributes.cha },
    leadership: { attr: attributes.cha },
    trade: { attr: attributes.cha }
}
// generate id and name props for the skills object
for (const sk in skills) {
    skills[sk]['id'] = sk;

    const arr = sk.split("_");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    skills[sk]['name'] = arr.join(" ");
}


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


let player
