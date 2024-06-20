function dgid(x) {
    return document.getElementById(x)
}

function sa(x, y, z) {
    dgid(x).setAttribute(y, z)
}

function ga(x, y) {
    return dgid(x).getAttribute(y)
}

function txt(t, txtd, hd) {
    v = dgid(t).value
    dgid(t + "t").innerText = txtd[v] + ", +" + hd[v] + " heat"
    return hd[v]
}

function refresho() {
    h = 0
    h += txt(
        "vop",
        {0:"+0% damage", 1:"+20% damage", 2:"+60% damage", 3:"+100% damage"},
        {0:0, 1:1, 2:3, 3:5}
    )
    h += txt(
        "vod",
        {0:"+0% HP", 1:"+10% HP", 2:"+20% HP", 3:"+30% HP"},
        {0:0, 1:1, 2:2, 3:3}
    )
    h += txt(
        "vor",
        {0:"+0 barrier", 1:"+1 barrier", 2:"+2 barrier"},
        {0:0, 1:1, 2:2}
    )
    h += txt(
        "vof",
        {0:"+0% haste", 1:"+20% haste", 2:"+40% haste"},
        {0:0, 1:3, 2:6}
    )
    h += txt(
        "vos",
        {0:"+0% first strike", 1:"+100% first strike", 2:"+300% first strike"},
        {0:0, 1:2, 2:4}
    )
    h += txt(
        "voc",
        {0:"+0% foes", 1:"+20% foes", 2:"+40% foes", 3:"+60% foes"},
        {0:0, 1:1, 2:2, 3:3}
    )
    h += txt(
        "voh",
        {0:"+0% revive", 1:"+25% revive", 2:"+50% revive"},
        {0:0, 1:1, 2:2}
    )
    h += txt(
        "vow",
        {0:"+0% next region", 1:"+10% next region", 2:"+25% next region"},
        {0:0, 1:1, 2:3}
    )
    h += txt(
        "vosc",
        {0:"100% heal", 1:"75% heal", 2:"50% heal", 3: "0% heal"},
        {0:0, 1:1, 2:2, 3:4}
    )
    h += txt(
        "vode",
        {0:"+0% fee", 1:"+40% fee", 2:"+80% fee"},
        {0:0, 1:1, 2:2}
    )
    h += txt(
        "vopa",
        {0:"100% mana", 1:"0% mana"},
        {0:0, 1:1}
    )
    h += txt(
        "vofo",
        {0:"no forsaking", 1:"forsaking"},
        {0:0, 1:2}
    )
    h += txt(
        "vob",
        {0:"0 onion", 1:"1 onion"},
        {0:0, 1:3}
    )
    h += txt(
        "voa",
        {0:"0 prime", 1:"5-15 prime", 2:"10-30 prime"},
        {0:0, 1:1, 2:4}
    )
    h += txt(
        "vodes",
        {0:"no timer", 1:"9:00 timer", 2:"7:00 timer", 3:"5:00 timer"},
        {0:0, 1:1, 2:3, 3:6}
    )
    h += txt(
        "voab",
        {0:"100% arcana", 1:"0% arcana"},
        {0:0, 1:5}
    )
    dgid("h").innerText = "Heat: " + h
}