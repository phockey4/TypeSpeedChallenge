import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play } from "lucide-react";
import { PassageType, DifficultyLevel } from "@/lib/passages";

interface OptionsCardProps {
  selectedPassageType: PassageType;
  selectedDifficultyLevel: DifficultyLevel;
  onPassageTypeChange: (type: PassageType) => void;
  onDifficultyLevelChange: (level: DifficultyLevel) => void;
  onStartNewTest: () => void;
}

const OptionsCard = ({
  selectedPassageType,
  selectedDifficultyLevel,
  onPassageTypeChange,
  onDifficultyLevelChange,
  onStartNewTest
}: OptionsCardProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-3">Test Options</h3>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label htmlFor="passage-select" className="block text-sm font-medium text-muted-foreground mb-1">
              Passage Type
            </label>
            <Select
              value={selectedPassageType}
              onValueChange={(value) => onPassageTypeChange(value as PassageType)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select passage type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="short">Short Sentences</SelectItem>
                <SelectItem value="medium">Medium Paragraphs</SelectItem>
                <SelectItem value="long">Long Passages</SelectItem>
                <SelectItem value="code">Code Snippets</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <label htmlFor="difficulty-select" className="block text-sm font-medium text-muted-foreground mb-1">
              Difficulty
            </label>
            <Select 
              value={selectedDifficultyLevel}
              onValueChange={(value) => onDifficultyLevelChange(value as DifficultyLevel)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Button 
          onClick={onStartNewTest} 
          className="w-full flex items-center justify-center"
        >
          <Play className="mr-2 h-4 w-4" /> Start New Test
        </Button>
      </CardContent>
    </Card>
  );
};

export default OptionsCard;
