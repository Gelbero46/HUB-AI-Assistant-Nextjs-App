'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: "What is HUB and how does it work?",
    answer: "HUB is like having a smart personal assistant built into your phone. It manages your business communication by recording and transcribing calls with 95% accuracy, creating clear summaries of every conversation, and capturing key points automatically. When you miss a call, HUB's smart voicemail assistant answers for you. You'll receive daily recaps of your conversations and tasks, and can easily search through past conversations. Plus, it keeps spam calls at bay and even detects calendar events mentioned in calls."
  },
  {
    question: "Can I use my existing phone number with HUB?",
    answer: "Yes! You can either port your existing business number to HUB, and we'll handle the entire transfer process with zero disruption to your service, or get a new HUB number with your preferred area code instantly and forward calls from your existing number. Both options are simple to set up and we'll guide you through the process."
  },
  {
    question: "How much does HUB cost?",
    answer: "HUB is $19.99/month and includes everything you need: unlimited US & Canada calls and texts, your business phone number (new or ported), and all AI features including call recording, transcription, conversation summaries, smart voicemail assistant, daily recaps, task management, and spam protection. No hidden fees or extra charges—just one simple price."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! You can try HUB free for 7 days and experience how it transforms your work communication. During your trial, you'll get complete access to everything HUB offers: unlimited calls and texts across US and Canada, call recording with AI-powered summaries, smart voicemail assistant, daily task recaps, and spam protection."
  },
  {
    question: "Can I invite team members to use HUB?",
    answer: "Our Teams Plan is designed to help you and your team work together effortlessly. It provides shared access to calling and messages, enabling everyone to split communication efficiently. To invite your team, you'll need to upgrade to our Teams Plan. Here's how you can do it: Go to Settings in the HUB app, tap 'Invite Members', choose the Teams Plan subscription (available Monthly or Yearly). Once you've subscribed, you can start inviting team members right away!"
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="pt-14 pb-20 bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked{' '}
              <span className="text-primary-400">Questions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about HUB
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border 
                border-gray-700/40 overflow-hidden hover:border-primary-500/40 
                transition-all duration-300 "
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-700/20 transition-colors duration-200 cursor-pointer"
                >
                  <span className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {openIndex === index ? (
                      <Minus className="h-6 w-6 text-primary-400" />
                    ) : (
                      <Plus className="h-6 w-6 text-gray-400" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
