'use client'

import { motion } from 'framer-motion'
import { Download, Settings, Phone, ArrowRight } from 'lucide-react'
import Button from '../ui/Buttons'

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      icon: Download,
      title: 'Download HUB App',
      description: 'Available on the App Store. Get a new number or port your existing one.',
      color: 'blue'
    },
    {
      number: '2',
      icon: Settings,
      title: 'Meet Your HUB Assistant',
      description: 'Give your HUB assistant key details about your business to get set up.',
      color: 'purple'
    },
    {
      number: '3',
      icon: Phone,
      title: 'Start Calling & Texting',
      description: 'Send and receive text or calls, and let your HUB Assistant handle the details.',
      color: 'green'
    }
  ]

  // type colorMapType = {
  //   "blue":{ bg: string, text: string, gradient: string },
  //   "purple": { bg: string, text: string, gradient: string },
  //   "green": { bg: string, text: string, gradient: string }
  // }

    type colorType = {
      bg: string
      text: string
      gradient: string
    }

   type colorMapType= {
    blue : colorType,
    purple: colorType,
    green: colorType
   }

   // Only allow keys that exist in ColorMapType
  type ColorKey = keyof colorMapType; // "primary" | "secondary" | "accent"

  const colorMap: colorMapType = {
    blue: {
      bg: 'bg-blue-100',
      text: 'text-primary-600',
      gradient: 'from-blue-400 to-blue-600'
    },
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-600',
      gradient: 'from-purple-400 to-purple-600'
    },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-600',
      gradient: 'from-green-400 to-green-600'
    }
  }

  return (
    <section id="how-it-works" className="py-20 bg-white">
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
            Get started in just{' '}
            <span className="text-primary-600">3 simple steps</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 z-10">
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </div>
              )}

              <div className="text-center">
                {/* Step Number */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${colorMap[step.color as ColorKey].gradient} flex items-center justify-center shadow-lg`}>
                  <span className="text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 ${colorMap[step.color as ColorKey].bg} rounded-xl flex items-center justify-center`}>
                  <step.icon className={`h-8 w-8 ${colorMap[step.color as ColorKey].text}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="#try-free">
             <Button variant='primary' size="lg">Start Your Free Trial</Button>
            
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks