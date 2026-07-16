import { Code2, Briefcase, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/juanjvalenciao"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <Code2 className="size-4" />
            </a>
            <a
              href="https://linkedin.com/in/juanjvalenciao"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <Briefcase className="size-4" />
            </a>
            <a
              href="mailto:juanjvalenciao@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              <Mail className="size-4" />
            </a>
          </div>

          <span className="font-mono tracking-wider">Valencia Ecosystem</span>

          <p>&copy; {new Date().getFullYear()} Juan José Valencia</p>
        </div>
      </div>
    </footer>
  )
}
