import { dock, appendDockIcon, toggleDockIconIndicator } from "./dock.js"
import { windows, openWindow } from "./windows.js"

function launchApp(app) {
    if (preventDuplicate(app.id)) {
        return
    }
    openWindow(app.id, app.title, app.content, app.href)
    if (app.scriptSrc) {
        const scr = document.createElement('script')
        scr.src = app.scriptSrc
        scr.async = true
        document.body.appendChild(scr)
    }
    appendDockIcon(app.id, app.title, app.icon, app.iconBgCSS)
    toggleDockIconIndicator(app.id)
}

function closeApp(id) {
    windows.querySelector(`#${id}-win`).remove()
    // dock.querySelector('#' + id).remove()
    toggleDockIconIndicator(id)
}

function preventDuplicate(id) {
    const found = windows.querySelector(`#${id}-win`)
    if (found) {
        windows.appendChild(found)
        return true
    }
    return false
}

export { launchApp, closeApp, preventDuplicate }
