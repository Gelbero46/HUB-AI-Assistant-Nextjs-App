'use client'

import { motion } from 'framer-motion'
import { Phone, Mic, Sparkles, Calendar, MessageSquare, Search } from 'lucide-react'
import Button from '../ui/Buttons'

const features = [
  { icon: Phone, text: "Unlimited texts & calls (US & CA)" },
  { icon: Mic, text: "Phone call and in-person recorder" },
  { icon: Sparkles, text: "AI summaries with next steps" },
  { icon: Calendar, text: "Daily Recap with key points & tasks" },
  { icon: MessageSquare, text: "Virtual Receptionist for voicemail" },
  { icon: Search, text: "Infinite memory searchable with AI" }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to get{' '}
              <span className="text-primary-400">started?</span>
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Monthly Plan */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/40 
              hover:border-gray-600/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 cursor-pointer"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2">Monthly</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-bold text-white">$19.99</span>
                  <span className="text-xl text-gray-400 ml-2">/mo</span>
                </div>

                <div className="mb-6">
                    <Button variant='secondary' size="lg">Start Free Trial</Button>
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-6">Includes everything:</h4>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-10 h-10 bg-gray-700/60 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-gray-300" />
                      </div>
                      <span className="text-gray-300">{feature.text}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Yearly Plan */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-600/20 to-primary-700/10 backdrop-blur-sm 
              rounded-3xl p-8 border border-primary-500/30 hover:border-primary-400/50 transition-all duration-300 
              hover:shadow-xl hover:shadow-primary-500/20 relative cursor-pointer"
            >
              <div className="absolute -top-4 right-8">
                <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  42% Discount
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2">Yearly</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-bold text-white">$139.99</span>
                  <span className="text-xl text-gray-400 ml-2">/yr</span>
                </div>

                <div className="mb-6">
                    <Button variant='primary' size="lg">Start Free Trial</Button>
                </div>

                <h4 className="text-lg font-semibold text-white mb-6">Also includes everything:</h4>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-10 h-10 bg-primary-600/30 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary-500/30">
                        <IconComponent className="w-5 h-5 text-primary-300" />
                      </div>
                      <span className="text-gray-300">{feature.text}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Everything included: unlimited calls & texts, AI assistant, call transcription, 
              smart voicemail, task management, and spam protection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
             <div className="mb-6">
                    <Button variant='secondary' size="lg">Learn More</Button>
                </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
