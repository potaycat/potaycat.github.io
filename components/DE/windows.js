import { launchApp, closeApp, preventDuplicate } from "./processManager.js";

const windows = document.querySelector('.windows-container')
let dragging = null
let win_content = null
let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0

windows.addEventListener('mouseup', e => {
    dragging = null
    if (win_content) {
        win_content.style['pointer-events'] = 'unset'
    }
})

windows.addEventListener('mousedown', e => {
    const header = document.elementFromPoint(e.clientX, e.clientY)
    if (header.classList.contains('window__header')) {
        if (windows.classList.contains('windowlet-opened')) {
            closeAllApplets()
        }
        dragging = header.parentElement
        dragging.parentNode.appendChild(dragging)
        win_content = dragging.querySelector('.window__content')
        win_content.style['pointer-events'] = 'none'
        pos3 = e.clientX
        pos4 = e.clientY
    }
})

windows.addEventListener('click', e => {
    const btn = document.elementFromPoint(e.clientX, e.clientY)
    if (btn.classList.contains('close-btn')) {
        closeApp(btn.getAttribute('for'))
    } else if (btn.classList.contains('maximize')) {
        window.open(btn.getAttribute('href'), '_blank').focus()
        closeApp(btn.getAttribute('for'))
    }
})

windows.addEventListener('mousemove', e => {
    if (!dragging) {
        return
    }
    pos1 = pos3 - e.clientX
    pos2 = pos4 - e.clientY
    pos3 = e.clientX
    pos4 = e.clientY
    dragging.style.top = (dragging.offsetTop - pos2) + "px"
    dragging.style.left = (dragging.offsetLeft - pos1) + "px"
})

function openWindow(id, title, content, href) {
    const maximizeBtn = href ? `<button class="maximize" for="${id}" href="${href}"><span>⤡</span></button>` : ''
    const winToInsert = `
        <div class="window" id="${id}-win">
            <div class="window__header">
                ${title}
                <div class="window__header__btn">
                    ${maximizeBtn}
                    <button class="close-btn" for="${id}"><span>⨉</span></button>
                </div>
            </div>
            <div class="window__content">
                ${content}
            </div>
        </div>
    `
    windows.innerHTML += winToInsert
}


function toggleApplet(app) {
    windows.classList.add('windowlet-opened')
    const found = windows.querySelector(`#${app.id}-winlet`)
    if (found) {
        found.remove()
        return
    }
    const [t, r, b, l] = app.position
    const winToInsert = `
        <div class="window windowlet" id="${app.id}-winlet" style="top:${t};right:${r};bottom:${b};left:${l}">
            <div class="window__content">
                ${app.content}
            </div>
        </div>
    `
    windows.innerHTML += winToInsert
    app.func()
}

function closeAllApplets() {
    windows.querySelectorAll('.windowlet').forEach(winl => {
        winl.remove()
    })
}


export { windows, openWindow, toggleApplet, closeAllApplets }
