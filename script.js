
let mql = window.matchMedia('(max-width: 1023px)')
if (mql.matches) {
    window.location.replace(`https://v1.${window.location.hostname}/`)
}


import { START_UP } from "./components/DE/allApps.js"
import { launchApp } from "./components/DE/processManager.js"


START_UP.forEach(app => {
    launchApp(app)
})


console.log("started up")