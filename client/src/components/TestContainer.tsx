import { useState } from "react";
import TestCard from "./TestCard";
import ResultsCard from "./ResultsCard";
import OptionsCard from "./OptionsCard";
import { useTypingTest } from "@/hooks/useTypingTest";
import { PassageType, DifficultyLevel } from "@/lib/passages";

const TestContainer = () => {
  const [passageType, setPassageType] = useState<PassageType>("medium");
  const [difficultyLevel, setDifficultyLevel] = useState<DifficultyLevel>("medium");
  
  const {
    passage,
    typedText,
    typingInput,
    stats,
    testStatus,
    isTestActive,
    isTestCompleted,
    timerDisplay,
    characterProgress,
    handleTypingChange,
    startNewTest,
    resetTest
  } = useTypingTest(passageType, difficultyLevel);

  const handlePassageTypeChange = (type: PassageType) => {
    setPassageType(type);
    resetTest();
  };

  const handleDifficultyLevelChange = (level: DifficultyLevel) => {
    setDifficultyLevel(level);
    resetTest();
  };

  return (
    <>
      <div className="mb-6 text-center">
        <h2 className="text-xl font-semibold mb-2">Test Your Typing Speed</h2>
        <p className="text-muted-foreground">Type the text below as quickly and accurately as you can.</p>
      </div>

      <TestCard
        passage={passage}
        typedText={typedText}
        typingInput={typingInput}
        handleTypingChange={handleTypingChange}
        testStatus={testStatus}
        timerDisplay={timerDisplay}
        characterProgress={characterProgress}
        isTestCompleted={isTestCompleted}
      />

      {isTestCompleted && (
        <ResultsCard
          wpm={stats.wpm}
          accuracy={stats.accuracy}
          timeInSeconds={stats.timeTaken}
          onTryAgain={startNewTest}
        />
      )}

      <OptionsCard
        selectedPassageType={passageType}
        selectedDifficultyLevel={difficultyLevel}
        onPassageTypeChange={handlePassageTypeChange}
        onDifficultyLevelChange={handleDifficultyLevelChange}
        onStartNewTest={startNewTest}
      />
    </>
  );
};

export default TestContainer;
