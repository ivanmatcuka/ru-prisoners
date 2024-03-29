import { Donate } from "@/components/Donate";
import { Feed } from "@/components/Feed";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Person } from "@/components/Person";

import Image from "next/image";

const ARTISTS = [
  {
    name: "Daniil Orlov, Klavier",
    link: "https://www.thalia-theater.de/ueber-uns/ensemble/schauspiel/darsteller/daniil-orlov",
    imageSrc: "/artists/daniil_o.png",
  },
  {
    name: "Alexander Estis, Schriftsteller",
    link: "https://estis.ch/",
    imageSrc: "/artists/alexander_e.png",
  },
  {
    name: "Yaroslav Georgiev, Cello",
    link: "https://www.stuttgarter-philharmoniker.de/3545.html",
    imageSrc: "/artists/yaroslav_g.png",
  },
  {
    name: "Evgeniya Kleyn, Klavier",
    link: "https://www.tonali.de/profile/evgenyia-kleyn/",
    imageSrc: "/artists/evgeniya_k.png",
  },
  {
    name: "Maria Markina, Sängerin",
    link: "https://mariamarkina.art/about/",
    imageSrc: "/artists/maria_m.jpg",
  },
  {
    name: "Lilya Matveeva, Künstlerin",
    link: "https://lilyamatveeva.com",
    imageSrc: "/artists/lilya_m.jpg",
  },
  {
    name: "Nikolai Estis, Künstler",
    link: "https://de.m.wikipedia.org/wiki/Nikolai_Estis",
    imageSrc: "/artists/nikolas_e.jpg",
  },
  {
    name: "Daria Grinstein, Klavier",
    link: "https://www.instagram.com/daria_grinstein?igsh=MTEyN3J5bHRsOWdvMA==",
    imageSrc: "/artists/daria_g.jpg",
  },
  {
    name: "Mania Rasstegaeva, Soprano",
    link: "https://www.instagram.com/sexcursovod?igsh=MW40Ymg0OWM4M3NmOQ==",
    imageSrc: "/artists/mania_r.jpg",
  },
];

const PRISONERS = [
  {
    name: "Dmitry Ivanov",
    link: "https://en.ovdinfo.org/save-yourselves-better-times-and-be-ready-them-come-interview-political-prisoner-dmitry",
    imageSrc: "/prisoners/ivanov.png",
  },
  {
    name: "Aleksandra Skochilenko",
    link: "https://www.euronews.com/culture/2023/11/16/russian-artist-sentenced-to-7-years-in-prison-for-anti-war-messages",
    imageSrc: "/prisoners/skochilenko.png",
  },
  {
    name: "Alexei Gorinov",
    link: "https://www.theguardian.com/world/2022/jul/08/moscow-councillor-jailed-seven-years-criticising-ukraine-war-alexei-gorinov",
    imageSrc: "/prisoners/gorinov.png",
  },
  {
    name: "Vladimir Kara-Murza",
    link: "https://www.themoscowtimes.com/2023/04/17/kremlin-critic-kara-murza-sentenced-to-25-years-in-prison-a80856",
    imageSrc: "/prisoners/kara-murza.png",
  },
  {
    name: "Said-Mukhamad Dzhumaev",
    link: "https://memohrc.org/en/news_old/said-mukhamad-dzhumaev-involved-clashes-police-protest-rally-support-navalny-political",
    imageSrc: "/prisoners/dzhumayev.png",
  },
  {
    name: "Valeria Zotova",
    link: "https://therussianreader.com/2023/02/23/2360/",
    imageSrc: "/prisoners/zotova.png",
  },
  {
    name: "Anton Zhuchkov and Vladimir Sergeev ",
    link: "https://t.me/solidarity_zone/1282",
    imageSrc: "/prisoners/zhuchkov_and_sergeev.png",
  },
];

const DONATES = [
  {
    name: "ZHUK",
    link: "https://www.zhuk.world/#top",
    imageSrc: "/zhuk.png",
    description: "Helping politically persecuted people flee Russia",
  },
  {
    name: "MEMORIAL",
    link: "https://memopzk.org/",
    imageSrc: "/memorial.svg",
    description: "The ‘Political Prisoners. Memorial’ human rights project",
  },
  {
    name: "SOLIDARITY ZONE",
    link: "https://solidarityzone.net/",
    imageSrc: "/solidarity_zone.webp",
    description:
      "Grassroots advocacy initiative that operates anonymously and decentralized",
  },
];

export default function Home() {
  return (
    <>
      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div className="aspect-[577/310] w-[36.0625rem]" />
        </div>
        <div
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div className="aspect-[577/310] w-[36.0625rem] opacity-30" />
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-white">
            Das Konzert wird nicht abgesagt. Weitere politische Gefangene
            verbleiben in Haft und benötigen dringend Hilfe. Das Konzert beginnt
            mit einer Schweigeminute und findet zu Ehren von Alexey Navalny und
            zur Unterstützung der politischen Gefangenen statt.
          </p>
        </div>
        <div className="flex flex-1 justify-end" />
      </div>

      <main className="lg:p-8 p-4 flex flex-col min-h-screen max-w-6xl m-auto">
        <header className="flex lg:justify-between flex-col lg:flex-row">
          <p className="text-4xl uppercase">
            politische:r
            <br />
            gefangene:r
            <br />
            unterstützen
          </p>
          <div className="mt-4 lg:text-right lg:mt-auto">
            <h1 className="text-4xl header__heading">benefizkonzert</h1>
            <p className="text-1xl">17.Februar 2024</p>
            <p className="text-1xl">19:30</p>
            <p className="text-sm underline hover:no-underline hover:text-accent">
              <a href={process.env.GOOGLE_MAPS_URL} target="_blank">
                Max-Brauer-Allee 24, 22765 Hamburg
              </a>
            </p>
            <p>Alfred Schittke Akademie International</p>
          </div>
        </header>
        <div className="flex flex-col gap-y-8 lg:gap-x-8 lg:flex-row mt-8 lg:mt-16">
          <div>
            <Image
              alt="Gorinov"
              className="max-w-64"
              width={2569}
              height={3825}
              src="/gorinov.png"
            />
          </div>
          <div className="flex-1 flex flex-col flex-align-end items-baseline">
            <h2 className="text-3xl">Über uns</h2>
            <p className="my-4">
              Musiker aus verschiedenen Städten Deutschlands spielen in Hamburg
              die Werke von Rachmaninow, Schostakowitsch und Prokofjew zur
              Unterstützung russischer politischer Gefangener, die keine Angst
              davor hatten, sich gegen den Krieg auszusprechen.
            </p>
            <p>
              Das Benefizkonzert wird von einer Gruppe russischer Aktivisten
              organisiert. Das gesamte Geld wird an die Organisationen
              geschickt, die den politischen Gefangenen und den aktiven Gegnern
              des Krieges in der Ukraine direkt helfen.
            </p>
          </div>
          <div className="w-full lg:w-96 news-block">
            <RegistrationForm />
          </div>
        </div>
        <div className="flex flex-col gap-y-8 lg:gap-x-16 lg:flex-row mt-8 lg:mt-16">
          <div className="w-full lg:w-80 news-block">
            <h2 className="text-2xl font-medium">Nachrichten</h2>
            <div className="news-block__notch mb-4 mt-4" />
            <Feed />
          </div>
          <div className="flex flex-col flex-1">
            <h2 className="text-2xl font-medium">Spenden für</h2>
            <div className="news-block__notch mb-4 mt-4" />
            <p className="mb-4">
              Im Rahmen der Veranstaltung können Sie einen beliebigen Betrag an
              folgende Organisationen spenden:
            </p>
            <div className="flex lg:m-auto flex-wrap items-center justify-between gap-y-8">
              {DONATES.map((donate, index) => (
                <div className="w-full lg:w-2/6" key={index}>
                  <Donate donate={donate} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="my-8">
          <h2 className="text-3xl font-medium block">Politische Gefangene</h2>
          <div className="news-block__notch mb-4 mt-4"></div>
          <p className="my-4">
            Es gibt Hunderte von politischen Gefangenen in Russland, und ihre
            Zahl nimmt ständig zu. Ein paar Geschichten können Sie hier lesen.
            Eine umfassende Liste findet sich auf der Website von{" "}
            <a
              href="https://memopzk.org/"
              target="_blank"
              className="underline hover:no-underline hover:text-accent"
            >
              Memorial.
            </a>
          </p>
          <div className="flex juitify-center gap-4 flex-wrap">
            {PRISONERS.map((artist, index) => (
              <Person key={index} artist={artist} />
            ))}
          </div>
        </div>
        <div className="my-8">
          <h2 className="text-3xl font-medium block">Musiker</h2>
          <div className="news-block__notch mb-4 mt-4"></div>
          <p className="my-4">
            Die Musiker kommen aus verschiedenen Städten Deutschlands und treten
            beim Konzert auf freiwilliger Basis auf.
          </p>
          <div className="flex juitify-center gap-4 flex-wrap">
            {ARTISTS.map((artist, index) => (
              <Person key={index} artist={artist} />
            ))}
          </div>
        </div>
        <footer className="py-8 mt-auto">
          <h2 className="text-3xl font-medium block">Veranstalter</h2>
          <div className="news-block__notch mb-4 mt-4"></div>

          <p>
            <a
              className="underline hover:no-underline hover:text-accent"
              target="_blank"
              href="mailto:nowarhamburg@gmail.com"
            >
              nowarhamburg@gmail.com
            </a>
          </p>
          <p>
            <a
              className="underline hover:no-underline hover:text-accent"
              target="_blank"
              href="https://www.instagram.com/far_hamburg?igsh=MW0zeWdjNmpyZWl5cw=="
            >
              Feminist Antiwar Resistance in Hamburg
            </a>
          </p>
          <p>
            <a
              className="underline hover:no-underline hover:text-accent"
              target="_blank"
              href="https://t.me/nowar_HH"
            >
              Antiwar Hamburg
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
