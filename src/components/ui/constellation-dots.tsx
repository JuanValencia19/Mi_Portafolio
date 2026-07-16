'use client'

const dots = [
  { left: '12%', top: '18%', size: 'size-1', delay: '0s' },
  { left: '78%', top: '12%', size: 'size-0.5', delay: '1.2s' },
  { left: '45%', top: '8%', size: 'size-1', delay: '0.6s' },
  { left: '82%', top: '35%', size: 'size-0.5', delay: '2.1s' },
  { left: '25%', top: '42%', size: 'size-0.5', delay: '0.3s' },
  { left: '92%', top: '55%', size: 'size-1', delay: '1.8s' },
  { left: '8%', top: '62%', size: 'size-0.5', delay: '0.9s' },
  { left: '55%', top: '25%', size: 'size-0.5', delay: '2.5s' },
  { left: '35%', top: '55%', size: 'size-0.5', delay: '1.5s' },
  { left: '68%', top: '48%', size: 'size-0.5', delay: '3.2s' },
  { left: '18%', top: '75%', size: 'size-0.5', delay: '0.4s' },
  { left: '72%', top: '72%', size: 'size-0.5', delay: '2.8s' },
  { left: '48%', top: '68%', size: 'size-0.5', delay: '1.1s' },
  { left: '88%', top: '82%', size: 'size-0.5', delay: '0.7s' },
  { left: '5%', top: '88%', size: 'size-0.5', delay: '3.5s' },
  { left: '60%', top: '92%', size: 'size-0.5', delay: '2.2s' },
  { left: '38%', top: '38%', size: 'size-1', delay: '1.9s' },
  { left: '95%', top: '22%', size: 'size-0.5', delay: '0.1s' },
  { left: '20%', top: '50%', size: 'size-0.5', delay: '4.0s' },
  { left: '50%', top: '45%', size: 'size-1', delay: '2.6s' },
  { left: '15%', top: '32%', size: 'size-0.5', delay: '1.4s' },
  { left: '65%', top: '60%', size: 'size-0.5', delay: '3.8s' },
  { left: '40%', top: '78%', size: 'size-0.5', delay: '0.8s' },
  { left: '75%', top: '88%', size: 'size-0.5', delay: '1.7s' },
  { left: '30%', top: '15%', size: 'size-0.5', delay: '3.1s' },
]

export function ConstellationDots() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      {dots.map((dot, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-primary/25 dark:bg-primary/30 animate-twinkle ${dot.size}`}
          style={{
            left: dot.left,
            top: dot.top,
            animationDelay: dot.delay,
          }}
        />
      ))}
    </div>
  )
}
