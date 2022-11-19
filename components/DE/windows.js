import { closeApp } from "./processManager.js"
import { getMousePos } from "./utils.js"

const windows = document.querySelector('.windows-container')
let dragging = null
let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0

windows.addEventListener('mousedown', handleOnMouseDown)
windows.addEventListener('mouseup', handleOnMouseUp)
windows.addEventListener('mousemove', handleOnMouseMove)
windows.addEventListener('click', handleOnMouseClick)
windows.addEventListener('touchstart', handleOnMouseDown)
windows.addEventListener('touchend', handleOnMouseUp)
windows.addEventListener('touchmove', handleOnMouseMove)


function handleOnMouseDown(e) {
    const [x, y] = getMousePos(e)
    const header = document.elementFromPoint(x, y)
    if (header.classList.contains('window__header')) {
        if (windows.classList.contains('windowlet-opened')) {
            closeAllApplets()
        }
        dragging = header.parentElement
        dragging.parentElement.appendChild(dragging)
        windows.classList.add('--is-dragging')
        pos3 = x
        pos4 = y
    }
}
function handleOnMouseUp(e) {
    dragging = null
    windows.classList.remove('--is-dragging')
}
function handleOnMouseMove(e) {
    if (!dragging) {
        return
    }
    const [x, y] = getMousePos(e)
    pos1 = pos3 - x
    pos2 = pos4 - y
    pos3 = x
    pos4 = y
    dragging.style.top = (dragging.offsetTop - pos2) + "px"
    dragging.style.left = (dragging.offsetLeft - pos1) + "px"
}

function handleOnMouseClick(e) {
    const btn = document.elementFromPoint(e.clientX, e.clientY)
    if (btn.classList.contains('close-btn')) {
        closeApp(btn.getAttribute('for'))
    } else if (btn.classList.contains('maximize')) {
        window.open(btn.getAttribute('href'), '_blank').focus()
        closeApp(btn.getAttribute('for'))
    }
}

function openWindow(id, title, content, href) {
    const maximizeBtn = href ? `<button class="maximize" for="${id}" href="${href}"><span>⤡</span></button>` : ''
    const winToInsert = `
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
    `
    const node = document.createElement('div')
    node.className = 'window'
    node.id = `${id}-win`
    node.innerHTML += winToInsert
    windows.appendChild(node)
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
        <div class="window windowlet" id="${app.id}-winlet"
            style="top:${t};right:${r};bottom:${b};left:${l}">
            <div class="window__content">
                ${app.content}
            </div>
        </div>
    `
    const node = document.createElement('div')
    node.innerHTML += winToInsert
    windows.appendChild(node)
    app.func()
}

function closeAllApplets() {
    windows.querySelectorAll('.windowlet').forEach(winl => {
        winl.remove()
    })
}


export { windows, openWindow, toggleApplet, closeAllApplets }
