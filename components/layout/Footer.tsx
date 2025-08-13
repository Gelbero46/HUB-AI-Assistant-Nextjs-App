'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react'
import Button from '../ui/Buttons'

const Footer = () => {
  const productLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'API Documentation', href: '/docs' },
  ]

  const supportLinks = [
    { name: 'Help Center', href: '/' },
    { name: 'Contact Support', href: '/' },
    { name: 'System Status', href: '/' },
    { name: 'Community', href: '/' },
  ]

  const companyLinks = [
    { name: 'Blog', href: '/' },
    { name: 'Careers', href: '/' },
    { name: 'Press Kit', href: '/' },
    { name: 'Partners', href: '/' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '/' },
    { name: 'Terms of Service', href: '/' },
    { name: 'Cookie Policy', href: '/' },
    { name: 'Data Security', href: '/' },
  ]

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/HUBphone' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/HUBphone' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/HUBphone' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/HUBphone' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">HUB</span>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              The AI phone assistant that saves hours daily. Transform your business 
              communication with intelligent call handling, transcription, and task management.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-400" />
                <span>hello@helloHUB.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-400" />
                <span>1-800-HUB-PHONE</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Stay updated with HUB
              </h3>
              <p className="text-gray-300">
                Get the latest features, tips, and updates delivered to your inbox.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Button size='lg'>
                   Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2025 HUB Technologies, Inc. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer