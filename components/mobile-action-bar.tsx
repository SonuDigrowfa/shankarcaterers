'use client'

import { Phone, MessageCircle, CalendarCheck } from 'lucide-react'
import { BUSINESS_INFO } from '@/lib/business-data'

export function MobileActionBar() {
  return (
    <div
      role="region"
      aria-label="Quick mobile actions"
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-orange-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href={BUSINESS_INFO.phoneHref}
          className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#d9480f] to-[#e8590c] text-white py-2.5 px-3 rounded-xl text-xs font-bold shadow-xs active:scale-95 transition-transform"
        >
          <Phone size={15} />
          <span>Call Now</span>
        </a>

        <a
          href={BUSINESS_INFO.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-[#1a8f48] text-white py-2.5 px-3 rounded-xl text-xs font-bold shadow-xs active:scale-95 transition-transform"
        >
          <MessageCircle size={15} />
          <span>WhatsApp</span>
        </a>

        <a
          href="#contact"
          className="flex items-center justify-center gap-1.5 bg-amber-100 text-[#9a3412] border border-amber-300 py-2.5 px-3 rounded-xl text-xs font-bold active:scale-95 transition-transform"
        >
          <CalendarCheck size={15} />
          <span>Book</span>
        </a>
      </div>
    </div>
  )
}
