import { Clock, Keyboard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

interface TestCardProps {
  passage: string;
  typedText: string;
  typingInput: string;
  handleTypingChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  testStatus: string;
  timerDisplay: { minutes: string; seconds: string };
  characterProgress: { current: number; total: number };
  isTestCompleted: boolean;
}

const TestCard = ({
  passage,
  typedText,
  typingInput,
  handleTypingChange,
  testStatus,
  timerDisplay,
  characterProgress,
  isTestCompleted
}: TestCardProps) => {
  // Generate display text with character highlighting
  const renderTypedText = () => {
    let html = [];
    
    for (let i = 0; i < passage.length; i++) {
      if (i < typedText.length) {
        if (passage[i] === typedText[i]) {
          html.push(<span key={i} className="char-correct">{passage[i]}</span>);
        } else {
          html.push(<span key={i} className="char-incorrect">{passage[i]}</span>);
        }
      } else if (i === typedText.length) {
        html.push(<span key={i} className="current-char">{passage[i]}</span>);
      } else {
        html.push(<span key={i}>{passage[i]}</span>);
      }
    }
    
    return html;
  };

  // Determine badge color based on test status
  const getBadgeVariant = () => {
    if (testStatus.includes("Excellent") || testStatus.includes("Good")) {
      return "default"; // Using default for success state
    } else if (testStatus.includes("Keep Practicing")) {
      return "destructive";
    }
    return "secondary";
  };

  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        {/* Timer and Stats */}
        <div className="flex justify-between mb-4 items-center">
          <div className="text-xl font-mono font-semibold flex items-center">
            <Clock className="mr-2 h-5 w-5" />
            <span>{timerDisplay.minutes}</span>:
            <span>{timerDisplay.seconds}</span>
          </div>
          <div className="flex gap-4">
            <Badge variant={getBadgeVariant()}>{testStatus}</Badge>
          </div>
        </div>

        {/* Text to Type */}
        <div className="mb-3 font-bold text-xl flex items-center">
          <Keyboard className="mr-2 h-5 w-5 text-primary" />
          <span className="gradient-text">Speed</span><span>Keys</span><span className="text-muted-foreground text-sm ml-2">Typing Test</span>
        </div>
        <div className="bg-muted rounded-md p-4 mb-4 font-mono text-lg leading-relaxed border border-border">
          <div className="typed-text relative mb-1">
            {renderTypedText()}
          </div>
        </div>

        {/* Input Area */}
        <div className="relative">
          <Textarea
            value={typingInput}
            onChange={handleTypingChange}
            className="w-full h-20 p-3 font-mono focus:border-primary focus:ring-primary"
            placeholder="Start typing here..."
            disabled={isTestCompleted}
          />
          <div className="absolute bottom-3 right-3 text-sm text-muted-foreground">
            <span>{characterProgress.current}</span> / <span>{characterProgress.total}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestCard;
