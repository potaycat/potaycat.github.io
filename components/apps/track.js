const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop)
})
const IS_MOBILE = window.matchMedia('(max-width: 1023px)').matches


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

    const extracted = {
        IP: res.ip_address,
        City: res.city,
        Country: res.country,
        languages: navigator.languages,
        userAgent: navigator.userAgent,
        ref: params.r,
    }
    if (IS_MOBILE) {
        extracted['site'] = 'v1'
    }

    const fields = []
    for (const key in extracted) {
        let val = extracted[key]
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
                    description: 'we have a visitor',
                    fields: fields
                }
            ]
        })
    })
}


export default function () {
    if (params.save_visit in ['false', '0', 'none']
        || ['localhost', '127.0.0.1'].includes(location.hostname)
    ) {
        console.log('not saving visit')
        return
    }

    let url = "https://ipgeolocation.abstractapi.com/v1/?api_key=4febe82eba3b406d9d7092eecf1fb7cd"
    httpGetAsync(url, getAndSave)
}
