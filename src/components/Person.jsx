import Image from "next/image";

export const Person = ({ artist }) => {
  return (
    <div className="hvr-grow basis-full flex-1 px-4 lg:p-0 lg:mb-auto lg:basis-0 min-w-60">
      <a href={artist.link} target="_blank">
        <Image
          alt={artist.name}
          width={200}
          height={200}
          src={artist.imageSrc}
          className="person__image"
        />
        <p className="py-1">{artist.name}</p>
      </a>
    </div>
  );
};
