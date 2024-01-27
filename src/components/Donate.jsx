import Image from "next/image";

export const Donate = ({ donate: { imageSrc, link, name, description } }) => {
  return (
    <div className="hvr-grow flex flex-col items-center text-center">
      <a href={link} target="_blank">
        <Image width={150} height={150} src={imageSrc} alt={name} />
      </a>
      <p className="text-1xl font-medium my-2 block">{name}</p>
      <p className="text-sm text-gray italic px-1">{description}</p>
    </div>
  );
};
