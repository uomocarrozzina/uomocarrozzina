import { FaInstagram, FaTwitch } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { ArrowRight } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  gradientFrom: string;
  gradientTo: string;
}

export default function SocialLinks() {
  const socialLinks: SocialLink[] = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/uomocarrozzina23?igsh=MTV5eno3Znh5czQxYQ==",
      icon: <FaInstagram className="text-xl text-white" />,
      color: "text-pink-600 dark:text-pink-400",
      gradientFrom: "from-pink-500",
      gradientTo: "to-yellow-500"
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@uomocarrozzina23?_t=ZN-8vX3z8JiP4g&_r=1",
      icon: <SiTiktok className="text-xl text-white" />,
      color: "text-foreground",
      gradientFrom: "from-cyan-400",
      gradientTo: "to-pink-500"
    },
    {
      name: "Twitch",
      url: "https://www.twitch.tv/uomocarrozzina23",
      icon: <FaTwitch className="text-xl text-white" />,
      color: "text-purple-600 dark:text-purple-400",
      gradientFrom: "from-purple-600",
      gradientTo: "to-primary"
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
          className="social-link flex items-center p-4 bg-white dark:bg-gray-800 border-2 border-primary/10 dark:border-primary/20 rounded-lg 
                    shadow-sm hover:shadow-md hover:shadow-primary/10 dark:hover:shadow-primary/30 w-full text-left
                    text-card-foreground transition-all"
        >
          <span className={`mr-3 flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r ${link.gradientFrom} ${link.gradientTo} shadow-md`}>
            {link.icon}
          </span>
          <span className="font-medium">{link.name}</span>
          <span className="ml-auto p-1 rounded-full bg-secondary/10 dark:bg-secondary/20">
            <ArrowRight className="text-secondary h-4 w-4" />
          </span>
        </a>
      ))}
    </div>
  );
}
