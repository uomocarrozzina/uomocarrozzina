import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      className="text-primary hover:text-primary dark:text-secondary dark:hover:text-secondary transition-colors border-2 border-primary/20 dark:border-secondary/20 hover:border-primary dark:hover:border-secondary bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm"
    >
      {theme === 'dark' ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
