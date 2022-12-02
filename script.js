import track from "./components/apps/track.js"
import { START_UP } from "./components/DE/allApps.js"
import { launchApp } from "./components/DE/processManager.js"

let mql = window.matchMedia('(max-width: 1023px)')
if (mql.matches) {
    const wl = window.location
    wl.replace(`https://v1.${wl.hostname}/${wl.search}`)
} else {
    track()
}



START_UP.forEach(app => {
    launchApp(app)
})

console.log("started up")
