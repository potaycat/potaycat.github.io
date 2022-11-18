import { ALL_APPS } from "../DE/allApps.js";
import { windows, closeAllApplets } from "../DE/windows.js";
import { launchApp } from "../DE/processManager.js";


export default function () {
    const sortedApps = {}
    ALL_APPS.forEach(app => {
        if (sortedApps[app.category]) {
            sortedApps[app.category].push(app)
        } else {
            sortedApps[app.category] = [app]
        }
    })

    let allAppContent = ''
    for (var cate in sortedApps) {
        allAppContent += `<p class="category">${cate}</p>`
        sortedApps[cate].forEach(app => {
            const iconBgCSS = app.iconBgCSS
            const borderStyle = iconBgCSS ? "border:none" : ""
            const imgStyle = iconBgCSS == 'fill' ? 'width:50px;height:50px' : iconBgCSS ? 'filter: brightness(0) invert(1)' : ''
            allAppContent += `
            <div class="docked-item docked-app app-drawer__app" id="${app.id}">
                <div class="docked-item__tooltip"></div>
                <div class="docked-icon" style="background:${iconBgCSS}; ${borderStyle}">
                    <img src="${app.icon}" style="${imgStyle}"">
                </div>
                <div class="app-title">${app.title}</div>
            </div>
        `
        })
    }
    const drawer = windows.querySelector('.app-drawer')
    drawer.innerHTML = allAppContent
    drawer.addEventListener('click', e => {
        const appIcon = document.elementFromPoint(e.clientX, e.clientY)
        const app = ALL_APPS.find(a => a.id == appIcon.id)
        launchApp(app)
        closeAllApplets()
    })
}

