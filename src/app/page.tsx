'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Bot, 
  Cpu, 
  Globe, 
  Zap, 
  Shield, 
  Github,
  Twitter
} from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <Bot className="w-8 h-8 text-purple-500" />
            <span>AI.COM <span className="text-purple-500">AGENTS</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#technology" className="hover:text-white transition-colors">Technology</a>
            <a href="#security" className="hover:text-white transition-colors">Security</a>
          </div>
          <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-zinc-200 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
          <div className="max-w-7xl mx-auto px-4 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-xs font-bold tracking-widest uppercase">
                <Zap className="w-3 h-3" />
                The Future is Autonomous
              </div>
              <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[1.1]">
                Official Launch of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500">
                  Autonomous AI Agents
                </span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-medium">
                Deploy intelligent agents that work, learn, and evolve on ai.com. 
                The world&#39;s first truly autonomous workforce is here.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button className="w-full sm:w-auto bg-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-purple-700 transition-all hover:scale-105 shadow-[0_0_40px_rgba(168,85,247,0.4)]">
                  Start Your Fleet
                </button>
                <button className="w-full sm:w-auto border border-white/10 bg-white/5 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 border-y border-white/5 bg-zinc-950/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Active Agents', value: '1.2M+' },
                { label: 'Tasks Completed', value: '500M+' },
                { label: 'Uptime', value: '99.99%' },
                { label: 'Efficiency Gain', value: '10x' }
              ].map((stat, i) => (
                <div key={i} className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-zinc-500 font-medium uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-32">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Cpu className="w-10 h-10 text-purple-500" />}
                title="Advanced Reasoning"
                description="Agents powered by the latest large language models with chain-of-thought processing for complex decision making."
              />
              <FeatureCard 
                icon={<Globe className="w-10 h-10 text-blue-500" />}
                title="Global Connectivity"
                description="Deploy agents across multi-cloud environments with sub-millisecond latency for real-time operations."
              />
              <FeatureCard 
                icon={<Shield className="w-10 h-10 text-green-500" />}
                title="Privacy First"
                description="Enterprise-grade security with end-to-end encryption and strictly sandboxed execution environments."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-8 bg-gradient-to-b from-purple-500/10 to-transparent p-12 rounded-[3rem] border border-white/5">
            <Bot className="w-16 h-16 text-purple-500 mx-auto" />
            <h2 className="text-4xl md:text-6xl font-black">Ready to scale your intelligence?</h2>
            <p className="text-zinc-400 text-xl font-medium">
              Join the thousands of companies building the future on ai.com.
            </p>
            <button className="bg-white text-black px-12 py-5 rounded-2xl font-black text-xl hover:bg-zinc-200 transition-all hover:scale-105">
              Get Started for Free
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
              <Bot className="w-10 h-10 text-purple-500" />
              <span>AI.COM</span>
            </div>
            <p className="text-zinc-500 max-w-sm font-medium">
              Empowering humanity through autonomous intelligence. 
              The infrastructure for the next era of digital work.
            </p>
            <div className="flex gap-4">
              <Twitter className="w-6 h-6 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
              <Github className="w-6 h-6 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs text-zinc-400">Platform</h4>
            <ul className="space-y-2 text-zinc-500 font-medium text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Agents</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs text-zinc-400">Company</h4>
            <ul className="space-y-2 text-zinc-500 font-medium text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/5 text-zinc-500 text-sm font-medium">
          © 2026 AI.COM. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-purple-500/30 transition-colors space-y-4"
    >
      <div className="p-3 rounded-2xl bg-black border border-white/10 w-fit">
        {icon}
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-zinc-500 leading-relaxed font-medium">
        {description}
      </p>
    </motion.div>
  )
}
