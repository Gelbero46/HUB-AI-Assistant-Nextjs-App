'use client'

import { motion, useInView } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState< number | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState< number >(0)
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const testimonials = [
    {
      text: "This is a game changer and a must-have for anyone who is in business that needs a second number",
      author: "Sarah Chen",
      role: "Small Business Owner",
      avatar: "SC"
    },
    {
      text: "It saves me 3-5 hours daily on note taking, so happy I found this app",
      author: "Mike Rodriguez", 
      role: "Sales Manager",
      avatar: "MR"
    },
    {
      text: "This is a must have for people who use phone and text for work.",
      author: "Jennifer Walsh",
      role: "Freelance Consultant", 
      avatar: "JW"
    },
    {
      text: "It's like having your personal assistant on calls with you at all times",
      author: "David Kim",
      role: "Entrepreneur",
      avatar: "DK"
    },
    {
      text: "I switched from Google voice, this app is so much better",
      author: "Lisa Thompson",
      role: "Real Estate Agent",
      avatar: "LT"
    },
    {
      text: "HUB has completely transformed the way I work on the phone",
      author: "James Wilson",
      role: "Business Coach", 
      avatar: "JW"
    }
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlay, testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    // bg-gradient-to-br from-gray-900 via-gray-800 to-black
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        {/* {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              background: `linear-gradient(45deg, rgba(14, 165, 233, 0.4), rgba(14, 165, 233, 0.1))`,
              width: `${150 + i * 100}px`,
              height: `${150 + i * 100}px`,
              left: `${20 + i * 30}%`,
              top: `${10 + i * 25}%`
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 15, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3
            }}
          />
        ))} */}
        
        {/* Simple Grid Pattern */}
        {/* <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div> */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-primary-600/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-primary-600/20"
          >
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-gray-400 font-medium">Customer Stories</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Trusted by{' '}
            <span className="text-yellow-400">
              Thousands
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Entrepreneurs, freelancers, and small business owners love HUB. 
            Here's what they have to say.
          </motion.p>
        </motion.div>

        {/* Featured Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Main Testimonial Card */}
            <div className="relative bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-2xl cursor-pointer">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Quote - Static, No Animation */}
                <Quote className="h-12 w-12 text-gray-500 mb-6 opacity-50" />
                
                {/* Stars - Static */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-8">
                  "{testimonials[currentTestimonial].text}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-bold">
                      {testimonials[currentTestimonial].avatar}
                    </span>
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-white">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-gray-400">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-gray-800/60 hover:bg-gray-700/60 rounded-full border border-gray-600/40 transition-all duration-300 hover:scale-105"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-primary-500 scale-125'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 bg-gray-800/60 hover:bg-gray-700/60 rounded-full border border-gray-600/40 transition-all duration-300 hover:scale-105"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="p-3 bg-gray-800/60 hover:bg-gray-700/60 rounded-full border border-gray-600/40 transition-all duration-300 hover:scale-105"
              >
                {isAutoPlay ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 hover:border-primary-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1 cursor-pointer">
                
                <div className="relative z-10">
                  {/* Quote Icon - Static */}
                  <Quote className="h-8 w-8 text-gray-500 mb-4 opacity-50" />
                  
                  {/* Stars - Static */}
                  <div className="flex space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center"
                      animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-white text-sm font-bold">
                        {testimonial.avatar}
                      </span>
                    </motion.div>
                    <div>
                      <div className="font-semibold text-white group-hover:text-primary-300 transition-colors duration-300">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {[
            { value: '7,000+', label: 'Active Users', colour: 'text-primary-600'  },
            { value: '95%', label: 'Transcription Accuracy', colour: 'text-green-600'},
            { value: '5hrs', label: 'Average Time Saved Daily', colour: 'text-purple-600' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 
              hover:border-primary-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 cursor-pointer"
            >
              <div className={`text-4xl font-bold ${stat.colour} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials