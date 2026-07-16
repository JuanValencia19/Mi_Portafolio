'use client'

import {
  LayoutDashboard,
  Calendar,
  FolderKanban,
  TrendingUp,
  Settings,
  Search,
  Bell,
  Terminal,
  Activity,
} from 'lucide-react'

import { DashboardCard } from '@/components/ui/dashboard-card'
import { MetricCard } from '@/components/ui/metric-card'
import { ChartMock } from '@/components/ui/chart-mock'
import { TaskCard } from '@/components/ui/task-card'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Calendar, label: 'Habits', active: false },
  { icon: FolderKanban, label: 'Projects', active: false },
  { icon: TrendingUp, label: 'Analytics', active: false },
  { icon: Settings, label: 'Settings', active: false },
]

const activities = [
  { text: 'LifeOS v0.2.1 deployed', time: '1h ago' },
  { text: 'Valencia Studio: client onboarding', time: '3h ago' },
  { text: 'Habit streak: 12 days', time: '5h ago' },
  { text: 'Monthly financial review', time: '1d ago' },
  { text: 'Sprint retro completed', time: '1d ago' },
]

export function DashboardMockup() {
  return (
    <div className="relative w-full animate-float-lifeos">
      <div
        className="relative rounded-2xl border border-[#22222e] bg-[#0c0c12] overflow-hidden"
        style={{
          boxShadow: [
            '0 25px 60px -15px rgba(0,0,0,0.6)',
            '0 0 50px -12px rgba(59,130,246,0.12)',
            '0 0 30px -8px rgba(139,92,246,0.08)',
          ].join(', '),
        }}
      >
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#1a1a24] bg-[#0a0a0f]">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="text-[10px] font-mono text-[#6b6b80] ml-2 tracking-wide">
            lifeos — v0.2.1
          </span>
          <span className="ml-auto flex items-center gap-1.5 text-[10px] font-mono text-[#6b6b80]">
            <span className="size-1 rounded-full bg-[#28c840]" />
            system healthy
          </span>
        </div>

        <div className="flex h-[480px] md:h-[520px]">
          <div className="hidden sm:flex sm:w-44 flex-col border-r border-[#1a1a24] bg-[#0a0a0f] p-3 gap-1">
            <div className="flex items-center gap-2 px-2.5 py-3 mb-2">
              <span className="size-2 rounded-full bg-primary" />
              <span className="text-xs font-semibold text-[#e8e8ed] tracking-tight">
                LifeOS
              </span>
            </div>

            {navItems.map((item) => (
              <button
                key={item.label}
                className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-mono transition-colors ${
                  item.active
                    ? 'bg-primary/15 text-primary'
                    : 'text-[#6b6b80] hover:text-[#c4c4cf] hover:bg-[#14141c]'
                }`}
              >
                <item.icon className="size-3.5 shrink-0" />
                {item.label}
              </button>
            ))}

            <div className="mt-auto pt-3 border-t border-[#1a1a24]">
              <div className="flex items-center gap-2.5 px-2.5 py-2 text-[10px] font-mono text-[#6b6b80]">
                <span className="size-1.5 rounded-full bg-[#28c840]" />
                Valencia Studio
              </div>
              <button className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-mono text-[#6b6b80] hover:text-[#c4c4cf] hover:bg-[#14141c] transition-colors w-full">
                <Terminal className="size-3.5 shrink-0" />
                Console
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col min-w-0">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1a1a24] bg-[#0e0e16]">
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#1a1a24] w-48">
                <Search className="size-3 text-[#6b6b80]" />
                <span className="text-[10px] font-mono text-[#6b6b80]">Search anything...</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="size-7 rounded-lg bg-[#1a1a24] flex items-center justify-center hover:bg-[#22222e] transition-colors">
                  <Bell className="size-3 text-[#6b6b80]" />
                </button>
                <span className="size-6 rounded-full bg-primary/30 flex items-center justify-center text-[10px] font-mono text-primary">
                  J
                </span>
              </div>
            </div>

            <div className="flex-1 overflow-auto p-4 space-y-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <MetricCard label="Habits" value="12d streak" status="active" />
                <MetricCard label="Focus" value="4h 32m" trend="up" />
                <MetricCard label="Projects" value="3 active" status="active" />
                <MetricCard label="Tasks" value="18/24" status="active" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <DashboardCard title="Focus Hours">
                  <ChartMock />
                </DashboardCard>

                <DashboardCard title="Today">
                  <TaskCard />
                </DashboardCard>
              </div>

              <DashboardCard title="Ecosystem">
                <div className="space-y-2.5">
                  {activities.map((activity, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <span className="size-1.5 rounded-full bg-primary/40 animate-pulse-subtle shrink-0" />
                      <span className="flex-1 text-xs font-mono text-[#c4c4cf] truncate">
                        {activity.text}
                      </span>
                      <span className="text-[10px] font-mono text-[#6b6b80] shrink-0">
                        {activity.time}
                      </span>
                    </div>
                  ))}
                </div>
              </DashboardCard>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-1.5 border-t border-[#1a1a24] bg-[#0a0a0f]">
          <span className="flex items-center gap-1.5 text-[10px] font-mono text-[#6b6b80]">
            <span className="size-1 rounded-full bg-[#28c840] animate-pulse-subtle" />
            system healthy
          </span>
          <div className="flex items-center gap-2">
            <Activity className="size-2.5 text-[#6b6b80]" />
            <span className="text-[10px] font-mono text-[#6b6b80]">127h uptime</span>
          </div>
        </div>
      </div>
    </div>
  )
}
