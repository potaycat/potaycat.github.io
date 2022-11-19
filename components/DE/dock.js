import { launchApp, closeApp, preventDuplicate } from "./processManager.js"
import { ALL_APPS } from "./allApps.js"
import { ALL_APPLETS } from "./allApplets.js"
import { toggleApplet, closeAllApplets } from './windows.js'


const clockEl = document.querySelector('.dock-clock__content')
setInterval(() => {
    const now = new Date()
    let build = ""
    build += now.getHours() + ":" + now.getMinutes() + '<br>'
    build += now.getDate() + "/" + (now.getMonth() + 1)
    clockEl.innerHTML = build
}, 1000)


const dock = document.querySelector('.dock__apps')
const dockAll = document.querySelector('.dock')

dockAll.addEventListener('click', e => {
    const icon = document.elementFromPoint(e.clientX, e.clientY)
    console.log(icon);
    if (preventDuplicate(icon.id)) {
        closeAllApplets()
        return
    }
    if (icon.classList.contains('dock-window-manage')) {
        const app = ALL_APPLETS.find(a => a.id == icon.id);
        toggleApplet(app)
        return
    }
    if (icon.classList.contains('docked-file')) {
        if (icon.id == "funfact.txt") {
            launchApp(ALL_APPS.find(a => a.id == "doc-viewer"))
        }
    }
    closeAllApplets()
    const app = ALL_APPS.find(a => a.id == icon.id)
    launchApp(app)
})


function appendDockIcon(id, title, icon, iconBgCSS) {
    const found = dock.querySelector(`#${id}`)
    if (found) {
        return true
    }
    const borderStyle = iconBgCSS ? "border:none" : ""
    const imgStyle = iconBgCSS == 'fill' ? 'width: 50px;height: 50px' : iconBgCSS ? 'filter: brightness(0) invert(1)' : ''
    const dockItemToInsert = `
        <div class="docked-item docked-app" id="${id}">
            <div class="docked-item__tooltip">${title}</div>
            <div class="docked-icon" style="background:${iconBgCSS}; ${borderStyle}">
                <img src="${icon}" style="${imgStyle}"">
            </div>
            <div class="running-indicator hidden">•</div>
        </div>
    `
    dock.innerHTML += dockItemToInsert
}

function toggleDockIconIndicator(id) {
    const elem = dock.querySelector('#' + id).querySelector('.running-indicator')
    elem.classList.toggle('hidden')
}

export { dock, appendDockIcon, toggleDockIconIndicator }