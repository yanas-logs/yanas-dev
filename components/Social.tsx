import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/yourusername" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/yourusername" },
  { icon: <FaTwitter />, path: "https://twitter.com/yourusername" },
];

const Social = ({ containerStyle, iconStyle }: { containerStyle?: string; iconStyle?: string }) => {
  return (
    <div className={containerStyle}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyle} target="_blank" rel="noopener noreferrer">
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
