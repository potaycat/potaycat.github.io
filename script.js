import track from "./components/apps/track.js"
import { PINNED, START_UP } from "./components/DE/allApps.js"
import { launchApp } from "./components/DE/processManager.js"
import { appendDockIcon } from "./components/DE/dock.js"

const IS_MOBILE = window.matchMedia('(max-width: 1023px)').matches
if (IS_MOBILE) {
    const wl = window.location
    wl.replace(`https://linktr.ee/umbrecore`)
}

track()

START_UP.forEach(app => {
    launchApp(app)
})
PINNED.forEach(app => {
    appendDockIcon(app.id, app.title, app.icon, app.iconBgCSS)
})

console.log("started up")
