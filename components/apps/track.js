const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop)
})
const IS_MOBILE = window.matchMedia('(max-width: 1023px)').matches
const DO_NOT_TRACK = params.track in ['false', '0', 'none'] || ['localhost', '127.0.0.1'].includes(location.hostname)
let FINGERPRINT = null
const KNOWN_REF = {
    t: "X/Twitter profile",
    d: "Discord profile",
    mz: "Zym's Mastodon profile",
    i: "Itaku profile",
}

function calc_canvas_hash() {
    // https://jsfiddle.net/piotrbartnik/dppqhtg3/1/
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    let txt = 'i9asdm..$#po((^@KbXrww!~cz'
    ctx.textBaseline = "top"
    ctx.font = "16px 'Arial'"
    ctx.textBaseline = "alphabetic"
    ctx.rotate(.05)
    ctx.fillStyle = "#f60"
    ctx.fillRect(125, 1, 62, 20)
    ctx.fillStyle = "#069"
    ctx.fillText(txt, 2, 15)
    ctx.fillStyle = "rgba(102, 200, 0, 0.7)"
    ctx.fillText(txt, 4, 17)
    ctx.shadowBlur = 10
    ctx.shadowColor = "blue"
    ctx.fillRect(-20, 10, 234, 5)
    let strng = canvas.toDataURL()
    document.body.appendChild(canvas)
    let hash = 0
    if (strng.length == 0) return 'nothing!'
    for (let i = 0; i < strng.length; i++) {
        let char = strng.charCodeAt(i)
        hash = ((hash << 5) - hash) + char
        hash = hash & hash
    }
    return hash
}


function httpGetAsync(url, callback) {
    // https://app.abstractapi.com/api/ip-geolocation/tester
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
}


function getAndSave(res) {
    res = JSON.parse(res)
    // console.log(res)
    // console.log(navigator)

    let action = ""
    if (params.r in KNOWN_REF) {
        action = `VISIT from ${KNOWN_REF[params.r]}`
    } else {
        action = `VISIT`
    }
    if (IS_MOBILE) {
        action += ' on mobile'
    }
    FINGERPRINT['ip_address'] = res.ip_address
    const extracted = {
        fingerprint: FINGERPRINT,
        City: res.city,
        Country: res.country,
        action: action,
    }
    log_to_discord(extracted, () => {
        if (IS_MOBILE) {
            const wl = window.location
            wl.replace(`https://linktr.ee/umbrecore`)
        }
    })
}

function log_to_discord(obj, callback) {
    const fields = []
    for (const key in obj) {
        let val = obj[key]
        if (val === undefined) {
            val = 'undefined'
        } else if (typeof val != 'string') {
            val = JSON.stringify(val)
        }
        fields.push({
            name: key,
            value: val,
            inline: true
        })
    }

    // https://gist.github.com/dragonwocky/ea61c8d21db17913a43da92efe0de634
    const wh = '9DshEU-r_6k1hlUX2SzWiLIK4UHyEmYQPBusz-QXhFnZlA_ch9g0o9IJahJv0i3qWi6A/4863694608998766201/skoohbew/ipa/moc.drocsid//:sptth'
    fetch(wh.split("").reverse().join(""), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: 'umbrecore.com tracker',
            embeds: [
                {
                    color: 1947988,
                    fields: fields
                }
            ]
        })
    }).then(res => {
        callback(res)
    })

}


function save_visit() {
    if (DO_NOT_TRACK) {
        console.log('not tracking')
        return
    }
    httpGetAsync("https://ipgeolocation.abstractapi.com/v1/?api_key=4febe82eba3b406d9d7092eecf1fb7cd", getAndSave)
    FINGERPRINT = {
        canvas_hash: calc_canvas_hash(),
        languages: navigator.languages,
        userAgent: navigator.userAgent,
        timezoneOffset: (new Date).getTimezoneOffset(),
    }
}

function save_action(action) {
    if (DO_NOT_TRACK) return
    log_to_discord({
        fingerprint: FINGERPRINT,
        action: action,
    }, () => { })
}

export { save_visit, save_action }