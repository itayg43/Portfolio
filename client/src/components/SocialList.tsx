import { SocialIcon } from "react-social-icons";

interface Props {
  items: string[];
}

const SocialList = ({ items }: Props) => {
  return (
    <>
      {items.map((v, i) => (
        <SocialIcon
          key={i}
          url={v}
          target="_blank"
          bgColor="black"
          fgColor="white"
          style={{
            width: 40,
            height: 40,
          }}
        />
      ))}
    </>
  );
};

export default SocialList;
