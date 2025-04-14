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
    <div className="profile-card max-w-md w-full bg-card rounded-xl shadow-md p-6 md:p-8">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      
      <div className="flex flex-col items-center space-y-4 mb-8">
        <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/20 dark:ring-primary/40">
          <Avatar className="w-full h-full">
            <AvatarImage 
              src={profileImageUrl} 
              alt={name} 
              className="w-full h-full object-cover"
            />
            <AvatarFallback className="text-4xl">{name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
        <h1 className="text-2xl font-bold text-card-foreground text-center">{name}</h1>
        <p className="text-muted-foreground text-center text-sm">
          {bio}
        </p>
      </div>
      
      <SocialLinks />
    </div>
  );
}
