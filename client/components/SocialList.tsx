import { SocialIcon } from "react-social-icons";

interface Props {
  items: Social;
}

const SocialList = ({ items }: Props) => {
  return (
    <>
      {Object.values(items).map((url, i) => (
        <SocialIcon
          key={i}
          url={url}
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
