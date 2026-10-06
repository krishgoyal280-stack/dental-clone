import React, { useState } from 'react';
import { CheckCircle2, Star, ShieldCheck, HeartPulse, UserCheck } from 'lucide-react';

interface AboutSectionProps {
  onBookClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBookClick }) => {
  const [imageError, setImageError] = useState(false);

  const keyHighlights = [
    {
      title: 'Patient Comfort',
      desc: 'Gentle handling and a relaxing atmosphere designed to ease anxiety and ensure a painless experience.',
    },
    {
      title: 'Personalized Treatment',
      desc: 'Customized care plans tailored specifically to your unique dental condition and long-term health goals.',
    },
    {
      title: 'Family Dental Care',
      desc: 'Dedicated, attentive treatment for children, working professionals, and elderly family members.',
    },
    {
      title: 'Modern Dental Procedures',
      desc: 'Up-to-date clinical techniques for root canals, implants, crowns, and preventative restorations.',
    },
    {
      title: 'Experienced Dental Consultation',
      desc: 'Transparent diagnoses, clear step-by-step explanations, and ethical medical guidance from Dr. Sumit Pahwa.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50/70 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Visual & Verified Stats */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
              {!imageError ? (
                <img
                  src="/src/assets/images/clinic_operatory_care_1791258813710.jpg"
                  alt="Operatory suite at American Dental Clinic in Badshahpur"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-80 object-cover"
                />
              ) : (
                <div className="w-full h-80 bg-sky-50 flex items-center justify-center p-8 text-center">
                  <div>
                    <HeartPulse className="w-12 h-12 text-sky-600 mx-auto mb-2" />
                    <span className="font-bold text-slate-800">American Dental Clinic</span>
                    <p className="text-xs text-slate-500 mt-1">Badshahpur, Sector 68, Gurugram</p>
                  </div>
                </div>
              )}

              {/* Caption banner */}
              <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-900 block">
                    American Dental Clinic
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Sohna – Gurgaon Road, Sector 68, Badshahpur
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                  <span>Verified Clinic</span>
                </div>
              </div>
            </div>

            {/* Statistics Area */}
            <div className="grid grid-cols-3 gap-3 bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs">
              <div className="text-center p-2">
                <div className="flex items-center justify-center gap-1 text-slate-900">
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight tabular-nums">5.0</span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400 -mt-1" />
                </div>
                <div className="text-xs font-medium text-slate-500 mt-1">
                  Google Rating
                </div>
              </div>

              <div className="text-center p-2 border-x border-slate-100">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight tabular-nums">
                  27+
                </div>
                <div className="text-xs font-medium text-slate-500 mt-1">
                  Patient Reviews
                </div>
              </div>

              <div className="text-center p-2">
                <div className="flex items-center justify-center text-slate-900">
                  <span className="text-lg sm:text-xl font-bold tracking-tight">Family Care</span>
                </div>
                <div className="text-xs font-medium text-slate-500 mt-1">
                  For All Ages
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Detailed Highlights */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                About Our Clinic
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 text-balance">
                Caring for Your Smile, Every Step of the Way
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              At <strong className="font-semibold text-slate-900">American Dental Clinic</strong>, we provide comprehensive, gentle dental care for individuals and families in Badshahpur, Sector 68, and surrounding neighborhoods of Gurugram.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Under the experienced guidance of <strong className="font-semibold text-slate-900">Dr. Sumit Pahwa</strong>, our clinic emphasizes transparent communication, thoughtful diagnostics, and personalized treatment plans in a soothing setting that helps alleviate dental stress.
            </p>

            {/* Structured Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {keyHighlights.map((item) => (
                <div key={item.title} className="flex items-start gap-3 bg-white/70 p-3.5 rounded-xl border border-slate-200/70">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA action */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <UserCheck className="w-4 h-4" />
                <span>Schedule a Dental Consultation</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
