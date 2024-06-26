
const ALL_APPS = [
    {
        id: 'about-os',
        title: 'About "OS"',
        category: null,
        icon: null,
        iconBgCSS: null,
        content: null
    },
    {
        id: 'about-me',
        title: 'About Me',
        category: "My stuff",
        icon: 'https://pbs.twimg.com/profile_images/1297300105532301313/ljmAgTFm_400x400.jpg',
        iconBgCSS: 'fill',
        content: `<iframe height=400 width=550 src="./components/apps/aboutme.html"></iframe>`
    },
    {
        id: 'discord-widget',
        title: 'Discord',
        category: "My stuff",
        icon: './assets/DE-icons/discord.png',
        iconBgCSS: 'linear-gradient(238deg, rgba(88,137,205,1) 31%, rgba(58,111,212,1) 70%)',
        content: `<iframe src="https://discord.com/widget?id=511986246629982256&theme=dark"
            width="350" height="450" allowtransparency="true" frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        `,
        href: 'https://discord.com/invite/4YHjhcCUfk'
    },
    {
        id: 'umbrecore-twitter',
        title: 'Twitter',
        category: "My stuff",
        icon: './assets/DE-icons/twitter.png',
        iconBgCSS: 'rgb(75,160,235)',
        scriptSrc: 'https://platform.twitter.com/widgets.js',
        content: `<a class="twitter-timeline" href="https://twitter.com/umbrecore?ref_src=twsrc%5Etfw" 
            target="_blank">Loading tweets by umbrecore...</a>
        `,
        href: 'https://twitter.com/umbrecore'
    },
    // {
    //     id: 'itaku',
    //     title: 'Itaku',
    //     category: "My stuff",
    //     icon: './assets/DE-icons/tumblr.png',
    //     iconBgCSS: 'fill',
    //     href: 'https://itaku.ee/profile/daiyamon_o',
    //     content: `<iframe id='itakuframe' src='https://itaku.ee/profile/daiyamon_o' height='720' width='600'></iframe>`
    // },
    {
        id: 'kofi',
        title: 'Ko-fi',
        category: "My stuff",
        icon: './assets/DE-icons/kofi-svgrepo-com.png',
        iconBgCSS: 'linear-gradient(0deg, #FF5D5A 0, #FF5677 100%)',
        href: 'https://ko-fi.com/umbrecore',
        content: `<iframe id='kofiframe' src='https://ko-fi.com/umbrecore/?hidefeed=true&widget=true&embed=true&preview=true'
            style='border:none;width:350px;padding:4px;background:#f9f9f9;' height='700' title='umbrecore'></iframe>
        `
    },
    {
        id: 'comm',
        title: 'Commission Info',
        category: "My stuff",
        icon: './assets/DE-icons/art-and-design.png',
        content: `<p>[EMPTY]</p>
        `
    },
    {
        id: 'jupyterlab',
        title: 'Jupyter',
        category: "Other",
        // icon: './assets/DE-icons/tumblr.png',
        iconBgCSS: 'fill',
        content: `<p>Did you have the password?</p>
        <button>
            <a href="https://pykernel.umbrecore.com" target="_blank">Launch JupyterLab</a>
        </button>
        `
    },
    {
        id: 'music-player',
        title: 'Music',
        category: "Other",
        icon: './assets/DE-icons/music.png',
        iconBgCSS: 'linear-gradient(0deg, rgb(238,55,63) 0%, rgb(249,138,143) 100%)',
        content: `Hotlantis - Splatoon 3<br><audio class="bg-music" controls loop>
            <source src="./assets/1-38 - Hotlantis.mp3" type="audio/mpeg"></audio>
        `
    },
    {
        id: 'gallery',
        title: 'Gallery',
        category: "My stuff",
        icon: './assets/DE-icons/rangoli.png',
        iconBgCSS: 'linear-gradient(180deg, #D60270 10%, #9B4F96 30%, 60%, #0038A8 90%)',
        content: `
            <iframe src="https://drive.google.com/embeddedfolderview?id=1bpCXQvZvzgW5bHPAitF5G47ud4c_FbSi#grid"
                style="width: 900px; height: 600px; border: 0;"></iframe>
        `
    },
    {
        id: 'files',
        title: 'Files',
        category: "My stuff",
        icon: './assets/DE-icons/icons8-file-explorer-96.png',
        iconBgCSS: 'radial-gradient(circle, rgba(28,126,244,1) 30%, rgba(0,212,255,1) 100%)',
        content: `<iframe id="file-iframe" height=500 width=900 frameBorder="0" src="./components/apps/files.html?launchLoc=home"></iframe>`
    },
    {
        id: 'doc-viewer',
        title: 'Notepadpad',
        category: "Other",
        icon: './assets/DE-icons/paper.png',
        iconBgCSS: 'linear-gradient(0deg, rgba(237,142,59,1) 0%, rgba(249,165,91,1) 100%)',
        content: `<iframe height=450 width=500 src="./components/apps/textEdit.html"></iframe>`
    },
    {
        id: 'vaporeon',
        title: 'Vaporeon',
        category: "Other",
        icon: 'https://vaporeon.umbrecore.com/icons/icon-192.png',
        iconBgCSS: 'fill',
        href: 'https://vaporeon.umbrecore.com/',
        content: `<iframe src="https://vaporeon.umbrecore.com/" height=600 width=900></iframe>
        `
    },
    {
        id: 'my-discord-bot',
        title: 'Discord bot',
        category: "Other",
        icon: './assets/DE-icons/discord.png',
        href: 'https://discord.com/api/oauth2/authorize?client_id=758176006171000833&permissions=2684472320&scope=bot%20applications.commands',
        content: `<p style='background:gold;padding:20px'>Reeebot. Lots of features. Invite it to your server!</p>
            <ul>
            <li>AI Chatbot</li>
            <li>Quick picture edit</li>
            <li>pixiv searcher</li>
            </ul>
            <a href='https://discord.com/api/oauth2/authorize?client_id=758176006171000833&permissions=2684472320&scope=bot%20applications.commands'
            target='_blank'><button style="padding:20px">Invite!</button></a>        `
    },
]

const PINNED = ALL_APPS.filter(item => {
    return ['music-player', 'umbrecore-twitter'].includes(item.id)
})
const START_UP = ALL_APPS.filter(item => {
    return ['about-me', 'about-os'].includes(item.id)
})


export { ALL_APPS, START_UP, PINNED }