import json

hero = {
    "name": "Companion",
    "level": 1,
    "health": "?",

    "attributes": {
        "str": 6,
        "agi": 6,
        "int": 6,
        "cha": 6,
        "points": 0
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
        "trade": 0,
        "points": 0
    }
}


def createHero():
    with open('heroes.json') as f:
        data = json.load(f)

    for h in hero:
        if h == "attributes":
            for a in hero[h]:
                if a == 'points':
                    hero[h][a] = 0
                    break

                answer = input(a + ": ")
                if not answer:
                    print('\n--> invalid ' + a + ' <---')
                    return
                hero[h][a] = int(answer)

        elif h == "skills":
            for s in hero[h]:
                if s == 'points':
                    hero[h][s] = 0
                    break

                answer = input(s + ": ")
                if not answer:
                    answer = 0
                hero[h][s] = int(answer)

        elif h == "health":
            hero[h] = "?"

        elif h == "level":
            answer = input(h + ": ")
            if not answer:
                print('\n ---> invalid level <---')
                return
            hero[h] = int(answer)

        else:
            hero[h] = input(h + ": ")

    data.append(hero)

    with open("heroes.json", 'w') as f:
        json.dump(data, f)


def minify():
    with open('heroes.json') as f:
        data = json.load(f)
    with open("heroes.json", 'w') as f:
        json.dump(data, f)


while (1):
    op = input(
        '\n0: quit\n1: create new hero\n2: update hero (TODO)\n5: minify json file\n\nChoice: ')
    if op == '0':
        break
    elif op == '1':
        createHero()
    elif op == '5':
        minify()
