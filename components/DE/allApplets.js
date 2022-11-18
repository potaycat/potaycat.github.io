import appLauncher from '../apps/appLauncher.js'


export const ALL_APPLETS = [
    {
        id: 'all-apps',
        position: [null, null, '90px', 'calc(50% - 300px)'],
        content: '<div class="app-drawer" style="width:500px;max-height:600px"></div>',
        func: appLauncher
    },
    {
        id: 'window-view',
        position: (0),
        content: `
        `
    },
]
