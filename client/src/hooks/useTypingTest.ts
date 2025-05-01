import { useState, useEffect, useRef, useCallback } from "react";
import { getRandomPassage, PassageType, DifficultyLevel } from "@/lib/passages";
import { calculateWPM, calculateAccuracy, formatTime, countCorrectCharacters } from "@/lib/utils";

interface TypingStats {
  wpm: number;
  accuracy: number;
  timeTaken: number;
}

export function useTypingTest(
  passageType: PassageType = "medium",
  difficultyLevel: DifficultyLevel = "medium"
) {
  // State
  const [passage, setPassage] = useState<string>("");
  const [typedText, setTypedText] = useState<string>("");
  const [typingInput, setTypingInput] = useState<string>("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [isTestActive, setIsTestActive] = useState<boolean>(false);
  const [isTestCompleted, setIsTestCompleted] = useState<boolean>(false);
  const [testStatus, setTestStatus] = useState<string>("Ready");
  const [stats, setStats] = useState<TypingStats>({
    wpm: 0,
    accuracy: 0,
    timeTaken: 0,
  });

  // Refs
  const timerIntervalRef = useRef<number | null>(null);
  
  // Load a new passage
  const loadPassage = useCallback(() => {
    const newPassage = getRandomPassage(passageType, difficultyLevel);
    setPassage(newPassage);
  }, [passageType, difficultyLevel]);

  // Initialize the test
  useEffect(() => {
    loadPassage();
    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, [loadPassage]);

  // Timer function
  const startTimer = useCallback(() => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }
    
    timerIntervalRef.current = window.setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
  }, []);

  // Handle typing input changes
  const handleTypingChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setTypingInput(value);
    
    // Start timer on first keystroke
    if (!isTestActive && value.length === 1) {
      setStartTime(Date.now());
      setIsTestActive(true);
      setTestStatus("In Progress");
      startTimer();
    }
    
    // Update typed text for highlighting
    setTypedText(value);
    
    // Check if test is completed
    if (value.length >= passage.length && isTestActive) {
      finishTest();
    }
  };

  // Finish the test and calculate results
  const finishTest = () => {
    // Clear the timer
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
    
    // Calculate stats
    const correctCharacters = countCorrectCharacters(typedText, passage);
    const accuracy = calculateAccuracy(correctCharacters, passage.length);
    const wpm = calculateWPM(correctCharacters, elapsedSeconds);
    
    // Update state
    setIsTestActive(false);
    setIsTestCompleted(true);
    setStats({
      wpm,
      accuracy,
      timeTaken: elapsedSeconds,
    });
    
    // Update test status based on accuracy
    if (accuracy >= 95) {
      setTestStatus("Excellent!");
    } else if (accuracy >= 85) {
      setTestStatus("Good");
    } else {
      setTestStatus("Keep Practicing");
    }
  };

  // Start a new test
  const startNewTest = () => {
    // Reset state
    setTypedText("");
    setTypingInput("");
    setStartTime(null);
    setElapsedSeconds(0);
    setIsTestActive(false);
    setIsTestCompleted(false);
    setTestStatus("Ready");
    
    // Clear the timer
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
    
    // Load a new passage
    loadPassage();
  };

  // Reset the test without changing the passage
  const resetTest = () => {
    // Reset state
    setTypedText("");
    setTypingInput("");
    setStartTime(null);
    setElapsedSeconds(0);
    setIsTestActive(false);
    setIsTestCompleted(false);
    setTestStatus("Ready");
    
    // Clear the timer
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  };

  return {
    passage,
    typedText,
    typingInput,
    stats,
    testStatus,
    isTestActive,
    isTestCompleted,
    timerDisplay: formatTime(elapsedSeconds),
    characterProgress: {
      current: typedText.length,
      total: passage.length,
    },
    handleTypingChange,
    startNewTest,
    resetTest,
  };
}
