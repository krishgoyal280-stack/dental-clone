import React, { useState } from 'react';
import { Calendar, Phone, Star, MapPin, Award } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Subtle atmospheric background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Subtitle / Location Kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-800 tracking-wide">
              <span>AMERICAN DENTAL CLINIC</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1 text-slate-600 font-medium">
                <MapPin className="w-3.5 h-3.5 text-sky-600" />
                Badshahpur, Sector 68, Gurugram
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] text-balance">
              Your Smile Deserves the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-sky-600 to-teal-600">Best Care</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Modern, compassionate dental care for you and your family in Badshahpur, Gurugram.
            </p>

            {/* Action CTA Block */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-xl shadow-md shadow-sky-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-600/30 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 hover:text-sky-700 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call Now: {CLINIC_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* Trust Indicators (Clean metadata layout, zero-pill discipline) */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-slate-900 tabular-nums">5.0</span>
                <span className="text-slate-500">Google Rating</span>
              </div>

              <span aria-hidden="true" className="hidden sm:inline text-slate-300">·</span>

              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-sky-600" />
                <span className="font-bold text-slate-900 tabular-nums">27+</span>
                <span className="text-slate-500">Patient Reviews</span>
              </div>

              <span aria-hidden="true" className="hidden sm:inline text-slate-300">·</span>

              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-medium text-slate-700">Family Dental Care</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Dental Clinic Imagery & Floating Doctor Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/80 border border-slate-200/70 aspect-[4/3] bg-slate-100">
                {!imageError ? (
                  <img
                    src="/src/assets/images/hero_dental_clinic_1791258785671.jpg"
                    alt="Modern interior of American Dental Clinic in Badshahpur Gurugram"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-sky-50 to-slate-100 p-8 text-center">
                    <Award className="w-12 h-12 text-sky-600 mb-3" />
                    <span className="font-bold text-slate-900 text-lg">American Dental Clinic</span>
                    <span className="text-sm text-slate-500 mt-1">Modern Operatory & Technology</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Doctor Profile Card */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-slate-200 shadow-lg shadow-slate-300/40 max-w-xs transition-all hover:shadow-xl">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      src="/src/assets/images/doctor_sumit_pahwa_1791258800784.jpg"
                      alt="Dr. Sumit Pahwa"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                      Dr. Sumit Pahwa
                    </h2>
                    <p className="text-xs text-sky-700 font-semibold mt-0.5">
                      Experienced Dental Care
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-1">
                      <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                      <span>Badshahpur, Gurugram</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">Google Verified</span>
                  <div className="flex items-center gap-1 font-semibold text-slate-800">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>5.0 Rating</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
