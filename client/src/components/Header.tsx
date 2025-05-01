import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Keyboard } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="py-4 px-4 bg-card shadow-sm">
      <div className="container mx-auto max-w-4xl flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary flex items-center">
            <Keyboard className="mr-2" />
            QwikType
          </h1>
        </div>
        <div className="flex space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === 'light' ? <Moon /> : <Sun />}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
