// src/components/sections/AIAssistant.tsx
'use client'

import { motion } from 'framer-motion'
import { Brain, FileText, Phone, CheckSquare, Search, Mic } from 'lucide-react'

const AIAssistant = () => {
  const aiFeatures = [
    {
      icon: FileText,
      title: 'Transcribes and summarizes calls',
      subtitle: 'with follow-ups and to-dos',
      description: 'Get detailed summaries of every call with action items automatically extracted'
    },
    {
      icon: Phone,
      title: 'Answers missed calls on your behalf',
      subtitle: 'and summarizes them',
      description: 'Never miss important information from missed calls with AI-powered voicemail'
    },
    {
      icon: CheckSquare,
      title: 'Sends a todo list',
      subtitle: 'from all calls, texts, and voicemails',
      description: 'Stay organized with automated task extraction from all your communications'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet HUB. Your AI Assistant.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Supercharged by a virtual AI assistant in your pocket
          </p>
        </motion.div>

        {/* AI Features */}
        <div className="space-y-20">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <feature.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-purple-600 font-medium mb-4">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {feature.description}
                </p>

                {/* AI Capabilities */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                    <Brain className="h-6 w-6 text-purple-600 mb-2" />
                    <div className="text-sm font-medium text-gray-900">AI Powered</div>
                    <div className="text-xs text-gray-500">95% Accuracy</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                    <Search className="h-6 w-6 text-purple-600 mb-2" />
                    <div className="text-sm font-medium text-gray-900">Searchable</div>
                    <div className="text-xs text-gray-500">Find Anything</div>
                  </div>
                </div>
              </div>

              {/* Phone Interface */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  <div className="bg-gray-900 rounded-[2.5rem] p-1 shadow-2xl mx-auto max-w-xs">
                    <div className="bg-white rounded-[2rem] p-4 h-[560px] flex flex-col">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-xs font-semibold text-gray-500">9:41</div>
                        <div className="flex space-x-1">
                          <div className="w-3 h-1.5 bg-gray-300 rounded"></div>
                          <div className="w-4 h-1.5 bg-gray-300 rounded"></div>
                          <div className="w-4 h-1.5 bg-green-400 rounded"></div>
                        </div>
                      </div>

                      {/* AI Assistant Interface */}
                      <div className="flex-1 space-y-4">
                        {index === 0 && (
                          // Call Summary Interface
                          <>
                            <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                              <div className="flex items-center space-x-2 mb-2">
                                <Mic className="h-4 w-4 text-purple-600" />
                                <span className="text-xs font-medium text-purple-600">Call Summary</span>
                              </div>
                              <div className="text-sm font-medium text-gray-900 mb-1">
                                Client Meeting - John Smith
                              </div>
                              <div className="text-xs text-gray-600">
                                • Discussed Q4 budget approval
                              </div>
                              <div className="text-xs text-gray-600">
                                • Follow up needed by Friday
                              </div>
                              <div className="text-xs text-gray-600">
                                • Send proposal draft next week
                              </div>
                            </div>
                            
                            <div className="bg-white rounded-lg p-3 border">
                              <div className="text-xs font-medium text-gray-900 mb-2">Action Items</div>
                              <div className="space-y-1">
                                <div className="flex items-center space-x-2 text-xs">
                                  <CheckSquare className="h-3 w-3 text-green-500" />
                                  <span className="text-gray-600">Send follow-up email</span>
                                </div>
                                <div className="flex items-center space-x-2 text-xs">
                                  <div className="w-3 h-3 border border-gray-300 rounded"></div>
                                  <span className="text-gray-600">Prepare proposal draft</span>
                                </div>
                              </div>
                            </div>
                          </>
                        )}

                        {index === 1 && (
                          // Voicemail Interface
                          <>
                            <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                              <div className="flex items-center space-x-2 mb-2">
                                <Phone className="h-4 w-4 text-primary-600" />
                                <span className="text-xs font-medium text-primary-600">Missed Call</span>
                              </div>
                              <div className="text-sm font-medium text-gray-900">
                                Sarah Johnson
                              </div>
                              <div className="text-xs text-gray-500">
                                +1 (555) 987-6543 • 2 min ago
                              </div>
                            </div>
                            
                            <div className="bg-white rounded-lg p-3 border">
                              <div className="text-xs font-medium text-gray-900 mb-2">AI Summary</div>
                              <div className="text-xs text-gray-600 leading-relaxed">
                                "Hi! Sarah from ABC Corp calling about the marketing proposal. 
                                We're interested and would like to schedule a follow-up meeting 
                                next week. Please call back when you get a chance."
                              </div>
                            </div>
                          </>
                        )}

                        {index === 2 && (
                          // Todo List Interface
                          <>
                            <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                              <div className="flex items-center space-x-2 mb-2">
                                <CheckSquare className="h-4 w-4 text-green-600" />
                                <span className="text-xs font-medium text-green-600">Today's Tasks</span>
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="bg-white rounded-lg p-3 border">
                                <div className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                  <span className="text-xs font-medium text-gray-500">Call back Sarah Johnson</span>
                                </div>
                                <div className="text-xs text-gray-500 ml-4">From missed call</div>
                              </div>
                              
                              <div className="bg-white rounded-lg p-3 border">
                                <div className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                  <span className="text-xs font-medium text-gray-500">Send proposal to John</span>
                                </div>
                                <div className="text-xs text-gray-500 ml-4">Due Friday</div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AIAssistant