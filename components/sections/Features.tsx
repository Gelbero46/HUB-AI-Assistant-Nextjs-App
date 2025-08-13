'use client'

import { motion } from 'framer-motion'
import { Phone, MessageSquare } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Phone,
      title: 'Business Phone Features',
      description: 'Get a new number with the area code of your choice, or bring your own',
      image: 'phone-features'
    },
    {
      icon: MessageSquare,
      title: 'Unlimited Calls & Texts',
      description: 'Unlimited calls and texts to the US and Canada, zero hidden fees',
      image: 'unlimited-messaging'
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-50 mb-4">
            Calls & Messages
          </h2>
          <p className="text-xl text-gray-50 max-w-3xl mx-auto">
            All the business phone features you need
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="space-y-20">
          {features.map((feature, index) => (
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
                <div className="flex items-center space-x-4 mb-6">
                  {/* <div className="bg-primary-100 p-3 rounded-xl"> */}
                    <feature.icon className="h-12 w-12 text-primary-600" />
                  {/* </div> */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-50">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Feature Benefits */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-400">Professional business number</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-400">Port existing number seamlessly</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-400">Crystal clear call quality</span>
                  </div>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  <div className="bg-gray-300 rounded-[2.5rem] p-1 shadow-2xl mx-auto max-w-xs">
                    <div className="bg-white rounded-[2rem] p-5 h-[560px] flex flex-col">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-xs font-semibold text-gray-500">9:41</div>
                        <div className="flex space-x-1">
                          <div className="w-3 h-1.5 bg-gray-300 rounded"></div>
                          <div className="w-4 h-1.5 bg-gray-300 rounded"></div>
                          <div className="w-4 h-1.5 bg-green-400 rounded"></div>
                        </div>
                      </div>

                      {/* App Content */}
                      <div className="flex-1">
                        {index === 0 ? (
                          // Phone Features Interface
                          <div className="space-y-4">
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="flex items-center space-x-3 mb-3">
                                <Phone className="h-4 w-4 text-primary-600" />
                                <span className="text-sm font-medium text-gray-500">Business Line</span>
                              </div>
                              <div className="text-lg font-bold text-gray-900">
                                +1 (555) 123-4567
                              </div>
                              <div className="text-xs text-gray-500">
                                New York, NY
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-primary-50 rounded-lg p-3 text-center">
                                <Phone className="h-5 w-5 text-primary-600 mx-auto mb-1" />
                                <div className="text-xs font-medium text-gray-500">Call</div>
                              </div>
                              <div className="bg-green-50 rounded-lg p-3 text-center">
                                <MessageSquare className="h-5 w-5 text-green-600 mx-auto mb-1" />
                                <div className="text-xs font-medium text-gray-500">Text</div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          // Messaging Interface
                          <div className="space-y-3">
                            <div className="bg-gray-100 rounded-lg p-3 mr-8">
                              <div className="text-sm text-gray-500">Hey, are you available for a quick call?</div>
                              <div className="text-xs text-gray-500 mt-1">2:30 PM</div>
                            </div>
                            <div className="bg-primary-600 text-white rounded-lg p-3 ml-8">
                              <div className="text-sm">Yes! Calling you now.</div>
                              <div className="text-xs text-primary-200 mt-1">2:31 PM</div>
                            </div>
                            <div className="bg-gray-100 rounded-lg p-3 mr-8">
                              <div className="text-sm text-gray-500">Perfect, talk soon!</div>
                              <div className="text-xs text-gray-500 mt-1">2:31 PM</div>
                            </div>
                          </div>
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

export default Features