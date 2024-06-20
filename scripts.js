var data = [
    {
        "name": "Vow of Blood",
        "levels": [
            "All foes deal +0% damage",
            "All foes deal +20% damage",
            "All foes deal +60% damage",
            "All foes deal +100% damage"
        ],
        "heats": [0, 1, 3, 5]
    },
    {
        "name": "Vow of Dominance",
        "levels": [
            "All foes have +0% health",
            "All foes have +10% health",
            "All foes have +20% health",
            "All foes have +30% health"
        ],
        heats: [0, 1, 2, 3]
    },
    {
        "name": "Vow of Rebuke",
        "levels": [
            "All foes have 0 barrier",
            "All foes have 1 barrier",
            "All foes have 2 barrier"
        ],
        heats: [0, 1, 2]
    },
    {
        "name": "Vow of Fury",
        "levels": [
            "All foes are +0% faster",
            "All foes are +20% faster",
            "All foes are +40% faster"
        ],
        heats: [0, 3, 6]
    },
    {
        "name": "Vow of Suffering",
        "levels": [
            "In each encounter, you take +0% bonus damage the first time you are struck",
            "In each encounter, you take +100% bonus damage the first time you are struck",
            "In each encounter, you take +300% bonus damage the first time you are struck"
        ],
        heats: [0, 2, 4]
    },
    {
        "name": "Vow of Commotion",
        "levels": [
            "Most encounters have 0% more foes",
            "Most encounters have 20% more foes",
            "Most encounters have 40% more foes",
            "Most encounters have 60% more foes"
        ],
        heats: [0, 1, 2, 3],
    },
    {
        "name": "Vow of Haunting",
        "levels": [
            "Most slain foes have 0% chance to become a Revenant",
            "Most slain foes have 25% chance to become a Revenant",
            "Most slain foes have 50% chance to become a Revenant"
        ],
        heats: [0, 1, 2],
    },
    {
        "name": "Vow of Wandering",
        "levels": [
            "Most foes have 0% chance to be from the next Region (if there is one)",
            "Most foes have 10% chance to be from the next Region (if there is one)",
            "Most foes have 25% chance to be from the next Region (if there is one)"
        ],
        heats: [0, 1, 3],
    },
    {
        "name": "Vow of Scars",
        "levels": [
            "Any healing effects are 100% effective",
            "Any healing effects are 75% effective",
            "Any healing effects are 50% effective",
            "Any healing effects are 0% effective"
        ],
        heats: [0, 1, 2, 4],
    },
    {
        "name": "Vow of Destitution",
        "levels": [
            "All items that cost gold are 0% more expensive",
            "All items that cost gold are 40% more expensive",
            "All items that cost gold are 80% more expensive"
        ],
        heats: [0, 1, 2],
    },
    {
        "name": "Vow of Panic",
        "levels": [
            "You enter each location with 100% magick",
            "You enter each location with 0% magick",
        ],
        heats: [0, 1],
    },
    {
        "name": "Vow of Forsaking",
        "levels": [
            "After you choose a Boon, 0 unpicked blessings will not appear again this night",
            "After you choose a Boon, 2 unpicked blessings will not appear again this night",
        ],
        heats: [0, 2],
    },
    {
        "name": "Vow of Bitterness",
        "levels": [
            "The first 0 Boons in each Region become Red Onions instead",
            "The first 1 Boons in each Region become Red Onions instead",
        ],
        heats: [0, 1],
    },
    {
        "name": "Vow of Arrogance",
        "levels": [
            "Whenever you choose a Boon, Prime 0 magick for each Rarity greater than Common",
            "Whenever you choose a Boon, Prime 5 magick for each Rarity greater than Common",
            "Whenever you choose a Boon, Prime 10 magick for each Rarity greater than Common",
        ],
        heats: [0, 1, 4],
    },
    {
        "name": "Vow of Desperation",
        "levels": [
            "You have infinite time to fight through each Region (or else...)",
            "You have 9:00 to fight through each Region (or else...)",
            "You have 7:00 to fight through each Region (or else...)",
            "You have 5:00 to fight through each Region (or else...)",
        ],
        heats: [0, 1, 3, 6],
    },
    {
        "name": "Vow of Abandon",
        "levels": [
            "Nullify the benefits of 0% of your Arcana Cards",
            "Nullify the benefits of 100% of your Arcana Cards",
        ],
        heats: [0, 5],
    }
]
var elements = {}

function addTh(tr, el) {
    let th = document.createElement("th")
    tr.appendChild(th)
    th.appendChild(el)
}

function setup() {
    let params = new URLSearchParams(location.search);
    let values = decodeValues(params.get("values"));
    let locks = decodeLocks(params.get("locks"));
    let target = decodeTarget(params.get("target"));
    let inputs = document.getElementById("inputs")
    let max_heat = 0
    for (let i = 0; i < data.length; i++) {
        let row = document.createElement("tr")
        inputs.appendChild(row)
        
        let datum = data[i]
        let heats = datum["heats"]
        let levels = datum["levels"]
        max_heat += heats[heats.length - 1]

        let el_name = document.createElement("span")
        el_name.innerText = datum["name"]
        datum["el_name"] = el_name
        addTh(row, el_name)

        let el_input = document.createElement("input")
        el_input.type = "range"
        el_input.min = 0
        el_input.max = levels.length - 1
        el_input.value = values[i]
        el_input.setAttribute("onChange", "refresh()")
        datum["el_input"] = el_input
        addTh(row, el_input)

        let el_heat_flavor = document.createElement("span")
        el_heat_flavor.innerText = "+0 heat"
        datum["el_heat_flavor"] = el_heat_flavor
        addTh(row, el_heat_flavor)

        let el_lock_wrapper = document.createElement("span")
        addTh(row, el_lock_wrapper)

        let el_lock = document.createElement("input")
        el_lock.type = "checkbox"
        el_lock.checked = locks[i]
        datum["el_lock"] = el_lock
        el_lock_wrapper.appendChild(el_lock)

        let el_lock_flavor = document.createElement("span")
        el_lock_flavor.innerText = "lock"
        datum["el_lock_flavor"] = el_lock_flavor
        el_lock_wrapper.appendChild(el_lock_flavor)

        let el_flavor = document.createElement("span")
        el_flavor.innerText = levels[0]
        datum["el_flavor"] = el_flavor
        addTh(row, el_flavor)
    }
    elements["total_heat"] = document.getElementById("total_heat")
    elements["target_heat"] = document.getElementById("target_heat")
    elements["target_heat"].value = target
    elements["target_heat"].max = max_heat
    elements["target_flavor"] = document.getElementById("target_flavor")
    elements["randomize"] = document.getElementById("randomize")
    refresh()
}

function refresh() {
    let total_heat = 0
    for (let i = 0; i < data.length; i++) {
        let datum = data[i]
        let value = parseInt(datum["el_input"].value, 10)
        let level = datum["levels"][value]
        let heat = datum["heats"][value]
        datum["el_flavor"].innerText = level
        datum["el_heat_flavor"].innerText = "+" + heat + " heat"
        total_heat += heat
    }
    elements["total_heat"].innerText = total_heat
    elements["target_flavor"].innerText = elements["target_heat"].value
}

function randomize() {
    target_heat = parseInt(elements["target_heat"].value, 10)
    max_heat = parseInt(elements["target_heat"].max, 10)
    let solns = randomizeHelper(0, target_heat, 0, max_heat)
    if (solns.length == 0) {
        alert("Target heat cannot be achieved with current locked values.")
    } else {
        let soln = solns[Math.floor(Math.random() * solns.length)].reverse()
        for (let i = 0; i < data.length; i++) {
            data[i]["el_input"].value = soln[i]
        }
    }
    refresh()
}

function randomizeHelper(i, target, current, max) {
    if ((current + max < target) || (current > target)) {
        return []
    }
    if (i >= data.length) {
        return current == target ? [[]] : []
    }
    let datum = data[i]
    let heats = datum["heats"]
    let solns = []
    for (let j = 0; j < heats.length; j++) {
        let locked_value = parseInt(datum["el_input"].value, 10)
        if (datum["el_lock"].checked && j != locked_value) {
            continue
        }
        let new_heat = current + heats[j]
        let new_max = max - heats[heats.length - 1]
        let recursive_solns = randomizeHelper(i + 1, target, new_heat, new_max)
        for (let k = 0; k < recursive_solns.length; k++) {
            let soln = recursive_solns[k]
            soln.push(j)
            solns.push(soln)
        }
    }
    return solns
}

function getUrl() {
    let url = window.location.href.split("?")[0]
    let values = []
    let locks = []
    let target = parseInt(elements["target_heat"].value, 10)
    for (let i = 0; i < data.length; i++) {
        let datum = data[i]
        values.push(parseInt(datum["el_input"].value, 10))
        locks.push(datum["el_lock"].checked)
    }
    url += "?values=" + encodeValues(values)
    url += "&locks=" + encodeLocks(locks)
    url += "&target=" + target
    navigator.clipboard.writeText(url)
}

function encodeValues(values) {
    let encoded = 0
    for (let i = 0; i < values.length; i++) {
        encoded = encoded * 10 + values[i]
    }
    return encoded
}

function decodeValues(encoded) {
    if (encoded == null) {
        encoded = 0
    }
    let values = []
    for (let i = 0; i < data.length; i++) {
        values.push(encoded % 10)
        encoded = Math.floor(encoded / 10)
    }
    return values.reverse()
}

function encodeLocks(locks) {
    let encoded = 0
    for (let i = 0; i < locks.length; i++) {
        encoded = encoded * 2 + (locks[i] ? 1 : 0)
    }
    return encoded
}

function decodeLocks(encoded) {
    if (encoded == null) {
        encoded = 0
    }
    let locks = []
    for (let i = 0; i < data.length; i++) {
        locks.push((encoded % 2 == 1) ? true : false)
        encoded = Math.floor(encoded / 2)
    }
    return locks
}

function decodeTarget(encoded) {
    if (encoded == null) {
        return 8;
    }
    return parseInt(encoded, 10);
}