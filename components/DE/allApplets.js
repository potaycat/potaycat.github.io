import appLauncher from '../DE/appLauncher.js'

const appLauncherhtml = `
<html>
    <div class="app-drawer"></div>
    <div class="app-drawer__footer">
        <h4>User</h4>
        <a href='logon.html'><img src="components/DE/assets/Group 2.png"></a>
    </div>
</html>
`

export const ALL_APPLETS = [
    {
        id: 'all-apps',
        position: [null, null, '90px', 'calc(50% - 290px)'],
        content: appLauncherhtml,
        func: appLauncher
    },
    {
        id: 'window-view',
        position: (0),
        content: `
        `
    },
]
