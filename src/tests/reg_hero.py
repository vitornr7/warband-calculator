import json

hero = {
    "name": "Companion",
    "level": 1,
    "health": "?",

    "attributes": {
        "str": 6,
        "agi": 6,
        "int": 6,
        "cha": 6
    },

    "skills": {
        "ironflesh": 0,
        "power_strike": 0,
        "power_throw": 0,
        "power_draw": 0,
        "weapon_master": 0,
        "shield": 0,
        "athletics": 0,
        "riding": 0,
        "horse_archery": 0,
        "looting": 0,
        "trainer": 0,
        "tracking": 0,
        "tactics": 0,
        "path_finding": 0,
        "spotting": 0,
        "inventory_management": 0,
        "wound_treatment": 0,
        "surgery": 0,
        "first_aid": 0,
        "engineer": 0,
        "persuasion": 0,
        "prisoner_management": 0,
        "leadership": 0,
        "trade": 0
    }
}


def createHero():
    with open('heroes.json') as f:
        data = json.load(f)

    for h in hero:
        if h == "attributes":
            for a in hero[h]:
                hero[h][a] = int(input(a + ": "))

        elif h == "skills":
            for s in hero[h]:
                answer = input(s + ": ")
                if not answer:
                    answer = 0
                hero[h][s] = int(answer)

        elif h == "health":
            hero[h] = "?"

        elif h == "level":
            hero[h] = int(input(h + ": "))

        else:
            hero[h] = input(h + ": ")

    data.append(hero)

    with open("heroes.json", 'w') as f:
        json.dump(data, f)


while (1):
    op = input('\n0: quit\n1: create new hero\n2: update hero (TODO)\n\nChoice: ')
    if op == '1':
        createHero()
    if op == '0':
        break
