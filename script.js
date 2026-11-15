import { save_visit } from "./components/apps/track.js"
import { PINNED, START_UP } from "./components/apps/allApps.js"
import { launchApp } from "./components/DE/processManager.js"
import { appendDockIcon, initializeDock } from "./components/DE/dock.js"
import { desktopBoot } from "./components/DE/windows.js"

const userAgent = save_visit()

if (userAgent.is_mobile) {

} else {
    await desktopBoot()
    initializeDock()

    START_UP.forEach(app => {
        launchApp(app)
    })
    PINNED.forEach(app => {
        appendDockIcon(app.id, app.title, app.icon, app.iconBgCSS)
    })

    console.log("started up")
}
