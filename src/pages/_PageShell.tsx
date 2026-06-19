import { ReactNode } from 'react'
import { Link } from '@/lib/router-compat'

export default function PageShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`pt-24 pb-16 min-h-screen transition-colors duration-300 page-3d-transition ${className}`}>
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <Link to="/" className="text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition">
          ← Back to home
        </Link>
      </div>
      {children}
    </div>
  )
}