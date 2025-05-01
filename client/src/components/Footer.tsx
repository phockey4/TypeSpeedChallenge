import { Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-8 py-6 bg-muted text-center text-muted-foreground">
      <div className="container mx-auto px-4">
        <p className="mb-2 font-medium"><span className="gradient-text font-bold">Speed</span><span className="font-bold">Keys</span> - Improve your typing speed with practice</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-muted-foreground hover:text-primary">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
