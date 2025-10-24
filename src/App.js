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
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Also Consider: {runnerUpProfile.name}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Close scoring ({result.scoreDiff} point difference). {runnerUpProfile.name} is also a strong match.
                </p>
                <p className="text-sm text-gray-700">{runnerUpProfile.bestFor}</p>
              </div>
            )}

            <div className="border-t border-gray-200 pt-6">
              <button
                onClick={() => setShowReasoning(!showReasoning)}
                className="w-full flex items-center justify-between text-left text-gray-700 hover:text-orange-600 transition-colors"
              >
                <span className="font-semibold">
                  {showReasoning ? 'Hide' : 'Show'} Decision Logic
                </span>
                <ChevronRight className={`w-5 h-5 transform transition-transform ${showReasoning ? 'rotate-90' : ''}`} />
              </button>
              
              {showReasoning && (
                <div className="mt-6 space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-4 text-gray-800">Scoring Breakdown</h4>
                    {Object.entries(result.scores)
                      .sort(([,a], [,b]) => b - a)
                      .map(([tool, score]) => {
                        const profile = aiProfiles[tool];
                        return (
                          <div key={tool} className="mb-4">
                            <div className="flex justify-between mb-2">
                              <span className="font-medium text-gray-700">{profile.name}</span>
                              <span className="text-gray-600 font-semibold">{score} points</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div
                                className={`h-3 rounded-full bg-gradient-to-r ${profile.color} transition-all duration-500`}
                                style={{ width: `${(score / Math.max(...Object.values(result.scores))) * 100}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 text-gray-800">Key Decision Factors</h4>
                    <ul className="space-y-2">
                      {result.reasoning.map((reason, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <ChevronRight className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 text-gray-800">Your Selected Use Cases</h4>
                    <div className="flex flex-wrap gap-2">
                      {answers.useCases.map(useCase => {
                        const option = questions[0].options.find(o => o.value === useCase);
                        return (
                          <span key={useCase} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">
                            {option?.label}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={resetQuiz}
            className="w-full bg-white text-gray-700 px-6 py-3 rounded-full font-semibold hover:shadow-md transition-all duration-200"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  const goToNext = () => {
    const currentIndex = activeQuestions.findIndex(q => q.id === currentStep);
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentStep(activeQuestions[currentIndex + 1].id);
    } else {
      setCurrentStep('result');
    }
  };

  const goToPrevious = () => {
    const currentIndex = activeQuestions.findIndex(q => q.id === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(activeQuestions[currentIndex - 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestionIndex + 1} of {activeQuestions.length}
            </span>
            <button onClick={resetQuiz} className="text-gray-500 hover:text-gray-700">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="w-full bg-white rounded-full h-2">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / activeQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            {currentQuestion.question}
          </h2>
          {currentQuestion.type === 'multiple' && (
            <p className="text-sm text-gray-500 mb-6">Select all that apply</p>
          )}
          
          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option) => {
              const isSelected = currentQuestion.type === 'multiple'
                ? (answers[currentQuestion.id] || []).includes(option.value)
                : answers[currentQuestion.id] === option.value;
              
              return (
                <button
                  key={option.value}
                  onClick={() => {
                    if (currentQuestion.type === 'multiple') {
                      handleMultipleChoice(currentQuestion.id, option.value);
                    } else {
                      handleSingleChoice(currentQuestion.id, option.value);
                    }
                  }}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                    isSelected
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-orange-400 hover:bg-orange-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {currentQuestion.type === 'multiple' && (
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                        isSelected ? 'bg-orange-500 border-orange-500' : 'border-gray-300'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 text-white" />}
                      </div>
                    )}
                    <span className="text-gray-700 font-medium flex-1">{option.label}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex gap-3">
            {currentQuestionIndex > 0 && (
              <button
                onClick={goToPrevious}
                className="px-6 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 transition-colors"
              >
                Back
              </button>
            )}
            {currentQuestion.type === 'single' && answers[currentQuestion.id] && (
              <button
                onClick={goToNext}
                className="flex-1 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                {currentQuestionIndex === activeQuestions.length - 1 ? 'See Results' : 'Next'}
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
            {currentQuestion.type === 'multiple' && answers[currentQuestion.id]?.length > 0 && (
              <button
                onClick={goToNext}
                className="flex-1 bg-gradient-to-r from-orange-500 to-rose-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                {currentQuestionIndex === activeQuestions.length - 1 ? 'See Results' : 'Next'}
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISelector;