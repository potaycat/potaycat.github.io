async function mobileBoot() {
    const mobileUrl = new URL("./index.html", import.meta.url)
    const response = await fetch(mobileUrl)
    if (!response.ok) {
        throw new Error(`Failed to load mobile page: ${response.status} ${response.statusText}`)
    }

    const mobileDocument = new DOMParser().parseFromString(await response.text(), "text/html")
    if (!mobileDocument.head || !mobileDocument.body) {
        throw new Error("Mobile page does not contain a head and body")
    }

    const stylesheetLoads = [
        ...mobileDocument.head.querySelectorAll('link[rel~="stylesheet"][href]')
    ].map(link => new Promise((resolve, reject) => {
        link.addEventListener("load", resolve, { once: true })
        link.addEventListener("error", () => {
            reject(new Error(`Failed to load mobile stylesheet: ${link.href}`))
        }, { once: true })
    }))

    const base = document.createElement("base")
    base.href = new URL("./", mobileUrl).href
    document.head.replaceChildren(base, ...mobileDocument.head.childNodes)
    document.body.replaceChildren(...mobileDocument.body.childNodes)

    await Promise.all(stylesheetLoads)

    for (const script of [
        ...document.head.querySelectorAll("script"),
        ...document.body.querySelectorAll("script")
    ]) {
        const activeScript = document.createElement("script")
        for (const attribute of script.attributes) {
            activeScript.setAttribute(attribute.name, attribute.value)
        }
        activeScript.textContent = script.textContent
        script.replaceWith(activeScript)
    }
}

export { mobileBoot }
