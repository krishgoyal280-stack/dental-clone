import React, { useState, useEffect } from 'react';
import { Phone, Calendar, ArrowUp, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FloatingActionsProps {
  onBookClick: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onBookClick }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Utilities (Right side, non-intrusive) */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col gap-2.5 items-end">
        {/* WhatsApp Floating Button */}
        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with American Dental Clinic on WhatsApp"
          className="flex items-center gap-2 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all text-xs font-semibold group focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>

        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-10 h-10 rounded-full bg-white/95 text-slate-700 hover:text-sky-600 border border-slate-200 shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Mobile Fixed Bottom Bar (Strictly capped to ~56px <= 15% mobile viewport height) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/98 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-xl flex items-center gap-2">
        <a
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 rounded-xl text-xs font-bold transition-colors"
        >
          <Phone className="w-4 h-4 text-sky-600 shrink-0" />
          <span>Call Now</span>
        </a>

        <button
          type="button"
          onClick={onBookClick}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white rounded-xl text-xs font-bold shadow-sm shadow-sky-600/20 transition-colors"
        >
          <Calendar className="w-4 h-4 shrink-0" />
          <span>Book Appointment</span>
        </button>
      </div>
    </>
  );
};
