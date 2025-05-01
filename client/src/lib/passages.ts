export type PassageType = 'short' | 'medium' | 'long' | 'code';
export type DifficultyLevel = 'easy' | 'medium' | 'hard';

interface PassageCollection {
  short: string[];
  medium: string[];
  long: string[];
  code: string[];
}

// Sample passages for typing practice
export const passages: PassageCollection = {
  short: [
    "The quick brown fox jumps over the lazy dog. This sentence contains all the letters in the English alphabet.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Be yourself; everyone else is already taken. You are unique and have something special to offer the world.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
  ],
  medium: [
    "Learning to type quickly and accurately is an essential skill in today's digital world. Regular practice can help you improve your typing speed and reduce errors. The best way to get better is through consistent practice.",
    "The internet has revolutionized the way we communicate and access information. It has connected billions of people worldwide and created new opportunities for business, education, and social interaction. However, it also presents challenges like privacy concerns.",
    "Effective time management is crucial for productivity and reducing stress. Breaking down large tasks into smaller, manageable parts can make them less overwhelming. Remember to take regular breaks to maintain focus and prevent burnout."
  ],
  long: [
    "The ability to type quickly and accurately is an increasingly important skill in our digital age. Whether you're writing emails, coding applications, or chatting with friends, typing efficiently can save you countless hours over time. Regular practice with proper technique is the key to improvement. Focus on accuracy first, and speed will naturally follow as you become more comfortable with the keyboard layout.",
    "Artificial intelligence continues to transform various aspects of our daily lives. From virtual assistants that help us manage our schedules to sophisticated algorithms that recommend content based on our preferences, AI technologies are becoming increasingly integrated into the fabric of modern society. As these systems grow more advanced, important discussions about ethics, privacy, and the future of work become necessary."
  ],
  code: [
    "function calculateFactorial(n) {\n  if (n === 0 || n === 1) {\n    return 1;\n  }\n  return n * calculateFactorial(n - 1);\n}",
    "const filterArray = (array, criteria) => {\n  return array.filter(item => criteria(item));\n};\n\nconst numbers = [1, 2, 3, 4, 5, 6];\nconst evenNumbers = filterArray(numbers, num => num % 2 === 0);"
  ]
};

// Get a random passage based on type and difficulty
export const getRandomPassage = (
  type: PassageType = 'medium', 
  difficulty: DifficultyLevel = 'medium'
): string => {
  const passagesByType = passages[type];
  
  // If type is invalid or has no passages, fallback to medium
  if (!passagesByType || passagesByType.length === 0) {
    return getRandomPassage('medium', difficulty);
  }
  
  // Select random passage from the array
  const randomIndex = Math.floor(Math.random() * passagesByType.length);
  let passage = passagesByType[randomIndex];
  
  // Adjust difficulty if needed
  if (difficulty === 'easy' && type !== 'short') {
    // For easy, trim longer passages
    passage = passage.split(' ').slice(0, 15).join(' ');
  } else if (difficulty === 'hard' && type !== 'long' && type !== 'code') {
    // For hard, make sure we have at least a certain length
    if (passage.length < 200 && passages['long'].length > 0) {
      return getRandomPassage('long', difficulty);
    }
  }
  
  return passage;
};
