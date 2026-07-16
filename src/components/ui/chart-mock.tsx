export function ChartMock() {
  const bars = [
    { height: '40%', delay: '0s' },
    { height: '65%', delay: '0.1s' },
    { height: '35%', delay: '0.2s' },
    { height: '80%', delay: '0.3s' },
    { height: '55%', delay: '0.4s' },
    { height: '90%', delay: '0.5s' },
    { height: '70%', delay: '0.6s' },
  ]

  return (
    <div className="space-y-3">
      <div className="flex items-end justify-between h-24 gap-1.5">
        {bars.map((bar, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/40 to-primary/20 origin-bottom animate-chart-bar"
            style={{
              height: bar.height,
              animationDelay: bar.delay,
            }}
          />
        ))}
      </div>

      <div className="flex justify-between">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <span
            key={day}
            className="text-[10px] font-mono text-[#6b6b80] text-center flex-1"
          >
            {day}
          </span>
        ))}
      </div>
    </div>
  )
}
