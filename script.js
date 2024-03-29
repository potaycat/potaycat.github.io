import { save_visit } from "./components/apps/track.js"
import { PINNED, START_UP } from "./components/apps/allApps.js"
import { launchApp } from "./components/DE/processManager.js"
import { appendDockIcon } from "./components/DE/dock.js"

save_visit()

START_UP.forEach(app => {
    launchApp(app)
})
PINNED.forEach(app => {
    appendDockIcon(app.id, app.title, app.icon, app.iconBgCSS)
})

console.log("started up")
