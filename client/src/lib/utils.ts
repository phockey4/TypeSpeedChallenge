import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Calculate words per minute
export function calculateWPM(
  characterCount: number,
  timeInSeconds: number
): number {
  // Standard calculation assumes 5 characters = 1 word
  if (timeInSeconds === 0) return 0;
  
  const words = characterCount / 5;
  const minutes = timeInSeconds / 60;
  return Math.round(words / minutes);
}

// Calculate accuracy percentage
export function calculateAccuracy(
  correctChars: number,
  totalChars: number
): number {
  if (totalChars === 0) return 0;
  return Math.round((correctChars / totalChars) * 100);
}

// Format timer display
export function formatTime(seconds: number): { minutes: string, seconds: string } {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  
  return {
    minutes: mins < 10 ? `0${mins}` : `${mins}`,
    seconds: secs < 10 ? `0${secs}` : `${secs}`
  };
}

// Count correct characters in typed text
export function countCorrectCharacters(
  text: string,
  targetText: string
): number {
  let correctCount = 0;
  
  for (let i = 0; i < text.length && i < targetText.length; i++) {
    if (text[i] === targetText[i]) {
      correctCount++;
    }
  }
  
  return correctCount;
}
