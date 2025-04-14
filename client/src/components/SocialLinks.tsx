import { FaInstagram, FaTiktok, FaTwitch } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

export default function SocialLinks() {
  const socialLinks: SocialLink[] = [
    {
      name: "Instagram",
      url: "https://instagram.com/",
      icon: <FaInstagram className="text-xl text-pink-600 dark:text-pink-400" />,
      color: "text-pink-600 dark:text-pink-400"
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/",
      icon: <FaTiktok className="text-xl text-foreground" />,
      color: "text-foreground"
    },
    {
      name: "Twitch",
      url: "https://twitch.tv/",
      icon: <FaTwitch className="text-xl text-purple-600 dark:text-purple-400" />,
      color: "text-purple-600 dark:text-purple-400"
    }
  ];

  return (
    <div className="space-y-4">
      {socialLinks.map((link, index) => (
        <a 
          key={index}
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link flex items-center p-4 bg-card dark:bg-accent border border-border rounded-lg 
                    shadow-sm hover:shadow-md dark:hover:shadow-gray-700/40 w-full text-left
                    text-card-foreground transition-all"
        >
          <span className="mr-3">{link.icon}</span>
          <span className="font-medium">{link.name}</span>
          <ArrowRight className="text-muted-foreground ml-auto h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
