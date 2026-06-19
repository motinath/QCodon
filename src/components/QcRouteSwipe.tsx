import { useEffect, useState } from 'react'
import { useLocation } from '@/lib/router-compat'

export default function QcRouteSwipe() {
  const location = useLocation()
  const [display, setDisplay] = useState(false)
  const [activeKey, setActiveKey] = useState('')

  useEffect(() => {
    // Skip on the very first visit to avoid overlapping with the preloader opening doors
    const hasLoaded = sessionStorage.getItem('qc_preloader_run')
    if (!hasLoaded) return

    // Trigger the swipe transition
    setActiveKey(location.pathname)
    setDisplay(true)
    
    const timer = setTimeout(() => {
      setDisplay(false)
    }, 800) // matches the 0.8s routeSwipe3D animation length

    return () => clearTimeout(timer)
  }, [location.pathname])

  if (!display) return null

  return (
    <div 
      key={activeKey}
      className="fixed inset-0 w-screen h-screen z-[9998] pointer-events-none select-none overflow-hidden touch-none"
    >
      <div className="w-full h-full bg-[#08090d] border-x border-white/5 animate-route-swipe flex flex-col items-center justify-center">
        {/* Subtle cyan/blue quantum radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.08)_0%,transparent_70%)]" />
        <img src="/logo-emblem.png" alt="Quantum Codon Logo" className="h-10 sm:h-14 w-auto object-contain relative z-10 opacity-20 brightness-0 invert" />
      </div>
    </div>
  )
}
