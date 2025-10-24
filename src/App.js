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
        'Best real-time web search integration',
        'Strong multimodal capabilities',
        'Excellent for current events',
        'Deep Google Workspace integration',
        'Fast, responsive interactions',
        'Good at synthesizing information'
      ],
      limitations: [
        'Reasoning depth not as strong',
        'Less sophisticated for complex coding',
        'Can prioritize speed over thoroughness',
        'Interactive features less developed'
      ],
      bestFor: 'Research, current info, Google ecosystem users'
    }
  };

  const getActiveQuestions = () => {
    const activeQuestions = [...questions];
    
    if (answers.useCases.includes('coding') && conditionalQuestions.coding) {
      activeQuestions.push(conditionalQuestions.coding);
    }
    if (answers.useCases.includes('analytics') && conditionalQuestions.analytics) {
      activeQuestions.push(conditionalQuestions.analytics);
    }
    if (answers.useCases.includes('content') && conditionalQuestions.content) {
      activeQuestions.push(conditionalQuestions.content);
    }
    
    return activeQuestions;
  };

  const calculateRecommendation = () => {
    const scores = { chatgpt: 0, claude: 0, gemini: 0 };
    const reasoning = [];

    answers.useCases.forEach(useCase => {
      if (useCase === 'reasoning') {
        scores.claude += 5;
        scores.chatgpt += 3;
        scores.gemini += 3;
        reasoning.push('Complex reasoning favors Claude analytical depth');
      } else if (useCase === 'analytics') {
        scores.claude += 5;
        scores.gemini += 3;
        scores.chatgpt += 3;
        reasoning.push('Data analysis benefits from Claude file handling');
      } else if (useCase === 'content') {
        scores.chatgpt += 5;
        scores.claude += 4;
        scores.gemini += 3;
        reasoning.push('ChatGPT leads in creative versatility');
      } else if (useCase === 'research') {
        scores.gemini += 5;
        scores.claude += 4;
        scores.chatgpt += 3;
        reasoning.push('Gemini excels at real-time search');
      } else if (useCase === 'coding') {
        scores.claude += 5;
        scores.chatgpt += 4;
        scores.gemini += 3;
        reasoning.push('Claude artifacts benefit coding tasks');
      }
    });

    if (answers.codeComplexity) {
      if (answers.codeComplexity === 'complex' || answers.codeComplexity === 'production') {
        scores.claude += 3;
        scores.chatgpt += 2;
        reasoning.push('Complex coding aligns with Claude strengths');
      }
    }

    if (answers.fileWork) {
      if (answers.fileWork === 'multi_file' || answers.fileWork === 'advanced') {
        scores.claude += 3;
        scores.gemini += 2;
        reasoning.push('Advanced analysis matches Claude capabilities');
      }
    }

    if (answers.contentType) {
      if (answers.contentType === 'creative' || answers.contentType === 'marketing') {
        scores.chatgpt += 3;
        scores.claude += 2;
        reasoning.push('Creative content aligns with ChatGPT');
      } else if (answers.contentType === 'technical') {
        scores.claude += 3;
        scores.chatgpt += 2;
        reasoning.push('Technical content benefits from Claude');
      }
    }

    if (answers.responseStyle === 'thorough' || answers.responseStyle === 'exploratory') {
      scores.claude += 3;
      scores.chatgpt += 1;
      reasoning.push('Depth preference matches Claude analysis');
    } else if (answers.responseStyle === 'concise') {
      scores.gemini += 2;
      scores.chatgpt += 2;
      reasoning.push('Concise style suits Gemini or ChatGPT');
    }

    if (answers.technicalLevel === 'expert' || answers.technicalLevel === 'advanced') {
      scores.claude += 2;
      reasoning.push('Advanced level matches Claude depth');
    }

    if (answers.currentInfo === 'critical' || answers.currentInfo === 'important') {
      scores.gemini += 4;
      scores.chatgpt += 2;
      scores.claude += 2;
      reasoning.push('Current info need is Gemini strength');
    }

    if (answers.collaboration === 'team') {
      scores.gemini += 2;
      scores.chatgpt += 2;
      reasoning.push('Team collaboration benefits from integrations');
    }

    if (answers.privacy === 'highly_sensitive' || answers.privacy === 'confidential') {
      scores.claude += 2;
      reasoning.push('Privacy concerns warrant policy review');
    }

    const sortedScores = Object.entries(scores).sort(([,a], [,b]) => b - a);
    const winner = sortedScores[0][0];
    const runnerUp = sortedScores[1][0];
    const scoreDiff = sortedScores[0][1] - sortedScores[1][1];

    return { 
      winner, 
      runnerUp,
      scores, 
      reasoning,
      isClose: scoreDiff <= 3,
      scoreDiff
    };
  };

  const handleMultipleChoice = (questionId, value) => {
    const current = answers[questionId] || [];
    const updated = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value];
    setAnswers({ ...answers, [questionId]: updated });
  };

  const handleSingleChoice = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const resetQuiz = () => {
    setAnswers({
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
    setCurrentStep('landing');
    setShowReasoning(false);
  };

  const activeQuestions = getActiveQuestions();
  const currentQuestion = activeQuestions.find(q => q.id === currentStep);
  const currentQuestionIndex = activeQuestions.findIndex(q => q.id === currentStep);

  if (currentStep === 'landing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8 inline-block">
            <Sparkles className="w-20 h-20 text-orange-500 animate-pulse" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
            Find Your Perfect AI Assistant
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            ChatGPT, Claude, or Gemini? Get a personalized recommendation based on your workflow and priorities.
          </p>
          <div className="bg-white rounded-2xl p-6 mb-8 text-left max-w-lg mx-auto">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-500" />
              What makes this different?
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Comprehensive assessment of use cases</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Considers each tool strengths and limits</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Transparent scoring with full logic</span>
              </li>
            </ul>
          </div>
          <button
            onClick={() => setCurrentStep(activeQuestions[0].id)}
            className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
          >
            Start Assessment
            <ChevronRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-gray-600 mt-6">7-10 questions</p>
        </div>
      </div>
    );
  }

  if (currentStep === 'result') {
    const result = calculateRecommendation();
    const winnerProfile = aiProfiles[result.winner];
    const runnerUpProfile = aiProfiles[result.runnerUp];

    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
            <div className="text-center mb-8">
              <div className={`inline-block p-4 rounded-full bg-gradient-to-r ${winnerProfile.color} mb-4`}>
                <Sparkles className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                Best Match: {winnerProfile.name}
              </h2>
              <p className="text-xl text-gray-600 mb-4">{winnerProfile.tagline}</p>
              {result.isClose && (
                <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                  Close match with {runnerUpProfile.name}
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  Key Strengths
                </h3>
                <ul className="space-y-2">
                  {winnerProfile.keyStrengths.map((strength, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
                  <X className="w-5 h-5 text-gray-400" />
                  Limitations
                </h3>
                <ul className="space-y-2">
                  {winnerProfile.limitations.map((limitation, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-rose-50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Best For</h3>
              <p className="text-gray-700">{winnerProfile.bestFor}</p>
            </div>

            {result.isClose && (
              <div className="bg-blue-50 bo