
const ALL_APPS = [
    {
        id: 'umbrecore-twitter',
        title: 'Twitter',
        category: "My social media",
        icon: './assets/DE-icons/twitter.png',
        iconBgCSS: 'rgb(75,160,235)',
        scriptSrc: 'https://platform.twitter.com/widgets.js',
        content: `<a class="twitter-timeline" href="https://twitter.com/umbrecore?ref_src=twsrc%5Etfw" 
            target="_blank">Loading tweets by umbrecore...</a>
        `,
        href: 'https://twitter.com/umbrecore'
    },
    {
        id: 'about-me',
        title: 'About Me',
        category: "Other",
        icon: 'https://pbs.twimg.com/profile_images/1297300105532301313/ljmAgTFm_400x400.jpg',
        iconBgCSS: 'fill',
        content: `<iframe height=250 width=550 src="./components/apps/aboutme.html"></iframe>`
    },
    {
        id: 'discord-widget',
        title: 'Discord',
        category: "My social media",
        icon: './assets/DE-icons/discord.png',
        iconBgCSS: 'linear-gradient(238deg, rgba(88,137,205,1) 31%, rgba(58,111,212,1) 70%)',
        content: `<iframe src="https://discord.com/widget?id=511986246629982256&theme=dark"
            width="350" height="450" allowtransparency="true" frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        `,
        href: 'https://discord.com/invite/4YHjhcCUfk'
    },
    {
        id: 'kofi',
        title: 'Ko-fi',
        category: "Other",
        icon: './assets/DE-icons/coffee-mug.png',
        iconBgCSS: 'linear-gradient(0deg, rgb(84,169,219) 0%, rgb(94,179,239) 100%)',
        href: 'https://ko-fi.com/umbrecore',
        content: `<iframe id='kofiframe' src='https://ko-fi.com/umbrecore/?hidefeed=true&widget=true&embed=true&preview=true'
            style='border:none;width:100%;padding:4px;background:#f9f9f9;' height='650' title='umbrecore'></iframe>
        `
    },
    {
        id: 'comm',
        title: 'Commission Info',
        category: "Other",
        icon: './assets/DE-icons/art-and-design.png',
        content: `<p>Might be coming soon...</p>
        `
    },
    {
        id: 'music-player',
        title: 'Music',
        category: "Other",
        icon: './assets/DE-icons/music.png',
        iconBgCSS: 'linear-gradient(0deg, rgb(238,55,63) 0%, rgb(249,138,143) 100%)',
        content: `<audio class="bg-music" controls loop>
            <source src="./assets/1-38 - Hotlantis.mp3" type="audio/mpeg"></audio>
        `
    },
    {
        id: 'doc-viewer',
        title: 'Document Viewer',
        category: "Other",
        icon: './assets/DE-icons/paper.png',
        iconBgCSS: 'linear-gradient(0deg, rgba(237,142,59,1) 0%, rgba(249,165,91,1) 100%)',
        content: `<div style="background:#fff;color:#000;padding:30px 10px;user-select:text"><h4>funfact.txt</h4><p style="width:500px">
            "Umbreon isn’t just a pokemon, it’s a cultural reset, it’s the oxygen you breathe, it’s a lifestyle,
            a reason to live, an escape from this cruel world filled with thieves. it’s art, a hug from a loved
            one, everything you’ve ever wanted."
        </p></div>
        `
    },
    {
        id: 'tumblr',
        title: 'Tumblr',
        category: "My social media",
        icon: './assets/DE-icons/tumblr.png',
        iconBgCSS: 'rgb(26,45,71)',
        scriptSrc: 'https://assets.tumblr.com/post.js',
        href: 'https://umbrecore.tumblr.com',
        content: `<div class="tumblr-post" data-href="https://embed.tumblr.com/embed/post/x7mqTm64zm2kN08r_aoe7g/701068043616501760"
            data-did="8faa5d0ac6bcbf1e61981370f8ef2084960ea1e8"><a href="https://tumblr.umbrecore.com/post/701068043616501760"
            >https://tumblr.umbrecore.com/post/701068043616501760</a></div>`
    },
    {
        id: 'vaporeon',
        title: 'Vaporeon',
        category: "My projects",
        icon: 'https://vaporeon.umbrecore.com/icons/icon-192.png',
        iconBgCSS: 'fill',
        href: 'https://vaporeon.umbrecore.com/',
        content: `<iframe src="https://vaporeon.umbrecore.com/" height=600 width=900></iframe>
        `
    },
    {
        id: 'my-discord-bot',
        title: 'Discord bot',
        category: "My projects",
        icon: './assets/DE-icons/discord.png',
        href: 'https://discord.com/api/oauth2/authorize?client_id=758176006171000833&permissions=338999499888&scope=applications.commands%20bot',
        content: `<p style='background:gold;padding:20px'>Reeebot. Lots of features. Invite it to your server!</p>
            <ul>
            <li>Quick picture edit</li>
            <li>pixiv searcher</li>
            </ul>
            <a href='https://discord.com/api/oauth2/authorize?client_id=758176006171000833&permissions=338999499888&scope=applications.commands%20bot'
            target='_blank'><button style="padding:20px">Invite!</button></a>        `
    },
]

const START_UP = ALL_APPS.filter(item => {
    return ['about-me', 'music-player'].includes(item.id)
})

export { ALL_APPS, START_UP }