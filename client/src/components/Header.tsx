import { Keyboard } from "lucide-react";

const Header = () => {
  return (
    <header className="py-4 px-4 bg-card shadow-sm">
      <div className="container mx-auto max-w-4xl flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary flex items-center">
            <Keyboard className="mr-2" />
            SpeedKeys
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
