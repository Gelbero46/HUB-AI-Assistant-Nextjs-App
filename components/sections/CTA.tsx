'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, MessageSquare, Brain } from 'lucide-react'
import Button from '../ui/Buttons';


const features = [
  {
    icon: Phone,
    title: "Professional Phone System",
    description: "Get a business number or port your existing one",
  },
  {
    icon: Brain,
    title: "AI-Powered Assistant",
    description: "95% accurate transcription and smart summaries",
  },
  {
    icon: MessageSquare,
    title: "Unlimited Communication",
    description: "Calls and texts across US & Canada included",
  },
];

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Make your phone{' '}
              <span className="text-yellow-300">work for you</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of entrepreneurs and business owners who are saving hours daily 
              with HUB's AI-powered phone assistant.
            </p>
            
            <a 
              href="https://hearthands.sng.link/Dfrob/1l21"
              target="_blank"
              rel="noopener noreferrer"
             
            >
              <Button variant="secondary" size='lg'>Try for Free</Button>
              <ArrowRight className="h-5 w-5" />
            </a>

            <p className="text-gray-300 mt-4 text-sm">
              7-day free trial • No credit card required • Cancel anytime
            </p>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map(({ icon: Icon, title, description }, index) => (
              <div
                key={index}
                className="text-center transition-all duration-200 hover:scale-105 cursor-pointer"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4 inline-block shadow-sm hover:shadow-lg hover:shadow-primary-500/20">
                  <Icon className="h-8 w-8 text-white mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-300 text-sm">{description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA