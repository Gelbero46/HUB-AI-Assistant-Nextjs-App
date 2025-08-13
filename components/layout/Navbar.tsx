'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Buttons'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
  ]

  return (
    <nav className="fixed w-full  bg-gray-900 text-primary-50 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-[2160px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
                <Phone className="h-6 w-6 text-primary-500" />
              <span className="text-2xl font-bold text-primary-50">HUB</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-100 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <Link 
              href="#login" 
              className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium"
            >
              Login
            </Link> */}
            <Link href="#try-free">
              <Button variant='primary'>Try for Free</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-primary-600 cursor-pointer"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 text-primary-50"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-100 block text-center px-3 py-2 text-base font-medium"
                  // onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 pb-2 text-center">
                {/* <Link 
                  href="#login" 
                  className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
                >
                  Login
                </Link> */}
                <Link 
                  href="#try-free" 
                >
                  <Button variant='primary'>Try for Free</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar