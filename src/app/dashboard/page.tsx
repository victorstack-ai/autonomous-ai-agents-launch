'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Bot, Activity, Settings, Users, Terminal, LogOut } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-zinc-950/50 hidden md:flex flex-col">
        <div className="p-6 border-b border-white/5">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <Bot className="w-6 h-6 text-purple-500" />
            <span>AI.COM</span>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <SidebarItem icon={<Activity />} label="Overview" active />
          <SidebarItem icon={<Bot />} label="My Agents" />
          <SidebarItem icon={<Terminal />} label="Logs" />
          <SidebarItem icon={<Users />} label="Team" />
          <SidebarItem icon={<Settings />} label="Settings" />
        </nav>
        <div className="p-4 border-t border-white/5">
          <SidebarItem icon={<LogOut />} label="Logout" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center text-purple-400 font-bold">
              VJ
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Active Agents" value="12" change="+2 this week" />
          <StatCard title="Total Tasks" value="1,234" change="+15% vs last week" />
          <StatCard title="Compute Used" value="45h 20m" change="Within limits" />
        </div>

        {/* Active Agents List */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-zinc-400">Live Fleet</h2>
          <div className="grid gap-4">
            <AgentRow name="Research-Bot-01" status="Working" task="Analyzing market trends" />
            <AgentRow name="Customer-Support-Alpha" status="Idle" task="Waiting for tickets" />
            <AgentRow name="Dev-Assistant-Beta" status="Working" task="Refactoring codebase" />
          </div>
        </section>
      </main>
    </div>
  )
}

function SidebarItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${active ? 'bg-purple-500/10 text-purple-400' : 'text-zinc-500 hover:text-white hover:bg-white/5'}`}>
      {React.cloneElement(icon as React.ReactElement<any>, { size: 20 })}
      <span className="font-medium">{label}</span>
    </button>
  )
}

function StatCard({ title, value, change }: { title: string, value: string, change: string }) {
  return (
    <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
      <h3 className="text-zinc-500 text-sm font-medium uppercase tracking-widest mb-2">{title}</h3>
      <div className="text-3xl font-bold mb-2">{value}</div>
      <div className="text-sm text-purple-400">{change}</div>
    </div>
  )
}

function AgentRow({ name, status, task }: { name: string, status: string, task: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4 rounded-xl bg-zinc-900/30 border border-white/5 flex items-center justify-between"
    >
      <div className="flex items-center gap-4">
        <div className={`w-2 h-2 rounded-full ${status === 'Working' ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`} />
        <span className="font-bold">{name}</span>
      </div>
      <div className="text-zinc-500 text-sm hidden sm:block">{task}</div>
      <div className={`px-3 py-1 rounded-full text-xs font-bold ${status === 'Working' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
        {status}
      </div>
    </motion.div>
  )
}
