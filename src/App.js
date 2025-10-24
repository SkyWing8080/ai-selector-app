import React, { useState } from 'react';
import { ChevronRight, Sparkles, X, Check, Zap } from 'lucide-react';

const AISelector = () => {
  const [currentStep, setCurrentStep] = useState('landing');
  const [answers, setAnswers] = useState({
    useCases: [],
    workVolume: '',
    responseStyle: '',
    technicalLevel: '',
    currentInfo: '',
    collaboration: '',
    privacy: '',
    fileWork: '',
    codeComplexity: '',
    contentType: ''
  });
  const [showReasoning, setShowReasoning] = useState(false);

  const questions = [
    {
      id: 'useCases',
      question: 'Which tasks will you use AI for?',
      type: 'multiple',
      options: [
        { value: 'reasoning', label: 'Complex reasoning and strategic analysis' },
        { value: 'analytics', label: 'Data analysis and visualization' },
        { value: 'content', label: 'Content writing and creative work' },
        { value: 'research', label: 'Research and information synthesis' },
        { value: 'coding', label: 'Software development and prototyping' }
      ]
    },
    {
      id: 'workVolume',
      question: 'How would you describe your typical AI usage?',
      type: 'single',
      options: [
        { value: 'quick', label: 'Quick, occasional queries' },
        { value: 'regular', label: 'Regular daily use for varied tasks' },
        { value: 'intensive', label: 'Intensive, extended work sessions' },
        { value: 'production', label: 'Production-level work with high volume' }
      ]
    },
    {
      id: 'responseStyle',
      question: 'What response style do you prefer?',
      type: 'single',
      options: [
        { value: 'concise', label: 'Concise and to the point' },
        { value: 'balanced', label: 'Balanced detail with context' },
        { value: 'thorough', label: 'Thorough with caveats and nuance' },
        { value: 'exploratory', label: 'Exploratory with multiple perspectives' }
      ]
    },
    {
      id: 'technicalLevel',
      question: 'What is your technical proficiency?',
      type: 'single',
      options: [
        { value: 'beginner', label: 'Beginner - Need clear explanations' },
        { value: 'intermediate', label: 'Intermediate - Comfortable with tech' },
        { value: 'advanced', label: 'Advanced - Can handle technical depth' },
        { value: 'expert', label: 'Expert - Want maximum technical detail' }
      ]
    },
    {
      id: 'currentInfo',
      question: 'How important is access to current information?',
      type: 'single',
      options: [
        { value: 'critical', label: 'Critical - I need the latest data' },
        { value: 'important', label: 'Important - Frequently need current info' },
        { value: 'occasional', label: 'Occasional - Sometimes need updates' },
        { value: 'minimal', label: 'Minimal - Historical knowledge is sufficient' }
      ]
    },
    {
      id: 'collaboration',
      question: 'Will you share or collaborate on AI work?',
      type: 'single',
      options: [
        { value: 'team', label: 'Yes, extensively with my team' },
        { value: 'occasional', label: 'Occasionally share outputs' },
        { value: 'personal', label: 'Mostly personal use' },
        { value: 'solo', label: 'Entirely solo work' }
      ]
    },
    {
      id: 'privacy',
      question: 'How sensitive is your data?',
      type: 'single',
      options: [
        { value: 'public', label: 'Public information only' },
        { value: 'internal', label: 'Internal business data' },
        { value: 'confidential', label: 'Confidential information' },
        { value: 'highly_sensitive', label: 'Highly sensitive data' }
      ]
    }
  ];

  const conditionalQuestions = {
    coding: {
      id: 'codeComplexity',
      question: 'What kind of coding work will you do?',
      type: 'single',
      options: [
        { value: 'learning', label: 'Learning to code or simple scripts' },
        { value: 'prototypes', label: 'Prototypes and proof of concepts' },
        { value: 'production', label: 'Production-ready applications' },
        { value: 'complex', label: 'Complex systems and architecture' }
      ]
    },
    analytics: {
      id: 'fileWork',
      question: 'What type of data analysis do you need?',
      type: 'single',
      options: [
        { value: 'simple', label: 'Simple data interpretation' },
        { value: 'visualization', label: 'Charts and visualizations' },
        { value: 'multi_file', label: 'Multi-file analysis' },
        { value: 'advanced', label: 'Advanced statistical analysis' }
      ]
    },
    content: {
      id: 'contentType',
      question: 'What content will you create most?',
      type: 'single',
      options: [
        { value: 'marketing', label: 'Marketing copy and social media' },
        { value: 'technical', label: 'Technical documentation' },
        { value: 'creative', label: 'Creative writing and storytelling' },
        { value: 'business', label: 'Business reports and analysis' }
      ]
    }
  };

  const aiProfiles = {
    chatgpt: {
      name: 'ChatGPT',
      tagline: 'Versatile and Conversational',
      color: 'from-emerald-500 to-teal-600',
      keyStrengths: [
        'Excellent creative content and varied writing styles',
        'Strong conversational flow and context awareness',
        'Extensive plugin ecosystem',
        'Good balance across multiple use cases',
        'Strong memory features'
      ],
      limitations: [
        'Can be verbose without specific prompting',
        'Reasoning depth can vary',
        'File handling less sophisticated',
        'May require plugins for best functionality'
      ],
      bestFor: 'Creative content, conversational tasks, and versatility'
    },
    claude: {
      name: 'Claude',
      tagline: 'Thoughtful Analysis and Reasoning',
      color: 'from-amber-500 to-orange-600',
      keyStrengths: [
        'Superior analytical and reasoning capabilities',
        'Excellent coding with interactive artifacts',
        'Nuanced, thoughtful responses',
        'Strong multi-file handling',
        'Excels at strategic thinking',
        'Transparent about limitations'
      ],
      limitations: [
        'Responses can be lengthy and detailed',
        'Less plugin ecosystem than ChatGPT',
        'May over-explain for simple queries',
        'Real-time web search more limited'
      ],
      bestFor: 'Complex analysis, coding, strategic work'
    },
    gemini: {
      name: 'Gemini',
      tagline: 'Connected and Multimodal',
      color: 'from-blue-500 to-indigo-600',
      keyStrengths: [
        'Best real-time web search integra