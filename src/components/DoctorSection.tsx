import React, { useState } from 'react';
import { Calendar, Quote, Check, MapPin, User, Star } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface DoctorSectionProps {
  onBookClick: () => void;
}

export const DoctorSection: React.FC<DoctorSectionProps> = ({ onBookClick }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-slate-50 via-sky-50/30 to-slate-50 rounded-3xl border border-slate-200/90 p-8 sm:p-12 lg:p-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Doctor Portrait Visual */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100 shadow-md border border-slate-200/80">
                  {!imageError ? (
                    <img
                      src="/src/assets/images/doctor_sumit_pahwa_1791258800784.jpg"
                      alt="Dr. Sumit Pahwa - Dentist at American Dental Clinic in Badshahpur Gurugram"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-sky-50">
                      <User className="w-16 h-16 text-sky-600 mb-2" />
                      <h3 className="font-bold text-slate-900 text-lg">Dr. Sumit Pahwa</h3>
                      <p className="text-xs text-sky-700 font-semibold">Dentist</p>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Badge card */}
                <div className="mt-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">{CLINIC_INFO.doctorName}</span>
                    <span className="text-[11px] text-slate-500">{CLINIC_INFO.doctorTitle}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-100">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>5.0 Verified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Biography & Clinical Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Lead Dental Practitioner
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                  Meet Dr. Sumit Pahwa
                </h2>
                <div className="flex items-center gap-2 mt-1.5 text-sm font-semibold text-sky-800">
                  <span>Dentist</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="flex items-center gap-1 text-slate-500 font-normal text-xs">
                    <MapPin className="w-3.5 h-3.5 text-sky-600" />
                    American Dental Clinic, Badshahpur
                  </span>
                </div>
              </div>

              {/* Patient Trust Quote Callout */}
              <div className="p-5 bg-white rounded-2xl border-l-4 border-l-sky-600 border border-slate-200 shadow-xs">
                <Quote className="w-6 h-6 text-sky-500/70 mb-1" />
                <p className="text-base sm:text-lg font-medium text-slate-800 italic leading-relaxed">
                  “Known for creating a calm and comfortable dental experience for patients.”
                </p>
              </div>

              {/* Concise, Grounded Biography (Strictly adhering to provided facts) */}
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  At American Dental Clinic, Dr. Sumit Pahwa focuses on patient-centered dentistry where attentive communication, gentle techniques, and patient comfort come first.
                </p>
                <p>
                  Patients throughout Badshahpur and Sector 68 appreciate Dr. Sumit’s reassurance and gentle demeanor—particularly when caring for elderly parents requiring implants and dentures, or patients feeling apprehensive about dental procedures.
                </p>
              </div>

              {/* Core Doctor Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Gentle, anxiety-free care</span>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Patient-focused treatment plans</span>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Attentive care for elderly patients</span>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Transparent clinical advice</span>
                </div>
              </div>

              {/* CTA Action */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={onBookClick}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-xl shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book an Appointment with Dr. Sumit Pahwa</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
