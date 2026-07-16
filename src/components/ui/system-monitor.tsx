export function SystemMonitor() {
  return (
    <div className="relative rounded-xl border bg-card overflow-hidden text-left">
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary/40 dark:bg-primary/50 rounded-l-xl" />

      <div className="flex items-center gap-1.5 px-5 py-3 border-b bg-muted/30">
        <span className="size-2.5 rounded-full bg-red-500/70" />
        <span className="size-2.5 rounded-full bg-amber-500/70" />
        <span className="size-2.5 rounded-full bg-green-500/70" />
        <span className="text-xs font-mono text-muted-foreground ml-2">
          lifeos — dashboard
        </span>
      </div>

      <div className="p-5 space-y-6">
        <div className="space-y-2">
          <p className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">
            Status
          </p>
          <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-1.5 text-active">
              <span className="size-1.5 rounded-full bg-active animate-pulse-subtle" />
              Active
            </span>
            <span>v0.1.4</span>
            <span>127h uptime</span>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">
            Today
          </p>
          <div className="space-y-2.5">
            <div>
              <div className="flex justify-between text-xs font-mono text-muted-foreground mb-1">
                <span>Tasks</span>
                <span>12/18</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-[67%] bg-primary rounded-full transition-all" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-mono text-muted-foreground mb-1">
                <span>Habits</span>
                <span>5/5</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-full bg-active rounded-full transition-all" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-mono text-muted-foreground mb-1">
                <span>Focus</span>
                <span>4h 32m</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-[57%] bg-primary rounded-full transition-all" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">
            Up Next
          </p>
          <div className="space-y-1.5 text-xs font-mono text-muted-foreground">
            <p className="flex items-center gap-2">
              <span className="size-1 rounded-full bg-primary/40" />
              Review sprint notes
            </p>
            <p className="flex items-center gap-2">
              <span className="size-1 rounded-full bg-primary/40" />
              Update project board
            </p>
            <p className="flex items-center gap-2">
              <span className="size-1 rounded-full bg-primary/40" />
              Weekly reflection
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 py-2 border-t bg-muted/20 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
        <span>last sync: 2m ago</span>
        <span className="flex items-center gap-1">
          <span className="size-1 rounded-full bg-active" />
          system healthy
        </span>
      </div>
    </div>
  )
}
