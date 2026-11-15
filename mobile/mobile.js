function mobileBoot() {
    window.location.replace(new URL("./index.html", import.meta.url).href)
}

export { mobileBoot }
