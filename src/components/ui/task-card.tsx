import { cn } from '@/lib/utils'

interface Task {
  label: string
  done: boolean
}

const tasks: Task[] = [
  { label: 'Review sprint notes', done: true },
  { label: 'Deploy v0.2.0', done: true },
  { label: 'Update project board', done: false },
  { label: 'Weekly reflection', done: false },
]

export function TaskCard() {
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <div key={task.label} className="flex items-center gap-2.5">
          <span
            className={cn(
              'size-3.5 rounded border flex items-center justify-center shrink-0 transition-colors',
              task.done
                ? 'border-[#28c840] bg-[#28c840]/20'
                : 'border-[#3a3a4a]',
            )}
          >
            {task.done && (
              <svg className="size-2.5 text-[#28c840]" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </span>
          <span
            className={cn(
              'text-xs font-mono',
              task.done ? 'text-[#6b6b80] line-through' : 'text-[#c4c4cf]',
            )}
          >
            {task.label}
          </span>
        </div>
      ))}
    </div>
  )
}
