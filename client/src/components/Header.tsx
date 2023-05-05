import Link from "next/link";
import { Handlee } from "next/font/google";

const handlee = Handlee({
  weight: ["400"],
  subsets: ["latin"],
});

const socialLinks = [
  {
    name: "Github",
    url: "https://github.com/itayg43",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/itay-gur-5b2342234/",
  },
];

const Header = () => {
  return (
    <header className="container mx-auto max-w-3xl bg-gray-200 rounded-b mb-8">
      <div className="flex justify-between p-4">
        <Link className={`${handlee.className} text-3xl font-bold`} href="/">
          Itay Gur
        </Link>

        <div className="flex space-x-2">
          {socialLinks.map((item, i) => (
            <a
              key={i}
              className="hover:underline"
              href={item.url}
              target="_blank"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
