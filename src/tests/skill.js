const Skill = (id, attr) => {

    function makeName() {
        const arr = id.split("_");

        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }

        return arr.join(" ");
    }

    return {
        id,
        attr,
        name: makeName(),
    }
}

const skills = {
    ironflesh: Skill('ironflesh', 'str'),
    power_strike: Skill('power_strike', 'str'),
    power_throw: Skill('power_throw', 'str'),
    power_draw: Skill('power_draw', 'str'),
    weapon_master: Skill('weapon_master', 'agi'),
    shield: Skill('shield', 'agi'),
    athletics: Skill('athletics', 'agi'),
    riding: Skill('riding', 'agi'),
    horse_archery: Skill('horse_archery', 'agi'),
    looting: Skill('looting', 'agi'),
    trainer: Skill('trainer', 'int'),
    tracking: Skill('tracking', 'int'),
    tactics: Skill('tactics', 'int'),
    path_finding: Skill('path_finding', 'int'),
    spotting: Skill('spotting', 'int'),
    inventory_management: Skill('inventory_management', 'int'),
    wound_treatment: Skill('wound_treatment', 'int'),
    surgery: Skill('surgery', 'int'),
    first_aid: Skill('first_aid', 'int'),
    engineer: Skill('engineer', 'int'),
    persuasion: Skill('persuasion', 'int'),
    prisoner_management: Skill('prisoner_management', 'cha'),
    leadership: Skill('leadership', 'cha'),
    trade: Skill('trade', 'cha'),
}
