import appLauncher from '../apps/appLauncher.js'


export const ALL_APPLETS = [
    {
        id: 'all-apps',
        position: [null, null, '90px', 'calc(50% - 290px)'],
        content: '<div class="app-drawer" style=""></div>',
        func: appLauncher
    },
    {
        id: 'window-view',
        position: (0),
        content: `
        `
    },
]
