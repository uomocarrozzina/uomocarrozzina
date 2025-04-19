import ThemeToggle from "./ThemeToggle";
import SocialLinks from "./SocialLinks";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfileCardProps {
  name: string;
  bio: string;
  profileImageUrl: string;
}

export default function ProfileCard({ name, bio, profileImageUrl }: ProfileCardProps) {
  return (
    <div className="profile-card max-w-md w-full rounded-xl shadow-md p-6 md:p-8 
                  border-2 border-primary/30 dark:border-primary/20 animate-border-pulse
                  bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800
                  backdrop-blur-sm
                  transform perspective-1000 hover:rotate-y-1 hover:rotate-x-1 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/20
                  transition-all duration-300">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      
      <div className="flex flex-col items-center space-y-4 mb-8">
        <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/30 dark:ring-primary/50 shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay"></div>
          <Avatar className="w-full h-full">
            <AvatarImage 
              src={profileImageUrl} 
              alt={name} 
              className="w-full h-full object-cover"
            />
            <AvatarFallback className="text-4xl bg-gradient-to-r from-primary to-secondary text-white">{name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
        <h1 className="text-2xl font-bold text-primary dark:text-secondary text-center">{name}</h1>
        <p className="text-muted-foreground text-center text-sm">
          {bio}
        </p>
      </div>
      
      <SocialLinks />
    </div>
  );
}
