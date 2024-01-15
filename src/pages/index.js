import { Feed } from "@/components/Feed";
import { Form } from "@/components/Form";
import { Person } from "@/components/Person";

import Image from "next/image";

const ARTISTS = [
  {
    name: "Gorinov",
    link: "#",
    imageSrc: "https://picsum.photos/200",
  },
  {
    name: "Gorinov",
    link: "#",
    imageSrc: "https://picsum.photos/200",
  },
  {
    name: "Gorinov",
    link: "#",
    imageSrc: "https://picsum.photos/200",
  },
  {
    name: "Gorinov",
    link: "#",
    imageSrc: "https://picsum.photos/200",
  },
  {
    name: "Gorinov",
    link: "#",
    imageSrc: "https://picsum.photos/200",
  },
  {
    name: "Gorinov",
    link: "#",
    imageSrc: "https://picsum.photos/200",
  },
];

const PRISONERS = [
  {
    name: "Gorinov",
    link: "#",
    imageSrc: "https://picsum.photos/200",
  },
  {
    name: "Gorinov",
    link: "#",
    imageSrc: "https://picsum.photos/200",
  },
  {
    name: "Gorinov",
    link: "#",
    imageSrc: "https://picsum.photos/200",
  },
  {
    name: "Gorinov",
    link: "#",
    imageSrc: "https://picsum.photos/200",
  },
  {
    name: "Gorinov",
    link: "#",
    imageSrc: "https://picsum.photos/200",
  },
  {
    name: "Gorinov",
    link: "#",
    imageSrc: "https://picsum.photos/200",
  },
];

export default function Home() {
  return (
    <main className="lg:p-8 p-4 flex flex-col min-h-screen max-w-5xl m-auto">
      <header className="flex justify-between flex-col lg:flex-row">
        <p className="text-4xl uppercase">
          politische:r
          <br />
          gefangene:r
          <br />
          unterstützen
        </p>
        <h1 className="text-4xl header__heading">benefizkonzert</h1>
      </header>
      <div className="flex flex-col gap-y-8 lg:gap-x-4 lg:flex-row mt-8 lg:mt-16">
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
          <Form />
        </div>
        <div className="w-full lg:w-80 news-block">
          <h2 className="text-2xl font-medium">Новости</h2>
          <div className="news-block__notch mb-4 mt-4"></div>
          <Feed />
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-3xl font-medium block">Lorem</h2>
        <div className="news-block__notch mb-4 mt-4"></div>
        <div className="flex juitify-center gap-x-4 flex-wrap">
          {ARTISTS.map((artist, index) => (
            <Person key={index} artist={artist} />
          ))}
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-3xl font-medium block">Ipsum</h2>
        <div className="news-block__notch mb-4 mt-4"></div>
        <div className="flex juitify-center gap-x-4 flex-wrap">
          {PRISONERS.map((artist, index) => (
            <Person key={index} artist={artist} />
          ))}
        </div>
      </div>
      <footer className="py-8 mt-auto">
        <p>
          <a
            className="text-accent underline"
            target="_blank"
            href="https://www.fas.de/"
          >
            ФАС
          </a>
        </p>
        <p>
          <a
            className="text-accent underline"
            target="_blank"
            href="https://www.fas.de/"
          >
            АГС
          </a>
        </p>
        <p>
          <a
            className="text-accent underline"
            href="https://www.fas.de/"
            type="email"
          >
            example@mail.com
          </a>
        </p>
      </footer>
    </main>
  );
}
