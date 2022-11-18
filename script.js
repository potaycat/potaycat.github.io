
import "./components/DE/dock.js"
import "./components/DE/allApps.js"
import { START_UP } from "./components/DE/allApps.js";
import { launchApp } from "./components/DE/processManager.js";


START_UP.forEach(app => {
    launchApp(app)
})


console.log("started up");