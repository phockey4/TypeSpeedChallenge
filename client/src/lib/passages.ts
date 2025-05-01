export type PassageType = 'short' | 'medium' | 'long' | 'code';
export type DifficultyLevel = 'easy' | 'medium' | 'hard';

interface PassageCollection {
  short: {
    easy: string[];
    medium: string[];
    hard: string[];
  };
  medium: {
    easy: string[];
    medium: string[];
    hard: string[];
  };
  long: {
    easy: string[];
    medium: string[];
    hard: string[];
  };
  code: {
    easy: string[];
    medium: string[];
    hard: string[];
  };
}

// Expanded passages for typing practice
export const passages: PassageCollection = {
  short: {
    easy: [
      "The quick brown fox jumps over the lazy dog.",
      "All that glitters is not gold.",
      "Practice makes perfect.",
      "Actions speak louder than words.",
      "Time flies when you're having fun.",
      "Better late than never.",
      "The early bird catches the worm.",
      "You can't judge a book by its cover.",
      "Good things come to those who wait.",
      "There's no place like home."
    ],
    medium: [
      "The quick brown fox jumps over the lazy dog. This sentence contains all the letters in the English alphabet.",
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      "Be yourself; everyone else is already taken. You are unique and have something special to offer the world.",
      "Life is what happens when you're busy making other plans. Embrace the unexpected journey.",
      "Happiness is not something ready-made. It comes from your own actions and mindset.",
      "The only way to do great work is to love what you do. Follow your passion.",
      "In the middle of difficulty lies opportunity. Look for the silver lining.",
      "Your time is limited, so don't waste it living someone else's life. Be authentic.",
      "The future belongs to those who believe in the beauty of their dreams. Keep dreaming."
    ],
    hard: [
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
      "The difference between stupidity and genius is that genius has its limits.",
      "A person who never made a mistake never tried anything new. Embrace failures as learning opportunities.",
      "The true sign of intelligence is not knowledge but imagination and creative thinking.",
      "I have not failed. I've just found 10,000 ways that won't work. Persistence is key to success.",
      "Logic will get you from A to B. Imagination will take you everywhere. Think outside the box.",
      "Anyone who has never made a mistake has never tried anything new. Growth requires risk."
    ]
  },
  medium: {
    easy: [
      "Learning to type quickly is a useful skill. You can save time and be more productive when you type faster. Just a few minutes of practice each day can help improve your speed.",
      "The internet helps us connect with people around the world. We can share information and learn new things online. It's important to use the internet responsibly.",
      "Reading books is a great way to learn new things. You can read about different topics that interest you. Libraries have many books that you can borrow for free.",
      "Exercise is important for staying healthy. Walking, running, and swimming are all good forms of exercise. Try to be active for at least 30 minutes each day.",
      "Cooking at home can be fun and healthy. You can try new recipes and save money by not eating out. Start with simple dishes and then try more complex ones."
    ],
    medium: [
      "Learning to type quickly and accurately is an essential skill in today's digital world. Regular practice can help you improve your typing speed and reduce errors. The best way to get better is through consistent practice.",
      "The internet has revolutionized the way we communicate and access information. It has connected billions of people worldwide and created new opportunities for business, education, and social interaction. However, it also presents challenges like privacy concerns.",
      "Effective time management is crucial for productivity and reducing stress. Breaking down large tasks into smaller, manageable parts can make them less overwhelming. Remember to take regular breaks to maintain focus and prevent burnout.",
      "Developing good reading habits can significantly improve your knowledge and vocabulary. Try to read different genres and topics to broaden your perspective. Setting aside dedicated time each day for reading can make it a consistent habit.",
      "Healthy eating habits contribute significantly to overall wellbeing. A balanced diet rich in fruits, vegetables, lean proteins, and whole grains provides necessary nutrients. Mindful eating involves paying attention to hunger cues and enjoying your food without distractions.",
      "Learning a new language opens doors to different cultures and perspectives. Consistent practice, even just fifteen minutes daily, leads to gradual improvement. Immersion through movies, music, and conversations with native speakers enhances language acquisition.",
      "Regular physical activity benefits both physical and mental health. Finding activities you enjoy increases the likelihood of maintaining an exercise routine. The recommended 150 minutes of moderate activity weekly can be divided into manageable sessions."
    ],
    hard: [
      "The intricate relationship between technology and human psychology warrants further exploration in our increasingly digital society. As we become more dependent on devices and virtual interactions, understanding the neurological impacts becomes imperative for developing healthy technological boundaries and practices.",
      "Climate change represents one of the most complex challenges facing humanity, requiring coordinated global effort across political, economic, and social dimensions. The interplay between rising temperatures, oceanic acidification, and extreme weather events creates cascading effects that demand immediate attention and innovative solutions.",
      "Quantum computing promises to revolutionize computational capabilities by leveraging principles of quantum mechanics to process information. Unlike classical computing's binary bits, quantum bits or qubits can exist in multiple states simultaneously, potentially solving complex problems exponentially faster than current technologies.",
      "The philosophical examination of consciousness continues to challenge our understanding of human experience and perception. Whether consciousness emerges from purely physical processes or represents something fundamentally different remains one of science's great unsolved mysteries.",
      "Economic inequality persists as a multifaceted issue with implications for social stability, political systems, and individual opportunity. Understanding the dynamics between wealth concentration, social mobility, and systemic factors requires nuanced analysis beyond simplistic ideological positions."
    ]
  },
  long: {
    easy: [
      "Learning to type faster can help you in many ways. When you type quickly, you can finish your work in less time. This gives you more time to do other things you enjoy. The key to improving your typing speed is regular practice. Try to practice typing for at least fifteen minutes each day. Focus on accuracy first, and then your speed will naturally increase over time. Remember to take breaks to avoid strain on your hands and wrists.",
      "Reading books is a wonderful way to learn new things and explore different worlds. You can read about topics that interest you or discover new subjects you never knew about before. Libraries have thousands of books that you can borrow for free. You can also find many free ebooks online. Reading regularly helps improve your vocabulary and understanding of language. Try to read a little bit each day to develop a good reading habit. You might be surprised by how much you enjoy it!",
      "Cooking at home is both fun and beneficial. When you cook your own meals, you know exactly what ingredients are being used. This helps you eat healthier food. Cooking at home also saves money compared to eating at restaurants all the time. You can start with simple recipes and gradually try more complex dishes as you become more confident. Many recipes can be found online for free. Cooking with friends or family can also be a great social activity. Don't be afraid to make mistakes - they are part of the learning process.",
      "Exercise is important for maintaining good health. You don't need to do intense workouts to benefit from physical activity. Even walking for thirty minutes each day can make a big difference to your health. Find activities that you enjoy, whether it's dancing, swimming, hiking, or playing a sport. When you enjoy the activity, you're more likely to stick with it. Try to include some form of exercise in your daily routine. Remember that consistency is more important than intensity when it comes to staying active and healthy."
    ],
    medium: [
      "The ability to type quickly and accurately is an increasingly important skill in our digital age. Whether you're writing emails, coding applications, or chatting with friends, typing efficiently can save you countless hours over time. Regular practice with proper technique is the key to improvement. Focus on accuracy first, and speed will naturally follow as you become more comfortable with the keyboard layout. Touch typing, or typing without looking at the keyboard, might feel challenging initially but becomes second nature with practice. Ergonomics also play a crucial role in typing performance, so ensure your workstation is properly set up to prevent strain and potential repetitive stress injuries.",
      "Artificial intelligence continues to transform various aspects of our daily lives. From virtual assistants that help us manage our schedules to sophisticated algorithms that recommend content based on our preferences, AI technologies are becoming increasingly integrated into the fabric of modern society. As these systems grow more advanced, important discussions about ethics, privacy, and the future of work become necessary. The potential for AI to solve complex problems must be balanced with considerations about data security, algorithmic bias, and ensuring that technological advancement benefits humanity broadly rather than exacerbating existing inequalities.",
      "Developing effective study habits can significantly impact academic success and lifelong learning. Creating a dedicated study environment free from distractions helps maintain focus and concentration. Breaking study sessions into manageable chunks with short breaks between them leverages the psychology of learning and memory formation. Active learning techniques, such as summarizing information in your own words or teaching concepts to others, promote deeper understanding compared to passive reading. Additionally, regular review of material prevents forgetting and builds stronger neural connections. The digital age offers numerous tools to enhance studying, from spaced repetition apps to collaborative online platforms, though balancing technology use with potential distractions requires mindful awareness.",
      "The global shift toward renewable energy represents one of the most significant technological and economic transformations in modern history. Solar, wind, hydroelectric, and geothermal power sources offer sustainable alternatives to fossil fuels, which have dominated energy production since the Industrial Revolution. The decreasing costs of renewable technologies, coupled with increasing efficiency, make them increasingly competitive with traditional energy sources. Beyond environmental benefits, the renewable energy sector creates new jobs and economic opportunities across manufacturing, installation, maintenance, and research fields. However, challenges remain in energy storage, grid integration, and ensuring equitable access to clean energy technologies worldwide. Navigating this transition requires thoughtful policy approaches that balance immediate economic considerations with long-term sustainability goals.",
      "The connection between physical activity and mental wellbeing has been extensively documented through scientific research. Regular exercise stimulates the production of endorphins, often called 'feel-good hormones,' which can elevate mood and reduce stress. Beyond these immediate biochemical effects, physical activity provides structure, builds confidence, and offers opportunities for social interaction. Even moderate activities like walking or gardening show benefits for mental health. The mind-body connection works bidirectionally, with mental state affecting physical performance and physical condition influencing cognitive function and emotional regulation. Incorporating movement into daily routines represents a powerful, accessible tool for maintaining psychological health alongside physical fitness. Despite these known benefits, finding motivation remains challenging for many people, highlighting the importance of identifying personally meaningful activities rather than following prescribed exercise regimens."
    ],
    hard: [
      "The intersection of quantum mechanics and information theory has given rise to the burgeoning field of quantum computing, which promises to revolutionize computational capabilities through fundamentally different approaches to information processing. Unlike classical computers that operate with binary bits representing either 0 or 1, quantum computers utilize quantum bits or qubits that can exist in superpositions of states, effectively processing multiple possibilities simultaneously. Quantum entanglement, another counterintuitive quantum phenomenon, allows qubits to be correlated in ways that have no classical analogue, potentially enabling exponential speedups for certain computational problems. Particularly promising applications include cryptography, where Shor's algorithm threatens current encryption standards; complex system simulation, especially for molecular and chemical processes; optimization problems with vast solution spaces; and machine learning algorithms that could benefit from quantum parallelism. Despite theoretical promise, significant technical challenges remain in maintaining quantum coherence, controlling quantum states with sufficient precision, and developing error correction protocols robust enough for practical implementation. The field exemplifies how abstract theoretical physics can ultimately lead to transformative technologies with far-reaching implications across scientific disciplines and industries.",
      "The complex interplay between global economic systems, environmental sustainability, and social equity presents one of the defining challenges of the twenty-first century. Conventional economic models prioritizing continuous growth and measuring success primarily through gross domestic product have contributed to unprecedented material prosperity but simultaneously generated negative externalities including resource depletion, pollution, biodiversity loss, and climate destabilization. These environmental consequences disproportionately affect vulnerable populations, creating feedback loops that exacerbate existing socioeconomic inequalities. Emerging alternative frameworks such as circular economy models, regenerative economics, and various implementations of sustainable development attempt to reconcile economic activity with ecological boundaries and social considerations. These approaches recognize the fundamental dependence of human economies on functioning ecosystems and social cohesion, challenging the artificial separation of these domains in conventional policy and business decision-making. Successful transition toward more sustainable economic systems requires multifaceted interventions: technological innovation, particularly in energy and materials; policy reforms including more comprehensive accounting methods that incorporate currently unpriced environmental and social impacts; institutional transformation across public and private sectors; and cultural shifts in consumption patterns and definitions of prosperity. The interdisciplinary nature of these challenges necessitates collaboration across traditionally siloed domains of expertise, from environmental science and economics to psychology, sociology, and political science.",
      "The neuroscience of consciousness represents one of the most profound interdisciplinary frontiers in contemporary science, bridging neurophysiology, cognitive psychology, philosophy of mind, and computational theory. Despite significant technological advances in brain imaging and monitoring, the explanatory gap between observable neural activity and subjective conscious experience—what philosophers term the 'hard problem of consciousness'—remains largely unbridged. Various theoretical frameworks have emerged attempting to systematize the relationship between neural processes and phenomenal experience, including Global Workspace Theory, which posits consciousness as information available to multiple brain systems; Integrated Information Theory, suggesting consciousness corresponds to systems capable of integrating information in particular structured ways; and Predictive Processing models, viewing consciousness as emerging from hierarchical prediction mechanisms. Each approach offers valuable insights while highlighting different aspects of the consciousness puzzle. Experimental evidence increasingly suggests consciousness involves complex, large-scale networks of brain connectivity rather than localized regions, with recurrent processing between higher and lower brain areas playing crucial roles. The clinical implications of consciousness research extend to disorders of consciousness following brain injury, neuropsychiatric conditions affecting self-awareness, and potential development of consciousness metrics for assessing non-communicative patients. Beyond clinical applications, this research domain intersects with profound philosophical and ethical questions regarding artificial consciousness, the moral status of non-human animals with varying neural complexity, and ultimately the nature of human experience itself.",
      "The evolution of language represents a uniquely human adaptive trait that fundamentally shapes cognition, social structures, and cultural transmission mechanisms. Linguistic capacity emerges from complex interactions between biological predispositions and environmental exposure, with critical developmental windows during early childhood when neural plasticity facilitates effortless acquisition. The structural properties of language—including recursion, displacement, and symbolic representation—enable humans to communicate about abstract concepts, hypothetical scenarios, and temporally distant events, vastly expanding our cognitive and collaborative capabilities beyond those of other species. Cross-linguistic diversity, with approximately 7,000 languages currently spoken worldwide, demonstrates remarkable variation in phonological systems, morphosyntactic structures, and lexical categorizations, while simultaneously revealing universal constraints reflecting shared cognitive architecture. Language functions as both cultural repository and transmission mechanism, encoding collective knowledge, values, and perspectives that constitute significant components of cultural inheritance. Historical linguistics methodology enables reconstruction of language evolution through comparative analysis, revealing patterns of divergence, contact, and change that often parallel historical population movements and cultural exchanges. Contemporary sociolinguistic research examines how language variation relates to social identity and power structures, with linguistic features serving as markers of group membership and cultural positioning. The accelerating extinction of minority languages, with projections suggesting potential loss of 50-90% of current languages by the end of the century, represents not merely diminished linguistic diversity but the erasure of unique knowledge systems and worldviews embedded within these communication systems. Digital technologies simultaneously present opportunities for language documentation and revitalization while potentially homogenizing global communication patterns through dominant languages in technological infrastructure.",
      "The philosophical examination of epistemology—how knowledge is constructed, justified, and limited—has evolved substantially from classical philosophical inquiries to contemporary interdisciplinary approaches incorporating cognitive science, evolutionary psychology, and sociological perspectives. Traditional philosophical frameworks have categorized knowledge acquisition methods into rationalism, emphasizing innate ideas and logical deduction; empiricism, prioritizing sensory experience and observation; and constructivism, focusing on how individuals and communities actively construct understanding rather than passively receiving information. These theoretical approaches find intriguing parallels in cognitive neuroscience research on perception, memory formation, and reasoning processes, where evidence increasingly suggests that knowledge formation involves complex interactions between bottom-up processing of sensory data and top-down application of conceptual frameworks and prior expectations. Social epistemology extends this inquiry beyond individual cognition to examine how knowledge practices are embedded within institutional structures, power relations, and community dynamics, with particular attention to how authority, expertise, and credibility are established and contested within different domains. The digital information ecosystem presents unprecedented challenges to traditional epistemological frameworks through information abundance rather than scarcity, algorithmic curation affecting exposure to diverse perspectives, and changing verification mechanisms as traditional gatekeepers lose exclusivity. Understanding the nature of knowledge has profound practical implications across domains including education, where pedagogical approaches reflect assumptions about learning processes; scientific methodology, where frameworks for establishing reliability and validity determine research practices; and democratic systems, where shared epistemic standards facilitate civic deliberation despite persistent value differences. Contemporary epistemological inquiries increasingly acknowledge the contextual, embodied nature of knowledge and the limitations of purely abstract, disembodied conceptualizations of rational inquiry."
    ]
  },
  code: {
    easy: [
      "function greet(name) {\n  return 'Hello, ' + name + '!';\n}\n\nconst message = greet('World');\nconsole.log(message);",
      "// Calculate the sum of two numbers\nfunction add(a, b) {\n  return a + b;\n}\n\nconst result = add(5, 3);\nconsole.log('Sum:', result);",
      "// Check if a number is even or odd\nfunction isEven(number) {\n  return number % 2 === 0;\n}\n\nconsole.log(isEven(4));  // true\nconsole.log(isEven(7));  // false",
      "// Convert temperature from Celsius to Fahrenheit\nfunction celsiusToFahrenheit(celsius) {\n  return (celsius * 9/5) + 32;\n}\n\nconst tempF = celsiusToFahrenheit(25);\nconsole.log(tempF);  // 77",
      "// Count the number of characters in a string\nfunction countCharacters(str) {\n  return str.length;\n}\n\nconst text = 'Hello World';\nconsole.log(countCharacters(text));  // 11"
    ],
    medium: [
      "function calculateFactorial(n) {\n  if (n === 0 || n === 1) {\n    return 1;\n  }\n  return n * calculateFactorial(n - 1);\n}\n\nconst factorial5 = calculateFactorial(5);\nconsole.log('Factorial of 5:', factorial5);",
      "const filterArray = (array, criteria) => {\n  return array.filter(item => criteria(item));\n};\n\nconst numbers = [1, 2, 3, 4, 5, 6];\nconst evenNumbers = filterArray(numbers, num => num % 2 === 0);\nconsole.log('Even numbers:', evenNumbers);",
      "// Find the maximum value in an array\nfunction findMax(arr) {\n  if (arr.length === 0) {\n    return null;\n  }\n  \n  let max = arr[0];\n  \n  for (let i = 1; i < arr.length; i++) {\n    if (arr[i] > max) {\n      max = arr[i];\n    }\n  }\n  \n  return max;\n}\n\nconst values = [15, 7, 23, 9, 4, 16];\nconsole.log('Maximum value:', findMax(values));",
      "// Check if a string is a palindrome\nfunction isPalindrome(str) {\n  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');\n  const reversed = cleanStr.split('').reverse().join('');\n  return cleanStr === reversed;\n}\n\nconsole.log(isPalindrome('racecar'));  // true\nconsole.log(isPalindrome('hello'));    // false",
      "// Calculate the Fibonacci sequence up to n terms\nfunction generateFibonacci(n) {\n  const sequence = [0, 1];\n  \n  for (let i = 2; i < n; i++) {\n    sequence[i] = sequence[i-1] + sequence[i-2];\n  }\n  \n  return sequence.slice(0, n);\n}\n\nconsole.log(generateFibonacci(8));  // [0, 1, 1, 2, 3, 5, 8, 13]"
    ],
    hard: [
      "class BinarySearchTree {\n  constructor() {\n    this.root = null;\n  }\n\n  insert(value) {\n    const newNode = { value, left: null, right: null };\n    \n    if (!this.root) {\n      this.root = newNode;\n      return;\n    }\n    \n    const insertNode = (node, newNode) => {\n      if (newNode.value < node.value) {\n        if (node.left === null) {\n          node.left = newNode;\n        } else {\n          insertNode(node.left, newNode);\n        }\n      } else {\n        if (node.right === null) {\n          node.right = newNode;\n        } else {\n          insertNode(node.right, newNode);\n        }\n      }\n    };\n    \n    insertNode(this.root, newNode);\n  }\n\n  search(value) {\n    const searchNode = (node, value) => {\n      if (node === null) return false;\n      if (node.value === value) return true;\n      \n      return value < node.value\n        ? searchNode(node.left, value)\n        : searchNode(node.right, value);\n    };\n    \n    return searchNode(this.root, value);\n  }\n}\n\nconst bst = new BinarySearchTree();\nbst.insert(10);\nbst.insert(5);\nbst.insert(15);\nbst.insert(3);\nconsole.log(bst.search(3));  // true\nconsole.log(bst.search(7));  // false",
      "// Implement a debounce function for handling frequent events\nfunction debounce(func, delay) {\n  let timeoutId;\n  \n  return function(...args) {\n    const context = this;\n    \n    clearTimeout(timeoutId);\n    \n    timeoutId = setTimeout(() => {\n      func.apply(context, args);\n    }, delay);\n  };\n}\n\n// Example usage\nconst handleInput = debounce((text) => {\n  console.log('Input value:', text);\n  // In a real application, this might be an API call\n}, 500);\n\n// Simulate rapid input events\nhandleInput('a');\nhandleInput('ap');\nhandleInput('app');\nhandleInput('appl');\nhandleInput('apple');\n// Only 'apple' will be logged after 500ms",
      "// A* Pathfinding Algorithm implementation\nclass Node {\n  constructor(x, y, walkable = true) {\n    this.x = x;\n    this.y = y;\n    this.walkable = walkable;\n    this.g = 0; // Cost from start to current node\n    this.h = 0; // Heuristic cost from current to end node\n    this.f = 0; // Total cost (g + h)\n    this.parent = null;\n  }\n}\n\nclass AStar {\n  constructor(grid) {\n    this.grid = grid;\n    this.openSet = [];\n    this.closedSet = [];\n  }\n\n  findPath(startNode, endNode) {\n    this.openSet = [startNode];\n    this.closedSet = [];\n    \n    while (this.openSet.length > 0) {\n      // Find node with lowest f cost in openSet\n      let currentIndex = 0;\n      for (let i = 0; i < this.openSet.length; i++) {\n        if (this.openSet[i].f < this.openSet[currentIndex].f) {\n          currentIndex = i;\n        }\n      }\n      \n      const current = this.openSet[currentIndex];\n      \n      // If reached the end\n      if (current.x === endNode.x && current.y === endNode.y) {\n        let path = [];\n        let currentNode = current;\n        while (currentNode) {\n          path.unshift({ x: currentNode.x, y: currentNode.y });\n          currentNode = currentNode.parent;\n        }\n        return path;\n      }\n      \n      // Move current from openSet to closedSet\n      this.openSet.splice(currentIndex, 1);\n      this.closedSet.push(current);\n      \n      // Check neighbors\n      const neighbors = this.getNeighbors(current);\n      for (const neighbor of neighbors) {\n        if (!neighbor.walkable || this.closedSet.includes(neighbor)) {\n          continue;\n        }\n        \n        const tentativeG = current.g + 1; // Assuming grid cost is 1\n        \n        if (!this.openSet.includes(neighbor) || tentativeG < neighbor.g) {\n          neighbor.g = tentativeG;\n          neighbor.h = this.heuristic(neighbor, endNode);\n          neighbor.f = neighbor.g + neighbor.h;\n          neighbor.parent = current;\n          \n          if (!this.openSet.includes(neighbor)) {\n            this.openSet.push(neighbor);\n          }\n        }\n      }\n    }\n    \n    // No path found\n    return [];\n  }\n\n  getNeighbors(node) {\n    const neighbors = [];\n    const { x, y } = node;\n    const directions = [\n      { x: 0, y: -1 }, // Up\n      { x: 1, y: 0 },  // Right\n      { x: 0, y: 1 },  // Down\n      { x: -1, y: 0 }, // Left\n    ];\n    \n    for (const dir of directions) {\n      const newX = x + dir.x;\n      const newY = y + dir.y;\n      \n      if (newX >= 0 && newX < this.grid[0].length && \n          newY >= 0 && newY < this.grid.length) {\n        neighbors.push(this.grid[newY][newX]);\n      }\n    }\n    \n    return neighbors;\n  }\n\n  heuristic(nodeA, nodeB) {\n    // Manhattan distance heuristic\n    return Math.abs(nodeA.x - nodeB.x) + Math.abs(nodeA.y - nodeB.y);\n  }\n}\n\n// Example usage (simplified)\nconst gridSize = 5;\nconst grid = Array(gridSize).fill().map((_, y) => \n  Array(gridSize).fill().map((_, x) => new Node(x, y))\n);\n\n// Set some obstacles\ngrid[1][2].walkable = false;\ngrid[2][2].walkable = false;\ngrid[3][2].walkable = false;\n\nconst astar = new AStar(grid);\nconst startNode = grid[0][0];\nconst endNode = grid[4][4];\n\nconst path = astar.findPath(startNode, endNode);\nconsole.log('Path found:', path);"
    ]
  }
};

// Get a random passage based on type and difficulty
export const getRandomPassage = (
  type: PassageType = 'medium', 
  difficulty: DifficultyLevel = 'medium'
): string => {
  try {
    // Access passages by type and difficulty
    const passagesByDifficulty = passages[type][difficulty];
    
    // If no passages found for this type/difficulty, fallback to medium/medium
    if (!passagesByDifficulty || passagesByDifficulty.length === 0) {
      if (type !== 'medium' || difficulty !== 'medium') {
        return getRandomPassage('medium', 'medium');
      }
      // If we're already at medium/medium and still no passages, return a default message
      return "No passages available. Please try a different type or difficulty level.";
    }
    
    // Select random passage from the array
    const randomIndex = Math.floor(Math.random() * passagesByDifficulty.length);
    return passagesByDifficulty[randomIndex];
  } catch (error) {
    console.error("Error getting passage:", error);
    return "An error occurred while loading the passage. Please try again.";
  }
};
