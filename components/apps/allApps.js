
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
        id: 'discord-widget',
        title: 'Discord',
        category: "Social",
        icon: 'components/apps/assets/discord.png',
        iconBgCSS: 'linear-gradient(238deg, rgba(88,137,205,1) 31%, rgba(58,111,212,1) 70%)',
        content: `<iframe src="https://discord.com/widget?id=511986246629982256&theme=dark"
            width="350" height="450" allowtransparency="true" frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        `,
        href: 'https://discord.com/invite/4YHjhcCUfk'
    },
    {
        id: 'about-me',
        title: 'About Me',
        category: "My stuff",
        icon: 'https://pbs.twimg.com/profile_images/1297300105532301313/ljmAgTFm_400x400.jpg',
        iconBgCSS: 'fill',
        content: `<iframe height=350 width=600 src="./components/apps/aboutme.html"></iframe>`
    },
    {
        id: 'umbrecore-twitter',
        title: 'Twitter',
        category: "Social",
        icon: 'components/apps/assets/twitter.png',
        iconBgCSS: 'rgb(75,160,235)',
        scriptSrc: 'https://platform.twitter.com/widgets.js',
        content: `<a class="twitter-timeline" href="https://twitter.com/umbreboyfailure?ref_src=twsrc%5Etfw" 
            target="_blank">Loading tweets by umbreboyfailure...</a>
        `,
        href: 'https://twitter.com/umbreboyfailure'
    },
    {
        id: 'oniribsky',
        title: 'Bluesky',
        category: "Social",
        icon: 'components/apps/assets/Bluesky_Logo.svg.png',
        iconBgCSS: 'linear-gradient(180deg, rgba(10,122,255,1) 0%, rgba(90,185,255,1) 100%)',
        scriptSrc: 'https://cdn.jsdelivr.net/npm/bsky-embed/dist/bsky-embed.es.js',
        content: `<bsky-embed class='bsky-embed'
            username="onirimayo.io.vn"
            mode="dark"
            limit="10"
        ></bsky-embed>
        `,
        href: 'https://bsky.app/profile/onirimayo.io.vn'
    },
    // {
    //     id: 'itaku',
    //     title: 'Itaku',
    //     category: "Social",
    //     icon: './assets/DE-icons/tumblr.png',
    //     iconBgCSS: 'fill',
    //     href: 'https://itaku.ee/profile/daiyamon_o',
    //     content: `<iframe id='itakuframe' src='https://itaku.ee/profile/daiyamon_o' height='720' width='600'></iframe>`
    // },
    {
        id: 'comm',
        title: 'Commission Info',
        category: "My stuff",
        icon: 'components/apps/assets/art-and-design.png',
        content: `<p>[EMPTY]</p>
        `
    },
    {
        id: 'kofi',
        title: 'Ko-fi',
        category: "My stuff",
        icon: 'components/apps/assets/kofi-svgrepo-com.png',
        iconBgCSS: 'linear-gradient(0deg, #FF5D5A 0, #FF5677 100%)',
        href: 'https://ko-fi.com/umbrecore',
        content: `<iframe id='kofiframe' src='https://ko-fi.com/umbrecore/?hidefeed=true&widget=true&embed=true&preview=true'
            style='border:none;width:350px;padding:4px;background:#f9f9f9;' height='700' title='umbrecore'></iframe>
        `
    },
    // {
    //     id: 'jupyterlab',
    //     title: 'Jupyter',
    //     category: "Other",
    //     // icon: './assets/DE-icons/tumblr.png',
    //     iconBgCSS: 'fill',
    //     content: `<p>Did you have the password?</p>
    //     <button>
    //         <a href="https://pykernel.umbrecore.com" target="_blank">Launch JupyterLab</a>
    //     </button>
    //     `
    // },
    {
        id: 'music-player',
        title: 'Music',
        category: "Other",
        icon: 'components/apps/assets/music.png',
        iconBgCSS: 'linear-gradient(0deg, rgb(238,55,63) 0%, rgb(249,138,143) 100%)',
        content: `Hotlantis - Splatoon 3<br><audio class="bg-music" controls loop>
            <source src="components/apps/assets/1-38 - Hotlantis.mp3" type="audio/mpeg"></audio>
        `
    },
    {
        id: 'gallery',
        title: 'Gallery',
        category: "My stuff",
        icon: 'components/apps/assets/rangoli.png',
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
        icon: 'components/DE/assets/icons8-file-explorer-96.png',
        iconBgCSS: 'radial-gradient(circle, rgba(28,126,244,1) 30%, rgba(0,212,255,1) 100%)',
        content: `<iframe id="file-iframe" height=500 width=900 frameBorder="0" src="./components/apps/files.html?launchLoc=home"></iframe>`
    },
    {
        id: 'doc-viewer',
        title: 'Notepadpad',
        category: "Other",
        icon: 'components/DE/assets/paper.png',
        iconBgCSS: 'linear-gradient(0deg, rgba(237,142,59,1) 0%, rgba(249,165,91,1) 100%)',
        content: `<iframe height=450 width=500 src="./components/apps/textEdit.html"></iframe>`
    },
    {
        id: 'vaporeon',
        title: 'Vaporeon',
        category: "Other",
        icon: 'https://vap.onirimayo.io.vn/icons/icon-192.png',
        iconBgCSS: 'fill',
        href: 'https://vap.onirimayo.io.vn/',
        content: `<iframe src="https://vap.onirimayo.io.vn/" height=600 width=900></iframe>
        `
    },
    {
        id: 'my-discord-bot',
        title: 'Discord bot',
        category: "Other",
        icon: 'components/apps/assets/discord.png',
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