import { RoadmapData } from '../types/roadmap';

export const roadmapData: RoadmapData = {
  startDate: '2025-11-01',
  endDate: '2026-04-30',
  tracks: [
    {
      id: 'track1',
      title: 'Track 1: AI Engineering Skills',
      description: '4-5 hours/day - Main focus on AI stack and killer project',
      months: [
        {
          id: 'month1',
          monthNumber: 1,
          title: 'November 2025',
          goal: 'Python & AI Foundations - Go from "Web Developer" to "Python AI Developer"',
          weeks: [
            {
              id: 'week1',
              weekNumber: 1,
              title: 'Python for Developers',
              description: 'Python syntax and environment setup',
              goals: [
                'Master venv (virtual environments)',
                'Learn pip (package management)',
                'Understand Python classes (OOP)',
                'Learn asyncio basics',
                'Master f-strings'
              ],
              startDate: '2025-11-01',
              endDate: '2025-11-07',
              days: []
            },
            {
              id: 'week2',
              weekNumber: 2,
              title: 'The AI Toolkit (Pandas & NumPy)',
              description: 'Learn data manipulation tools',
              goals: [
                'Master NumPy for ndarrays/tensors',
                'Learn Pandas for data loading/cleaning',
                'Master pd.read_csv()',
                'Use .head(), .info(), .fillna()',
                'Learn .loc[] for data selection'
              ],
              startDate: '2025-11-08',
              endDate: '2025-11-14',
              days: []
            },
            {
              id: 'week3',
              weekNumber: 3,
              title: 'The Backend Bridge (FastAPI)',
              description: 'Modern Python backend framework',
              goals: [
                'Learn FastAPI basics',
                'Create GET and POST routes',
                'Learn Pydantic for validation',
                'Understand async endpoints',
                'Build basic API structure'
              ],
              startDate: '2025-11-15',
              endDate: '2025-11-21',
              days: []
            },
            {
              id: 'week4',
              weekNumber: 4,
              title: 'Classic ML Project',
              description: 'Build your first AI API',
              goals: [
                'Learn scikit-learn basics',
                'Train RandomForestClassifier',
                'Save model to .joblib file',
                'Build FastAPI prediction endpoint',
                'Test with Postman'
              ],
              startDate: '2025-11-22',
              endDate: '2025-11-28',
              days: []
            }
          ]
        },
        {
          id: 'month2',
          monthNumber: 2,
          title: 'December 2025',
          goal: 'The Generative AI Stack - Master GenAI skills companies are hiring for',
          weeks: [
            {
              id: 'week5',
              weekNumber: 5,
              title: 'Intro to LLMs (Hugging Face)',
              description: 'Most important AI library today',
              goals: [
                'Learn Hugging Face transformers',
                'Master pipeline() function',
                'Build summarization script',
                'Create sentiment analysis tool',
                'Understand model loading'
              ],
              startDate: '2025-12-01',
              endDate: '2025-12-07',
              days: []
            },
            {
              id: 'week6',
              weekNumber: 6,
              title: 'The RAG Concept (LlamaIndex)',
              description: 'Retrieval-Augmented Generation',
              goals: [
                'Learn LlamaIndex framework',
                'Use SimpleDirectoryReader',
                'Create VectorStoreIndex',
                'Build basic RAG system',
                'Chat with PDF implementation'
              ],
              startDate: '2025-12-08',
              endDate: '2025-12-14',
              days: []
            },
            {
              id: 'week7',
              weekNumber: 7,
              title: 'Vector Databases (The AI\'s Memory)',
              description: 'Understanding Vector DBs',
              goals: [
                'Learn Vector Database concepts',
                'Install and setup ChromaDB',
                'Rebuild Week 6 app with ChromaDB',
                'Store and query vectors',
                'Complete Project 2: Chat with documents'
              ],
              startDate: '2025-12-15',
              endDate: '2025-12-21',
              days: []
            },
            {
              id: 'week8',
              weekNumber: 8,
              title: 'Fine-Tuning (The Power Skill)',
              description: 'Customize AI models',
              goals: [
                'Learn fine-tuning concepts',
                'Use Hugging Face Trainer API',
                'Fine-tune DistilBERT model',
                'Train on sentiment analysis dataset',
                'Push model to Hugging Face Hub'
              ],
              startDate: '2025-12-22',
              endDate: '2025-12-28',
              days: []
            }
          ]
        },
        {
          id: 'month3',
          monthNumber: 3,
          title: 'January 2026',
          goal: 'The Killer Capstone Project (Backend) - Build project that will get you hired',
          weeks: [
            {
              id: 'week9',
              weekNumber: 9,
              title: 'Project Scoping',
              description: 'Full-Stack RAG Application planning',
              goals: [
                'Design application architecture',
                'Plan tech stack: React + FastAPI + LlamaIndex',
                'Setup ChromaDB/PostgreSQL with pgvector',
                'Create project structure',
                'Define API endpoints'
              ],
              startDate: '2026-01-01',
              endDate: '2026-01-07',
              days: []
            },
            {
              id: 'week10',
              weekNumber: 10,
              title: 'The RAG API',
              description: 'Build FastAPI backend',
              goals: [
                'Create POST /api/chat endpoint',
                'Implement question processing',
                'Load LlamaIndex engine',
                'Return JSON responses',
                'Handle document_id parameter'
              ],
              startDate: '2026-01-08',
              endDate: '2026-01-14',
              days: []
            },
            {
              id: 'week11',
              weekNumber: 11,
              title: 'Backend Features',
              description: 'Add more endpoints',
              goals: [
                'Create POST /api/upload endpoint',
                'Implement PDF upload handling',
                'Build document chunking system',
                'Index documents to vector DB',
                'Add document management'
              ],
              startDate: '2026-01-15',
              endDate: '2026-01-21',
              days: []
            },
            {
              id: 'week12',
              weekNumber: 12,
              title: 'Backend Testing',
              description: 'Professional testing with pytest',
              goals: [
                'Learn pytest basics',
                'Write unit tests for endpoints',
                'Test upload functionality',
                'Test chat functionality',
                'Achieve good test coverage'
              ],
              startDate: '2026-01-22',
              endDate: '2026-01-28',
              days: []
            }
          ]
        },
        {
          id: 'month4',
          monthNumber: 4,
          title: 'February 2026',
          goal: 'The Killer Capstone Project (Full-Stack & Deployment) - From project to product',
          weeks: [
            {
              id: 'week13',
              weekNumber: 13,
              title: 'The Frontend',
              description: 'Build React frontend',
              goals: [
                'Create clean chat interface',
                'Build file-upload page',
                'Design beautiful UI',
                'Add loading states',
                'Implement error handling'
              ],
              startDate: '2026-02-01',
              endDate: '2026-02-07',
              days: []
            },
            {
              id: 'week14',
              weekNumber: 14,
              title: 'Full-Stack Integration',
              description: 'Connect React to FastAPI',
              goals: [
                'Integrate frontend with backend',
                'Implement streaming responses',
                'Token-by-token response display',
                'Test end-to-end flow',
                'Polish user experience'
              ],
              startDate: '2026-02-08',
              endDate: '2026-02-14',
              days: []
            },
            {
              id: 'week15',
              weekNumber: 15,
              title: 'The Engineer\'s Skill (Docker)',
              description: 'Containerization - non-negotiable for ₹10-15 LPA',
              goals: [
                'Learn Docker basics',
                'Write Dockerfile for FastAPI',
                'Create docker-compose.yml',
                'Run API and ChromaDB together',
                'Test containerized app'
              ],
              startDate: '2026-02-15',
              endDate: '2026-02-21',
              days: []
            },
            {
              id: 'week16',
              weekNumber: 16,
              title: 'Deployment (The Finish Line)',
              description: 'Get your app on the internet',
              goals: [
                'Deploy frontend to Vercel/Netlify',
                'Deploy backend to Render/AWS',
                'Setup environment variables',
                'Test live application',
                'Get public URL - your golden ticket!'
              ],
              startDate: '2026-02-22',
              endDate: '2026-02-28',
              days: []
            }
          ]
        },
        {
          id: 'month5',
          monthNumber: 5,
          title: 'March 2026',
          goal: 'The Job-Getting Machine (Portfolio & Brand) - Package yourself as elite candidate',
          weeks: [
            {
              id: 'week17',
              weekNumber: 17,
              title: 'The Silent Communicator (README)',
              description: 'Perfect README.md for GitHub',
              goals: [
                'Create GIF of app working',
                'Add live demo URL',
                'Create architecture diagram',
                'Document tech stack with logos',
                'Add "How to Run Locally" section'
              ],
              startDate: '2026-03-01',
              endDate: '2026-03-07',
              days: []
            },
            {
              id: 'week18',
              weekNumber: 18,
              title: 'The Project-First Resume',
              description: 'Re-brand your resume',
              goals: [
                'Change title to "AI Engineer / Full-Stack Developer"',
                'Put Projects section first',
                'Add live demo URLs',
                'List complete tech stack',
                'Highlight capstone project'
              ],
              startDate: '2026-03-08',
              endDate: '2026-03-14',
              days: []
            },
            {
              id: 'week19',
              weekNumber: 19,
              title: 'The Project Story',
              description: 'Your communication hack',
              goals: [
                'Write 2-minute project script',
                'Practice explaining the problem',
                'Practice explaining the tech',
                'Practice explaining challenges',
                'Record and refine delivery'
              ],
              startDate: '2026-03-15',
              endDate: '2026-03-21',
              days: []
            },
            {
              id: 'week20',
              weekNumber: 20,
              title: 'MLOps (The Senior Skill)',
              description: 'CI/CD and Experiment Tracking',
              goals: [
                'Learn GitHub Actions basics',
                'Create CI/CD pipeline for auto-deploy',
                'Learn MLflow for experiment tracking',
                'Log training metrics (accuracy, loss)',
                'Massive salary booster complete!'
              ],
              startDate: '2026-03-22',
              endDate: '2026-03-28',
              days: []
            }
          ]
        },
        {
          id: 'month6',
          monthNumber: 6,
          title: 'April 2026',
          goal: 'The Interview Gauntlet - Execute job hunt and land the offer',
          weeks: [
            {
              id: 'week21',
              weekNumber: 21,
              title: 'AI System Design',
              description: 'Practice whiteboarding',
              goals: [
                'Practice drawing RAG architecture',
                'Explain React -> FastAPI flow',
                'Explain LlamaIndex -> Vector DB',
                'Practice explaining each component',
                'Prepare for system design questions'
              ],
              startDate: '2026-04-01',
              endDate: '2026-04-07',
              days: []
            },
            {
              id: 'week22',
              weekNumber: 22,
              title: 'Application Blitz',
              description: 'Apply to 15+ jobs every day',
              goals: [
                'Target: AI Engineer, GenAI Developer',
                'Target: ML Engineer, Full-Stack Engineer (AI)',
                'Use LinkedIn, Naukri, Wellfound',
                'Send personalized messages with live URL',
                'Track applications'
              ],
              startDate: '2026-04-08',
              endDate: '2026-04-14',
              days: []
            },
            {
              id: 'week23',
              weekNumber: 23,
              title: 'Mock Interviews',
              description: 'Practice with friends',
              goals: [
                'Round 1: Practice DSA (C++)',
                'Round 2: Practice project review',
                'Use your Project Story script',
                'Get feedback and improve',
                'Build confidence'
              ],
              startDate: '2026-04-15',
              endDate: '2026-04-21',
              days: []
            },
            {
              id: 'week24',
              weekNumber: 24,
              title: 'Networking & Closing',
              description: 'Final push to get hired',
              goals: [
                'Find 10 recruiters on LinkedIn',
                'Send personalized messages with URL',
                'Ace your interviews',
                'Negotiate ₹10-15 LPA salary',
                'Accept your dream offer! 🎉'
              ],
              startDate: '2026-04-22',
              endDate: '2026-04-28',
              days: []
            }
          ]
        }
      ]
    },
    {
      id: 'track2',
      title: 'Track 2: DSA & Interview Prep',
      description: '1 hour/day - Daily habit. C++ DSA is your key to pass first interview',
      months: [
        {
          id: 'dsa-month1',
          monthNumber: 1,
          title: 'November 2025',
          goal: 'Foundations - Arrays, Strings, HashMaps',
          weeks: [
            {
              id: 'dsa-week1',
              weekNumber: 1,
              title: 'Arrays & Strings',
              description: 'Foundation problems',
              goals: [
                'Two Sum',
                'Valid Palindrome',
                'Best Time to Buy/Sell Stock',
                'Practice in C++',
                'Understand time/space complexity'
              ],
              startDate: '2025-11-01',
              endDate: '2025-11-07',
              days: []
            },
            {
              id: 'dsa-week2',
              weekNumber: 2,
              title: 'More Arrays & Strings',
              description: 'Continue foundation',
              goals: [
                'String manipulation problems',
                'Array rotation problems',
                'Sliding window introduction',
                'Practice daily',
                'Build consistency'
              ],
              startDate: '2025-11-08',
              endDate: '2025-11-14',
              days: []
            },
            {
              id: 'dsa-week3',
              weekNumber: 3,
              title: 'HashMaps',
              description: 'Master hash-based solutions',
              goals: [
                'Ransom Note',
                'Group Anagrams',
                'Valid Anagram',
                'Two Sum variations',
                'HashMap patterns'
              ],
              startDate: '2025-11-15',
              endDate: '2025-11-21',
              days: []
            },
            {
              id: 'dsa-week4',
              weekNumber: 4,
              title: 'HashMap Practice',
              description: 'More hash problems',
              goals: [
                'Advanced HashMap problems',
                'Frequency counting',
                'Hash set problems',
                'Review all November topics',
                'Month 1 completion'
              ],
              startDate: '2025-11-22',
              endDate: '2025-11-28',
              days: []
            }
          ]
        },
        {
          id: 'dsa-month2',
          monthNumber: 2,
          title: 'December 2025',
          goal: 'Core Structures - Linked Lists, Stacks & Queues',
          weeks: [
            {
              id: 'dsa-week5',
              weekNumber: 5,
              title: 'Linked Lists',
              description: 'Master linked list operations',
              goals: [
                'Reverse Linked List',
                'Merge Two Sorted Lists',
                'Linked List Cycle',
                'Fast & slow pointer technique',
                'Pointer manipulation'
              ],
              startDate: '2025-12-01',
              endDate: '2025-12-07',
              days: []
            },
            {
              id: 'dsa-week6',
              weekNumber: 6,
              title: 'More Linked Lists',
              description: 'Advanced linked list problems',
              goals: [
                'Remove Nth Node',
                'Intersection of linked lists',
                'Palindrome linked list',
                'Practice pointer manipulation',
                'Build confidence'
              ],
              startDate: '2025-12-08',
              endDate: '2025-12-14',
              days: []
            },
            {
              id: 'dsa-week7',
              weekNumber: 7,
              title: 'Stacks & Queues',
              description: 'Stack and queue patterns',
              goals: [
                'Valid Parentheses',
                'Min Stack',
                'Implement Queue using Stacks',
                'Stack-based problems',
                'Queue operations'
              ],
              startDate: '2025-12-15',
              endDate: '2025-12-21',
              days: []
            },
            {
              id: 'dsa-week8',
              weekNumber: 8,
              title: 'Stack & Queue Practice',
              description: 'More practice',
              goals: [
                'Advanced stack problems',
                'Monotonic stack introduction',
                'Deque problems',
                'Review December topics',
                'Month 2 completion'
              ],
              startDate: '2025-12-22',
              endDate: '2025-12-28',
              days: []
            }
          ]
        },
        {
          id: 'dsa-month3',
          monthNumber: 3,
          title: 'January 2026',
          goal: 'Trees & Heaps - Binary Trees, Traversals, Heaps',
          weeks: [
            {
              id: 'dsa-week9',
              weekNumber: 9,
              title: 'Binary Trees Basics',
              description: 'Tree fundamentals',
              goals: [
                'Invert Binary Tree',
                'Max Depth of Binary Tree',
                'Same Tree',
                'Tree recursion patterns',
                'Understand tree structure'
              ],
              startDate: '2026-01-01',
              endDate: '2026-01-07',
              days: []
            },
            {
              id: 'dsa-week10',
              weekNumber: 10,
              title: 'Tree Traversals',
              description: 'BFS and DFS',
              goals: [
                'Inorder, Preorder, Postorder',
                'Level Order Traversal (BFS)',
                'DFS variations',
                'Practice both iterative and recursive',
                'Master traversal patterns'
              ],
              startDate: '2026-01-08',
              endDate: '2026-01-14',
              days: []
            },
            {
              id: 'dsa-week11',
              weekNumber: 11,
              title: 'Advanced Trees',
              description: 'BST and advanced problems',
              goals: [
                'Validate BST',
                'Lowest Common Ancestor',
                'Binary Tree paths',
                'Subtree problems',
                'Practice tree thinking'
              ],
              startDate: '2026-01-15',
              endDate: '2026-01-21',
              days: []
            },
            {
              id: 'dsa-week12',
              weekNumber: 12,
              title: 'Heaps',
              description: 'Priority queue problems',
              goals: [
                'Kth Largest Element',
                'Heap implementation in C++',
                'Priority queue STL',
                'Top K problems',
                'Month 3 completion'
              ],
              startDate: '2026-01-22',
              endDate: '2026-01-28',
              days: []
            }
          ]
        },
        {
          id: 'dsa-month4',
          monthNumber: 4,
          title: 'February 2026',
          goal: 'Graphs & Tries - Graph algorithms and Trie structure',
          weeks: [
            {
              id: 'dsa-week13',
              weekNumber: 13,
              title: 'Graph Basics',
              description: 'Graph fundamentals',
              goals: [
                'Graph representation',
                'Number of Islands',
                'BFS on graphs',
                'DFS on graphs',
                'Understand graph traversal'
              ],
              startDate: '2026-02-01',
              endDate: '2026-02-07',
              days: []
            },
            {
              id: 'dsa-week14',
              weekNumber: 14,
              title: 'More Graphs',
              description: 'Advanced graph problems',
              goals: [
                'Clone Graph',
                'Course Schedule',
                'Graph cycle detection',
                'Topological sort',
                'Practice graph thinking'
              ],
              startDate: '2026-02-08',
              endDate: '2026-02-14',
              days: []
            },
            {
              id: 'dsa-week15',
              weekNumber: 15,
              title: 'Tries',
              description: 'Trie data structure',
              goals: [
                'Implement Trie',
                'Prefix operations',
                'Word Search',
                'Autocomplete problems',
                'Trie optimization'
              ],
              startDate: '2026-02-15',
              endDate: '2026-02-21',
              days: []
            },
            {
              id: 'dsa-week16',
              weekNumber: 16,
              title: 'Advanced Tries',
              description: 'Complex trie problems',
              goals: [
                'Word Search II',
                'Design Search Autocomplete',
                'Trie with wildcards',
                'Review Feb topics',
                'Month 4 completion'
              ],
              startDate: '2026-02-22',
              endDate: '2026-02-28',
              days: []
            }
          ]
        },
        {
          id: 'dsa-month5',
          monthNumber: 5,
          title: 'March 2026',
          goal: 'Core Algorithms - Binary Search, Sliding Window, Two Pointers',
          weeks: [
            {
              id: 'dsa-week17',
              weekNumber: 17,
              title: 'Binary Search',
              description: 'Master binary search',
              goals: [
                'Binary Search template',
                'Search in Rotated Array',
                'Search a 2D Matrix',
                'Find minimum in rotated array',
                'Binary search variations'
              ],
              startDate: '2026-03-01',
              endDate: '2026-03-07',
              days: []
            },
            {
              id: 'dsa-week18',
              weekNumber: 18,
              title: 'Sliding Window',
              description: 'Sliding window technique',
              goals: [
                'Longest Substring Without Repeating',
                'Maximum subarray problems',
                'Fixed and variable window',
                'Sliding window patterns',
                'Practice optimization'
              ],
              startDate: '2026-03-08',
              endDate: '2026-03-14',
              days: []
            },
            {
              id: 'dsa-week19',
              weekNumber: 19,
              title: 'Two Pointers',
              description: 'Two pointer technique',
              goals: [
                'Two Sum II',
                '3Sum',
                'Container With Most Water',
                'Two pointer patterns',
                'Optimize array problems'
              ],
              startDate: '2026-03-15',
              endDate: '2026-03-21',
              days: []
            },
            {
              id: 'dsa-week20',
              weekNumber: 20,
              title: 'Algorithm Practice',
              description: 'Mix of all algorithms',
              goals: [
                'Combine multiple techniques',
                'Hard mixed problems',
                'Practice problem-solving',
                'Review March topics',
                'Month 5 completion'
              ],
              startDate: '2026-03-22',
              endDate: '2026-03-28',
              days: []
            }
          ]
        },
        {
          id: 'dsa-month6',
          monthNumber: 6,
          title: 'April 2026',
          goal: 'Dynamic Programming - 1D and 2D DP problems',
          weeks: [
            {
              id: 'dsa-week21',
              weekNumber: 21,
              title: '1D Dynamic Programming',
              description: 'DP fundamentals',
              goals: [
                'Climbing Stairs',
                'Min Cost Climbing Stairs',
                'House Robber',
                'Understand DP thinking',
                'Memoization vs tabulation'
              ],
              startDate: '2026-04-01',
              endDate: '2026-04-07',
              days: []
            },
            {
              id: 'dsa-week22',
              weekNumber: 22,
              title: '1D DP Practice',
              description: 'More 1D DP',
              goals: [
                'Coin Change',
                'Longest Increasing Subsequence',
                'Word Break',
                'Practice state transitions',
                'Build DP intuition'
              ],
              startDate: '2026-04-08',
              endDate: '2026-04-14',
              days: []
            },
            {
              id: 'dsa-week23',
              weekNumber: 23,
              title: '2D Dynamic Programming',
              description: 'Advanced DP',
              goals: [
                'Unique Paths',
                'Longest Common Subsequence',
                'Edit Distance',
                '2D state management',
                'Space optimization'
              ],
              startDate: '2026-04-15',
              endDate: '2026-04-21',
              days: []
            },
            {
              id: 'dsa-week24',
              weekNumber: 24,
              title: 'DP Mastery',
              description: 'Final DP practice',
              goals: [
                'Complex DP problems',
                'Mix of 1D and 2D',
                'Review all 6 months',
                'Ready for interviews!',
                'Complete 6-month journey!'
              ],
              startDate: '2026-04-22',
              endDate: '2026-04-28',
              days: []
            }
          ]
        }
      ]
    }
  ]
};
