const NEWS = [
  {
    headline: "Überblick über Russlands politische Gefangene",
    link: "https://www.tagesschau.de/multimedia/bilder/russland-politische-gefangene-100.html",
  },
  {
    headline:
      "Sasha Skochilenko. Sieben Jahre Haft für Protestaktion gegen russischen Angriffskrieg",
    link: "https://www.br.de/radio/bayern2/sendungen/zuendfunk/aleksandra-sasha-skochilenko-drohen-zehn-jahre-haft-fuer-protest-gegen-ukrainekrieg-104.html",
  },
  {
    headline: "Das Schicksal von Wladimir Kara-Mursa",
    link: "https://www.dekoder.org/de/gnose/wladimir-kara-mursa",
  },
  {
    headline:
      "Ein Gericht in Adygea verurteilte einen 18-jährigen Jungen in einem Hochverratsfall",
    link: "https://memopzk.org/news/sud-v-adygee-vynes-prigovor-po-delu-o-gosizmene-18-letnemu-yunoshe/",
  },
];

export const Feed = () => {
  return (
    <ul className="list-disc list-inside news-block__list">
      {NEWS.map((post, index) => (
        <li key={index} className="mb-4">
          <a href={post.link} target="_blank">
            {post.headline}
          </a>
        </li>
      ))}
    </ul>
  );
};
