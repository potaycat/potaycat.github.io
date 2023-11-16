
const ALL_APPS = [
    {
        id: 'about-me',
        title: 'About Me',
        category: "My stuff",
        icon: 'https://pbs.twimg.com/profile_images/1297300105532301313/ljmAgTFm_400x400.jpg',
        iconBgCSS: 'fill',
        content: `<iframe height=300 width=550 src="./components/apps/aboutme.html"></iframe>`
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
    {
        id: 'tumblr',
        title: 'Tumblr',
        category: "My stuff",
        icon: './assets/DE-icons/tumblr.png',
        iconBgCSS: 'rgb(26,45,71)',
        scriptSrc: 'https://assets.tumblr.com/post.js',
        href: 'https://umbrecore.tumblr.com',
        content: `<div class="tumblr-post" data-href="https://embed.tumblr.com/embed/post/x7mqTm64zm2kN08r_aoe7g/701068043616501760"
            data-did="8faa5d0ac6bcbf1e61981370f8ef2084960ea1e8"><a href="https://tumblr.umbrecore.com/post/701068043616501760"
            >https://tumblr.umbrecore.com/post/701068043616501760</a></div>`
    },
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
        id: 'files',
        title: 'Files',
        category: "Other",
        icon: './assets/DE-icons/icons8-file-explorer-96.png',
        iconBgCSS: 'radial-gradient(circle, rgba(28,126,244,1) 30%, rgba(0,212,255,1) 100%)',
        content: `<iframe id="file-iframe" height=500 width=900 frameBorder="0" src="./components/apps/files.html?launchLoc=home"></iframe>`
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
    return ['about-me'].includes(item.id)
})


export { ALL_APPS, START_UP, PINNED }