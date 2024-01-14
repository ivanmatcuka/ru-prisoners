import Image from "next/image";

export const Person = ({ artist }) => {
  return (
    <div>
      <Image alt={artist.name} width={200} height={200} src={artist.imageSrc} />
    </div>
  );
};
