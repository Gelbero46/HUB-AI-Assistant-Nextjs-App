'use client'

import { motion } from 'framer-motion'
import { Smartphone, MessageCircle, Phone, Star } from 'lucide-react'
import Link from 'next/link'
import Button from '../ui/Buttons'

const Hero = () => {
  return (
    // bg-gradient-to-br from-gray-900 to-black
    <section className="pt-40 pb-40 
    bg-gray-900 text-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 leading-tight mb-6">
              The AI Phone Assistant That{' '}
              <span className="text-primary-500">Saves Hours</span>, Daily
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              All your business calls, texts, contacts - plus a powerful AI assistant 
              to supercharge your business, all in one simple app.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 mb-8">
              <Link href="#try-free" >
                <Button variant='primary' size='lg'>Try for Free</Button>
              </Link>
              <Link href="#how-it-works">
                <Button variant='secondary' size='lg'>See How It Works</Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              {/* <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 bg-gray-900 opacity-85 rounded-full border-1 flex items-center justify-center"
                  >
                    <span className="text-white text-xs font-semibold">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div> */}
              <div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p>Trusted by 7,000+ users</p>
              </div>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[360px]">
              {/* Phone Frame */}
              <div className="bg-gray-300 rounded-[2.5rem] p-1 shadow-2xl">
                <div className="bg-white rounded-[2rem] p-5 h-[640px] flex flex-col">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-sm font-semibold text-gray-500">9:41</div>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-gray-300 rounded"></div>
                      <div className="w-6 h-2 bg-gray-300 rounded"></div>
                      <div className="w-6 h-2 bg-green-400 rounded"></div>
                    </div>
                  </div>

                  {/* App Interface */}
                  <div className="flex-1 space-y-4">
                    {/* Call Note Card */}
                    <div className="bg-primary-50 rounded-xl p-4 border border-primary-100">
                      <div className="flex items-start space-x-3">
                        <Phone className="h-5 w-5 text-primary-600 mt-1" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm text-gray-900">
                            Call Summary
                          </h3>
                          <p className="text-xs text-gray-500 mt-1">
                            Meeting scheduled for tomorrow at 2 PM...
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Messages */}
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div className="bg-gray-100 rounded-lg px-3 py-2 max-w-xs">
                          <p className="text-sm text-gray-500">Can we reschedule our call?</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 justify-end">
                        <div className="bg-primary-600 text-white rounded-lg px-3 py-2 max-w-xs">
                          <p className="text-sm">Sure! How about tomorrow at 3 PM?</p>
                        </div>
                      </div>
                    </div>

                    {/* AI Assistant Badge */}
                    <div className="bg-gradient-to-r from-purple-500 to-primary-600 rounded-full px-4 py-2 text-white text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <Smartphone className="h-4 w-4" />
                        <span className="text-sm font-medium">HUB Assistant Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-green-400 rounded-full p-3 shadow-lg"
              >
                <MessageCircle className="h-6 w-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-4 -left-4 bg-primary-600 rounded-full p-3 shadow-lg"
              >
                <Phone className="h-6 w-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero