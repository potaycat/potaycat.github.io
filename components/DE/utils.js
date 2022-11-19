function getMousePos(e) {
    const x = e.clientX || e.touches[0].clientX
    const y = e.clientY || e.touches[0].clientY
    return [x, y]
}

export {
    getMousePos
}