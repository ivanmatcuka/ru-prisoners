import Image from "next/image";

export const Person = ({ artist }) => {
  return (
    <div className="hvr-grow basis-full flex-1 mb-2 lg:mb-auto lg:basis-auto">
      <a href={artist.link} target="_blank">
        <Image
          alt={artist.name}
          width={200}
          height={200}
          src={artist.imageSrc}
          className="person__image"
        />
      </a>
    </div>
  );
};
