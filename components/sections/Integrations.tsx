'use client'

import { motion } from 'framer-motion'
import { 
  Zap, 
  Grid3X3, 
  Slack, 
  Chrome, 
  Mail, 
  Calendar, 
  FileText, 
  Zap as ZapierIcon,
  MessageSquare,
  Users,
  Trello
} from 'lucide-react'

const Integrations = () => {
  // Updated integrations with actual Lucide icons where available
  const integrationLogos = [
    { name: 'Slack', icon: Slack, color: 'from-purple-500 to-purple-600' },
    { name: 'Zoom', icon: Chrome, color: 'from-blue-500 to-blue-600' }, // Using Chrome as placeholder
    { name: 'Salesforce', icon: Users, color: 'from-blue-400 to-blue-500' },
    { name: 'HubSpot', icon: Users, color: 'from-orange-500 to-orange-600' },
    { name: 'Calendly', icon: Calendar, color: 'from-green-500 to-green-600' },
    { name: 'Notion', icon: FileText, color: 'from-gray-700 to-gray-800' },
    { name: 'Zapier', icon: ZapierIcon, color: 'from-orange-400 to-orange-500' },
    { name: 'Gmail', icon: Mail, color: 'from-red-500 to-red-600' },
    { name: 'Outlook', icon: Mail, color: 'from-blue-600 to-blue-700' },
    { name: 'Teams', icon: MessageSquare, color: 'from-indigo-500 to-indigo-600' },
    { name: 'Discord', icon: MessageSquare, color: 'from-indigo-600 to-purple-600' },
    { name: 'Trello', icon: Trello, color: 'from-blue-500 to-blue-600' }
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
            Over{' '}
            <span className="text-primary-600">7,000+</span>{' '}
            integrations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect HUB into your current tools and start automating your workflow. 
            No need to change your current routine.
          </p>
        </motion.div>

        {/* Integration Grid */}
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 gap-4">
              {Array.from({ length: 32 }).map((_, i) => (
                <div key={i} className="aspect-square bg-gray-300 rounded-lg"></div>
              ))}
            </div>
          </div>


          {/* Featured Integrations */}
          <div className="relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {integrationLogos.map((integration, index) => {
                const IconComponent = integration.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center min-h-[100px] group cursor-pointer hover:scale-105"
                  >
                    <div className="text-center">
                      <div className={`w-10 h-10 bg-gradient-to-br ${integration.color} rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                        {integration.name}
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Integration Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-primary-100 p-3 rounded-xl">
                <Zap className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Automate Everything
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Connect HUB to your favorite tools and automate your workflow. 
              From CRM updates to calendar scheduling, let AI handle the routine tasks.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-green-100 p-3 rounded-xl">
                <Grid3X3 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Seamless Sync
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              All your communications, tasks, and follow-ups sync across all your tools. 
              Work from anywhere with complete visibility into your business communications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Integrations