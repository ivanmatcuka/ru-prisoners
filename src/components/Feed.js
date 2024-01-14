const NEWS = [
    {
        headline: 'Wladimir Kara-Mursa',
        link: 'https://www.dekoder.org/de/gnose/wladimir-kara-mursa',
    },
    {
        headline: 'Ein Gericht in Adygea verurteilte einen 18-jährigen Jungen in einem Hochverratsfall',
        link: 'https://memopzk.org/news/sud-v-adygee-vynes-prigovor-po-delu-o-gosizmene-18-letnemu-yunoshe',
    },
    {
        headline: '«Я в этой драме в любом случае до финала». Выступление режиссерки Беркович и сценаристки Петрийчук на заседании по продлению ареста',
        link: 'https://zona.media/article/2024/01/09/drama',
    },
    {
        headline: 'Навального отправили в ШИЗО в колонии «Полярный волк», куда его этапировали две недели назад',
        link: 'https://meduza.io/news/2024/01/09/navalnogo-otpravili-v-shizo-v-kolonii-polyarnyy-volk-kuda-ego-etapirovali-dve-nedeli-nazad',
    }
]

export const Feed = () => {
    return <ul className="list-disc news-block__list">
        {NEWS.map((post, index) => <li key={index} className="mb-4">
            <a href={post.link} target="_blank">{post.headline}</a>
        </li>)}
    </ul>
}