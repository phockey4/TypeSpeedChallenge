import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw, Copy, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ResultsCardProps {
  wpm: number;
  accuracy: number;
  timeInSeconds: number;
  onTryAgain: () => void;
}

const ResultsCard = ({ wpm, accuracy, timeInSeconds, onTryAgain }: ResultsCardProps) => {
  const { toast } = useToast();

  const copyResults = () => {
    const resultText = `SpeedKeys Results:
Speed: ${wpm} WPM
Accuracy: ${accuracy}%
Time: ${timeInSeconds} seconds`;
    
    navigator.clipboard.writeText(resultText)
      .then(() => {
        toast({
          title: "Copied!",
          description: "Results copied to clipboard",
          duration: 2000,
        });
      })
      .catch((err) => {
        toast({
          title: "Copy failed",
          description: "Could not copy results to clipboard",
          variant: "destructive",
          duration: 2000,
        });
      });
  };

  const shareResults = () => {
    const shareText = `I just typed ${wpm} WPM with ${accuracy}% accuracy on SpeedKeys! Try to beat my score!`;
    
    if (navigator.share) {
      navigator.share({
        title: 'SpeedKeys Results',
        text: shareText,
        url: window.location.href
      }).catch((error) => {
        toast({
          title: "Share failed",
          description: error.message,
          variant: "destructive",
        });
      });
    } else {
      copyResults();
    }
  };

  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Trophy className="text-yellow-500 mr-2" /> Your Results
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-muted p-4 rounded-md text-center">
            <div className="text-muted-foreground text-sm mb-1">Speed</div>
            <div className="text-2xl font-bold">{wpm} WPM</div>
          </div>
          <div className="bg-muted p-4 rounded-md text-center">
            <div className="text-muted-foreground text-sm mb-1">Accuracy</div>
            <div className="text-2xl font-bold">{accuracy}%</div>
          </div>
          <div className="bg-muted p-4 rounded-md text-center">
            <div className="text-muted-foreground text-sm mb-1">Time</div>
            <div className="text-2xl font-bold">{timeInSeconds}s</div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <Button variant="default" onClick={onTryAgain} className="flex items-center justify-center">
            <RotateCcw className="mr-2 h-4 w-4" /> Try Again
          </Button>
          <Button variant="outline" onClick={copyResults} className="flex items-center justify-center">
            <Copy className="mr-2 h-4 w-4" /> Copy Results
          </Button>
          <Button variant="outline" onClick={shareResults} className="flex items-center justify-center">
            <Share2 className="mr-2 h-4 w-4" /> Share
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsCard;
